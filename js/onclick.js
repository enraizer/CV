function myFunction() {
	document.getElementById("menufullscreen").innerHTML = "<img id='imgmenu' class='imgmenu' src='./imgmenu.png'><i id='closemenufullscreen' class='zmdi zmdi-close zmdi-hc-2x' onclick='closure()'></i>"; /* pour recharger l'animation on change son contenu */
	document.getElementById("menufullscreen").style.display= "block";
}

function closure(){
	document.getElementById("imgmenu").className = "imgmenuback";
	document.getElementById("imgmenu").innerHTML = "";
	document.getElementById("menufullscreen").className = "getbackmenu";
	setTimeout("document.getElementById('menufullscreen').className = 'menufullscreen';", 4000);
	setTimeout("document.getElementById('menufullscreen').style.display= 'none';",4000);
}

function dropdownsetting(){
	document.getElementById("dropdownmenu").style.display="block";
	document.getElementById("flag").style.display="block";
	document.getElementById("dropdownmenu").innerHTML = "";
}

function dropdownsettingback(){
	document.getElementById("dropdownmenu").style.display="none";
	document.getElementById("flag").style.display="none";
	/*document.getElementById("dropdownmenu").className = "dropdownmenuback";
	setTimeout("document.getElementById('dropdownmenu').className = 'dropdownmenu'",4000);
	setTimeout("document.getElementById('dropdownmenu').style.display= 'none';",4000);
	setTimeout("document.getElementById('flag').style.display= 'none';",4000);*/
}

function changepage(){
	document.getElementById("changepage").style.display="block";
	document.getElementById("changepage").innerHTML = "";
	setTimeout("document.getElementById('changepageblack').style.display='block'",600);
	setTimeout("document.getElementById('changepageblack').innerHTML = ''",600);
	setTimeout("document.location.href = 'file:///Users/maximeducret/Documents/Programmation/website/maquetteone/secondpart.html'",1600);
	setTimeout("document.getElementById('changepage').style.display='none'",2200);
	setTimeout("document.getElementById('changepageblack').style.display='none'",2200);
}

function gogallerie(){
	document.location.href = 'file:///Users/maximeducret/Documents/Programmation/website/maquetteone/gallerie.html'	
}