
$(function () {

    var loadPage = true;

    $("#dialogButton").click(function () {
        if (loadPage == true) {
            $.ajax({
                type: "GET",
                url: '/Home/ShowSecondView',
                cache: false,
                dataType: "html",
                success: function (response) {
                    getCSS();
                    var start = response.indexOf('<body>');
                    var end = response.indexOf('</body>');
                    var result = response.substring(start + 6, end);
                    $("#result").html(result);
                    $.getScript("/Scripts/JavaScript2.js");
                    loadPage = false;
                }
            })
        }
        $("#result").dialog("open");
    });
    return false;

    function getCSS() {
        $('<link rel="stylesheet" type="text/css" href="' + "/Content/Page2Style.css" + '" >')
       .appendTo("head");
        loadCSS = true;
    };

});


$(function () {
    $("#result").dialog({
        modal: true,
        autoOpen: false,
        resizable: false
    });
});
