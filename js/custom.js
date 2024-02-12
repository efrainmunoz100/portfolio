$("#sps-card").on("click", () => {$("#sps-modal").fadeIn(75)})
$(".close-sps").on("click", () => {$("#sps-modal").fadeOut(75)})

$("#bitcoin-card").on("click", () => {$("#bitcoin-modal").fadeIn(75)})
$(".close-bitcoin").on("click", () => {$("#bitcoin-modal").fadeOut(75)})

$("#planetary-simulator-card").on("click", () => {$("#planetary-simulator-modal").fadeIn(75)})
$(".close-planetary-simulator").on("click", () => {$("#planetary-simulator-modal").fadeOut(75)})

$("#app-challenge-card").on("click", () => {$("#app-challenge-modal").fadeIn(75)})
$(".close-app-challenge").on("click", () => {$("#app-challenge-modal").fadeOut(75)})

$(".nav-link, .navbar-brand").on("click", () => {
  $(window).width() < 992 ? closeNav() : null;
})

$(window).on('resize', () => {
  $(window).width() >= 992 ? openNav() : closeNav();
})

$(window).on('scroll', handleScroll);

function openNav() {
  document.documentElement.style.setProperty('--navbar-offset', '250px');
}

function closeNav() {
  document.documentElement.style.setProperty('--navbar-offset', '0px');
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  console.log(element);
  const rect = element[0].getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  logos = $('.logo');
  console.log(logos);
  logos.each((logo) => {
    if (isInViewport(logo)) {
      icon.css("margin-bottom", "0"); // Move the icon to its final position
      // $(window).off("scroll", handleScroll); // Remove the scroll event listener
  }});
}
