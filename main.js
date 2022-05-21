let canvas = /** @type {HTMLCanvasElement} */  (document.getElementById('canvas'));
let ctx = canvas.getContext('2d');

let w = canvas.width;
let h = canvas.height;
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(70,180);
ctx.lineTo(70,340);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(70,180);
ctx.quadraticCurveTo(75,195,100,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200,200);
ctx.bezierCurveTo(300,50,450,70,550,195);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(550,195);
ctx.quadraticCurveTo(565,200,550,195);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(555,198);
ctx.quadraticCurveTo(698,200,700,201);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(700,201);
ctx.quadraticCurveTo(750,250,740,340);
ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.moveTo(70,340);
ctx.lineTo(740,340);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 335, 55, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(590, 335, 55, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200,280);
ctx.lineTo(200,390);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(150,310);
ctx.lineTo(250,363);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(250,310);
ctx.lineTo(150,363);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(540,310);
ctx.lineTo(640,363);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(640,310);
ctx.lineTo(540,363);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(590,280);
ctx.lineTo(590,390);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(560,200);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(300,110);
ctx.lineTo(300,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(430,105);
ctx.lineTo(430,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(260,200);
ctx.lineTo(260,340);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(520,200);
ctx.lineTo(520,340);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(385,200);
ctx.lineTo(385,340);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(295,220);
ctx.lineTo(330,220);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(435,220);
ctx.lineTo(470,220);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(435,220);
ctx.quadraticCurveTo(440,238,470,220);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(295,220);
ctx.quadraticCurveTo(300,238,330,220);
ctx.stroke();
ctx.closePath();
