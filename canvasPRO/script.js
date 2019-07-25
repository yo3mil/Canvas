var canvas =document.querySelector(`canvas`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext(`2d`);

// ////////////////////////
// // arc // CIRCLES
// /*
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();
// */
// for (var i = 0; i < 50; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.strokeStyle = getRandomColor();
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }
var button = document.getElementById('button');
button.addEventListener('mouseover', function(){
    
});

function Bubbles(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.strokeStyle = 'red';
        c.fillStyle = "black";
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

        this.draw();
    }
    
}

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8; // velocity
// var dy = (Math.random() - 0.5) * 8; 
// var radius = 30;
var circleArray = [];
for ( var i = 0; i < 25; i++) {
    
    var radius = 20;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var dx = (Math.random() - 0.5) * 5; // velocity
    var dy = (Math.random() - 0.5) * 5; 
    

    circleArray.push(new Bubbles(x, y, dx, dy, radius));
}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();