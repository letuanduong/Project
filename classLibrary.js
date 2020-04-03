let classGameBoard = function(width, height) {
    this.width = width;
    this.height = height;
    this.draw = function() {
        canvas.width = this.width;
        canvas.height = this.height;
    }
}
let classBall = function(x, y, radian) {
    this.x = x;
    this.y = y;
    this.radian = radian;
    this.draw = function() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radian, 0, 2*Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
    }
    this.methodMove = function(dx, dy) {
        this.dx = dx;
        this.dy = dy;
        this.x += this.dx;
        this.y += this.dy;
    }
}
let classBar = function(x, y, barWidth, barHeight) {
    const dx = 15;
    this.x = x;
    this.y = y;
    this.barWidth = barWidth;
    this.barHeight = barHeight;
    this.moveRight = function() {
        this.x += dx;
    }
    this.moveLeft = function() {
        this.x -= dx;
    }
    this.draw = function() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.barWidth, this.barHeight);
    }
}
let Score = function(point) {
    this.point = point;
    this.maxScore = function () {
        if(typeof(Storage) === "undefined") {
            localStorage.setItem('score', 0)
        } else if (localStorage.getItem('score') < Number(this.point)) {
            localStorage.setItem('score', Number(this.point));
        }
        document.getElementById('result').innerHTML = localStorage.getItem('score');
    }
}