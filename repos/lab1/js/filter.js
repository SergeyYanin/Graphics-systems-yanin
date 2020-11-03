class Filter {

    constructor(){
        this.image = null;
    }

    makeGray() {
        for (var pixel of this.image.values()) {
            var avg = pixel.getRed() * 0.3 + pixel.getGreen() * 0.59 + pixel.getBlue() * 0.11;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
        this._drawImage();
    }

    sepia() {
        for (var pixel of this.image.values()) {
            var avg = pixel.getRed() * 0.3 + pixel.getGreen() * 0.59 + pixel.getBlue() * 0.11;
            pixel.setRed(avg + 100);
            pixel.setGreen(avg + 50);
            pixel.setBlue(avg);
        }
        this._drawImage();
    }

    negativ() {
        for (var pixel of this.image.values()) {
            pixel.setRed(255 - pixel.getRed());
            pixel.setGreen(255 - pixel.getGreen());
            pixel.setBlue(255 - pixel.getBlue());
        }
        this._drawImage();
    }

    addNoise() {
        for (var pixel of this.image.values()) {
            var rand = (0.5 - Math.random()) * 100;
            pixel.setRed(pixel.getRed()+rand);
            pixel.setGreen(pixel.getGreen() + rand);
            pixel.setBlue(pixel.getBlue()+rand);
        }
        this._drawImage();
    }
    _drawImage(){
        let canvas = document.getElementById("image-canvas");
        this.image.drawTo(canvas);
    }
}