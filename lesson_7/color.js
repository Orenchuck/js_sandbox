export default class Color {
    constructor (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    toString () {

        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
    }

    toBlack () {
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    toWhite () {
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }

    getLightness () {
        let lightness = (Math.round(this.r) + Math.round(this.b) + Math.round(this.g)) / 3;
        return lightness;
    }

    toGrayscale () {
        let num = Math.round(this.getLightness ());
        this.r = num;
        this.g = num;
        this.b = num;
    }

    invert () {
        this.r = 255 - Math.round(this.r);
        this.g = 255 - Math.round(this.g);
        this.b = 255 - Math.round(this.b);
    }

    random () {
        function result () {return Math.floor(Math.random() * (255 - 0 + 1))};
        this.r = result();
        this.g = result();
        this.b = result();
    }
}


function fromString(str) {
    let r1 = str[4];
    let i = 5;

    while (str[i] != ',') {
        r1 += str[i];
        i += 1;
    }
    r1 = +r1;

    i += 1;
    let g1 = str[i];
    i += 1;

    while (str[i] != ',') {
        g1 += str[i];
        i += 1;
    }
    g1 = +g1;

    i += 1;
    let b1 = str[i];
    i += 1;
    while (str[i] != ')') {
        b1 += str[i];
        i += 1;
    }
    b1 = +b1;

    const color2 = new Color (r1, g1, b1);

    return color2;
}

