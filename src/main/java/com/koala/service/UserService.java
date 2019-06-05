package com.koala.service;

import com.koala.vo.JsonBean;
import com.koala.entity.User;

public interface UserService {

    JsonBean insertSelective(User user);
    JsonBean login(String username,String password);
}
