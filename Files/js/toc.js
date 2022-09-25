window.addEventListener('DOMContentLoaded', function () {
	"use strict";
	let Data = DATA;//load.lib.js
	let t = document.getElementsByClassName("table_");
	$.each(Data, function (index, val) {//三重連想配列の一番外側
		$.each(Data[index], function (index_, val_) {//真ん中。以降は"val_中身"で取得可
			let tb_ = document.createElement("tr");
			tb_.setAttribute("id", `index${index}_${index_}`);
			tb_.innerHTML = '<td class="contents_table">' +
				`${val_.content}` +
				'</td>' +
				'<td class="page_table">' +
				`${val_.pages}` +
				'</td>' +
				'<td class="author_table">' +
				`${val_.author}` +
				'</td>';
			t[index].appendChild(tb_);//tはクラス名でとっているので配列。上(Data)に示したグループ名とインデックスに対応
		});
	});
});