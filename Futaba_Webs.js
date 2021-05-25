/**
    
    Ideas for the script:

        Next Button:

            * When the user clicks the next button, the code will call the next image in order.
            * A default value will be set in order to keep track of which image is being displayed to the end-user
            * When the next button is called, the value of the current image to be displayed will decrease by 1
            * The next image will be displayed after the value has decreased.
            * If the user reaches the final image, it will simply just do nothing
            * There needs to be some logic in place that will reset the value of the Current Image

    

        * When the Next button is pressed, a value will be overloaded to the function image(), which will add to an indexed value, and will display that value
        //So in Javascript the code always rememmebr what is going on, so proper memory management of resources is a must
        https://www.w3schools.com/howto/howto_js_slideshow.asp
 */

        //Social Media Slide show buttons
        var DisplayImage = 5; //This is the main counter for the list of images in the SocialMedia class element
        var SomePoitner = 4;// This is used as a pointer to block the correct imagae for prev()'s
        var DotPoitner = 0;//This is 

        function Next()
        {
            DisplayImage--;//When the user clicks on the button, the current value of the image being displayed will decrease by 1
            
            if (DisplayImage == 0)
            {
                DisplayImage = 1;
                DotPoitner--;
                SomePoitner++;
            }

            var somevar = document.getElementsByClassName("SocialMedia"); 
            somevar[DisplayImage].style.display = "none"; //This will go into the class elements and display the desired image.
    
            SomePoitner--; 
            DotPoitner++;  
    
        }

        //Lets test this out with the second image in the array element
        function Prev()
        {  
            //Increment the display value
            DisplayImage++;
            SomePoitner++;
            DotPoitner--;

            //This will prevent the previos button from incrementing the coutner past 3, which will throw of the pointe
            if (DisplayImage > 5)
            {
                DisplayImage = 5;
                //alert(DisplayImage);
            }

            if (SomePoitner >= DisplayImage)
            {
                SomePoitner--;
            }

            if (DotPoitner < 0)
            {
                DotPoitner++;
                
            }

            //Block the previous value that was displayed
            var somevar = document.getElementsByClassName("SocialMedia");
            somevar[SomePoitner].style.display = "block";

        }

       
        //Social Media Dots

        function Dot1() //Takes us back to the 5th image
        {
        

            //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
            if (DisplayImage == 4 && DotPoitner == 1)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 5;
                SomePoitner = 4;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DotPoitner = 0;

            }

            if (DisplayImage == 3 && DotPoitner == 2)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 4;
                SomePoitner = 3;
            

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 5;
                SomePoitner = 4;
                DotPoitner = 0; 

                somevar[SomePoitner].style.display = "block";

            }

            if (DisplayImage == 2 && DotPoitner == 3)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 4;
                SomePoitner = 3;

                somevar[SomePoitner].style.display = "block";

                DisplayImage = 5;
                SomePoitner = 4;
                DotPoitner = 0; 

                somevar[SomePoitner].style.display = "block";

            }

            if (DisplayImage == 1 && DotPoitner == 4)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 3;
                SomePoitner = 2;

                somevar[SomePoitner].style.display = "block";

                DisplayImage = 4;
                SomePoitner = 3;

                somevar[SomePoitner].style.display = "block";

                DisplayImage = 5;
                SomePoitner = 4;
                DotPoitner = 0; 

                somevar[SomePoitner].style.display = "block";

            }

        }

        function Dot2() //Takes us back to the 4th image
        {
        

            //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
            if (DisplayImage == 5 && DotPoitner == 0)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 5;
                SomePoitner = 4;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 4;
                SomePoitner = 3;
                DotPoitner = 1;
                

            }

            if (DisplayImage == 3 && DotPoitner == 2)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 4;
                SomePoitner = 3;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";
                
                DotPoitner = 1;

            }

            if (DisplayImage == 2 && DotPoitner == 3)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 4;
                SomePoitner = 3;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DotPoitner = 1;

            }

            if (DisplayImage == 1 && DotPoitner == 4)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 4;
                SomePoitner = 3;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 4;
                SomePoitner = 3;
                DotPoitner = 1;

            }
            
        }

        function Dot3() //Takes us back to the 3th image
        {
        

            //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
            if (DisplayImage == 5 && DotPoitner == 0)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 5;
                SomePoitner = 4;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 4;
                SomePoitner = 3;

                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 3;
                SomePoitner = 2;

                DotPoitner = 2;

            }

            if (DisplayImage == 4 && DotPoitner == 1)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 4;
                SomePoitner = 3;
            

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 3;
                SomePoitner = 2;

                DotPoitner = 2;

            }

            if (DisplayImage == 2 && DotPoitner == 3)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 3;
                SomePoitner = 2;

                DotPoitner = 2;

            }

            if (DisplayImage == 1 && DotPoitner == 4)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DotPoitner = 2;

            }
            
        }

        function Dot4() //Takes us back to the 2nd image
        {
      
            //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
            if (DisplayImage == 5 && DotPoitner == 0)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 5;
                SomePoitner = 4;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 4;
                SomePoitner = 3;

                somevar[SomePoitner].style.display = "none";

                DisplayImage = 3;
                SomePoitner = 2;

                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 2;
                SomePoitner = 1;

                DotPoitner = 3;

            }

            if (DisplayImage == 4 && DotPoitner == 1)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 4;
                SomePoitner = 3;
            

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 3;
                SomePoitner = 2; 

                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 2;
                SomePoitner = 1;

                DotPoitner = 3;

            }

            if (DisplayImage == 3 && DotPoitner == 2)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 2;
                SomePoitner = 1;

                DotPoitner = 3;

            }

            if (DisplayImage == 1 && DotPoitner == 4)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "block";

                DotPoitner = 3;

            }
            
        }

        function Dot5() //Takes us back to the 1st image
        {
      
            //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
            if (DisplayImage == 5 && DotPoitner == 0)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 5;
                SomePoitner = 4;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 4;
                SomePoitner = 3;

                somevar[SomePoitner].style.display = "none";

                DisplayImage = 3;
                SomePoitner = 2;

                somevar[SomePoitner].style.display = "none";

                DisplayImage = 2;
                SomePoitner = 1;

                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 1;
                SomePoitner = 0;

                DotPoitner = 4;

            }

            if (DisplayImage == 4 && DotPoitner == 1)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 4;
                SomePoitner = 3;
            

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 3;
                SomePoitner = 2; 

                somevar[SomePoitner].style.display = "none";

                DisplayImage = 2;
                SomePoitner = 1; 

                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 1;
                SomePoitner = 0;

                DotPoitner = 4;

            }

            if (DisplayImage == 3 && DotPoitner == 2)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 3;
                SomePoitner = 2;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";

                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 1;
                SomePoitner = 0;

                DotPoitner = 4;

            }

            if (DisplayImage == 2 && DotPoitner == 3)
            {
                //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
                DisplayImage = 2;
                SomePoitner = 1;

                var somevar = document.getElementsByClassName("SocialMedia");
                somevar[SomePoitner].style.display = "none";
                
                //After the dote transitions, the position of all the pointers will be corrected
                DisplayImage = 1;
                SomePoitner = 0;

                DotPoitner = 4;

            }
            
        }

    //Highlights Slide show buttons
