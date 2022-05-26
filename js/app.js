window.onload = () => {
    setTimeout(() => {
        document.querySelector(".popup").style.marginTop = "0px";
    }, 1000);
}
document.querySelector(".close").onclick = () => {
    document.querySelector(".popup").style = "-300em";
}

window.onclick = (e) =>{
    if(e.target == document.querySelector(".popup")){
        document.querySelector(".popup").style = "-300em";
    }
}

document.querySelector(".link").onclick = () => {
    setTimeout(() => {

        document.querySelector(".popup").style = "-300em";
    }, 5000);
    
}