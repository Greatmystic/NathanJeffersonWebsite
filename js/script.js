document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.getElementById("close");

    // Hide the lightbox initially
    lightbox.style.display = "none";

    var images = document.querySelectorAll(".art-piece img");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
