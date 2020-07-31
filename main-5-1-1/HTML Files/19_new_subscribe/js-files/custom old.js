// jQuery Initialization
jQuery(document).ready(function($){
"use strict"; 


        //======================================================================================================
        //      Fancy Box
        //======================================================================================================
        if ($('.lightbox, .button-fullsize, .fullsize').length > 0) {
            $('.lightbox, .button-fullsize, .fullsize').fancybox({
                padding    : 0,
                margin    : 0,
                maxHeight  : '90%',
                maxWidth   : '90%',
                loop       : true,
                fitToView  : false,
                mouseWheel : false,
                autoSize   : false,
                closeClick : false,
                overlay    : { showEarly  : true },
                helpers    : { media : {} }
            });
        }
        //======================================================================================================





        //======================================================================================================
        //      Go To Top
        //======================================================================================================
        $('#gototop').click(function(e){
            jQuery('html, body').animate({scrollTop:0}, 750, 'linear');
            e.preventDefault();
            return false;
        });
        //======================================================================================================
    




         //======================================================================================================
        //      Submit (New Subscribe 19)
        //======================================================================================================
        $("#subscribe_btn_19").click(function() { 
            //get input field values
            var user_email      = $('.pixfort_subscribe_19 input[name=email]').val();

            //var user_message    = $('textarea[name=message]').val();
            
            //simple validation at client's end
            //we simply change border color to red if empty field using .css()
            var proceed = true;
            
            if(user_email==""){ 

                $('.pixfort_subscribe_19 input[name=email]').css('border-color','red'); 
                proceed = false;
            }
            //$.fancybox("#hidden_pix_12");

            //everything looks good! proceed...
            if(proceed) 
            {
                //data to be sent to server
                var post_data;
                var output;
                post_data = {'userEmail':user_email};
                //Ajax post data to server
                $.post('pix_mail/contact_me_19.php', post_data, function(response){  

                    //load json data from server and output message     
                    if(response.type == 'error')
                    {
                        output = '<div class="error">'+response.text+'</div>';
                    }else{
                        $.fancybox("#hidden_pix_12");
                        output = '<div class="success">'+response.text+'</div>';
                        
                        //reset values in all input fields
                        $('.pixfort_subscribe_19 #contact_form input').val(''); 
                        $('.pixfort_subscribe_19 #contact_form textarea').val(''); 
                    }
                    
                    $(".pixfort_subscribe_19 #result").hide().html(output).slideDown();
                }, 'json');
                
            }
        });
        
        //reset previously set border colors and hide all message on .keyup()
        $(".pixfort_subscribe_19 #contact_form input, .pixfort_subscribe_19 #contact_form textarea").keyup(function() { 
            $(".pixfort_subscribe_19 #contact_form input, .pixfort_subscribe_19 #contact_form textarea").css('border-color',''); 
            $(".pixfort_subscribe_19 #result").slideUp();
        });
        //======================================================================================================

        //======================================================================================================
        //  END OF DOCUMENT
        //=================
});