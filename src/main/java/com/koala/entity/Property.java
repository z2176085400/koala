package com.koala.entity;

public class Property {
    private Integer propertyid;

    private Integer popertylevel;

    private String propertytype;

    private String publicname;

    private String unit;

    public Integer getPropertyid() {
        return propertyid;
    }

    public void setPropertyid(Integer propertyid) {
        this.propertyid = propertyid;
    }

    public Integer getPopertylevel() {
        return popertylevel;
    }

    public void setPopertylevel(Integer popertylevel) {
        this.popertylevel = popertylevel;
    }

    public String getPropertytype() {
        return propertytype;
    }

    public void setPropertytype(String propertytype) {
        this.propertytype = propertytype == null ? null : propertytype.trim();
    }

    public String getPublicname() {
        return publicname;
    }

    public void setPublicname(String publicname) {
        this.publicname = publicname == null ? null : publicname.trim();
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }
}