package com.koala.dao;

import com.koala.entity.GrandpaType;

public interface GrandpaTypeMapper {
    int deleteByPrimaryKey(Integer gpid);

    int insert(GrandpaType record);

    int insertSelective(GrandpaType record);

    GrandpaType selectByPrimaryKey(Integer gpid);

    int updateByPrimaryKeySelective(GrandpaType record);

    int updateByPrimaryKey(GrandpaType record);
}