  
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

const filterGallery = document.querySelectorAll('.item');

document.querySelector('#myBtnContainer').addEventListener('click', event =>{
    if(event.target.tagName != 'BUTTON') return false;

    let filterClass = event.target.dataset['f'];

    filterGallery.forEach( elem => {
        
        if(!elem.classList.contains(filterClass) && filterClass!=='all') {
            elem.classList.add('hide');
        } else {
            elem.classList.remove('hide');
        }

    });
}) 