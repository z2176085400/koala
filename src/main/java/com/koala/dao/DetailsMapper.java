package com.koala.dao;

import com.koala.entity.Details;

public interface DetailsMapper {
    int deleteByPrimaryKey(Integer detailsid);

    int insert(Details record);

    int insertSelective(Details record);

    Details selectByPrimaryKey(Integer detailsid);

    int updateByPrimaryKeySelective(Details record);

    int updateByPrimaryKey(Details record);
}