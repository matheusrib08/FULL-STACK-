let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let yuri = {
    x: 0,
    y: 0,
    raio: 30,
    img: new Image(),
    desenha: function(){
        this.img.src = 'yuri.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x- this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}
function animacao(){
    ctx.clearRect(0,0,300,300)
    yuri.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    yuri.x = x_mouse;
    yuri.y = y_mouse;

    if (x_mouse >= 0 && x_mouse <= canvas.width && y_mouse >= 0 && y_mouse <= canvas.height){
            yuri.x = Math.max(yuri.raio, Math.min(x_mouse, canvas.width - yuri.raio));
        yuri.y = Math.max(yuri.raio, Math.min(y_mouse, canvas.height - yuri.raio));
    } else {
        
        }

    

})
 

