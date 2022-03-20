let ul = $('#navUl')

$('#mobileNav').click(function () {
    ul.slideToggle()
})

$(document).ready(function () {
    let $window = $(window)

    function changeNav() {
        if ($window.width()> 660) {
            ul.css({
                'display': 'flex',
                'flex-direction': 'row'
            })
        } else {
            ul.css({
                'display': 'none',
                'flex-direction': 'column' 
            })
        }
    }

    $window.resize(changeNav)
})
