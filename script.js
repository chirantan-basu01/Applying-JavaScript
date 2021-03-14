var box=document.getElementById('div1');
var clickCount=document.getElementById('click-count');

var count=0;

box.addEventListener('click',function(){
	count++;
	console.log(count);
	clickCount.innerText=count;
});