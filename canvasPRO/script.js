var canvas = document.querySelector(`canvas`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext(`2d`);

// event listener for hover
var button = $('#button');
var isHovered = undefined;
button.hover(
    function() {
        // when it is hovered
         return isHovered = true;
        
    }, function() {
        // when its not
        return isHovered = false;
    }
);

// object of circles
function Bubbles(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;


    //draws a circle
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        c.fillStyle = "black";
        c.fill();
    }
    // updates position every time its called
    this.update = function() {
        if (this.x + this.radius  > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius  > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;


        // interactivity with hovered element
        if (isHovered == true && this.radius > 2) {
            this.radius -= 1;
        } else if ( isHovered == false 
                    && this.radius < radius
                    && this.x > radius
                    && this.x < canvas.width - radius
                    && this.y > radius
                    && this.y < canvas.height - radius) {
            this.radius += 1;
        }



        this.draw();
    }
    
}

// creates 'i' circles with random specs
var circleArray = [];
for ( var i = 0; i < 40; i++) {
    
    var radius = 40;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var dx = (Math.random() - 0.5) * 10; // velocity
    var dy = (Math.random() - 0.5) * 10; 
    

    circleArray.push(new Bubbles(x, y, dx, dy, radius));
}




// canvas function to update circles on frames. 
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();