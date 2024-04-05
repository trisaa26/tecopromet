const header = document.querySelector(".header");
const aboveHeader = document.querySelector(".above-header");
const navbar = document.querySelector("#navbar");
const breakpoint = navbar.getBoundingClientRect().bottom + 200;

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", function () {
  const scrolledBelowBreakpoint = this.scrollY > breakpoint;
  const scrolledAboveBreakpoint = this.scrollY < breakpoint;
  //
  const scrolledToTop = this.scrollY === 0;
  //

  if (!navbarCollapse.classList.contains("show")) {
    if (scrolledBelowBreakpoint) {
      header.classList.add("sticky");
      header.classList.remove("fixed");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("fixed");
    }
  } else {
    header.classList.add("fixed");
    header.classList.remove("sticky");
  }

  if (scrolledToTop) {
    header.classList.remove("sticky");
  }
});

navbarToggler.addEventListener("click", function () {
  if (header.classList.contains("fixed")) {
    header.classList.remove("fixed");
  } else {
    // header.classList.add("fixed");
  }
});

// Closing the navbar when a link is clicked
const menuLinks = document.querySelectorAll(".navbar-collapse a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
    navbarToggler.setAttribute("aria-expanded", "false");

    // Only add sticky class if scrolled below breakpoint
    if (window.scrollY > breakpoint) {
      header.classList.add("sticky");
      header.classList.remove("fixed");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("fixed");
    }
  });
});

//

const galleryButton = document.querySelector(".gallery-btn");
const columnOnButton = document.querySelectorAll(".column-on-button");

let columnsShown = false;

galleryButton.addEventListener("click", function () {
  if (columnsShown) {
    columnOnButton.forEach((column) => {
      column.style.display = "none";
    });
  } else {
    columnOnButton.forEach((column) => {
      column.style.display = "block";
    });
  }

  columnsShown = !columnsShown;
});
