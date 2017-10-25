(function(window) {  

    var thumbnails = document.getElementsByClassName("thumbnail");
    var images = document.getElementsByClassName("image");
    
    for (i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", displayImage);
    }

    function displayImage() {
        var imageNumber = parseInt(this.id);
        for(i=0; i<images.length; i++) {
            if(i===imageNumber){
                images[i].className="image";
            }
            else {
                images[i].className="image hidden";
            }
        }
    }

    })()