let cont = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImg();
}, 5000)

function proxImg(){
    cont++;
    if(cont>25){
        cont=1;
    }
    document.getElementById("radio"+cont).checked = true;
}