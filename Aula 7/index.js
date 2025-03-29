let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'red';
ctx.fillRect(350,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'yellow';
ctx.fillRect(0,360,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'yellow';
ctx.fillRect(0,320,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'yellow';
ctx.fillRect(40,360,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'black';
ctx.fillRect(320,360,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'black';
ctx.fillRect(360,320,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'black';
ctx.fillRect(360,360,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'aqua';
ctx.fillRect(0,160,40,80);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'aqua';
ctx.fillRect(360,175,40,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(400,0);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.moveTo(200,200);
ctx.lineTo(200,350);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'red';
ctx.fillRect(154,201,45,45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,80,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,100,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,100,1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(200,400,55,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,400,75,1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,400,105,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,290,20,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300,290,20,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(200,155,20,2*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",200,70);
ctx.closePath();



