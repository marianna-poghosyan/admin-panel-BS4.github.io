$(document).ready(function() {
    menuHeight()

    // Preloader simulator.
    setTimeout(function() {
        $('.loader').css('display', 'none')
    }, 1000)
});

function menuHeight() {
    var body = document.body,
        html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    $('#navbar-collapse').css('height', (height - 112) + 'px');
}

$('.nav-tabs .nav-link').on('click', function() {
    $(document).ready(function() {
        menuHeight()
    })
});

$('.checkbox').on('click', function() {
    $(this).toggleClass('selected');
});

$('.toggleTables').on('click', function() {
    $('#supervisees').toggleClass('d-none');
    $('#messages').toggleClass('d-none');
});

$('.custom-drop-menu').on('click', function() {
    $(this).next('.dropdown-custom').toggleClass('d-none');
    $(this).toggleClass('bg-white');
});

$('.menu-button').on('click', function() {
    $('.dropdown-menu').toggleClass('show');
});