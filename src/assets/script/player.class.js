export class Player {
    _img;
    _name;
    _vorname;
    _position;
    _age;

    constructor(name, vorname, position, age, img) {
        this.name = name;
        this.vorname = vorname;
        this.position = position;
        this.age = age;
        this.img = img;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this.name = name;
    }
    get vorname() {
        return this._vorname;
    }
    set vorname(vorname) {
        this.vorname = vorname;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this.position = position;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this.age = age;
    }
    get img() {
        return this._img;
    }
    set img(img) {
        this.img = img;
    }

}