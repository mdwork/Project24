$(document).ready(function(){
    /*custom select search*/
    var config = {
        '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:true},
        '.chosen-select-no-single' : {disable_search_threshold:10},
        '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
        '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

    /*load popup*/
    $("body").append('<span id="wrap-form-ajax"></span>');
    $("#wrap-form-ajax").load("popup.html #form-ajax", function(){
        /*popup*/
        $(".popup-call-back-js").click(function(){
            $('#bg-popup').fadeIn(300);
            $('#box_1').fadeIn(300);
        });

        $('#bg-popup, .close-btn-popup').click(function () {
            $('#bg-popup').fadeOut(300);
            $('#box_1').fadeOut(300);
        });
    });
});