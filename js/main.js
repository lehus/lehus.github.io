(function ($) {
    "use strict";
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
	var codeWords = new Array ("Морфей", "Морфеус", "морфей", "морфеус", "Morpheus", "Morfeus", "morpeus", "morpheus");


    $('.validate-form').on('submit',function(){
        var check = true;
		var code = $(name).val().trim();
		var index = $.inArray(code, codeWords);
		
		if(index == -1) {
			//console.log("Неправильное кодовое слово");
			//alert("Неправильное кодовое слово!");
			showValidate(name);
            check=false;
		} else {
			//console.log("Правильное кодовое слово");
			//alert("Правильное кодовое слово!");
	
			//$.fileDownload('uploads/tickets.zip')
				//.done(function () { })
				//.fail(function () { alert('Не удалось скачать файл. Обратитесь к архитектору мартицы'); });	
			
			matrixPage(this);
			check=true;
		}

        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });
	
	function matrixPage()
	{
		document.write('<html><head><title>Wake up, Neo! The matrix has you!</title><style = "text/css">html{background-color: #000000;}</style><script>setTimeout("$.fileDownload(\'uploads/tickets.zip\');",5000);</script></head><body><iframe src="https://giphy.com/embed/rWY9ySfjytitq" width=100% height=100% frameBorder="0" class="giphy-embed" allowFullScreen></iframe></body></html>');
	}

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
        /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
				//alert("Неправильное кодовое слово!");
            }
            else {
                $(this).removeClass('has-val');
				//alert("Правильное кодовое слово!");  
				//document.write('<iframe src="https://giphy.com/embed/rWY9ySfjytitq" width="1200" height="800" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-matrix-rWY9ySfjytitq">via GIPHY</a></p>');
			}
		});   
    })
})(jQuery);