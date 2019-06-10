package com.koala.vo;

import com.koala.entity.Details;
import com.koala.entity.Order;

import java.util.List;

public class VOrder extends Order {
    private List<Details>detailsList;

    public List<Details> getDetailsList() {
        
        return detailsList;
    }

    public void setDetailsList(List<Details> detailsList) {
        this.detailsList = detailsList;
    }
}
