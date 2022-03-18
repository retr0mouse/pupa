package com.config;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotEmpty;

public class HelloWorldConfiguration extends Configuration {
    @NotEmpty   // if it's empty, the application won't start
    private String template;

    @NotEmpty
    private String defaultName;

    @NotEmpty
    private String filename;

    @NotEmpty
    private String table;

    @JsonProperty   // allows Jackson to serialize and deserialize the properties
    public String getTemplate() {
        return template;
    }

    @JsonProperty
    public String getFilename() { return filename; }

    @JsonProperty
    public String getTable() {
        return table;
    }

    @JsonProperty
    public void setTable(String table) {
        this.table = table;
    }

    @JsonProperty
    public void setFilename(String filename) { this.filename = filename; }

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