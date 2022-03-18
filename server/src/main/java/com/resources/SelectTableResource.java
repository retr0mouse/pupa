package com.resources;

import com.codahale.metrics.annotation.Timed;
import com.database.Database;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("/database")
@Produces(MediaType.APPLICATION_JSON)
public class DatabaseResource {
    private final String database;
    private final String table;

    public DatabaseResource(String database, String table) {
        this.database = database;
        this.table = table;
    }

    @GET
    @Timed
    public String getDatabase(@QueryParam("database") Optional<String> database, @QueryParam("table") Optional<String> table) {
        return Database.showtable(database.orElse(this.database), table.orElse(this.table));
    }
}
