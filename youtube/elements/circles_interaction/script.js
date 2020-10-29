class CirclesIntersection{
    constructor() {
        this.circleSpeed = .3;
        this.circleStrokeColor = `white`;
        this.intersectionFillColor = `#666677`;
        this.intersectionStrokeColor = `white`;
    }
    init() {
        this.createCanvas();
        this.setCanvasSize();
        this.createCircles();
        this.updateAnimation();

        window.addEventListener(`resize`, () => {
            this.setCanvasSize();
            this.createCircles();
        })
    }
    createCanvas(){
        this.cnv = document.createElement('canvas')
        this.cnv.style.background = this.getRandomColor();
        this.ctx = this.cnv.getContext('2d');
        document.body.appendChild(this.cnv);

    }
    getRandomColor(alpha = 1){
        return `hsla(${Math.random() * 360}, 70%, 50%, ${alpha})`
    }
    setCanvasSize(){
        this.w = this.cnv.width = innerWidth;
        this.h = this.cnv.height = innerHeight;
    }
    createCircles() {
        let smallerSide = Math.min(this.w, this.h);
        let biggerSide = Math.max(this.w, this.h);
        let maxRadius = smallerSide / 3;
        let minRadius = maxRadius / 2;
        let circlesNum = 3 * (2 - smallerSide / biggerSide);
        this.intersectionDotRadius = minRadius / 10;

        this.circles = [];
        for (let i = 0; i < circlesNum; i++) {
            let randomAngle = Math.random() * (Math.PI * 2);
            let newCircle = {
                color : this.getRandomColor(.5),
                radius : this.getRandomFromRange(minRadius, maxRadius),
                xPos : this.getRandomFromRange(maxRadius, this.w - maxRadius),
                yPos : this.getRandomFromRange(maxRadius, this.h - maxRadius),
                velocityX : Math.cos(randomAngle) * this.circleSpeed,
                velocityY : Math.sin(randomAngle) * this.circleSpeed,
            }
            this.circles.push(newCircle);
        }
    }

    getRandomFromRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    updateCircle(){

        this.ctx.globalCompositeOperation = `lighter`;
        this.circles.forEach(circle => {

            if (circle.xPos + circle.radius > this.w && circle.velocityX > 0
                || circle.xPos < circle.radius && circle.velocityX < 0){
                circle.velocityX = -circle.velocityX;
            }
            if (circle.yPos + circle.radius > this.h && circle.velocityY  > 0
                || circle.yPos < circle.radius && circle.velocityY < 0){
                circle.velocityY = -circle.velocityY;
            }
            circle.xPos += circle.velocityX;
            circle.yPos += circle.velocityY;

            this.drawCircle(circle.xPos, circle.yPos, circle.radius,
                circle.color, this.circleStrokeColor);
        })
        this.ctx.globalCompositeOperation = `normal`;
    }

    drawCircle(x, y, radius, fillColor, strokeColor){
        this.ctx.fillStyle = fillColor;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    getIntersection(){
        for (let i = 0; i < this.circles.length; i++){
            let circleA = this.circles[i];
            for (let j = i + 1; j < this.circles.length; j++) {
                let circleB = this.circles[j];

                let dx = circleB.xPos - circleA.xPos;
                let dy = circleB.yPos - circleA.yPos;

                let distance = Math.hypot(dx, dy);

                if (distance <= circleA.radius + circleB.radius){
                    this.drawIntersection(circleA.radius, circleB.radius,
                        distance, dx, dy, circleA);
                }
            }
        }
    }

    drawIntersection(sideA, sideB, sideC, dx, dy, circle){
        let aSquare = Math.pow(sideA, 2);
        let bSquare = Math.pow(sideB, 2);
        let cSquare = Math.pow(sideC, 2);

        let cosineA = (aSquare - bSquare + cSquare) / (sideA * sideC * 2);
        let angleOfRotation = Math.acos(cosineA);
        let angleCorrection = Math.atan2(dy, dx);

        let pointOneX = circle.xPos +
            Math.cos(angleCorrection - angleOfRotation) * sideA;
        let pointOneY = circle.yPos +
            Math.sin(angleCorrection - angleOfRotation) * sideA;

        let pointTwoX = circle.xPos +
            Math.cos(angleCorrection + angleOfRotation) * sideA;
        let pointOTwoY = circle.yPos +
            Math.sin(angleCorrection + angleOfRotation) * sideA;

        this.drawCircle(pointOneX, pointOneY,
            this.intersectionDotRadius,
            this.intersectionFillColor,
            this.intersectionStrokeColor);

        this.drawCircle(pointTwoX, pointOTwoY,
            this.intersectionDotRadius,
            this.intersectionFillColor,
            this.intersectionStrokeColor);
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.w, this.h)
    }
    updateAnimation() {
        this.clearCanvas();
        this.updateCircle();
        this.getIntersection();

        window.requestAnimationFrame(()=>{
            this.updateAnimation();
        })
    }
}

window.onload = () => {
    new CirclesIntersection().init();
}