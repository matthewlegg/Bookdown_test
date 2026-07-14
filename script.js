document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("main img").forEach(function(img) {

    const link = document.createElement("a");

    link.href = img.src;
    link.setAttribute("data-lightbox", "book-images");

    if (img.alt) {
      link.setAttribute("data-title", img.alt);
    }

    img.parentNode.insertBefore(link, img);
    link.appendChild(img);

  });

});

document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("main a[href^='http']").forEach(function(link) {

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

  });

});