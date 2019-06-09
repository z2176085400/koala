package com.koala.controller;

import com.koala.entity.User;
import com.koala.service.GoodsService;
import com.koala.service.UserService;
import com.koala.vo.JsonBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @CrossOrigin//允许跨域
    @RequestMapping(value = "goodsList.do", method = RequestMethod.GET)
    public JsonBean goodsList(Integer page) {


        return goodsService.findAll(page);
    }

}
