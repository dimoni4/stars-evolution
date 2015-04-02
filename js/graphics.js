window.drawStar= function (step, scene) {
    cancelAnimationFrame( idAnimationFrame );
    $('#graphic').empty();
    step.draw(scene);


//            var graphic = $('#time_slider');
//            graphic.empty();
//            graphic.html("<img height ='40' width='1218' src='img/time_slider/1.jpg'>");


};