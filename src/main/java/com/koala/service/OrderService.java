package com.koala.service;

import com.koala.entity.Order;
import com.koala.vo.JsonBean;

import javax.servlet.http.HttpSession;

public interface OrderService  {
    JsonBean addOrder(Order order);
}
