package com.koala.dao;

import com.koala.entity.HuaWei;

public interface HuaiWeiMapper {
    int deleteByPrimaryKey(Integer hid);

    int insert(HuaWei record);

    int insertSelective(HuaWei record);

    HuaWei selectByPrimaryKey(Integer hid);

    int updateByPrimaryKeySelective(HuaWei record);

    int updateByPrimaryKey(HuaWei record);
}