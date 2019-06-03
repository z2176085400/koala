package com.koala.entity;

public class SonType {
    private Integer sid;

    private String typename;

    private Integer typelevel;

    private Integer fid;

    private Integer status;

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
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

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}