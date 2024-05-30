 myVar = setTimeout(showPage, 3000);
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function showPage() {
  document.getElementById("progress").style.display = "none";
  document.getElementById("content").style.display = "block";
}
