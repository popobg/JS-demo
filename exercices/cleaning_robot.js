class Robot {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    getName() {
        return this.name;
    }

    getPosition() {
        return this.position;
    }

    displayPosition() {
        console.log(`${this.name} : x = ${this.position.getX()}, y = ${this.position.getY()}`);
    }

    displayDeplacement(direction) {
        console.log(`Déplacement vers ${direction} :`);
        this.displayPosition();
    }

    move(direction, displayDeplacement = false) {
        switch(direction) {
            case 'haut':
                this.position.setX(this.position.getX() + 1);

                if (displayDeplacement) {
                    this.displayDeplacement("haut");
                }

                break;

            case 'bas' :
                if (this.position.getX() > 0) {
                    this.position.setX(this.position.getX() - 1);

                    if (displayDeplacement) {
                        this.displayDeplacement("bas");
                    }
                }
                break;

            case 'droite':
                this.position.setY(this.position.getY() + 1);

                if (displayDeplacement) {
                    this.displayDeplacement("droite");
                }

                break;

            case 'gauche':
                if (this.position.getY() > 0) {
                    this.position.setY(this.position.getY() - 1);

                    if (displayDeplacement) {
                        this.displayDeplacement("gauche");
                    }
                }
                break;

            default:
                console.log("Direction inconnue")
                break;
        }
    }

    clean() {
        console.log(`La position actuelle (${this.position.getX()}, ${this.position.getY()}) est propre.`);
    }

    reset() {
        this.position.reset();
    }
}

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(newX) {
        this.x = newX;
    }

    setY(newY) {
        this.y = newY;
    }

    reset() {
        this.x = 0;
        this.y = 0;
    }
}

(function () {
    const pos = new Position(2, 6);

    const robot = new Robot('Toto', pos);
    robot.displayPosition();

    robot.move('droite', true);
    robot.move('bas', true);
    robot.move('gauche');
    console.log("Déplacement gauche sans print dans la méthode :")
    robot.displayPosition();
    robot.move('');
    robot.clean();

    robot.reset();
    robot.displayPosition();
})();