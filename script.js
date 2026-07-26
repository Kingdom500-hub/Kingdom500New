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
function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    flakes.forEach(flake=>{

        ctx.beginPath();

        ctx.fillStyle="rgba(255,255,255,"+flake.alpha+")";

        ctx.arc(

            flake.x,

            flake.y,

            flake.r,

            0,

            Math.PI*2

        );

        ctx.fill();

    });

}
function update(){

    flakes.forEach(flake=>{

        flake.angle+=flake.spin;

        flake.y+=flake.speed;

        flake.x+=flake.drift;

        flake.x+=Math.sin(flake.angle)*0.4;

        if(flake.y>canvas.height+20){

            flake.y=-20;

            flake.x=Math.random()*canvas.width;

        }

        if(flake.x<-20){

            flake.x=canvas.width+20;

        }

        if(flake.x>canvas.width+20){

            flake.x=-20;

        }

    });

}
function animate(){

    draw();

    update();

    requestAnimationFrame(animate);

}

animate();
