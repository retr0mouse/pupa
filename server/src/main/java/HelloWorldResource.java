import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Optional;

@Path("/hello-world")   // tells Jersey that this resource is accessible at this URI
@Produces(MediaType.APPLICATION_JSON)   // lets Jersey know that its application/json
public class HelloWorldResource {
    private final String template;
    private final String defaultName;
    private final AtomicLong counter;

    public HelloWorldResource(String template, String defaultName) {
        this.template = template;
        this.defaultName = defaultName;
        this.counter = new AtomicLong();    // to generate a unique(ish) IDs
    }

    @GET    // a Metrics Timer to record the duration and rate of Dropwizard's invocations
    @Timed  // @QueryParam tells Jersey to map the name from the query to the name parameter in the method
    public Saying sayHello(@QueryParam("name") Optional<String> name) { // optional parameters is added by Dropwizard
        final String value = String.format(template, name.orElse(defaultName));
        return new Saying(counter.incrementAndGet(), value);
    }
}
