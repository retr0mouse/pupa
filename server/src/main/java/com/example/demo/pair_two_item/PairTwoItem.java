package com.example.demo.pair_two_item;

import javax.persistence.*;

@Entity
@Table
public class PairTwoItem {
    @Id
    @SequenceGenerator(
            name = "pair_two_item_sequence",
            sequenceName = "pair_two_item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "pair_two_item_sequence"
    )
    private Long id;
    private String title;
    private Long pair_two_item_id;
    private Long pair_two_ex_id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPair_two_item_id(Long pair_two_item_id) {
        this.pair_two_item_id = pair_two_item_id;
    }

    public void setPair_two_ex_id(Long pair_two_ex_id) {
        this.pair_two_ex_id = pair_two_ex_id;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Long getPair_two_item_id() {
        return pair_two_item_id;
    }

    public Long getPair_two_ex_id() {
        return pair_two_ex_id;
    }

    public PairTwoItem(Long id, String title, Long pair_two_item_id, Long pair_two_ex_id) {
        this.id = id;
        this.title = title;
        this.pair_two_item_id = pair_two_item_id;
        this.pair_two_ex_id = pair_two_ex_id;
    }

    public PairTwoItem(String title, Long pair_two_item_id, Long pair_two_ex_id) {
        this.title = title;
        this.pair_two_item_id = pair_two_item_id;
        this.pair_two_ex_id = pair_two_ex_id;
    }

    public PairTwoItem() {
    }
}
