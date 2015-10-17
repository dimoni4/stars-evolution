events();
function showHide(divId) {
    var div = $('#' + divId);
    if (div.is(':visible')) {
        div.hide(100);
    } else {
        div.show(100);
    }
};
function events() {
    document.getElementById('proto1').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto1.drawImage();
    };
    document.getElementById('proto2').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto2.drawImage();
    };
    document.getElementById('proto3').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto3.drawImage();
    };
    document.getElementById('proto4').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto4.drawImage();
    };
    document.getElementById('proto5').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto5.drawImage();
    };
    document.getElementById('proto6').onclick = function () {
        showHide('ImageContainer');
        StarsImages.proto6.drawImage();
    };
    document.getElementById('ImageContainer').onclick = function () {
        showHide('ImageContainer');
    };
}

