(function() {
    var fileUploadEl = document.getElementById('image-file'),
        srcImgEl = document.getElementById('src-image')

    fileUploadEl.addEventListener("change", function (e) {
        srcImgEl.src = URL.createObjectURL(e.target.files[0]);
    }, false);

    srcImgEl.onload = function () {
        var src = cv.imread(srcImgEl); // load the image from <img>
        var dst = new cv.Mat();

        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

        cv.Canny(src, dst, 50, 100, 3, false); // You can try more different parameters
        cv.imshow('the-canvas', dst); // display the output to canvas

        src.delete(); // remember to free the memory
        dst.delete();
    }

})()