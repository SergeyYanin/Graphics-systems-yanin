let clear_image;

class Filter {

    constructor(){
        this.image = null;
    }

    bw() {
        for (let pixel of this.image.values()) {
            let avg = pixel.getRed() * 0.1 + pixel.getGreen() * 0.3 + pixel.getBlue() * 0.6;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
        this._draw();
    }

    sepia() {
        for (let pixel of this.image.values()) {
            let avg = pixel.getRed() * 0.1 + pixel.getGreen() * 0.3 + pixel.getBlue() * 0.6;
            pixel.setRed(avg + 100);
            pixel.setGreen(avg + 50);
            pixel.setBlue(avg);
        }
        this._draw();
    }

    noises() {
        for (let pixel of this.image.values()) {
            let rand = (0.5 - Math.random()) * 100;
            pixel.setRed(pixel.getRed()+rand);
            pixel.setGreen(pixel.getGreen() + rand);
            pixel.setBlue(pixel.getBlue()+rand);
        }
        this._draw();
    }

    reset(){
        this.image = new SimpleImage(clear_image);
        this._draw();
    }

    _draw(){
        let canvas = document.getElementById("image-canvas");
        this.image.drawTo(canvas);
    }
}

let filter = new Filter();

function upload() {
    clear_image = document.getElementById("image-file");
    filter.image = new SimpleImage(clear_image);
    filter._draw();
}