var gallery = (function(window) {  
    var gallery = {};

    var thumbnails = document.getElementsByClassName("thumbnail");
    for (i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", displayImage);
    }

    function displayImage() {
        var imageNumber = parseInt(this.id);
        var images = document.getElementsByClassName("image");
        for(i=0; i<images.length; i++) {
            if(i===imageNumber){
                images[i].className="image";
            }
            else {
                images[i].className="image hidden";
            }
        }
    }

    return gallery;
})(window)