var DisplayImage2 = 5; //This is the main counter for the list of images in the SocialMedia class element
var SomePoitner2 = 4;// This is used as a pointer to block the correct imagae for prev()'s
var DotPoitner2 = 0;//This is 

function Next2()
{
    DisplayImage2--;//When the user clicks on the button, the current value of the image being displayed will decrease by 1
    
    if (DisplayImage2 == 0)
    {
        DisplayImage2 = 1;
        DotPoitner2--;
        SomePoitner2++;
    }

    var somevar = document.getElementsByClassName("Highlights"); 
    somevar[DisplayImage2].style.display = "none"; //This will go into the class elements and display the desired image.

    SomePoitner2--; 
    DotPoitner2++;  

}

//Lets test this out with the second image in the array element
function Prev2()
{  
    //Increment the display value
    DisplayImage2++;
    SomePoitner2++;
    DotPoitner2--;

    //This will prevent the previos button from incrementing the coutner past 3, which will throw of the pointe
    if (DisplayImage2 > 5)
    {
        DisplayImage2 = 5;
        //alert(DisplayImage);
    }

    if (SomePoitner2 >= DisplayImage2)
    {
        SomePoitner2--;
    }

    if (DotPoitner2 < 0)
    {
        DotPoitner2++;
        
    }

    //Block the previous value that was displayed
    var somevar = document.getElementsByClassName("Highlights");
    somevar[SomePoitner2].style.display = "block";

}


//Highlights Dots
function Dot11() //Takes us back to the 5th image
{


    //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
    if (DisplayImage2 == 4 && DotPoitner2 == 1)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 5;
        SomePoitner2 = 4;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DotPoitner2 = 0;

    }

    if (DisplayImage2 == 3 && DotPoitner2 == 2)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 4;
        SomePoitner2 = 3;
    

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 5;
        SomePoitner2 = 4;
        DotPoitner2 = 0; 

        somevar[SomePoitner2].style.display = "block";

    }

    if (DisplayImage2 == 2 && DotPoitner2 == 3)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 5;
        SomePoitner2 = 4;
        DotPoitner2 = 0; 

        somevar[SomePoitner2].style.display = "block";

    }

    if (DisplayImage2 == 1 && DotPoitner2 == 4)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 3;
        SomePoitner2 = 2;

        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 5;
        SomePoitner2 = 4;
        DotPoitner2 = 0; 

        somevar[SomePoitner2].style.display = "block";

    }

}

