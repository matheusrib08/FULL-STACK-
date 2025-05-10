let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'gray';
ctx.fillRect(0,220,300,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.arc(220,80,40,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'brown';
ctx.fillRect(120,150,60,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'brown';
ctx.fillRect(40,185,15,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'brown';
ctx.fillRect(250,230,15,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(48,180,20,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(258,220,20,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'blue';
ctx.fillRect(155,162,20,20);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'blue';
ctx.fillRect(126,162,20,20);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'black';
ctx.fillRect(143,183,16,37);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'orange';
ctx.lineTo(150,120);
ctx.lineTo(120,150);
ctx.lineTo(180,150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.arc(0,230,40,1.5*Math.PI,0.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'blue';
ctx.fillRect(0,230,40,80);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'blue';
ctx.fillRect(30,260,80,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.arc(100,300,40,1.5*Math.PI,0.5*Math.PI);
ctx.fill();
ctx.closePath();