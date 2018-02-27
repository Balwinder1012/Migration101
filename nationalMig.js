var mItems = document.getElementsByClassName("menuItems");


var counterNodes=1;
giveIdToNodes();
function giveIdToNodes(){
	var listNodes = document.getElementById('myUL').children;
	for(var i=0;i<listNodes.length;i++){
		listNodes[i].setAttribute("id",counterNodes);
		counterNodes++;
	}
}

/*
if(false)
for(var i=0;i<mItems.length;i++){
	console.log(mItems[i]);
	mItems[i].onmouseover = function(evt){
		evt.target.style.backgroundColor="blue";
	};
	mItems[i].onmouseout = function(evt){
		evt.target.style.backgroundColor="";
	};
	
	
}

if(false){
var myNodelist = document.getElementsByClassName("addedList");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.style.marginLeft="50px";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
}


if(false)
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].style.textAlign="right";
close[i].style.float="right";
  close[i].onclick = function() {
	unCheck(close[i].parentElement.id);
	deleteElem(this.parentElement);
 
  }
}
*/
function alignCloseButton(){
	
	var close = document.getElementsByClassName("close");

	for (var i = 0; i < close.length; i++) {
		close[i].style.float="right";
	}
}
function unCheck(idN){
	idN = idN/100;

	document.getElementById(idN+"").classList.toggle('checked');
	
}
function deleteElem(node){
  
	node.parentNode.removeChild(node);
    
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
	if(ev.target.className=="checked")
		newElement(ev.target.innerHTML,ev.target.id);
	else{
		var idN = ev.target.id;
		deleteElem(document.getElementById(idN*100));
	
	}

  }
}, false);

function newElement(factor,idN) {
  var li = document.createElement("li");
  var inputValue = factor;
  li.innerHTML = inputValue;
	li.setAttribute("id",idN*100);

    document.getElementById("addedUL").appendChild(li);
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  span.onclick=function(evt){
	 
	  unCheck(evt.target.parentElement.id);
	  deleteElem(evt.target.parentElement);
  }

  alignCloseButton();
}