package com.koala.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Order {
    private Integer orderid;

    private Integer gid;

    private Double gprice;

    private  Integer uid;

    private Integer ordercount;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM:SS")
    private Date ordertime;

    private String merchant;

    private String number;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public Double getGprice() {
        return gprice;
    }

    public void setGprice(Double gprice) {
        this.gprice = gprice;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getOrdercount() {
        return ordercount;
    }

    public void setOrdercount(Integer ordercount) {
        this.ordercount = ordercount;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public String getMerchant() {
        return merchant;
    }

    public void setMerchant(String merchant) {
        this.merchant = merchant;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}