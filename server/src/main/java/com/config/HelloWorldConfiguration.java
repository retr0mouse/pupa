package com.config;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotEmpty;

public class HelloWorldConfiguration extends Configuration {
    @NotEmpty   // if it's empty, the application won't start
    private String template;

    @NotEmpty
    private String defaultName = "Stranger";

    @NotEmpty
    private String database;

    @JsonProperty   // allows Jackson to serialize and deserialize the properties
    public String getTemplate() {
        return template;
    }

    @JsonProperty
    public String getDatabase() { return database; }

    @JsonProperty
    public void setDatabase(String database) { this.database = database; }

    @JsonProperty
    public void setTemplate(String template) {
        this.template = template;
    }

    @JsonProperty
    public String getDefaultName() {
        return defaultName;
    }

    @JsonProperty
    public void setDefaultName(String name) {
        this.defaultName = name;
    }
}