package com.koala.dao;

import com.koala.entity.FatherType;

public interface FatherTypeMapper {
    int deleteByPrimaryKey(Integer fid);

    int insert(FatherType record);

    int insertSelective(FatherType record);

    FatherType selectByPrimaryKey(Integer fid);

    int updateByPrimaryKeySelective(FatherType record);

    int updateByPrimaryKey(FatherType record);
}