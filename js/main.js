idAnimationFrame = 0;

window.onload = function () {
    slider = configureSlider();
    events();
    stepsArr = [];
    selectMass(1, 'Маса > 15 M¤');

};

function drawMainScene(stepName) {
    var step = steps[stepName];
    document.getElementById('starLabel').innerHTML = step.mainLabel;
    document.getElementById('polyaDivLeft').innerHTML = step.infoLeft;
    document.getElementById('polyaDiv2Right').innerHTML = step.infoRight;
    document.getElementById('temperature').innerHTML = step.temperature;
    document.getElementById('light').innerHTML = step.light;


    drawStar(step);
};

function selectMass(massId, massName) {
    document.getElementById('massLabel').innerHTML = massName;
    document.getElementById('time_slider').innerHTML = massId.time_slider;
    if (massId==1) {
        document.getElementById('time_slider3').innerHTML = '10млн.років.  20млн.років. 50млн.років.';
        document.getElementById('time_slider').innerHTML = '';
        document.getElementById('time_slider2').innerHTML = '';
    }
    if (massId==2) {
        document.getElementById('time_slider3').innerHTML = '10млн.років.  25млн.років. 100млн.років.';
        document.getElementById('time_slider').innerHTML = '';
        document.getElementById('time_slider2').innerHTML = '';
    }
    if (massId==3) {
        document.getElementById('time_slider').innerHTML = '';
        document.getElementById('time_slider3').innerHTML = '';
        document.getElementById('time_slider2').innerHTML = '10млн.років.  27млн.років. 55млн.років. 110млн.років.';
    }
    if (massId==4) {
        document.getElementById('time_slider').innerHTML = '10млн.років.  15млн.років.  19млн.років. 25млн.років. 50млн.років. 110млн.років.';
        document.getElementById('time_slider3').innerHTML = '';
        document.getElementById('time_slider2').innerHTML = '';
    }
    if (massId==5) {
        document.getElementById('time_slider').innerHTML = '10млн.років.  20млрд.років.  25млрд.років. 29млрд.років. 30млрд.років.';
        document.getElementById('time_slider3').innerHTML = '';
        document.getElementById('time_slider2').innerHTML = '';
    }
    if (massId==6) {
        document.getElementById('time_slider').innerHTML = '';
        document.getElementById('time_slider3').innerHTML = '10млн.років. 50млрд.років. 75млрд.років.';
        document.getElementById('time_slider2').innerHTML = '';
    }
    if (massId==7) {
        document.getElementById('time_slider').innerHTML = '';
        document.getElementById('time_slider3').innerHTML = '10млн.років. 100млрд.років.';
        document.getElementById('time_slider2').innerHTML = '';
    }
    stepsArr = masses[massId];
    slider.slider("option","slide","");
    slider.slider("option","slide",null);
    slider.slider("value", 1);
    slider.slider("option", "max", stepsArr.length);
    drawMainScene(stepsArr[0]);
    drawSliderLabels(stepsArr);
    $('#massMenu').hide(100);
}

function events() {
    document.getElementById('burgerBtn').onclick=function(){
        showHide('massMenu');
    };

    $("#slider").on("slide", function (event, ui) {
        drawMainScene(stepsArr[ui.value - 1]);
    });
}
