$(document).on('turbolinks:load', function(){
    $('input[type="checkbox"]').prop("checked", false);
    
    $("#submit").click(function(){
    // alert("The paragraph was clicked.");
        var amentities_arr = [];

        if ($("#gym").prop("checked") == true)
            amentities_arr.push("gym");
        if ($("#kitchen").prop("checked") == true)
            amentities_arr.push("kitchen");
        if ($("#wifi").prop("checked") == true)
            amentities_arr.push("wifi");
        if ($("#air_conditioner").prop("checked") == true)
            amentities_arr.push("air_conditioner");
        if ($("#hot_water").prop("checked") == true)
            amentities_arr.push("hot_water");
        if ($("#tv").prop("checked") == true)
            amentities_arr.push("tv");
            
        var amentities_str = amentities_arr.join(",");
        $("#room_amentities").val(amentities_str);
        var a =  $("#room_amentities").val();
        // alert(a);
    });
    
    $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;
            // alert(filesAmount);
                
            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img height="30%" width="30%">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    alert(input.files.name);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    
    $('#room_pictures').on('change', function(e) {
        e.preventDefault();
        $('#pictures_preview').html("");
        imagesPreview(this, '#pictures_preview');
        });
    });
    
    var rating_children = $('#your_rating').children();
    var current_value = 0;
    
    rating_children.click(function(e){
        e.preventDefault();
        id = $(this).attr('id');

        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
        current_value = id;
        $('#value').append(current_value)
    });
    
    rating_children.mouseover(function(e){
        e.preventDefault();
        id = $(this).attr('id');
        
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
    })
    
    $("h2#your_rating").mouseleave(function(e){
        console.log(current_value);
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= current_value){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
    });
    
    

    // $('#new_comment').on("submit", function(e){
    //     e.preventDefault();
    //     $.ajax({
    //       method: 'POST',
    //       url: '/rooms/1/comments',
    //       data: { 
    //         // 'authenticity_token': $('#authenticity_token').val(),
    //         // 'user_id': $('#comment_user_id').val(),
    //         // 'room_id': $('#comment_content').val(),
    //         // 'text_content': $('#comment_content').val()
    //       },
    //     //   dataType: 'json',
    //       success: function(data){
    //         alert('success');
    //       },
    //         error: function (data,xhr, ajaxOptions, thrownError) {
    //                 //   alert(xhr.status);
    //                 //   alert(thrownError);
    //                   console.log(data);
    //         },
 
    //     });
    // });
    
    
});