var currentHour = moment().hour()
console.log(currentHour);

var currentDate = moment().format("dddd, MMMM Do YYYY, hh:mm:ss");
console.log(currentDate)

$(document).ready(function() {
    showDate();
    //for loop to get all events by id
    for (var i = 8; i<18; i++) {
        $("#hour-"+ i).val(localStorage.getItem("hour-"+i));

        console.log(i);
    };
 
    // show the colors // based on the current time

    $("textarea").each(function(){
        console.log(this);

        //get time of event
        let hour= parseInt($(this).attr("id").split("-")[1]);

        //add classes based on time
        if (hour < currentHour){
            $(this).parent().addClass("past");
        }
        else if (hour === currentHour) {
            $(this).parent().addClass("present");
        }

        else {
            $(this).parent().addClass("future");
        }

    })


    $(".saveBtn").on("click", function() {
        console.log(this)

        // store description
        let note =$(this).siblings("textarea").val()

        // store hour of event
        let hour= $(this).siblings("textarea").attr("id")
        //.split("-")[1]


        console.log(note, hour)

        //add hour and description to local storege
        localStorage.setItem(hour, note)
        
    })

    function showDate() {
        $("#currentDay").append(currentDate);
    }

});