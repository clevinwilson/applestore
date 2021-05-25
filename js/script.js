function screenSize() {
    if (screen.width < 735) {
        document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
        var image = document.getElementById("myImg")
        image.style.objectFit = "cover";
        image.style.width = '324px';
        image.style.height = '365px';

        var image = document.getElementById("banner-two")
        image.src = "images/iphone_12_updated__jepm2xpxncuy_small_2x.jpg";

    } else {
        var image = document.getElementById("myImg")
        image.src = "images/index-banner.jpg";
        image.style.objectFit = "cover";
        image.style.width = '847px';
        image.style.height = '394px';

                
        var image = document.getElementById("banner-two")
        image.src = "images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg";

    }
}
if (screen.width < 735) {
    document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
    var image = document.getElementById("myImg")
    image.style.objectFit = "cover";
    image.style.width = '324px';
    image.style.height = '365px';

    var image = document.getElementById("banner-two")
    image.src = "images/iphone_12_updated__jepm2xpxncuy_small_2x.jpg";

} else {
    var image = document.getElementById("myImg")
    document.getElementById("myImg").src = "images/index-banner.jpg";
    image.style.objectFit = "cover";
    image.style.width = '847px';
    image.style.height = '394px';

    
    var image = document.getElementById("banner-two")
        image.src = "images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg";

   
}