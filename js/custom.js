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

function openNav() {
  document.documentElement.style.setProperty('--navbar-offset', '250px');
}

function closeNav() {
  document.documentElement.style.setProperty('--navbar-offset', '0px');
}