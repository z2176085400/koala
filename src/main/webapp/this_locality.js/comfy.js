let host="http://jx.xuzhixiang.top/ap/api"

//登录
let regApi=host+'/reg.php';
//注册
let loginApi=host+'/login.php';
//首页商品列表接口
let bannerlistApi=host+'/bannerlist.php'
//首页商品接口列表
let productlistApi=host+'/productlist.php'
//根据商品id获取商品详情接口
let goodDetailApi=host+'/detail.php'
/* ：http://jx.xuzhixiang.top/ap/api/add-product.php
     接口请求方式：get
     接口参数：
          uid  用户id
          pid  商品id
          pnum  要添加的商品数量 */
//给用户购物车中添加商品 接口
let addProductApi=host+'/add-product.php'
//查询购物车里面的商品
let goodcartListApi=host+'/cart-list.php'
//删除用户购物车中的商品 接口
let deleteCartApi=host+'/cart-delete.php'
//更新购物车中商品数量 接口
let updateCartNumApi=host+'/cart-update-num.php'