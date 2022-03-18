package com.resources;

import com.codahale.metrics.annotation.Timed;
import com.database.Database;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("/add-database")
@Produces(MediaType.APPLICATION_JSON)
public class AddDataResource {
    private final String title;
    private final String filename;

    public AddDataResource(String title, String filename) {
        this.title = title;
        this.filename = filename;
    }

    @GET
    @Timed
    public String addData(@QueryParam("title") String title, @QueryParam("filename")Optional<String> filename) {
        Database.executeQuery(filename.orElse(this.filename), String.format("""
               INSERT INTO quizzes (title) VALUES ("%s");
                """, title));
        System.out.println(title);
        return null; //TODO replace this stub to something useful
    }
}
