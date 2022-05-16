function makeDivs(boxMaded){
    const box=document.getElementById("paintContainer");
    if(boxMaded==1){box.textContent='';}
    const pixelSize=document.getElementById("boxSlider").value;
    changeGrid(pixelSize,box);
    for (i=1;i<=pixelSize*pixelSize;i++){
        const makediv=document.createElement("div");
        makediv.id=i;
        makediv.className="point";
        box.appendChild(makediv);
    }

    followAndDraw();
    changeColor();
    
}
function changeGrid(pixelSize,box){
    box.style.gridTemplateColumns="repeat("+pixelSize+", 1fr)";
    box.style.gridTemplateRows="repeat("+pixelSize+", "+480/pixelSize+")";
    return box;
}

function followAndDraw(){

    const points=document.querySelectorAll(".point");
    points.forEach(point=> point.addEventListener("mouseover",function(e){
    const draw=document.getElementById(e.target.id);
    draw.style.background=brushColor.id;
    }));

}

function changeColor(){

    const colors=document.querySelectorAll(".color");
    colors.forEach(color=> color.addEventListener("click",function(e){
        brushColor=document.getElementById(e.target.id);
    }));

}

function showSliderVal(sliderValue){
    const showSlider=document.getElementById("showSliderVal");
    showSlider.innerText=sliderValue;
}

let onload=makeDivs()

let brushColor=black;







