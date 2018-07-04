$(document).ready(function() {

    $.getJSON('data.json', function (data) {
        $.each(data, function(i, item) {
            var $tr = $('<tr>').append(
                $('<td>').text(item.name),
                $('<td>').text(item.description),
                $('<td>').html('<a href="https://www.google.com/maps?q=' + item.location + '">Open in Google Maps</a>'),
            );
            $($tr).appendTo('#spots');
        });
    });

})
