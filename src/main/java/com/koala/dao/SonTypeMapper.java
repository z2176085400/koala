package com.koala.dao;

import com.koala.entity.SonType;

public interface SonTypeMapper {
    int deleteByPrimaryKey(Integer sid);

    int insert(SonType record);

    int insertSelective(SonType record);

    SonType selectByPrimaryKey(Integer sid);

    int updateByPrimaryKeySelective(SonType record);

    int updateByPrimaryKey(SonType record);
}