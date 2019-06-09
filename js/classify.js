$(function() {
    $('.pho1').on('mouseover', function() {
        $('.textBox').eq($(this).index()).stop().animate({
            bottom: 0
        }, 500)
    })
    $('.pho1').on('mouseout', function() {
        $('.pho1 .textBox').stop().animate({
            bottom: -21
        }, 500)
    })
})