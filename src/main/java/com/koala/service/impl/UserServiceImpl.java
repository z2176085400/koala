package com.koala.service.impl;

import com.koala.service.UserService;
import com.koala.vo.JsonBean;
import com.koala.dao.UserMapper;
import com.koala.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public JsonBean insertSelective(User user) {
        int count = userMapper.insertSelective(user);

        return JsonBean.success();
    }
}
