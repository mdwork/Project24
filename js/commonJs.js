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

            setTimeout(function(){
                $('.wrap-form').show();
                $('.success-message').hide();
            }, 300);
        });

        var flag = false;

        $('#send-form').on('click', function(e){
            e.preventDefault();

            var nameUser = $('#name-user'),
                tellUser = $('#tell-user'),
                nameUserVal = nameUser.val(),
                tellUserVal = tellUser.val();

            function checkField($field){
                $field.on('keydown', function(){
                    $field.css('border-color','#7b7b7b');

                    flag = true;
                });
            }

            if(nameUserVal == '' || nameUserVal == ' ') {
                nameUser.css('border-color','#f00');
                flag = false;

                checkField(nameUser);
            }
            else {
                flag = true;
            }
            if(tellUserVal == '' || tellUserVal == ' ') {
                tellUser.css('border-color','#f00');
                flag = false;

                checkField(tellUser);
            }
            else {
                flag = true;
            }

            if(flag) {
                $.ajax({
                    url: 'form.php',
                    type: 'POST',
                    data: { nameUser: nameUserVal, tellUser: tellUserVal },
                    success: function(data){
                        if(data) {
                            $('#box_1').hide();
                            $('.wrap-form').hide();

                            $('#box_1').fadeIn(500);
                            $('.success-message').show();

                            nameUserVal = nameUser.val('');
                            tellUserVal = tellUser.val('');
                        }
                    }
                });
            }
        });
    });
});