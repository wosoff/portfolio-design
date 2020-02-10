function runLinear(processing) {
  let x1Is0 
  let x2Is1000 
  let y1;

  
  processing.setup = function setup() {
      processing.createCanvas(1000, 600);

      
      processing.strokeWeight(1)
     

      // stroke color yellow
      processing.stroke(179, 179, 179);


      x1Is0 = 0
      // 300
      y1 = processing.height / 2;
      
      x2Is1000 = processing.width
  }

  processing.draw = function draw() {
      processing.background(50, 50, 50);


    
      processing.line(x1Is0, y1 + 100, x2Is1000, y1 + 100)

      processing.line(x1Is0, y1 + 200, x2Is1000, y1 + 200)

      processing.line(x1Is0, y1 + 300, x2Is1000, y1 + 300)

      processing.line(x1Is0, y1 + 400, x2Is1000, y1 + 400)

      processing.line(x1Is0, y1 + 500, x2Is1000, y1 + 500)

      processing.line(x1Is0, y1 + 600, x2Is1000, y1 + 600)

      processing.line(x1Is0, y1 + 700, x2Is1000, y1 + 700)

      processing.line(x1Is0, y1 + 800, x2Is1000, y1 + 800)
      
      y1 = y1 - 0.5;
      
      if (y1 < 0) {
          y1 = processing.height;
      }
  }

}

let myP5 = new p5(runLinear)
