const btn=document.querySelectorAll("button");

for(let i of btn){
    i.addEventListener("click",colorize)  
}

function colorize(){
        const r=Math.floor(Math.random()*256);
        const g=Math.floor(Math.random()*256);
        const b=Math.floor(Math.random()*256);
        const clr=`rgb(${r},${g},${b})`
        this.style.backgroundColor=clr;
        this.innerText=clr;
}