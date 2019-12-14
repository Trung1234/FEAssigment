$(document).ready(function () {
    var coin = $(".markCoin").text();
    if (coin >= 200) {
        $(".wrapper-right-menu").css('display', 'block');
    }
    $(".blue").click(function () {
        $("#ding")[0].play();
        $(".blueIMG").css('display', 'block');
        $(".red, .green, .yellow").css('display', 'none');
        $(".specColor").css('display', 'block');
        $(".mainPicture").css('display', 'none');
        $(".mainPictureDiv").slideDown(2000);
        var coin = $(".markCoin").text();
        var result = parseInt(coin) + 100;
        $(".markCoin").text(result);
    });
    $(".red, .green, .yellow").click(function () {
        $("#wrong")[0].play();
        $(".red, .green, .yellow, .blue").css('display', 'none');
        $(".plusMarkLose").text($(".markCoin").text());
        $(".wrapper-right-menu").find(".subtract").contents().unwrap();
        $(".playagain").css('display', 'block');
        $(".mainPicture").css('display', 'none');
        $(".mainPictureDivLose").slideDown(2000);
    });
});