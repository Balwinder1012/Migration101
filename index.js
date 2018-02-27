smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        console.log(scrollContainer.scrollTop);
		if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
		
		
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY-104, 0);
}

var mItemsN = document.getElementsByClassName("national");

for(var i=0;i<mItemsN.length;i++){
	console.log(mItemsN[i]);
	mItemsN[i].onmouseover = function(evt){
		document.getElementById('nat').style.backgroundColor="blue";
	};
	mItemsN[i].onmouseout = function(evt){
		document.getElementById('nat').style.backgroundColor="";
	};
	
	
}

var mItemsI = document.getElementsByClassName("international");

for(var i=0;i<mItemsI.length;i++){
	console.log(mItemsI[i]);
	mItemsI[i].onmouseover = function(evt){
		document.getElementById('inat').style.backgroundColor="blue";
	};
	mItemsI[i].onmouseout = function(evt){
		document.getElementById('inat').style.backgroundColor="";
	};
	
	
}



var mItems = document.getElementsByClassName("menuItemsH");

for(var i=0;i<mItems.length;i++){
	console.log(mItems[i]);
	mItems[i].onmouseover = function(evt){
		evt.target.style.backgroundColor="blue";
	};
	mItems[i].onmouseout = function(evt){
		evt.target.style.backgroundColor="";
	};
	
	
}
