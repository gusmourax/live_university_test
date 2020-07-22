$(document).ready(function() {
    var open = false;
    $('.option').on('click', function() {
        if (!open) {
            open = !open;
            $('.hidden-dropdown-container').css({ left: 280 });
        } else {
            open = !open;
            $('.hidden-dropdown-container').css({ left: 0 });
        }
    })
    $(window).on('click', function(e) {
        if (!document.getElementById('hidden-dropdown').contains(e.target) &&
            !document.getElementById('option-btn').contains(e.target)) {
            if (open) {
                $('.hidden-dropdown-container').css({ left: 0 });
                open = !open;
            }
        }
    })

    function updateQueryContent() {
        var value = sessionStorage.getItem('item') || 'A';
        $('#item-select').children(`option[value=${value}]`).attr('selected', true);
        $('.content-option').empty();
        $('.content-option').append(`${value}`);
    }

    updateQueryContent();

    $('#item-select').on('change', function() {
        sessionStorage.setItem('item', $('#item-select').children('option:selected').val());
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('quantity') && urlParams.get('quantity') > 0) {
            $('.content-option').empty();
            updateQueryContent();
        } else {
            $('#quantity-input').css({ background: '#ff6b6b' })
        }
    });
})