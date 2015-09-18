
window.onload = function () {
    var colorPurple = "#cb3594";
    $('#canvas').mouseup(function(e){
        paint = false;

    $('#canvas').mouseleave(function(e){
        paint = false;
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();

    function redraw(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

      context.lineJoin = "round";
      context.lineWidth = 25;
      for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context.moveTo(clickX[i]-1, clickY[i]);
         }
         context.lineTo(clickX[i], clickY[i]);
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
