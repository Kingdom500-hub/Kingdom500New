const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const flakes = [];

const COUNT = 450;

for(let i=0;i<COUNT;i++){

    flakes.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*4+1,

        speed:Math.random()*2+0.3,

        drift:(Math.random()-0.5)*1.5,

        alpha:Math.random()*0.7+0.2,

        angle:Math.random()*Math.PI*2,

        spin:(Math.random()-0.5)*0.02

    });

}
