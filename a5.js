class Cylinder {
    constructor(_radius, _height) {
        this.radius = _radius;
        this.height = _height;
    }

    getVolume() {
        return parseFloat((Math.PI * this.height * (this.radius**2)).toFixed(4));
    }
}

class Sphere {
    constructor(_radius) {
        this.radius = _radius;
    }

    getVolume() {
        return parseFloat((Math.PI * 4/3 * (this.radius**3)).toFixed(4));
    }
}

class Cone {
    constructor(_radius, _height) {
        this.radius = _radius;
        this.height = _height;
    }

    getVolume() {
        return parseFloat(((Math.PI/3) * this.height * (this.radius**2)).toFixed(4));
    }
}

let cylinder = new Cylinder(5, 4);
let cone = new Cone(5, 4);
let sphere = new Sphere(5);

console.log(cylinder.getVolume());
console.log(cone.getVolume());
console.log(sphere.getVolume());