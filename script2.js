// Tambahkan script.js untuk mengatur efek animasi saat gambar muncul
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showImages() {
    images.forEach((image) => {
      if (isInViewport(image)) {
        image.classList.add("show");
      }
    });
  }

  // Tambahkan event listener saat menggulir
  window.addEventListener("scroll", showImages);

  // Tampilkan gambar yang terlihat saat halaman pertama kali dimuat
  showImages();
});


