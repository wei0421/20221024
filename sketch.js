function setup() {
  //https://youtu.be/PF_IdMQiBgM
createCanvas(windowWidth, windowHeight); //產生一個畫布
background(0); //背景色
}

function draw() {
  noFill() //形狀不填滿顏色
  strokeWeight(1) //邊框粗細
  for(var i=0;i <windowWidth/50;i++) {
  for(var j=0;j <windowHeight/50;j++) {
   stroke(255,0,0)
   ellipse(25+(i*50),25+(j*50),mouseX/5)
   stroke(255,255,255)
   rect(0+(i*50),0+(j*50),mouseX/5)
   stroke(0,0,255) 
   ellipse(50+(i*50),50+(j*50),mouseX/5)
    }
  }
}
