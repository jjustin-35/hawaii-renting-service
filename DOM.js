// 在元素載入完成時處理函數
$(document).ready(function () {
    let ul = $('#navUl')

    // 手機視窗，漢堡選單
    $('#mobileNav').click(function () {
        ul.slideToggle()
    })

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
    let $titleOption = $('#titleOption')

    function scrollToggle () {
        $titleOption.slideUp()
        $nav.addClass('nav')
        if ($window.scrollTop() == 0) {
            $titleOption.slideDown()
        }
    }
    $window.on('scroll', scrollToggle)

    $nav.mouseover(function () {
        $window.off('scroll')
        $titleOption.slideDown()
    }).mouseout(function () {
        $titleOption.slideDown()
        $window.on('scroll', scrollToggle)
    })
})
