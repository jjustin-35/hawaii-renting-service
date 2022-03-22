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
        if ($window.width()> 700) {
            ul.css({
                'display': 'flex',
            })
        } else {
            ul.css({
                'display': 'none',
            })
        }
    }
    // 視窗改變時執行
    $window.resize(changeNav)
// 滾動時，nav隱藏，滑鼠碰觸上方時彈出、向上按鈕show/off
    let $nav = $('#nav')
    let $titleOption = $('section#titleOption')
    let $up = $('#up')

    function hoverToggle(boolean) {
        if (boolean) {
            let allowDown = true
            $nav.on('mouseenter', function () {
                if (allowDown) {
                    $titleOption.slideDown()
                    allowDown = false
                }
            })
            $titleOption.on('mouseleave', function (event) {
                // 測試leave後的element是不是子元素
                let relatedTarget = event.relatedTarget
                let titleOption = document.getElementById('titleOption')
                if (!$.contains(titleOption, relatedTarget)) {
                    $titleOption.slideUp()
                    setTimeout(function () {
                        allowDown = true
                    }, 500)
                }
            })
        } else {
            $nav.off('mouseenter')
            $titleOption.off('mouseleave')
        }
    }

    function scrollToggle () {
        $titleOption.slideUp()
        $nav.addClass('nav')
        $up.show()
        hoverToggle(true)
        let scrollTop = $window.scrollTop()
        if (scrollTop < 100) {
            $up.hide()
        }
        if (scrollTop == 0) {
            $titleOption.slideDown()
            hoverToggle(false)
        }
    }
    $window.on('scroll', scrollToggle)

// 回到頂端
    $up.click(function () {
        $window.scrollTop('0')
    })
})
