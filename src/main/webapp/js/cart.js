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
    //console.log(uid)
    let data = null;
    axios.get(goodcartListApi, {
        params: {
            id: uid,
        }
    }).then(res => {
        console.log(res)
        let html = ""
        data = res.data.data;
        console.log(data)
        res.data.data.forEach(p => {
            html += `
            <div class="gooditm">
                <div class="u-check">
                     <input class="d-button d-btn "  type="checkbox">
                </div>
                <div class="u-img">
                    <a href="javascript:;">
                        <img src="${p.pimg}" alt="">
                    </a>
                </div>
                <div class="u-spname">
                    <a href="index.html">${p.pname}</a>
                </div>
                <div class="u-jage">
                   ${p.pprice}
                </div>
                <div class="u-btn">
                    <input type="button" date-id="${p.pid}" class="last-number" value="-">
                    <input class="u-ipt" type="text" value="${p.pnum}">
                    <input type="button" date-id="${p.pid}" class="next-number" value="+">
                </div>
                <div class="u-jage2">
                ${p.pprice * p.pnum}
                </div>
                <div class="u-delete">
                    <a date-id="${p.pid}" class="delete" href="javascript:;">删除</a>
                </div>
            </div>
            `
        })
        let gooditm = document.querySelector(".gooditm-box")
        //console.log(gooditm)
        gooditm.innerHTML = html;
        /*删除 */
        let _delete = document.querySelectorAll(".delete");
        console.log(_delete)
        for (let i = 0; i < _delete.length; i++) {
            _delete[i].onclick = function () {
                let pid = this.getAttribute("date-id");
                axios.get(deleteCartApi, {
                    params: {
                        uid, pid
                        /* uid  用户id
                        pid  商品id */
                    }
                }).then(res => {
                    console.log(res)
                    this.parentNode.parentNode.remove();
                    data = data.filter(v => v.pid != pid)
                    count()
                })
            }
        }
        /* 加减按钮 */
        /* 减 */
        let _lastNumber = document.querySelectorAll(".last-number");
        for (let i = 0; i < _lastNumber.length; i++) {
            _lastNumber[i].onclick = function () {
                let pnum = this.parentNode.querySelector(".u-ipt")
                if (pnum.value == 1) {
                    return
                }
                pnum.value = parseInt(pnum.value) - 1
                let pid = this.getAttribute("date-id");
                axios.get(updateCartNumApi, {
                    params: {
                        uid, pid, pnum: pnum.value
                    }
                }).then(res => {
                    console.log(res)
                    let _ujage2 = document.querySelectorAll(".u-jage2")
                    let html = "";
                    html = `
                    ${pnum.value * data[i].pprice}
                    `
                    getCount()
                    _ujage2[i].innerHTML = html
                    $(".j_zongjia").html("￥" + `${pnum.value * data[i].pprice}`)
                })
                count()
            }
        }
        /* 加 */
        let _nextNumber = document.querySelectorAll(".next-number");
        //console.log(_nextNumber)
        for (let j = 0; j < _nextNumber.length; j++) {
            _nextNumber[j].onclick = function () {
                let _pnum = this.parentNode.querySelector(".u-ipt");
                console.log(_pnum)
                _pnum.value = parseInt(_pnum.value) + 1
                let pnum = _pnum.value
                let pid = this.getAttribute("date-id");
                axios.get(updateCartNumApi, {
                    params: {
                        uid, pid, pnum
                    }
                }).then(res => {
                    console.log(res)
                    let html = ""
                    let _ujage2 = document.querySelectorAll(".u-jage2")
                    getCount()
                    html = `
                    ${pnum * data[j].pprice}
                    `
                    _ujage2[j].innerHTML = html
                    $(".j_zongjia").html("￥" + `${pnum * data[j].pprice}`)
                })
                count()
            }
        }



        /* 单选按钮 */
        $(".d-btn").click(function () {
            let len = $('.d-btn').length;
            let length = $('.d-btn:checked').length;
            if (len == length) {
                $(".g-check").prop("checked", true)
            } else {
                $(".g-check").prop("checked", false)
            }
            count()
            getCount()

        })

        //console.log(data)
        function count() {
            console.log(data)
            let countNumber = 0;
            let countPprice = 0;
            let acheck = document.querySelectorAll(".d-btn")
            for (let i = 0; i < acheck.length; i++) {
                let _danxuan = acheck[i];
                if (_danxuan.checked) {
                    let v = data[i];
                    countNumber += parseInt(v.pnum);
                    countPprice += parseInt(v.pnum) * parseInt(v.pprice)
                }
            }
            $(".tt").html(countNumber)
            $(".num_num").html(countNumber)
            $(".j_zongjia").html(countPprice)
        }
        /* 全选按钮添加点击事件 */
        $('.g-check').click(function () {
            if ($(this).is(':checked')) {
                $('.d-button').prop('checked', true)
            } else {
                $('.d-button').prop('checked', false)
            }

            count()
            getCount()

        })




        //计算总价
        function getCount() {
            var num = 0;
            var price = 0

            $('.d-btn').each(function () {
                console.log($(this))
                if (this.checked == true) {
                    let id = $(this).parent().siblings('.u-jage').html();
                    let opnum = $(this).parent().siblings('.u-btn').children('.u-ipt').val();
                    num += parseInt(opnum);
                    price += parseInt(id) * parseInt(opnum)
                }
            })
            $('.j_zongjia').html(price)
            $('.num_num').html(num)
        }

    })
    //提交
    $(".j-mai").click(function () {
        if ($(".d-btn").is(":checked")) {
            alert("提交成功")
        } else {
            alert("请勾选商品")
        }
    })
})(jQuery)





