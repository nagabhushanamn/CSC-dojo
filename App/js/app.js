/**
 * http://usejsdoc.org/
 */


// find DOM elements and bind event-listeners
//
//document.addEventListener('DOMContentLoaded', function(e) {
//	
//	console.log('DOM Ready..');
//
//	var box=document.querySelector('.jumbotron');
//	var hideBtn=document.querySelector('.btn-danger');
//	var showBtn=document.querySelector('.btn-success');
//
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display='none';
//	});
//	showBtn.addEventListener('click', function(e) {
//		box.style.display='block';
//	});
//	
//});
//
//window.onload=function(){
//	console.log('Window onload..');
//};

//----------------------------------------



$(document).ready(function(){
	
	var box=$('.jumbotron');
	$('.btn-danger').click(function(){
		box.hide();
	});
	$('.btn-success').click(function(){
		box.show();
	});
	
});

//----------------------------------------







