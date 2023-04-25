//JS는 HTML에 연결되어 있고, 브라우저에서 JS는 강력하다.
//find element, add event listener, listen to event, and react.
const h1 = document.querySelector(".hello h1");
/*{
	console.dir(h1); //on~ -> event.

	function handleTitleClick(){
		h1.style.color = "blue"
	}

	function handleMouseEnter(){
		h1.innerText = "Mouse is here!";
	}

	function handleMouseLeave(){
		h1.innerText = "Mouse is gone!";
	}

	function handleWindowResize(){
		document.body.style.backgroundColor = "tomato";
	}

	function handleWindowCopy(){
		alert("copier!");
	}

	function handleWindowOffline(){
		alert("SOS no WIFI!");
	}

	function handleWindowOnline(){
		alert("everything is alright!");
	}

	h1.addEventListener("click", handleTitleClick);
	h1.addEventListener("mouseenter", handleMouseEnter);
	h1.addEventListener("mouseleave", handleMouseLeave);

	window.addEventListener("resize", handleWindowResize);
	window.addEventListener("copy", handleWindowCopy);
	window.addEventListener("offline", handleWindowOffline);
	window.addEventListener("online", handleWindowOnline);

	function handleTitleClick(){
	const currentColor = h1.style.color;
	let newColor;
	if (currentColor === "blue"){
		newColor = "tomato";
	} else {
		newColor = "blue";
	}
	h1.style.color = newColor;
}
}*/

function handleTitleClick(){
	h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
