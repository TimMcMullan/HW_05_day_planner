// Set time and format for app

var timeDis = moment().format("dddd, MMMM do YYYY, h:mm:ss a");
$("#currentDay").text(timeDis);

// activate save button and store tasks to local storage
$(document).ready(function () {

    $('.saveButt').on('click', function () {
        var value = $(this).siblings('.information').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value)
        $(saveButt);
        alert('Changes saved')
    });

// make the app easy to follow with color codes as the day progresses
    function updateColor() {
        var hour = moment().hours();

        $('.time-block').each(function () {
            var now = parseInt($(this).attr('id').split('-')[1]);
            console.log(now)
            if (now < hour) {
                $(this).addClass('past');
            }
            else if (now === hour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        });
    }
// tasks by the hour
    updateColor();
    $("#hour-6 .information").val(localStorage.getItem('hour-6'));
    $("#hour-7 .information").val(localStorage.getItem('hour-7'));
    $("#hour-8 .information").val(localStorage.getItem('hour-8'));
    $("#hour-9 .information").val(localStorage.getItem('hour-9'));
    $("#hour-10 .information").val(localStorage.getItem('hour-10'));
    $("#hour-11 .information").val(localStorage.getItem('hour-11'));
    $("#hour-12 .information").val(localStorage.getItem('hour-12'));
    $("#hour-13 .information").val(localStorage.getItem('hour-13'));
    $("#hour-14 .information").val(localStorage.getItem('hour-14'));
    $("#hour-15 .information").val(localStorage.getItem('hour-15'));
    $("#hour-16 .information").val(localStorage.getItem('hour-16'));
    $("#hour-17 .information").val(localStorage.getItem('hour-17'));
    $("#hour-18 .information").val(localStorage.getItem('hour-18'));
    $("#hour-19 .information").val(localStorage.getItem('hour-19'));
    $("#hour-20 .information").val(localStorage.getItem('hour-20'));

}


);


