    var imgTag = new Image();
    var imgTagC = new Image();
    var imgTagP = new Image();
    var imgTagDisc = new Image();
    var imgTagTxt = new Image();
    var continueTheLoop = true;
    var animationDone = false;
    var canvas = document.getElementById('logoAnimationCanvas');
    var ctx = canvas.getContext("2d");
    var x = canvas.width;
    var x2 = canvas.width + 240;
    var x3 = canvas.width + 300;
    var x4 = canvas.width + 400;
    var x5 = 272.5;
    var y = 10;
    var y2 = 10;
    var y3 = 10;
    var y4 = 10;
    var y5 = 135;

    setInterval(animate, 24);
    imgTag.onload, imgTagC.onload, imgTagP.onload, imgTagDisc.onload = animate;
    imgTag.src = "B-logo.png";
    imgTagC.src = "C-logo.png";
    imgTagP.src = "P-logo.png";
    imgTagDisc.src = "disc-logo.png";
    imgTagTxt.src = "building-products-logo.png"

    $(imgTagTxt).onload(function() {
        $(imgTagTxt).css(opacity, 0);
    });

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgTag, x, y);
        ctx.drawImage(imgTagC, x2, y2);
        ctx.drawImage(imgTagP, x3, y3);
        ctx.drawImage(imgTagDisc, x4, y4);
        ctx.drawImage(imgTagTxt, x5, y5);



        if (continueTheLoop == true) {
            requestAnimationFrame(animate)
        }


        if (x > 10) {
            x -= 1;
        } else if (x <= 10) {
            x == 10;
        }

        if (x2 > 140) {
            x2 -= 0.6;
        } else if (x2 <= 140) {
            x2 == 140;
        }

        if (x3 > 270) {
            x3 -= 0.5;
        } else if (x3 <= 270) {
            x3 == 270;

        }
        if (x4 > 400) {
            x4 -= 0.4;
        } else if (x4 <= 400) {
            x4 == 400;
            animationDone = true;

        }


    }