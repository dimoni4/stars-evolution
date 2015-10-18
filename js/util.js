function showHide(divId) {
    var div = $('#' + divId);
    if (div.is(':visible')) {
        div.hide(100);
    } else {
        div.show(100);
    }
};
function protoevents() {
    document.getElementById('ImageContainer').onclick = function () {
        showHide('ImageContainer');
    };
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


};
function bsgevents() {
    document.getElementById('ImageContainer').onclick = function () {
        showHide('ImageContainer');
    };
    document.getElementById('bsg1').onclick = function () {
        showHide('ImageContainer');
        StarsImages.bsg1.drawImage();
    };
    document.getElementById('bsg2').onclick = function () {
        showHide('ImageContainer');
        StarsImages.bsg2.drawImage();
    };
    document.getElementById('bsg3').onclick = function () {
        showHide('ImageContainer');
        StarsImages.bsg3.drawImage();
    };
    document.getElementById('bsg4').onclick = function () {
        showHide('ImageContainer');
        StarsImages.bsg3.drawImage();
    };
    document.getElementById('bsg5').onclick = function () {
        showHide('ImageContainer');
        StarsImages.bsg5.drawImage();
    };
};
function spevents() {
    document.getElementById('ImageContainer').onclick = function () {
        showHide('ImageContainer');
    };
    document.getElementById('supernova1').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova1.drawImage();
    };
    document.getElementById('supernova2').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova2.drawImage();
    };
    document.getElementById('supernova3').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova3.drawImage();
    };
    document.getElementById('supernova4').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova4.drawImage();
    };
    document.getElementById('supernova5').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova5.drawImage();
    };
    document.getElementById('supernova6').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova6.drawImage();
    };
    document.getElementById('supernova7').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova7.drawImage();
    };
    document.getElementById('supernova8').onclick = function () {
        showHide('ImageContainer');
        StarsImages.supernova8.drawImage();
    };
}

