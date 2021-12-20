// set up text to print, each item in array is new line
var aText = new Array(
"Downloading info ..." ,
"Fetching agent names", 
"Grinding coffee", 
"Just a minute", 
"All done , running tests :", 
"	1.Testing skills [PASS]", 
"	2.Testing intelligence [PASS]", 
"	3.Testing hardwork [PASS]", 
"All done"
);
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedtext");

	while ( iRow < iIndex ) {
		sContents += aText[iRow++] + '<br />';
	}
	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	if ( iTextPos++ == iArrLength ) {
		iTextPos = 0;
		iIndex++;
		if ( iIndex != aText.length ) {
			iArrLength = aText[iIndex].length;
			setTimeout("typewriter()", 500);
		}
	} else {
		setTimeout("typewriter()", iSpeed);
	}
}
typewriter();

//Progress Bar 
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Bar");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
move() ; 
//End of progress bar 

//Hide loading space and show main content page 
var load 
function loading(){ 
	load= setTimeout(showContent,15000)  ;
} 
function showContent(){
 document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
} 

