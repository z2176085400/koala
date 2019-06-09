package com.koala.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.koala.dao.GoodsMapper;
import com.koala.entity.Goods;
import com.koala.service.GoodsService;
import com.koala.vo.JsonBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsServiceImpl implements GoodsService {

   @Autowired
   private GoodsMapper goodsMapper;
   @Override

    public JsonBean findAll(Integer page) {
        PageHelper.startPage(page,50);
        List<Goods> list = goodsMapper.findAll();
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("total",((Page)list).getTotal());
        map.put("rows",list);


       return JsonBean.success("ok",map);
    }
}
