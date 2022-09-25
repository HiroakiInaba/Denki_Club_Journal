$(function () {
	$.each(FILES,function(index,val){//load.lib.js
		$(`#${FILES[index].files.split('.')[0]}`).load(`./Files/html/${FILES[index].group}/${FILES[index].files}`);
		// alert(`./Files/html/${FILES[index].group}/${FILES[index].files}`);
	});
});
