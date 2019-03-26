window.onload = function(){
const colors = ['#50E0C3','#51cad8','#C9A2F4'];
var blobs = document.querySelectorAll("#background path");

blobs.forEach(blob => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
    
}