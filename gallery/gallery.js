var gallery = (function(window) {  
    var gallery = {};

    var thumbnails = document.getElementsByClassName("thumbnail");
    for (i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", displayImage);
    }

    function displayImage() {
        var image = this;
        var thumbImg=image.childNodes[0];
        var thumbUrl=thumbImg.getAttribute("src");
        document.getElementById("mainImage").src=thumbUrl;
    }

    return gallery;
})(window)