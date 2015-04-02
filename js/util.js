function configureSlider() {
    var slider = $("#slider");
    slider.slider();
    slider.slider("option", "min", 1);
    slider.slider("option", "max", 3);
    slider.slider("option", "step", 1);
    return slider;
};


function drawSliderLabels(stepsArr) {
    console.log(stepsArr);


};

function showHide(divId) {
    var div = $('#' + divId);
    if (div.is(':visible')) {
        div.hide(100);
    } else {
        div.show(100);
    }
};

THREE.Object3D.prototype.clear = function () {
    var children = this.children;
    for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        child.clear();
        this.removeChild(child);
    }
    ;
};