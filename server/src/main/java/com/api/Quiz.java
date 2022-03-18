package com.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class Data {
    private long id;
    private ArrayList<String> content;

    public Data() {
    }

    public Data(long id, ArrayList<String> content) {
        this.id = id;
        this.content = content;
    }

    @JsonProperty
    public long getId() {
        return id;
    }

    @JsonProperty
    public ArrayList<String> getContent() {
        return content;
    }
}
