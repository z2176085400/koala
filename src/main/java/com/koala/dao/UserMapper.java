package com.koala.dao;

import com.koala.entity.User;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer uid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer uid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);



    public User findByName(String name);

    public List<String> findRoleByName(String name);

    public List<String> findPermsByName(String name);
}