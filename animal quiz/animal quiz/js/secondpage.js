$(document).ready(function () {
    var queryString = window.location.search;
    var varArray = queryString.split("=");
    var scoreResult = varArray[1];
    $(".markCoin").text(scoreResult);
    var coin = $(".markCoin").text();
    if (coin >= 200) {
        $(".subtract").css('display', 'block');
    }
   
});