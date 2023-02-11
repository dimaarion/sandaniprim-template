document.querySelectorAll(".dropdown-hov").forEach((e, i) => {
  e.addEventListener("mouseover", (el) => {
    document.querySelectorAll(".dropdown-menu").forEach((el, j) => {
      if (i == j) {
        el.setAttribute("style", "opacity:1 !important;");
      } else {
        el.setAttribute("style", "opacity:0 !important;");
      }
      //
    });
  });
});

document.querySelector("body").addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((e) => {
    e.setAttribute("style", "opacity:0 !important;");
  });
});
