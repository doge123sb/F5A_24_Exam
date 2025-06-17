// Gallery Image Transition
const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000); // Change every 3 seconds

// Image enlargement functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("enlargedImg");
const closeBtn = document.getElementsByClassName("close")[0];
const clickableImages = document.querySelectorAll(".clickable-img");

// Add click event to all clickable images
clickableImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
});

// Close modal when clicking X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}