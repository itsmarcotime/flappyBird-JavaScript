export class InputStuff {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e => {
            // if spacebar is pressed && if spacebar isnt in the keys array
            if (e.key === " " && this.keys.indexOf(e.key) === -1) {
                // then add it to the keys array
                this.keys.push(e.key);
            };
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (e.key === ' ') {
                // splice takes two arguments:
                // index of element you want to remove & how many elements to remove at that index.
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });
    };

    update() {

    };

    draw() {

    };
}