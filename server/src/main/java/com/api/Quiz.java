package com.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class Quiz {
    private long id;
    private String title;

    public Quiz() {
    }

    public Quiz(long id, String title) {
        this.id = id;
        this.title = title;
    }

    @JsonProperty
    public long getId() {
        return id;
    }

    @JsonProperty
    public String getTitle() {
        return title;
    }
}
