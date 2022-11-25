var frame_size = 50;

var enc = new Image();
enc.src = "./smileyenc.png";

var dec = new Image();
dec.src = "./iqckey.png";



function mouse_position(e) {
  const canvas = document.getElementById("mycanvas");
  const context = canvas.getContext("2d");

  var offsets = document.getElementById("mycanvas").getBoundingClientRect();
  var top = offsets.top;
  var left = offsets.left;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(enc, 0, 0);
  context.drawImage(
    dec,
    e.clientX - frame_size - left,
    e.clientY - frame_size - top,
    frame_size * 2,
    frame_size * 2,
    e.clientX - frame_size - left,
    e.clientY - frame_size - top,
    frame_size * 2,
    frame_size * 2
  );

}
