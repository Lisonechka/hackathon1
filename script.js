  
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $(`#content`).show();
        $(`#gallery`).hide();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $(`#content`).hide();
        $(`#gallery`).show();
    });
});

// function viewGallery(){
//     document.getElementById("gallery").style.display = "block";
//   };

//   function closeGallery(){
//     document.getElementById("gallery").style.display = "none";
//   };