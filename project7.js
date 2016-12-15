//jordan z's code
var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;

// utility function code by jordan z
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

//code by Jordan Z Step 2: drawSquare and drawCircle functions code by jordan z

function drawSquare(x, y, size, color) {
  var newcircle = document.createElementNS(namespace,"rect");
  newcircle.setAttribute("x", x);
  newcircle.setAttribute("y", y);
  newcircle.setAttribute("width",size);
  newcircle.setAttribute("height",size);
  newcircle.setAttribute("fill",color);
  screen.appendChild(newcircle);
  }

  function drawCircle(x, y, radius, color) {
    var newcircle = document.createElementNS(namespace,"circle");
  newcircle.setAttribute("cx", x);
  newcircle.setAttribute("cy", y);
  newcircle.setAttribute("r",radius);
  newcircle.setAttribute("fill",color);
  screen.appendChild(newcircle);
    }

// Step 3: Event listeners code by jordan z

document.addEventListener("mousedown", function(e) {
  drawing = true;
})

document.addEventListener("mouseup", function(e) {
drawing = false;
})

document.addEventListener("mousemove", function(e) {
var pt = transformPoint(e)

var selectShape = document.getElementById("shapeSelect").value
var selectColor = document.getElementById("colorSelect").value  //JORDAN Z'S CODE
var selectSize = document.getElementById("sizeSelect").value

if (drawing == true) {

if (selectShape == "square"){
  drawSquare(pt.x, pt.y, selectSize, selectColor)
}

else if (selectShape == "circle"){
  drawCircle(pt.x, pt.y, selectSize, selectColor)
}

}

})
//made by Jordan Z

























//jordan z's code watermark













//code by Jordan Z period 4