function Dot22() //Takes us back to the 4th image
{


    //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
    if (DisplayImage2 == 5 && DotPoitner2 == 0)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 5;
        SomePoitner2 = 4;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 4;
        SomePoitner2 = 3;
        DotPoitner2 = 1;
        

    }

    if (DisplayImage2 == 3 && DotPoitner2 == 2)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 4;
        SomePoitner2 = 3;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";
        
        DotPoitner2 = 1;

    }

    if (DisplayImage2 == 2 && DotPoitner2 == 3)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DotPoitner2 = 1;

    }

    if (DisplayImage2 == 1 && DotPoitner2 == 4)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 4;
        SomePoitner2 = 3;
        DotPoitner2 = 1;

    }
    
}

function Dot33() //Takes us back to the 3th image
{


    //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
    if (DisplayImage2 == 5 && DotPoitner2 == 0)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 5;
        SomePoitner2 = 4;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        DotPoitner2 = 2;

    }

    if (DisplayImage2 == 4 && DotPoitner2 == 1)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 4;
        SomePoitner2 = 3;
    

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        DotPoitner2 = 2;

    }

    if (DisplayImage2 == 2 && DotPoitner2 == 3)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        DotPoitner2 = 2;

    }

    if (DisplayImage2 == 1 && DotPoitner2 == 4)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DotPoitner2 = 2;

    }
    
}

function Dot44() //Takes us back to the 2nd image
{

    //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
    if (DisplayImage2 == 5 && DotPoitner2 == 0)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 5;
        SomePoitner2 = 4;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 3;
        SomePoitner2 = 2;

        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        DotPoitner2 = 3;

    }

    if (DisplayImage2 == 4 && DotPoitner2 == 1)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 4;
        SomePoitner2 = 3;
    

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 3;
        SomePoitner2 = 2; 

        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        DotPoitner2 = 3;

    }

    if (DisplayImage2 == 3 && DotPoitner2 == 2)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        DotPoitner2 = 3;

    }

    if (DisplayImage2 == 1 && DotPoitner2 == 4)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "block";

        DotPoitner2 = 3;

    }
    
}

function Dot55() //Takes us back to the 1st image
{

    //If button 1 is pressed when the pointer is at position 2, it will take up back to 3
    if (DisplayImage2 == 5 && DotPoitner2 == 0)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 5;
        SomePoitner2 = 4;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 4;
        SomePoitner2 = 3;

        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 3;
        SomePoitner2 = 2;

        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 2;
        SomePoitner2 = 1;

        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 1;
        SomePoitner2 = 0;

        DotPoitner2 = 4;

    }

    if (DisplayImage2 == 4 && DotPoitner2 == 1)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 4;
        SomePoitner2 = 3;
    

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 3;
        SomePoitner2 = 2; 

        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 2;
        SomePoitner2 = 1; 

        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 1;
        SomePoitner2 = 0;

        DotPoitner2 = 4;

    }

    if (DisplayImage2 == 3 && DotPoitner2 == 2)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 3;
        SomePoitner2 = 2;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        //After the dote transitions, the position of all the pointers will be corrected
        DisplayImage2 = 1;
        SomePoitner2 = 0;

        DotPoitner2 = 4;

    }

    if (DisplayImage2 == 2 && DotPoitner2 == 3)
    {
        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 2;
        SomePoitner2 = 1;

        var somevar = document.getElementsByClassName("Highlights");
        somevar[SomePoitner2].style.display = "none";

        //Applies the logic of the prev() in order to reposition the image back to where it was meant to be
        DisplayImage2 = 1;
        SomePoitner2 = 0;

        DotPoitner2 = 4;

    }
    
}

    //Production Slide show buttons
    var DisplayImage3 = 3; //This is the main counter for the list of images in the SocialMedia class element
    var SomePoitner3 = 2;// This is used as a pointer to block the correct imagae for prev()'s

    function Next3()
    {
        DisplayImage3--;//When the user clicks on the button, the current value of the image being displayed will decrease by 1
        
        if (DisplayImage3 == 0)
        {
            DisplayImage3 = 1;
            SomePoitner3++;
        }

        var somevar = document.getElementsByClassName("ProductionImage"); 
        somevar[DisplayImage3].style.display = "none"; //This will go into the class elements and display the desired image.

        var somevar2 = document.getElementsByClassName("ProductionText");
        somevar2[DisplayImage3].style.display = "none";

        SomePoitner3--; 
    }

    //Lets test this out with the second image in the array element
    function Prev3()
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
        var somevar = document.getElementsByClassName("ProductionImage");
        somevar[SomePoitner3].style.display = "block";

        var somevar2 = document.getElementsByClassName("ProductionText");
        somevar2[SomePoitner3].style.display = "block";

    }

    function test1()
    {
        alert(1);
        
    }








        

/**
    Logic for the dot buttons:
        
        * When the user clicks on the respective button, the sldie show will move the the respective photos in order
        * The logic needs to work reguardless of where the photos are positioned
        * Lets start with the first dot, configuring it for the default position, being on the last elemet in the array, 3
        * When the user clicks that dot, it will remian in default, for the user hasn't moved anywhere 
        * The logic of the dot should check with the current position of the pointer of the image befoe making an action
        * 
 
 */

    