window.drawStar= function (step, scene) {
    cancelAnimationFrame( idAnimationFrame );
    $('#graphic').empty();
    step.draw(scene);
};