package com.koala.service.impl;

import com.koala.common.CommonInfo;
import com.koala.dao.OrderMapper;
import com.koala.entity.Order;

import com.koala.entity.User;
import com.koala.service.OrderService;
import com.koala.utils.StrUtils;
import com.koala.vo.JsonBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Date;

@Service
public class OrderServiceImpl implements OrderService {
   @Autowired
    private OrderMapper orderMapper;

    @Override
    public JsonBean addOrder(Order order) {
        order.setOrdertime(new Date());
       /* User user =(User)session.getAttribute(CommonInfo.LOGIN_USER);*/
       /* order.setUid(user.getUid());*/
        order.setUid(1);
        order.setNumber(StrUtils.createOrderNum());
        orderMapper.insert(order);

        return JsonBean.success();
    }


}
