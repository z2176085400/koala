;(function($){
    let uid = getCookie('id');
       console.log(uid)
       let username = getCookie("username");
       console.log(username);
       if (uid) {
              $("#top-left").css({ "display": "none" });
              $("#yidenglu").css({ "display": "block" });
              $("#user-name").html(username)
       } else {
              $("#top-left").show();
              $("#yidenglu").hide();
       }
       $("#tuichu").click(function () {
              removeCookie("id");
              removeCookie("username");
              location.href = "reg.html"
       })
        let url=new  URL(location.href);
        console.log(url)
        let pid=url.searchParams.get("pid")
        console.log(pid)
        //id获取商品详情接口
        axios.get(goodDetailApi,{
            params:{
                id:pid,
            }
        }).then(res=>{
            console.log(res)
            let p=res.data.data
            let html=`  
            <div id="midArea">
                    <img src="${p.pimg}">
                    <div id="zoom"></div>
                </div>
                <div id="smallArea">
                    <ul>
                        <li><img src="${p.pimg}"></li>
                        <li><img src="${p.pimg}"></li>
                        <li><img src="${p.pimg}"></li>
                        <li><img src="${p.pimg}"></li>
                        <li><img src="${p.pimg}"></li>
                    </ul>
                </div>
                <div id="bigArea">
                    <img src="${p.pimg}">
                </div>
            `
            $("#zoomBox").html(html)
            function $id(id) {
                return document.getElementById(id);
            }
            function Zoom() {
                this.zoomBox = $id("zoomBox");
                this.midArea = $id("midArea");
                this.zoom = $id("zoom");
                this.midImg = this.midArea.children[0];
                this.bigArea = $id("bigArea");
                this.bigImg = this.bigArea.children[0];
                this.smallArea = $id("smallArea");
                this.smallImgs = this.smallArea.getElementsByTagName("img");
                this.midArea.onmouseover = () => {
                    this.zoom.style.display = "block";
                    this.bigArea.style.display = "block";
                }
                this.midArea.onmouseout = () => {
                    this.zoom.style.display = "none";
                    this.bigArea.style.display = "none";
                }
                this.midArea.onmousemove = (e) => {
                    var evt = e || event;
                    var x = evt.pageX - this.zoomBox.offsetLeft - this.zoom.offsetWidth / 2;
                    var y = evt.pageY - this.zoomBox.offsetTop - this.zoom.offsetHeight / 2;
                    var cw = this.midArea.offsetWidth - this.zoom.offsetWidth;
                    var ch = this.midArea.offsetHeight - this.zoom.offsetHeight;
                    if (x <= 0) {
                        x = 0;
                    }
                    if (x >= cw) {
                        x = cw;
                    }
                    if (y <= 0) {
                        y = 0;
                    }
                    if (y >= ch) {
                        y = ch;
                    }
                    this.zoom.style.left = x + "px";
                    this.zoom.style.top = y + "px";
                    this.bigImg.style.left = -x / this.midArea.offsetWidth * this.bigImg.offsetWidth + "px";
                    this.bigImg.style.top = -y / this.midArea.offsetHeight * this.bigImg.offsetHeight + "px";
                }
                for (let i = 0; i < this.smallImgs.length; i++) {
                    this.smallImgs[i].onclick = () => {
                        console.log(this.smallImgs[i], this.smallImgs[i].src)
                        this.midImg.src = this.smallImgs[i].src;
                        this.bigImg.src = this.smallImgs[i].src;
                    }
                }
            }
            var zoom = new Zoom();
            })
            /* 购物车详情 */
            axios.get(goodDetailApi,{
                params:{
                    id:pid,
                }
            }).then(res=>{
                let p=res.data.data;
                let html=`
                <dl class="PInfo">
                <dt class="PTags">
                    <h2><strong>${p.pname}</strong><p>${p.pdesc}</p></h2>
                    
                </dt>
               
                <dd class="m-price-wrap">
                    <div class="m-price">
                    
                        <span class="s-price">售价</span>
                        <span class="j-price">￥${p.pprice}</span>
                        <span class="c-price">参考价&nbsp;￥200</span>
                    </div>
                    <span class="s-heika">黑卡会员可<i>省￥100</i></span>
                    <p class="h-huiyuan">含会员9折&nbsp;<a href="javascript:;">立即开卡</a></p>
                    <ul>
                        <li class="z-zuhe"><span>更多组合</span><i>1件装</i>|<em>单件10元</em></li>
                        <li><a style="color:#408aeb" href="#">两件装|单件20元</a></li>
                        <li class="l-linjuan">先领卷,在下单<a href="#">点击领取</a></li>
                    </ul>
                </dd>
                <dd class="m-zd-prt-line">
                        <ul>
                            <li class="h-huodong">
                                <span class="h-dong">活动</span>
                                <span class="n-yuan">N元任选</span>
                                <a href="#" style="color: red;margin-left:20px; ">99元任选10件</a>
                                <a href="#" style="color: red;margin-left:30px">点击凑单&rArr;</a>
                            </li>
                            <li class="y-yunfei">
                                运费
                                <span>满88元包邮ˇ</span>
                            </li>
                        </ul>
                    </dd>
                     <dd class="n-numer">
                        <span>数量</span>
                        <div>
                        <button class="last-number">-</button>
                        <input type="text" class="number" value="1">
                        <button class="next-number">+</button>
                    </div>
                    </dd>
                      <dd class="s-shuoming">
                        <i>说明</i> 
                        <span>会员9折</span>
                        <span>正品保障</span>
                        <span>支持30天退货</span>
                    </dd>
                  <dd class="buyBtns">
                        <a  class="j-buynow-btn"  href="#">立即购买</a>
                        <a class="j-add2cart-btn" addBtn="${p.pid}" href="javascript:;">加入购物车</a>
                    </dd> 
            </dl>
                `
                $("#article-right").html(html)

                /* 加入购物车 */
                $(".j-add2cart-btn").click(function(){
                   let pid=this.getAttribute("addBtn")
                   let uid=getCookie("id");
                    let pnum=document.querySelector(".number").value;
                   /*  uid  用户id
                    pid  商品id
                    pnum  要添加的商品数量 */
                    axios.get(addProductApi,{
                        params:{
                            uid,pid,pnum
                        }
                    }).then(res=>{
                        console.log(res)
                         location.href="cart.html" 
                    })
                    
                })
                /* 加减按钮 */
                $(".next-number").click(function(){
                  /*   console.log($(".next-number"))
                   let number=document.querySelector(".number")
                  number.value=parseInt(number.value)+1 */
                  $('.number').val(function(){
                      return parseInt(this.value)+1
                  })
                })
                $(".last-number").click(function(){
                    let _number=document.querySelector(".number")
                    if(_number.value==1){
                       return;
                    }else{
                         _number.value=parseInt(_number.value)-1
                    }
                })
            })

})(jQuery)
