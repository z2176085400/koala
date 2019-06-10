package com.koala.dao;

import com.koala.entity.Order;

public interface OrderMapper {
    int deleteByPrimaryKey(Integer uid);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer uid);


}