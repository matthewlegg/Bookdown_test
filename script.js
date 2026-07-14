document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("main img").forEach(function(img) {

    const link = document.createElement("a");

    link.href = img.src;
    link.setAttribute("data-lightbox", "book-images");

    img.parentNode.insertBefore(link, img);

    link.appendChild(img);

  });

});