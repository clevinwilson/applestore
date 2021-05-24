function screenSize() {
    if (screen.width < 735) {
        document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
        var image = document.getElementById("myImg")
        image.style.objectFit = "cover";
        image.style.width = '324px';
        image.style.height = '365px';
    } else {
        var image = document.getElementById("myImg")
        document.getElementById("myImg").src = "images/index-banner.jpg";
        image.style.objectFit = "cover";
        image.style.width = '847px';
        image.style.height = '394px';
    }
}
if (screen.width < 735) {
    document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
    var image = document.getElementById("myImg")
    image.style.objectFit = "cover";
    image.style.width = '324px';
    image.style.height = '365px';
} else {
    var image = document.getElementById("myImg")
    document.getElementById("myImg").src = "images/index-banner.jpg";
    image.style.objectFit = "cover";
    image.style.width = '847px';
    image.style.height = '394px';
}