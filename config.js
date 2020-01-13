$(document).ready(function () {
    $(".slider").each(function () {

        var repeats = 5, // кількість повторювань автоматичного прокручування
            interval = 5, // інтервал в секундах
            repeat = true, // чи треба автоматично прокручувати (true/false)
            slider = $(this),
            repeatCount = 0,
            elements = $(slider).find("li").length;

        $(slider)
            .append("<div class='nav'></div>")
            .find("li").each(function () {
                $(slider).find(".nav").append("<span data-slide='" + $(this).index() + "'></span>");
                $(this).attr("data-slide", $(this).index());
            })
            .end()
            .find("span").first().addClass("on");

        // add timeout

        if (repeat) {
            repeat = setInterval(function () {
                if (repeatCount >= repeats - 1) {
                    window.clearInterval(repeat);
                }

                var index = $(slider).find('.on').data("slide"),
                    nextIndex = index + 1 < elements ? index + 1 : 0;

                sliderJS(nextIndex, slider);

                repeatCount += 1;
            }, interval * 2000);
        }

    });
});

function sliderJS(index, slider) { // slide
    var ul = $(slider).find("ul"),
        bl = $(slider).find("li[data-slide=" + index + "]"),
        step = $(bl).width();

    $(slider)
        .find("span").removeClass("on")
        .end()
        .find("span[data-slide=" + index + "]").addClass("on");

    $(ul).animate({
        marginLeft: "-" + step * index
    }, 500);
}

$(document).on("click", ".slider .nav span", function (e) { // slider click navigate
    e.preventDefault();
    var slider = $(this).closest(".slider"),
        index = $(this).data("slide");

    sliderJS(index, slider);
});




//slider
var $homeSlider = $(".home-slider");

$(window).resize(function () {
    showHomeSlider();
});

function showHomeSlider() {
    if ($homeSlider.data("owlCarousel") !== "undefined") {
        if (window.matchMedia('(max-width: 600px)').matches) {
            initialHomeSlider();
        } else {
            destroyHomeSlider();
        }
    }
}
showHomeSlider();

function initialHomeSlider() {
    $homeSlider.addClass("owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });
}

function destroyHomeSlider() {
    $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}



//up_button


//scrollbar



$(window).load(function () {
    $("body").mCustomScrollbar({
        theme: "dark-3",
        scrollInertia: 3000
    });
});
