var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
function drawLines() {
  ctx.font = "1vw Arial";
  ctx.textBaseline = "middle";
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  var startX1 = viewportWidth * 0.15;
  var startY1 = viewportHeight * 0.3;
  var endX1 = viewportWidth * 0.85;
  var endY1 = viewportHeight * 0.3;

  ctx.beginPath();
  ctx.moveTo(startX1, startY1);
  ctx.lineTo(endX1, endY1);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();

  var startX2 = endX1;
  var startY2 = endY1;
  var endX2 = startX2 - viewportWidth * 0;
  var endY2 = startY2 + viewportHeight * 0.6;
  ctx.beginPath();
  ctx.moveTo(startX2, startY2);
  ctx.lineTo(endX2, endY2);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();

  var startX2 = endX2;
  var startY2 = endY2;
  var endX2 = startX2 - viewportWidth * 0.8;
  var endY2 = startY2 + viewportHeight * 0;
  ctx.beginPath();
  ctx.moveTo(startX2, startY2);
  ctx.lineTo(endX2, endY2);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();

  var startX2 = endX2;
  var startY2 = endY2;
  var endX2 = startX2 - viewportWidth * 0;
  var endY2 = startY2 + viewportHeight * -0.5;
  ctx.beginPath();
  ctx.moveTo(startX2, startY2);
  ctx.lineTo(endX2, endY2);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();

  var startX2 = endX2;
  var startY2 = endY2;
  var endX2 = startX2 - viewportWidth * -0.7;
  var endY2 = startY2 + viewportHeight * -0;
  ctx.beginPath();
  ctx.moveTo(startX2, startY2);
  ctx.lineTo(endX2, endY2);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();
}
drawLines();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  drawLines();
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#navContainer a");
  const textContainers = document.querySelectorAll(".textContainer");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");

      // Hide all text containers
      textContainers.forEach((container) => {
        container.classList.remove("active");
      });

      // Show the target text container
      const targetContainer = document.getElementById(targetId);
      if (targetContainer) {
        targetContainer.classList.add("active");
      }
    });
  });

  // Optionally, show the first section by default
  if (textContainers.length > 0) {
    textContainers[0].classList.add("active");
  }
});
