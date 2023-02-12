document.querySelectorAll(".dropdown-hov").forEach((e, i) => {
  e.addEventListener("mouseover", () => {
    document.querySelectorAll(".dropdown-menu").forEach((el, j) => {
      if (i == j) {
        //     el.classList.add("dropdown-hov-menu");
      } else {
        //     el.classList.remove("dropdown-hov-menu");
      }
      //
    });
  });
});

document.querySelector("body").addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((el) => {
    //   el.classList.remove("dropdown-hov-menu");
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".dropdown-menu").forEach((el) => {
    //  el.classList.remove("dropdown-hov-menu");
  });
});
