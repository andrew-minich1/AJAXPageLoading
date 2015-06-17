
$(function () {
    var isDelete = false;

    $("#dialogButton").click(function () {
        $.ajax({
            type: "GET",
            url: '/Home/ShowSecondView',
            cache: false,
            dataType: "html",
            success: function (response) {
                if (isDelete == false) {
                    getCSS();
                }
                var start = response.indexOf('<body>');
                var end = response.indexOf('</body>');
                var result = response.substring(start + 6, end);
                $("#result").html(result);
                $("#result").dialog("open");
                $.getScript("/Scripts/JavaScript2.js");
            }
        })
    });
    return false;

    function getCSS() {
        $('<link rel="stylesheet" type="text/css" href="' + "/Content/Page2Style.css" + '" >')
       .appendTo("head");
        isDelete = true;
    };

});


$(function () {
    $("#result").dialog({
        modal: true,
        autoOpen: false,
        resizable: false
    });
});
