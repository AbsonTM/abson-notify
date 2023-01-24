$(function () {
    var icons = {
        "system" : "fas fa-server",//"fas fa-info-circle",
        "info" : "fas fa-info-circle",
        "success" : "fas fa-check-circle",
        "error" : "fas fa-times-circle",
        "warning" : "fas fa-exclamation-triangle",
        "sms" : "fas fa-comment"
    };

    var colours = {
        "system" : "#06d5ff",
        "info" : "#06d587",
        "success" : "#06b60b",
        "error" : "#ff014c",
        "warning" : "#c40102",
        "sms" : "#3601b3"
    };
// border-bottom: 5px solid ${colours[event.data.type]};
    var sound = new Audio('notification.mp3');
    sound.volume = 0.2;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'notification') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.notify-wrapper').append(`
            <div class="notify-div wrapper-${number}" 
            style="          
            -webkit-box-shadow: 0px 0px 0px 0px ${colours[event.data.type]};  
                       box-shadow: 3px 5px ${colours[event.data.type]}; display:inline-block">
                <div class="notify-title">
                <i class="${icons[event.data.type]} fa-ms notify-icon" style="  
                  display: inline-block;
                color: ${colours[event.data.type]}"></i>
                    <h5 class="text-uppercase notify-title-text" style="color: ${colours[event.data.type]}">${event.data.title}</h5>
                </div>
            <p class="notify-main-text">${event.data.message}</p>
            </div>`)
            $(`.wrapper-${number}`).fadeIn("slow");
            sound.play();
            setTimeout(function () {
                $(`.wrapper-${number}`).fadeOut( "slow", function () {
                    $(`.wrapper-${number}`).remove()
                })
            }, event.data.time)
            var ui = document.querySelector('.notify-wrapper');
            if (event.data.position === 'left') {
                ui.style.right = '82.5%';
            }
            if (event.data.position === 'right') {
                ui.style.right = '1%';
            }
        }
    })
})