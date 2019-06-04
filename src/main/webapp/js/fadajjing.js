



        /* 放大镜 */
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




