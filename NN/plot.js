function XYPlotter(id) {
    //alert(id);
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

    // Grafica Función linear
    this.plotLine = function(x0,y0,x,y, color){
        this.ctx.moveTo(x0,y0);
        this.ctx.lineTo(x,y);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    // Transformar Función XY
    this.transformXY = function(){
        this.ctx.transform(1,0,0,-1,0,this.canvas.height);
    }

    // Graficar funcion de puntos
    this.plotPoints = function(n, xArr, yArr, color, radius = 1){
        let color1;
        for (let i = 0; i < n; i++){
            color1 = 'blue';
            if (color[i]) color1 = 'black';
            //console.log(`desired= ${color[i]}, color= ${color1}`);
            this.ctx.strokeStyle = color1;
            this.ctx.beginPath();
            this.ctx.arc(xArr[i], yArr[i], radius, 0, Math.PI * 2);
            this.ctx.stroke();
        }
    }

    this.cuadratic = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(75,40);
        this.ctx.bezierCurveTo(75,37,70,25,50,25);
        this.ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
        this.ctxt.bezierCurveTo(20,80,40,102,75,120);
        this.ctx.bezierCurveTo(110,102,130,80,130,62.5);
        this.ctx.bezierCurveTo(130,62.5,130,25,100,25);
        this.ctx.bezierCurveTo(85,25,75,37,75,40);
        this.ctx.fill();
    }
}