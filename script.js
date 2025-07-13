let linksite = document.querySelector("#link");

linksite.addEventListener("mouseover", mudarazul);
linksite.addEventListener("mouseout", mudarbranco);

function mudarazul(){
    linksite.style.color="blue";
}

function mudarbranco(){
    linksite.style.color="white";
}

function mostrarmensagem(){
    document.getElementById("mensagem").style.display ="block";
}
function fecharmensagem(){
    document.getElementById("mensagem").style.display ="none";
}