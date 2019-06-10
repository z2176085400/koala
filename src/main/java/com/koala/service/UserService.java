package com.koala.service;

import com.koala.vo.JsonBean;
import com.koala.entity.User;

import javax.servlet.http.HttpSession;

public interface UserService {

    JsonBean insertSelective(User user);
    JsonBean login(String username, String password );
}
