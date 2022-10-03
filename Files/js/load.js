$(function () {
	$.each(FILES, function (index, val) {//load.lib.js
		$(`#${FILES[index].files.split('.')[0]}`).load(`./Files/html/${FILES[index].group}/${FILES[index].files}`);
		// alert(`./Files/html/${FILES[index].group}/${FILES[index].files}`);

	});
});

function ReadCss(Name, group) {
	let create_link = document.createElement("link");

	$(create_link).attr({ rel: 'stylesheet', href: `./Files/css/${group}/css/${Name}.css`, id: 'read_css_person' });
	$('head').append(create_link);
	// alert(Name);
};

function RemoveClass(pre_css) {
	$(pre_css).remove();
}