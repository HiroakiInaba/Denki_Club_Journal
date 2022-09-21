"use strict"

let Data = [
	{
		content: "Webコンポーネントについて",
		pages: "3 ~ 4",
		author: "稲葉 浩晃"
	},{
		content: "半年間活動して気づいたこと",
		pages: 5,
		author: "誰かさん"
	},{
		content: "猫と鳥はどちらが可愛いか",
		pages: 6,
		author: "誰かさん"
	},{
		content: "普段の趣味",
		pages: 7,
		author: "誰かさん"
	},{
		content: "Superconductivity",
		pages: "8 ~ 10",
		author: "誰かさん"
	},{
		content: "Choked with passion is no chimera; for passion often kills the unfortunate possessor of an irritable temper, sometimes suddenly. Care and over-anxiety sweep away thousands annually.",
		pages: 11,
		author: "???"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	},{
		content: "Webコンポーネントについて",
		pages: 3,
		author: "稲葉 浩晃"
	}
];

let fun = (players) => {
	for (let i = 0 ;players[i];i++) {
		let abe = document.createElement("tr");
		abe.setAttribute("id", `index${i}`);
		abe.innerHTML = '<td class="contents_table">' +
			`${players[i].content}` +
			'</td>' +
			'<td class="page_table">' +
			`${players[i].pages}` +
			'</td>'+
			'<td class="author_table">' +
			`${players[i].author}` +
			'</td>';

		let t = document.getElementById("table_");
		t.appendChild(abe);
	}
};

fun(Data);

