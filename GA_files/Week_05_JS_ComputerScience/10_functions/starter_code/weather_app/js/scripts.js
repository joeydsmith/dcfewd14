// when #tempform submits
    // stop, collaborate, and listen
    // get value for #celcius
    // convert
    // use value returned by convert to change color
    // use value returned by convert to change value of #farenheit
    






// calculate celcius to farenheit
function tempConvert( temp ) {

    // convert
    var tempurature = ( temp * 1.8 ) + 32;

    // return value
    return tempurature;
}


// change the background color based on degree
function changeColor( degree ) {

    // remove hot, cold, and jsut right classes from body
    $('body').removeClass('hot');
    $('body').removeClass('cold');
    $('body').removeClass('just-right');

    // if degree is less than 60
    if ( degree < 60 ) {
        // change class on body to cold
        $('body').addClass('cold');
    }
    // else if degree is less than 76
    else if ( degree < 76 ) {
        // chaneg class on body to just right
        $('body').addClass('just-right');
    }
    // else
    else {
        // change class on body to hot
        $('body').addClass('hot');
    }


}
