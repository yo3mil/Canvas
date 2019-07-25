var canvas = document.querySelector(`canvas`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;// 

var c = canvas.getContext(`2d`);


// // x, y, width, height
// c.fillStyle = 'rgba(255, 0, 0, 0.1)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 300, 150, 150);
/* Color Theme Swatches in Hex */

// /////////////////////////////
// //lines

// c.beginPath();

// // x, y
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "blue";
// c.stroke();


// ////////////////////////
// // arc // CIRCLES
// /*
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();
// */
// // random colour generator
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// for (var i = 0; i < 50; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.strokeStyle = getRandomColor();
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }
window.addEventListener('mousemove', function(){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x);
});

var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 40;
//var minRadius = 2;

var colorArray = ['#ffaa33', '#99ffaaa', '#00ff00', '#4411aa', '#ff1100' ];
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius  > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius  > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;


        // interactivity

        if(mouse.x - this.x < 50 
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y > -50
            && this.radius < maxRadius) {
            this.radius += 1;
        } else if(this.radius > this.minRadius){
            this.radius -= 1;
        }


        this.draw();
    }
    
}

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8; // velocity
// var dy = (Math.random() - 0.5) * 8; 
// var radius = 30;
var circleArray = [];
for ( var i = 0; i < 1500; i++) {
    
    var radius = Math.random() * 6 + 1;
    var x = Math.random() * (innerWidth - radius * 2)  + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2; // velocity
    var dy = (Math.random() - 0.5) * 2; 
    

    circleArray.push(new Circle(x, y, dx, dy, radius));
}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();