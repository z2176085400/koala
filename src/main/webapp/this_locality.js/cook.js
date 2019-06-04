function setCookie(name,val,time){
    let oDate=new Date();
    oDate.setDate(oDate.getDate()+time);
    document.cookie=name+"="+val+";expires"+oDate;
}
//取得时候需要得到他的name值
function getCookie(name){
    let str=document.cookie;
    let arr=str.split("; ");
    for(let i=0;i<arr.length;i++){
        let newArr=arr[i].split("=");
        if(newArr[0]==name){
            return newArr[1]
        }
    }
}
//删除需要传一个name值
function removeCookie(name){
    setCookie(name,1,-1)
}