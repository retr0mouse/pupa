package com.resources;

import com.api.Quiz;
import com.codahale.metrics.annotation.Timed;
import com.database.Database;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

@Path("/database")
@Produces(MediaType.APPLICATION_JSON)
public class SelectTableResource {
    private final String database;
    private final String table;

    public SelectTableResource(String database, String table) {
        this.database = database;
        this.table = table;
    }

    @GET
    @Timed
    public ArrayList<Quiz> getQuizzes() {
        ArrayList<ArrayList<String>> data = Database.showTable("test.db", "quizzes");
        ArrayList<Quiz> result = new ArrayList<>();
        assert data != null;
        for (ArrayList<String> item: data) {
            result.add(new Quiz(Integer.parseInt(item.get(0)), item.get(1)));
        }
        return result;
    }
}
