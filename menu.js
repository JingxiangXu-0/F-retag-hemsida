function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.onclick = function(event) {
  if (event.target == nav-item) {
    modal.style.display = "none";
  }
}