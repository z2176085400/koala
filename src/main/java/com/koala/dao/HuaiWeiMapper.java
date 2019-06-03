package com.koala.dao;

import com.koala.entity.HuaiWei;

public interface HuaiWeiMapper {
    int deleteByPrimaryKey(Integer hid);

    int insert(HuaiWei record);

    int insertSelective(HuaiWei record);

    HuaiWei selectByPrimaryKey(Integer hid);

    int updateByPrimaryKeySelective(HuaiWei record);

    int updateByPrimaryKey(HuaiWei record);
}