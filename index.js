const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
hamburger.onclick = () =>{
    hamburger.style.display = "none";
    close.style.display = "block";
    nav.style.display = "block";
    
  };
  
  close.onclick=()=>{
    hamburger.style.display = "block";
    close.style.display = "none";
    nav.style.display = "none";
  }