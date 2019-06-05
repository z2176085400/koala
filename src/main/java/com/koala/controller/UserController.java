package com.koala.controller;

import com.koala.entity.User;
import com.koala.service.UserService;
import com.koala.vo.JsonBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@ResponseBody
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin//允许跨域
    @RequestMapping(value = "insertUser.do", method = RequestMethod.POST)
    public JsonBean insertUser(User user) {
        user.setStatus(1);

        return userService.insertSelective(user);
    }
    @CrossOrigin//允许跨域
    @RequestMapping(value = "login.do", method = RequestMethod.POST)
    public JsonBean login(User user) {


        return userService.login(user.getUsername(),user.getPassword());
    }
}
