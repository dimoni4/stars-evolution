function showHide(divId) {
    var div = $('#' + divId);
    if (div.is(':visible')) {
        div.hide(100);
    } else {
        div.show(100);
    }
};
