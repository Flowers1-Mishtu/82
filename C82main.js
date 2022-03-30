canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="blue";
Linewidth=1;

var mouseevent="null";
var lastX, lastY;
canvas.addEventListener("mousedown", mymousedown );
function mymousedown(e){
    color = document.getElementById("color").value;
    Linewidth = document.getElementById("Linewidth").value;
    mouseevent="mymousedown";

}

canvas.addEventListener("mousemove", mymousemove );
function mymousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    console.log(currentX, currentY);

    if(mouseevent=="mymousedown"){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=Linewidth;
ctx.moveTo(lastX, lastY);
ctx.lineTo(currentX, currentY);
ctx.stroke();

}
lastX=currentX;
lastY=currentY;
}
canvas.addEventListener("mouseup", mymouseup );
function mymouseup(e){
    
    mouseevent="mymouseup";

}
canvas.addEventListener("mouseleave", mymouseleave );
function mymouseleave(e){
    
    mouseevent="mymouseleave";

}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }


