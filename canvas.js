
window.onload = function () {
    var colorPurple = "#cb3594";
    $('#canvas').mouseup(function(e){
        paint = false;
         context.closePath();
         context.strokeStyle = clickColor[i];
         context.stroke();
      }

      strokeInfo = {
        colors: clickColor,
        lineJoin: context.lineJoin,
        lineWidth: context.lineWidth,
        clickDrag: clickDrag}

      message = JSON.stringify({type:"draw", body:{strokeInfo: strokeInfo, Xcoords: clickX, Ycoords: clickY}});
      // console.log(message);
      // sendMessage(message);
    }
}
