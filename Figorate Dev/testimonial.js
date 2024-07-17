document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.getElementById('myCarousel');
    
    myCarousel.addEventListener('slid.bs.carousel', function () {
      const activeItem = this.querySelector('.carousel-item.active');
      const newImageSrc = activeItem.getAttribute('data-img');
      document.querySelector('.testi-img img').src = newImageSrc;
    });
  });