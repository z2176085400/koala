package com.koala.entity;

public class GrandpaType {
    private Integer gpid;

    private String typename;

    private Integer typelevel;

    private Integer status;

    public Integer getGpid() {
        return gpid;
    }

    public void setGpid(Integer gpid) {
        this.gpid = gpid;
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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}