package com.koala.entity;

public class FatherType {
    private Integer fid;

    private String typename;

    private Integer typelevel;

    private Integer gpid;

    private Integer status;

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
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

    public Integer getGpid() {
        return gpid;
    }

    public void setGpid(Integer gpid) {
        this.gpid = gpid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}