const left = document.getElementById("left");
const handleMove = e =>{
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;

}
document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);