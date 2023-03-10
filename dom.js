//var item=document.getElementsByClassName('list-group-item');
//item[1].style.backgroundColor="green";
//item[2].style.display='none';
//var titles=document.querySelector('.list-group-item:nth-child(2)');
//titles.style.backgroundColor="green";
var selec=document.querySelectorAll('li:nth-child(odd)');
for(var j=0;j<selec.length;j++){
    selec[j].style.backgroundColor="green";
}
