package com.koala.service.impl;

import com.koala.common.CommonInfo;
import com.koala.service.UserService;
import com.koala.vo.JsonBean;
import com.koala.dao.UserMapper;
import com.koala.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public JsonBean insertSelective(User user) {
        int count = userMapper.insertSelective(user);

        return JsonBean.success();
    }

    @Override
    public JsonBean login(String username, String password) {

        User user = userMapper.findByName(username);
        if (null == user){
            return JsonBean.error("账号错误");
        }
        if (!user.getPassword().equals(password)){
            return  JsonBean.error("密码错误");
        }

        return JsonBean.success();
    }

}
