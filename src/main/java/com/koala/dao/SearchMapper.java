package com.koala.dao;

import com.koala.entity.Search;

public interface SearchMapper {
    int deleteByPrimaryKey(Integer searchid);

    int insert(Search record);

    int insertSelective(Search record);

    Search selectByPrimaryKey(Integer searchid);

    int updateByPrimaryKeySelective(Search record);

    int updateByPrimaryKey(Search record);
}