
//*********************************************
// Function that Shows an HTML element
//*********************************************
function showDiv(divID)
{
	var div = document.getElementById(divID);
	div.style.display = ""; //display div
}

//*********************************************
// Function that Hides an HTML element
//*********************************************
function hideDiv(divID)
{
	var div = document.getElementById(divID);
	div.style.display = "none"; // hide
}
//*****************************************************************************
// Function that Hides all the Div elements in the select menu Value
//*****************************************************************************
function hideAllDivs1()
{
	//Loop through the seclect menu values and hide all
	var selectMenu = document.getElementById("selectMenu1");
	for (var i=0; i<=selectMenu.options.length -1; i++)
	{
		hideDiv(selectMenu.options[i].value);
	}
}
//*********************************************
// Main function that calls others to toggle divs
//*********************************************
function toggle(showID)
{
	hideAllDivs1(); // Hide all
	showDiv(showID); // Show the one we asked for

}

