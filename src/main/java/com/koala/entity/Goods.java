package com.koala.entity;

public class Goods {
    private Integer gid;

    private String gname;

    private String gimg;

    private String gprice;

    private String gcountry;

    private Integer status;

    private Integer sid;

    private Integer hid;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname == null ? null : gname.trim();
    }

    public String getGimg() {
        return gimg;
    }

    public void setGimg(String gimg) {
        this.gimg = gimg == null ? null : gimg.trim();
    }

    public String getGprice() {
        return gprice;
    }

    public void setGprice(String gprice) {
        this.gprice = gprice == null ? null : gprice.trim();
    }

    public String getGcountry() {
        return gcountry;
    }

    public void setGcountry(String gcountry) {
        this.gcountry = gcountry == null ? null : gcountry.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }
}