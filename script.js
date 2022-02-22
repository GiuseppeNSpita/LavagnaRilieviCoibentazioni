
        /* VARIABILI */
        var pennello, colore, spessore;
/* COLORI

1/2" - aqua	#00ffff
3/4" - blue	#0000ff
1" - orange	#ffa500
2" - fuchsia	#ff00ff
3" - green	#008000
4" - blue	#0000ff
6" - lime	#00ff00
8" - red	#ff0000
10" - yellow	#ffff00
12" - pink	#ffc0cb
14" - violet	#ee82ee
16" - 
18" - 
20" - 
24" - 
black	#000000
*/

//1/2" - 
let color_aqua	= "rgba(0,255,255, 0.3)";
//3/4" - 
let color_blue	= "rgba(0,0,255, 0.3)";
//1" - 
let color_orange	= "rgba(255,165,0, 0.3)";
//2" - 
let color_fuchsia	= "#ff00ff";
//3" - 
let color_green	= "#008000";
//4" - 
//let color_blue	= "#0000ff";
//6" - 
let color_lime	= "#00ff00";
//8" - 
let color_red	= "#ff0000";
//10" - 
let color_yellow	= "#ffff00";
//12" - 
let color_pink	= "#ffc0cb";
//14" - 
let color_violet	= "#ee82ee";


        let cord_1 = { x:0 , y:0};
        let cord_2 = { x:0 , y:0};

        let cord_griglia = { x:0 , y:0};

        let width_canvas = 700;       
        let height_canvas = 700;
        let quadrato_griglia = 10;
        
        let cordtext_x = 0;
        let cordtext_y = 0;

        let flag = 0;
        let paint = false;

        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');

        /* FUNZIONI */
        function Reset()
        {
          ctx.canvas.width = width_canvas;
          ctx.canvas.height = height_canvas;
          Stop();
        }

        function AggiornaTools()
        {
          pennello = document.getElementById("forma").value;
          colore = document.getElementById("colore").value;
          spessore = document.getElementById("spessore").value;
        }

        function Stop()
        {
          paint = false;
          flag = 0;       
        }    
        
        function Posizione_1(event)
        {  
            paint = true;        
            if(event.clientX - canvas.offsetLeft > -1 )
            {
                cord_1.x = parseInt(Math.round((event.clientX - canvas.offsetLeft)/quadrato_griglia)*quadrato_griglia);
                cord_1.y = parseInt(Math.round((event.clientY - canvas.offsetTop)/quadrato_griglia)*quadrato_griglia);
                flag++;
            }
        }        

        function Move(event)
        {      
          if (!paint) return;

          ctx.beginPath();
          ctx.lineWidth = spessore;
          ctx.lineCap = pennello;
          //ctx.strokeStyle = colore;
          
          if(flag == 1)
          {
            cord_2.x = cord_1.x;
            cord_2.y = cord_1.y;
          }

          ctx.moveTo(cord_2.x, cord_2.y);
                
          if(event.clientX - canvas.offsetLeft > -1 )
          {//ctx.strokeStyle = "rgba(0,0,120,0.3)";
            
            cord_2.x = parseInt(Math.round((event.clientX - canvas.offsetLeft)/quadrato_griglia)*quadrato_griglia);
            cord_2.y = parseInt(Math.round((event.clientY - canvas.offsetTop)/quadrato_griglia)*quadrato_griglia);
            ctx.lineTo(cord_2.x, cord_2.y);
            ctx.stroke();
          } 
          
          /* ESEMPIO  DA CANCELLARE --> DA REIMPOSTARE ANCHE CTX.STROKESTYLE PER L'OPACITA' */
          ctx.moveTo(cord_2.x, cord_2.y);
                
          if(event.clientX - canvas.offsetLeft > -1 )
          {ctx.strokeStyle = "rgba(0,0,0,1)";
          ctx.lineWidth = 1;
            cord_2.x = parseInt(Math.round((event.clientX - canvas.offsetLeft)/quadrato_griglia)*quadrato_griglia);
            cord_2.y = parseInt(Math.round((event.clientY - canvas.offsetTop)/quadrato_griglia)*quadrato_griglia);
            ctx.lineTo(cord_2.x, cord_2.y);
            ctx.stroke();
            ctx.strokeStyle = colore;
          } 
        }

        function Griglia(event)
        {
            for(let i = 0; i <= width_canvas; i = i+10)
            {
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, width_canvas);
                ctx.stroke();
            }

            for(let i = 0; i <= height_canvas; i = i+10)
            {
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(height_canvas, i);
                ctx.stroke();
            }
        }
       
function Color_Aqua()
{
  ctx.strokeStyle = "rgba(0,255,255, 0.3)";
  colore = "rgba(0,255,255, 0.3)";
  //ctx.strokeStyle = "rgba(0,0,120,0.3)";
}

function Color_Blue()
{
  ctx.strokeStyle = color_blue;
  colore = color_blue;
}

function Color_Orange()
{
  ctx.strokeStyle = color_orange;
  colore = color_orange;
}

        //Inizializza

        window.addEventListener('load', ()=>{
          Reset();
          AggiornaTools();
          document.addEventListener('mousedown', Posizione_1);
          document.addEventListener('mouseup', Move);
          document.addEventListener('dbclick', Stop);
        //document.addEventListener('onmousemove', Zoom);
          window.addEventListener('reset', Reset);
        });