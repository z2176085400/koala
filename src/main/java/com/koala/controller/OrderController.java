package com.koala.controller;

import com.koala.entity.Order;
import com.koala.entity.User;
import com.koala.service.OrderService;
import com.koala.service.UserService;
import com.koala.vo.JsonBean;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@ResponseBody
public class OrderController {

    @Autowired
    private OrderService orderService;

    @CrossOrigin//允许跨域
    @RequestMapping(value = "orderAdd.do", method = RequestMethod.POST)
    public JsonBean insertUser(Order order) {


        return orderService.addOrder(order);
    }

}
