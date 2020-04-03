function keyPressHandler(event) {
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;
    switch (event.keyCode) {
        case KEY_RIGHT: {
            flag[0] = true;
            break;
        }
        case KEY_LEFT: {
            flag[1] = true;
            break;
        }
    }
}
function speedGame(speed) {
    this.speed  = speed;
    switch(this.speed) {
        case 4 : {
            dx = -3;
            dy = 3;
            break;
        }
        case 9 : {
            dx = -3.5;
            dy = 3.5;
            break;
        }
        case 13 : {
            dx = -4;
            dy = 4;
            break;
        }
    }
}
function collisionDetection() {
    if(ball.x + ball.radian > canvas.width || ball.x < ball.radian) {
        dx = -dx;
    }
    if(ball.y < ball.radian) {
        dy = -dy;
    } else if (ball.y + ball.radian < canvas.height) {
        if (ball.x > bar.x && ball.x < bar.x + bar.barWidth) {
            if(ball.y + ball.radian > canvas.height - bar.barHeight) {
                ball.y = ball.y - bar.barHeight;
                score.point++;
                speedGame(score.point);
                dy = -dy;
            }
        }
    } else {
        score.maxScore();
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
}