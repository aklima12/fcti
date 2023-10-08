window. addEventListener('scroll',function(){
	var navbarsticky=document.querySelector('.menubar');
	navbarsticky.classList.toggle("sticky",window.scrollY>0);
});