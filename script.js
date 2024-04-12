// menue toggle
var menue_open = document.querySelector(".menue-icon");
var menue_close = document.querySelector(".close");
var nav = document.querySelector("nav");

menue_open.addEventListener("click", function () {
  nav.classList.add("show");
});

menue_close.addEventListener("click", function () {
  nav.classList.remove("show");
});

// cart toggles
var cart = document.querySelector(".cart");
var cart_items = document.querySelector(".cart-items");

cart.addEventListener("click", function () {
  cart_items.classList.toggle("active");
});

// product counter
var counter_value = 0;
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var counter = document.querySelector(".cart-number");

plus.addEventListener("click", function () {
  counter_value = counter_value + 1;
  counter.innerText = counter_value;
});
minus.addEventListener("click", function () {
  if (counter_value == 0) {
    return;
  }
  counter_value = counter_value - 1;
  counter.innerText = counter_value;
});

// display carsule slider
var porduct_other_images = document.querySelectorAll(".other-product-img img");

var carsule_container = document.querySelector(".hero-img-carousel");

var close_carsule = document.querySelector(".close-carousel");

porduct_other_images.forEach((e) => {
  e.addEventListener("click", () => {
    carsule_container.classList.add("active");
  });
});

close_carsule.addEventListener("click", () => {
  carsule_container.classList.remove("active");
});

// carsule slider controlles
var img_counter = 0;

var next = document.querySelector(".controllers .next");
var prev = document.querySelector(".controllers  .previous");
var other_image = document.querySelectorAll(
  ".hero-img-carousel-other-images img"
);
var main_image = document.querySelector(
  ".hero-img-carousel-main-image-main-image"
);

other_image.forEach((e, index) => {
  e.addEventListener("click", () => {
    other_image.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    img_counter = index;
    main_image.setAttribute("src", e.getAttribute("src"));
  });
});

next.addEventListener("click", () => {
  other_image.forEach((e) => {
    e.classList.remove("active");
  });

  img_counter = img_counter + 1;

  if (img_counter == other_image.length) {
    img_counter = 0;
  }

  main_image.setAttribute("src", other_image[img_counter].getAttribute("src"));
  other_image[img_counter].classList.add("active");
});

prev.addEventListener("click", () => {
  other_image.forEach((e) => {
    e.classList.remove("active");
  });

  img_counter = img_counter - 1;

  if (img_counter == -1) {
    img_counter = other_image.length - 1;
  }

  main_image.setAttribute("src", other_image[img_counter].getAttribute("src"));
  other_image[img_counter].classList.add("active");
});

// carsule slider  mobile
var main_img_disktop = document.querySelector(".main-product-img-img");

var previous_mobile_btn = document.querySelector(
  ".mobile-controllers .mobile-previous"
);

var next_mobile_btn = document.querySelector(
  ".mobile-controllers .mobile-next"
);

next_mobile_btn.addEventListener("click", () => {
  img_counter = img_counter + 1;

  if (img_counter == other_image.length) {
    img_counter = 0;
  }

  main_img_disktop.setAttribute(
    "src",
    other_image[img_counter].getAttribute("src")
  );
});

previous_mobile_btn.addEventListener("click", () => {
  img_counter = img_counter - 1;

  if (img_counter == -1) {
    img_counter = other_image.length - 1;
  }
  main_img_disktop.setAttribute(
    "src",
    other_image[img_counter].getAttribute("src")
  );
});
