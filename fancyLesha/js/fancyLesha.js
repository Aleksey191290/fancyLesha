;(function(){

    var number;
    var rel;
    var path_arrow_r = '../img/right_white.png';
    var path_arrow_l = '../img/left_white.png';
    var path_close_button = '../img/close-button.png';

    $(document).on("click", ".fancyLesha", function(){
        rel = $(this).attr("rel");
        var target_href = $(this).attr("href");
        number = $( this ).index(".fancyLesha[rel=" + rel +"]") + 1;
         var div = document.createElement('div');
         div.innerHTML = "<div id='fancy'><div class='modal_background'></div><div class='modal'></div><div class='modal_center'><img class='modal_image' src='" + target_href + "'></div><img class='arrow_l' src='" + path_arrow_l +"'><img src='" + path_arrow_r + "' class='arrow_r'><img class='close_button' src='" + path_close_button + "'>";
        document.body.appendChild(div);
        var src = $('.modal_image').attr("src");
        return false;
    });

    $(document).on("keydown", function(e){
        switch(e.keyCode){
            case 27:
                    $("#fancy").remove();
                    break;
            case 39:
                    rightList();
                    break;
            case 37:
                    leftList();
                    break;
        }
    });

    $(document).on("click", ".close_button", function(){
        $("#fancy").remove();
    });
    $(document).on("click", ".arrow_r", function(){
        rightList();
    });
    $(document).on("click", ".arrow_l", function(){
        leftList();
    });
    $(document).on("mouseover", ".arrow_r", function(){
        $(".arrow_r").css({"opacity": "1"});
    });
    $(document).on("mouseover", ".arrow_l", function(){
        $(".arrow_l").css({"opacity": "1"});
    });
    $(document).on("mouseover", ".close_button", function(){
        $(".close_button").css({"opacity": "1"});
    });
    $(document).on("mouseout", ".arrow_r, .arrow_l, .close_button", function(){
        $(".arrow_r, .arrow_l, .close_button").css({"opacity": "0.5"});
    });



    function rightList(){
        if(number < $(".fancyLesha[rel=" + rel + "]").length){
            number = number + 1
        } else {
            number = 1;
        }
        var target_href = $(".fancyLesha[rel=" + rel + "]:eq(" + (number - 1) + ")").attr("href");
        $(".modal_image").attr("src", target_href);
    }
    function leftList(){
        if(number > 1){
            number = number - 1
        } else {
            number = $(".fancyLesha[rel=" + rel + "]").length;
        }
        var target_href = $(".fancyLesha[rel=" + rel + "]:eq(" + (number - 1) + ")").attr("href");
        $(".modal_image").attr("src", target_href);	
    }
})();