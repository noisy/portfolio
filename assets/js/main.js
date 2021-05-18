"use strict";

/* ======= Sliding menu underline ====== */
// Menu has active item

const navigation = document.querySelector("#navigation");
const slideLine = document.querySelector("#slide-line");
const navItems = document.querySelectorAll("#navigation li");
let currentItem = document.querySelector("#navigation .active");

window.onload=function() {
	initPosition();
}

window.resize=function() {
	initPosition();
}

// Underline transition
function initPosition() {
	
	if (currentItem) {
		
		const width = currentItem.getBoundingClientRect().width;
		const left = currentItem.offsetLeft;
		
		//console.log(`${width}px`);
		//console.log(left);
		
		slideLine.style.width = `${width}px`;
		slideLine.style.left = `${left}px`;
		
	} else {
		slideLine.style.width = 0;
	}
}


navItems.forEach((navItem) => {
	// Hover on
    navItem.addEventListener('mouseenter', () => {
	    
	    const width = navItem.getBoundingClientRect().width;
		const left = navItem.offsetLeft;
		
		slideLine.style.width = `${width}px`;
		slideLine.style.left = `${left}px`;

    
    });
    // Go back to current
    navItem.addEventListener('mouseleave', () => {
	    
	    initPosition();
    
    });
});
	

/* ==== Vanilla JS Back To Top Widget ====== */
/* Ref: https://github.com/vfeskov/vanilla-back-to-top */
addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});


