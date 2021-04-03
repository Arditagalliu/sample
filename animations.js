function showwelcome(){
    var elems = document.getElementsByClassName("welcome2");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
    elems = document.getElementsByClassName("welcome1");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
    }
}

function hidewelcome(){
    var elems = document.getElementsByClassName("welcome2");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
    }
    elems = document.getElementsByClassName("welcome1");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
}