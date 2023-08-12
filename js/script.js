/* $(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });
});

*/

$(document).ready(function(){
    $(".box").on("click", function() {
        /* when we click on an element that has a "box" class this event will be fired */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)"){
            // if this object is already red then turn it black //
            $("." + className).css("background-color", "#000");
        } else {
            // turn all elements with a box class black 
            // then change the color of all elements 
            // with the same class name as the clicked element
            // to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        
        }
    });

});

//. challenge example //

/* $('p').click(function(){
    $(this).text("Changed only the text for this paragraph");
});
$('.card').mouseenter(function(){
    $(this).fadeTo(2000,0.2).fadeTo(2000,1);
});

*/

//************ Traversing Challenge 1 ********************** */

/* 
$('p').click(function(){
    $(this).children('a').css('background-color', 'yellow');
});
*/

//************ Traversing sideways Challenge ********************** */

/* $("button").click(function() {
	$(this).next().slideToggle('slow');
});
 */
