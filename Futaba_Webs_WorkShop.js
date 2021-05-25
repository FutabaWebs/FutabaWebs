//Production Slide show buttons
var DisplayImage3 = 3; //This is the main counter for the list of images in the SocialMedia class element
var SomePoitner3 = 2;// This is used as a pointer to block the correct imagae for prev()'s

function Next()
{ 
    DisplayImage3--;//When the user clicks on the button, the current value of the image being displayed will decrease by 1
    
    if (DisplayImage3 == 0)
    {
        DisplayImage3 = 1;
        SomePoitner3++;
    }

    var somevar = document.getElementsByClassName("CenterTextBox"); 
    somevar[DisplayImage3].style.display = "none"; //This will go into the class elements and display the desired image.

    SomePoitner3--; 
}

//Lets test this out with the second image in the array element
function Prev()
{  
    //Increment the display value
    DisplayImage3++;
    SomePoitner3++;

    //This will prevent the previos button from incrementing the coutner past 3, which will throw of the pointe
    if (DisplayImage3 > 3)
    {
        DisplayImage3 = 3;
        //alert(DisplayImage);
    }

    if (SomePoitner3 >= DisplayImage3)
    {
        SomePoitner3--;
    }

    //Block the previous value that was displayed
    var somevar = document.getElementsByClassName("CenterTextBox");
    somevar[SomePoitner3].style.display = "block";

}
