function showPic(whichpic) {


	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	var text = whichpic.getAttribute("title");
	var intro_node = document.getElementById("introduction");
	intro_node.childNodes[0].nodeValue = text;

	
};

function showHidePic() {
	var hidePic = document.getElementById("hide");
	// console.log(hidePic);
	hidePic.style.display = "block";
}


// function showPic1(whichpic1) {

// 	var hidePic1 = document.getElementById("hide");
// 	hidePic1.style.display = "none";

// 	var source = whichpic1.getAttribute("href");
// 	var placeholder = document.getElementById("placeholder");
// 	placeholder.setAttribute("src", source);

// 	var text = whichpic1.getAttribute("title");
// 	var intro_node = document.getElementById("introduction");
// 	intro_node.childNodes[0].nodeValue = text;

	
// };

