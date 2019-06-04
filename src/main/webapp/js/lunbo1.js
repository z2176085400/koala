class LunBo{
    constructor(el){
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

    autoPlay(){
        let timer =  setInterval(()=>{
            this.next()
        },2000)

        /* this.el.onmouseover = ()=>{
            clearInterval(timer)
        } */
        this.el.onmouseout = ()=>{
            clearInterval(timer)
            timer =  setInterval(()=>{
                this.next()
            },2000)
        }


    }

    btnsEvent(){
        this.rightBtn.onclick = ()=>{
          this.next()
        }
        this.leftBtn.onclick = ()=>{
            this.prev()
        }

        for(let i=0;i<this.oPageLis.length;i++){
            this.oPageLis[i].onclick = ()=>{
                // this.pageNum
                animate(this.oLis[this.pageNum],{opacity:0})
                this.pageNum = i
                animate(this.oLis[this.pageNum],{opacity:1})
                
                this.showPageWithPageNum(this.pageNum)

            }
        }
    }
    //根据页码显示对应的小圆点
    showPageWithPageNum(pageNum){
     //   console.log(11111)
        for(let i=0;i<this.oPageLis.length;i++){
            this.oPageLis[i].style.background='red'
        }
        this.oPageLis[pageNum].style.background='white'


    }


    next(){
        animate(this.oLis[this.pageNum],{opacity:0})
            // this.oLis[this.pageNum].style.opacity = 0
            this.pageNum++;
      //      console.log(this.pageNum)
            if(this.pageNum == 6){
                this.pageNum =0
            }
            // this.oLis[this.pageNum].style.opacity = 1
            animate(this.oLis[this.pageNum],{opacity:1})

            this.showPageWithPageNum(this.pageNum)


    }
    prev(){
        animate(this.oLis[this.pageNum],{opacity:0})
            // this.oLis[this.pageNum].style.opacity = 0
            this.pageNum--;
            console.log(this.pageNum)
            if(this.pageNum == -1){
                this.pageNum = 5
            }
            // this.oLis[this.pageNum].style.opacity = 1
            animate(this.oLis[this.pageNum],{opacity:1})

            this.showPageWithPageNum(this.pageNum)



    }

}