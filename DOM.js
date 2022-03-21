let ul = $('#navUl')

// 手機視窗，漢堡選單
$('#mobileNav').click(function () {
    ul.slideToggle()
})

$(document).ready(function () {
    let $window = $(window)
// 視窗改變時，nav會自動調整
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
    // 視窗改變時執行
    $window.resize(changeNav)
// 滾動時，nav隱藏，滑鼠碰觸上方時彈出
    let $nav = $('#nav')
    let $hideNav = $('#hideNav')

    $window.on('scroll', function () {
        $nav.slideUp()
        $hideNav.show()
        if ($window.scrollTop() == 0) {
            $nav.slideDown()
            $hideNav.hide()
        }
    })
    
    $hideNav.mouseenter(function () {
        $nav.slideDown()
        // $nav.slideUp()
    })
})
