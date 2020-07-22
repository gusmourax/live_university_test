$(document).ready(function() {
    //hidden-dropdown-div isOpen variable
    var isOpen = false;
    $('.option').on('click', function() {
        if (!isOpen) {
            //Equivalent to isOpen = true
            isOpen = !isOpen;
            //Open the hidden-dropdown-container
            $('.hidden-dropdown-container').css({ left: 280 });
        } else {
            //Equivalent to isOpen = true
            isOpen = !isOpen;
            //Close the hidden-dropdown-container
            $('.hidden-dropdown-container').css({ left: 0 });
        }
    })
    $(window).on('click', function(e) {
        //Check if user click outside of hidden-dropdown-container and option button
        if (!document.getElementById('hidden-dropdown').contains(e.target) &&
            !document.getElementById('option-btn').contains(e.target)) {
            //Check if the hidden-dropdown-container is open
            if (isOpen) {
                //Close if user click outside of hidden-dropdown-container
                $('.hidden-dropdown-container').css({ left: 0 });
                //Equivalent to isOpen = false
                isOpen = !isOpen;
            }
        }
    })

    function updateQueryContent() {
        //Get value of dropdown menu from sessionStorage or A    
        var value = sessionStorage.getItem('item') || 'A';
        //Select option with sessionStorage value
        $('#item-select').children(`option[value=${value}]`).attr('selected', true);
        //Clear the span to append dropdown option selected value
        $('.content-option').empty();
        //Append dropdown option selected value to span
        $('.content-option').append(`${value}`);
    }

    //Call function on document load
    updateQueryContent();

    $('#item-select').on('change', function() {
        //Set sessionStorage item with dropdown option selected value
        sessionStorage.setItem('item', $('#item-select').children('option:selected').val());
        var urlParams = new URLSearchParams(window.location.search);
        //Check if exists parameter quantity and if parameter quantity is > 0
        if (urlParams.get('quantity') && urlParams.get('quantity') > 0) {
            //Clear span with the content option
            $('.content-option').empty();
            //Call function to update the query content
            updateQueryContent();
        } else {
            //If quantity is not set, make background of input red
            $('#quantity-input').css({ background: '#ff6b6b' })
        }
    });
})