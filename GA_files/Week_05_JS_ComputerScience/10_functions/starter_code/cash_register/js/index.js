
// when form #entry is submitted
$('#entry').submit(function(event){

    // prevent default submit action
    event.preventDefault();

    // take users input ( #newEntry )
    var newAmount = $('#newEntry').val();

    // set value to empty
    $('#newEntry').val('');

    // Call return function calculate
    var total = calculate( newAmount );

    // register with new total
    register( total );

})



function calculate( amount ) {

    // parse amount as float ( so that i have decimals )
    var f_amount = parseFloat( amount );

    // add a newline with that amount ( to the table #entries )
    $('#entries').append( '<tr><td>' + f_amount + '</td></tr>');

    // find out what the current total is ( #total [ includes $ ])
    var total = $('#total').text().replace('$', '');

    // remove the dollar sign from the total
    // parse the total as a float
    total = parseFloat(total);

    // add amount to total ( #total [ total includes $ ] )
    total = total + f_amount;

    // test theory that total doesnt have a dolalr sign
    // console.log(total);

    return total;
}



function register( joey ) {
    // place total amount into #total element
    $('#total').text('$' + total);
}
