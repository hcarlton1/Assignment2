function selCategory(itemCat){
    if(itemCat == 1){
        $('.item1').show();
        $('.item2').hide();
    }else if(itemCat == 2){
        $('.item1').hide();
        $('.item2').show();
    }else{
        $('.item1').show();
        $('.item2').show();
    }
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
        var userRating = this.value;
        alert(userRating);
    });
});
