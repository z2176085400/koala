; (function ($) {
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
       axios.get(bannerlistApi, {
              params: {
                     uid
              }
       }).then(res => {
              console.log(res)
              let html = "";
              res.data.data.forEach(p => {
                     html += `
                     <li><img src="${p.banner_img_url}"></li>
                     `
              })
              $(".item").html(html)
              $(".item").children('li').eq(0).css({ 'opacity': 1 })
              function animate(div, obj) {
                     clearInterval(div.timer);

                     div.timer = setInterval(function () {
                            var flag = true;//假设已经到了目的地
                            for (var key in obj) {
                                   var target = obj[key];
                                   if (key == 'opacity') {
                                          var speed = (target - parseFloat(getStyle(div)[key])) * 100 / 8;
                                          // console.log(speed,'speed1')
                                          speed = (speed > 0 ? Math.ceil(speed) : Math.floor(speed));
                                          //console.log(speed,'speed2')

                                          var op = parseFloat(getStyle(div)[key]) + speed / 100;
                                          // console.log(op)

                                          div.style[key] = op;
                                          if (parseFloat(getStyle(div)[key]) != target) {
                                                 flag = false;
                                          }

                                   } else {
                                          var speed = (target - parseInt(getStyle(div)[key])) / 8;
                                          speed = (speed > 0 ? Math.ceil(speed) : Math.floor(speed));
                                          div.style[key] = parseInt(getStyle(div)[key]) + speed + 'px';
                                          if (parseInt(getStyle(div)[key]) != target) {
                                                 flag = false;
                                          }
                                   }
                            }
                            //必须等到所有的 属性都到达目的地 才能结束定时器
                            if (flag == true) {
                                   clearInterval(div.timer);
                            }
                     }, 20);
              }
              class LunBo {
                     constructor(el) {
                            this.el = document.querySelector(el);
                            this.rightBtn = this.el.querySelector('.rightBtn')
                            this.leftBtn = this.el.querySelector('.leftBtn')
                            this.oLis = this.el.querySelectorAll('.item li')
                            this.oPageLis = this.el.querySelectorAll('.page li')
                            this.pageNum = 0;//页码
                            this.showPageWithPageNum(this.pageNum)
                            this.btnsEvent()
                            this.autoPlay()
                     }

                     autoPlay() {
                            let timer = setInterval(() => {
                                   this.next()
                            }, 2000)
                            this.el.onmouseout = () => {
                                   clearInterval(timer)
                                   timer = setInterval(() => {
                                          this.next()
                                   }, 2000)
                            }
                     }
                     btnsEvent() {
                            this.rightBtn.onclick = () => {
                                   this.next()
                            }
                            this.leftBtn.onclick = () => {
                                   this.prev()
                            }
                            for (let i = 0; i < this.oPageLis.length; i++) {
                                   this.oPageLis[i].onclick = () => {
                                          animate(this.oLis[this.pageNum], { opacity: 0 })
                                          this.pageNum = i
                                          animate(this.oLis[this.pageNum], { opacity: 1 })
                                          this.showPageWithPageNum(this.pageNum)
                                   }
                            }
                     }
                     //根据页码显示对应的小圆点
                     showPageWithPageNum(pageNum) {
                            for (let i = 0; i < this.oPageLis.length; i++) {
                                   this.oPageLis[i].style.background = 'red'
                            }
                            this.oPageLis[pageNum].style.background = 'white'
                     }
                     next() {
                            animate(this.oLis[this.pageNum], { opacity: 0 })
                            this.pageNum++;
                            if (this.pageNum == 6) {
                                   this.pageNum = 0
                            }
                            animate(this.oLis[this.pageNum], { opacity: 1 })
                            this.showPageWithPageNum(this.pageNum)
                     }
                     prev() {
                            animate(this.oLis[this.pageNum], { opacity: 0 })
                            this.pageNum--;
                            console.log(this.pageNum)
                            if (this.pageNum == -1) {
                                   this.pageNum = 5
                            }
                            animate(this.oLis[this.pageNum], { opacity: 1 })
                            this.showPageWithPageNum(this.pageNum)
                     }
              }
              new LunBo('.box')
       })

       /* 口碑爆款 */
       axios.get(productlistApi, {
              params: {
                     uid
              }
       }).then(res => {
              console.log(res)
              let html = "";
              res.data.data.forEach(p => {
                     console.log(p)
                     html += `
              <li>
              <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                    <h3 class="goods-title"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                    <p>${p.pdesc}</p>
                    <i><a href="javascript:;">新人价&nbsp;￥</a></i>
                    <span>${p.pprice}</span>
                    <b><a href="item.html?pid=${p.pid}">立即购买</a></b>
              </li>
                     `
              })
              $(".list-baokuang").html(html);
       })
       /* 99爆款 */
       axios.get(productlistApi,{
              params:{
                     uid
              }
       }).then(res=>{
              let html="";
              res.data.data.forEach(p=>{
                      if(`${p.pid}`<28174){ 
                            html+=`
              <li>
              <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                    <h3 class="goods-ti tle"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                    <p><a href="javascript:;">${p.pdesc}</a></p>
                    <i><a href="javascript:;">新人价</a></i>
                    <span>${p.pprice}</span>
                    <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
              </li>`
                      }
              })
              $(".list-jiujiu").html(html)
       })
       /* 大牌满减 */
       axios.get(productlistApi,{
              params:{
                     uid
              }
       }).then(res=>{
              let html="";
              res.data.data.forEach(p=>{
                      if(`${p.pid}`>28173){ 
                            html+=`
              <li>
              <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                    <h3 class="goods-ti tle"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                    <p><a href="javascript:;">${p.pdesc}</a></p>
                    <i><a href="javascript:;">新人价</a></i>
                    <span>${p.pprice}</span>
                    <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
              </li>`
                      }
              })
              $(".list-dapai").html(html)
       })
              /* 美容 */
              axios.get(productlistApi,{
                     params:{
                            uid
                     }
              }).then(res=>{
                     let html="";
                     res.data.data.forEach(p=>{
                                   html+=`
                     <li>
                     <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                           <h3 class="goods-ti tle"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                           <p><a href="javascript:;">${p.pdesc}</a></p>
                           <i><a href="javascript:;">新人价</a></i>
                           <span>${p.pprice}</span>
                           <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
                     </li>`
                     })
                     $(".list-meirong").html(html)
              })
              
              /* 家居个护 */
              axios.get(productlistApi,{
                     params:{
                            uid
                     }
              }).then(res=>{
                     let html="";
                     res.data.data.forEach(p=>{
                             if(`${p.pid}`<28180){ 
                                   html+=`
                     <li>
                     <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                           <h3 class="goods-ti tle"><a href="item.html">${p.pname}</a></h3>
                           <p><a href="javascript:;">${p.pdesc}</a></p>
                           <i><a href="javascript:;">新人价</a></i>
                           <span>${p.pprice}</span>
                           <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
                     </li>`
                             }
                     })
                     $(".list-jiaju").html(html)
              })
              /* 母婴儿童 */
              axios.get(productlistApi,{
                     params:{
                            uid
                     }
              }).then(res=>{
                     let html="";
                     res.data.data.forEach(p=>{
                             if(`${p.pid}`>28150){ 
                                   html+=`
                     <li>
                     <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                    <h3 class="goods-ti tle"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                           <p><a href="javascript:;">${p.pdesc}</a></p>
                           <i><a href="javascript:;">新人价</a></i>
                           <span>${p.pprice}</span>
                            <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
                     </li>`
                             }
                     })
                     $(".list-muying").html(html)
              })
              /* 保健 */
              axios.get(productlistApi,{
                     params:{
                            uid
                     }
              }).then(res=>{
                     let html="";
                     res.data.data.forEach(p=>{
                             if(`${p.pid}`<28174){ 
                                   html+=`
                     <li>
                     <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                           <h3 class="goods-ti tle"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                           <p><a href="javascript:;">${p.pdesc}</a></p>
                           <i><a href="javascript:;">新人价</a></i>
                           <span>${p.pprice}</span>
                           <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
                     </li>`
                             }
                     })
                     $(".list-baojian").html(html)
              })
              /* 工厂 */
              axios.get(productlistApi,{
                     params:{
                            uid
                     }
              }).then(res=>{
                     let html="";
                     res.data.data.forEach(p=>{
                             if(`${p.pid}`>28173){ 
                                   html+=`
                     <li>
                     
                     <a href="item.html?pid=${p.pid}"><img src="${p.pimg}" alt=""></a>
                           <h3 class="goods-title"><a href="item.html?pid=${p.pid}">${p.pname}</a></h3>
                           <p><a href="javascript:;">${p.pdesc}</a></p>
                           <i><a href="javascript:;">新人价</a></i>
                           <span>${p.pprice}</span>
                           <a href="item.html?pid=${p.pid}"><b>立即购买</b></a>
                     </li>`
                             }
                     })
                     $(".list-gongchang").html(html)
              })
})(jQuery)
