class Robot {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.positionHistoric = [];
        // clean the current position where the robot was placed
        this.clean();
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

                this.clean();

                break;

            case 'bas' :
                if (this.position.getX() > 0) {
                    this.position.setX(this.position.getX() - 1);

                    if (displayDeplacement) {
                        this.displayDeplacement("bas");
                    }

                    this.clean();
                }
                break;

            case 'droite':
                this.position.setY(this.position.getY() + 1);

                if (displayDeplacement) {
                    this.displayDeplacement("droite");
                }

                this.clean();

                break;

            case 'gauche':
                if (this.position.getY() > 0) {
                    this.position.setY(this.position.getY() - 1);

                    if (displayDeplacement) {
                        this.displayDeplacement("gauche");
                    }

                    this.clean();
                }
                break;

            default:
                console.log("Direction inconnue")
                break;
        }
    }

    moveBackward() {
        if (this.positionHistoric.length === 1) {
            console.log("Le robot n'a pas bougé.");
        }
        else {
            // la dernière position enregistrée est la position actuelle ;
            // on veut la position précédente
            const lastPos = this.positionHistoric[this.positionHistoric.length - 2];
            this.position = new Position(lastPos.x, lastPos.y);
            this.displayPosition();
        }
    }

    clean() {
        // deep copy using the spread operator (no ref copy)
        const currentPos = Object.assign({}, this.position);
        this.positionHistoric.push(currentPos);

        console.log(`La position actuelle (${this.position.getX()}, ${this.position.getY()}) est propre.`);
    }

    getPositionHistoric() {
        if (this.positionHistoric.length === 0) {
            console.log("Aucune position nettoyée.");
        }
        else {
            console.log('Les positions nettoyées sont : ');
            this.positionHistoric.forEach(p => console.log(`x = ${p.x}, y = ${p.y}.`));
        }
    }

    // reset aussi les positions nettoyées
    reset() {
        this.position.reset();
        this.positionHistoric = [];
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

    console.log("Déplacement gauche sans print dans la méthode :");
    robot.move('gauche');
    robot.displayPosition();

    // argument invalide
    robot.move('');

    robot.getPositionHistoric();
    robot.moveBackward();

    robot.reset();
    robot.displayPosition(); // (0, 0)
    robot.move('bas');      // Impossible d'aller plus bas que 0
    robot.displayPosition(); // normalement (0, 0)
    robot.getPositionHistoric();
})();