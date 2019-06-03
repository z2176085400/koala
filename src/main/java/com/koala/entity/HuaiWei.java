package com.koala.entity;

public class HuaiWei {
    private Integer hid;

    private String typename;

    private Integer typelevel;

    private Integer sid;

    private Integer status;

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public String getTypename() {
        return typename;
    }

    public void setTypename(String typename) {
        this.typename = typename == null ? null : typename.trim();
    }

    public Integer getTypelevel() {
        return typelevel;
    }

    public void setTypelevel(Integer typelevel) {
        this.typelevel = typelevel;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}