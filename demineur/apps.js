let Demineur = {
    name: 'Demineur',
//DONNEES DES DIFFICULTE///
    difficulties: {
        easy: {
            lines: 8,
            columns: 8,
            mines: 10,
        },
        normal: {
            lines: 12,
            columns: 12,
            mines: 20,
        },
        hard: {
            lines: 16,
            columns: 16,
            mines: 32,
        },
        extreme: {
            lines: 20,
            columns: 20,
            mines: 48,
        },
    },

    settings: {

    },
/*Create array*/
    game: {
        status: 0,
        field: [],
    },
/*INITIALISATION DU JEU AVEC UNE DIFFICULTE */
    initialise: function() {
        this.startGame('easy');
    },
/*DEMARRER LE JEU EN FONCTION DE LA DIFFICULTE*/
    startGame: function(difficulty) {
        this.settings = this.difficulties[difficulty];
        this.drawGameBoard();
        this.resetGame();
    },
/*CREATION DU PLATEAU DE JEU EN FONCTION DE LA DIFFICULTE*/
    drawGameBoard: function() {

        let board = document.getElementById('plateau'); //RECUPERATION DE L'ELEMENT PLATEAU DANS LE HTML//
        board.innerHTML = '';

        document.getElementById('result').innerHTML = '';

        let border = document.createElement('table'); //REPRESENTE LE CONTOURS DU TABLEAU //
        border.setAttribute('oncontextmenu', 'return false;');
        let field = document.createElement('tbody'); //REPRESENTE LE CONTENU DU TABLEAU //
        border.appendChild(field); // LIE LES DEUX PARTIT DU TABLEAU //
        border.className = 'field';

        board.appendChild(border);

        for (let i = 1; i <= this.settings['lines']; i++) { //RECUPERATION DE LA DONNE LIGNE EN FONCTION DE LA DIFFICULTE//
            let line = document.createElement('tr');

            for (let j = 1; j <= this.settings['columns']; j++) {
                let cell = document.createElement('td');
                cell.id = 'cell-'+i+'-'+j;
                cell.className = 'cell';
                cell.setAttribute('onclick', this.name+'.checkPosition('+i+', '+j+', true);'); //CLIC GAUCHE INTERACTION //
                cell.setAttribute('oncontextmenu', this.name+'.markPosition('+i+', '+j+'); return false;');//CLIC DROIT POUR MARQUAGE//
                line.appendChild(cell);
            }
            field.appendChild(line);
        }
    },

    resetGame: function() {

        /* CREATION DU CHAMPS VIDE */
        this.game.field = [];
        for (let i = 1; i <= this.settings['lines']; i++) {
            this.game.field[i] = [];
            for (let j = 1; j <= this.settings['columns']; j++) {
                this.game.field[i][j] = 0;
            }
        }

        /* AJOUT DES MINES */
        for (let i = 1; i <= this.settings['mines']; i++) {
            /* PLACEMENT DES MINE ALEATOIREMENT */
            x = Math.floor(Math.random() * (this.settings['columns'] - 1) + 1);
            y = Math.floor(Math.random() * (this.settings['lines'] - 1) + 1);
            while (this.game.field[x][y] === -1) {
                x = Math.floor(Math.random() * (this.settings['columns'] - 1) + 1);
                y = Math.floor(Math.random() * (this.settings['lines'] - 1) + 1);
            }
            this.game.field[x][y] = -1;

            /* MISE A JOUR DES DONNEE ADJACENTE */
            for (j = x-1; j <= x+1; j++) {
                if (j === 0 || j === (this.settings['columns'] + 1))
                    continue;
                for (let k = y-1; k <= y+1; k++) {
                    if (k === 0 || k === (this.settings['lines'] + 1))
                        continue;
                    if (this.game.field[j][k] !== -1)
                        this.game.field[j][k] ++;
                }
            }
        }

        /*DEFINITION DU STATUS DU JEU*/
        this.game.status = 1;
    },

    checkPosition: function(x, y, check) {

        /* VERIFICATION DU FONCTIONNEMENT */
        if (this.game.status !== 1)
            return;

        /* VERIFICATION SI LA CELLULE A DEJA ETE VISITE  */
        if (this.game.field[x][y] === -2) {
            return;
        }

        /* VERIFIER SI LA CELLULE EST MARQUE */
        if (this.game.field[x][y] < -90) {
            return;
        }

        /* VERIFIER SI LA CELLULE EST UNE MINE*/
        if (this.game.field[x][y] === -1) {
            document.getElementById('cell-'+x+'-'+y).className = 'cell bomb';
            this.displayLose();
            return;
        }

        /* MARQUE LA CELLULE COMME VERIFIER */
        document.getElementById('cell-'+x+'-'+y).className = 'cell clear';
        if (this.game.field[x][y] > 0) {
            /* MARQUE LE NOMBRE DE MINE DES CELLULE ADJACENTE */
            document.getElementById('cell-'+x+'-'+y).innerHTML = this.game.field[x][y];

            /* MARQUE LA CASE COMME VISITE  */
            this.game.field[x][y] = -2;
        } else if (this.game.field[x][y] === 0) {

            this.game.field[x][y] = -2;

            /*DEVOILE LES CELLULES ADJACENTES*/ ////+1 et -1 represente les case adjacente sur les ligne et colonne jusqua la decouverte d'une case contenant une mine //
            for (let j = x-1; j <= x+1; j++) {
                if (j === 0 || j === (this.settings['columns'] + 1))
                    continue;
                for (let k = y-1; k <= y+1; k++) {
                    if (k === 0 || k === (this.settings['lines'] + 1))
                        continue;
                    if (this.game.field[j][k] > -1) {
                        this.checkPosition(j, k, false);
                    }
                }
            }
        }

        /* VERIFICATION DE VICTOIRE*/
        if (check !== false)
            this.checkWin();
    },
/* MARQUAGE DES CELLULES*/
//0 CASE VIDE
//-1 MINE
//-2 CASE VISITE
//-100 CASE MARQUE
//
    markPosition: function(x, y) {

        /* VERIFICATION DU FONCTIONNEMENT DU JEU  */
        if (this.game.status !== 1)
            return;

        /* VERIFIE SI LA CELLULE EST DEJA VISITE */
        if (this.game.field[x][y] === -2)
            return;

        if (this.game.field[x][y] < -90) {
            /* RETIRE LE MARQUAGE*/
            document.getElementById('cell-'+x+'-'+y).className = 'cell';
            document.getElementById('cell-'+x+'-'+y).innerHTML = '';
            this.game.field[x][y] += 100;

        } else {
            /* APPLIQUE LA MARQUAGE */
            document.getElementById('cell-'+x+'-'+y).className = 'cell marked';
            document.getElementById('cell-'+x+'-'+y).innerHTML = '!';
            this.game.field[x][y] -= 100;
        }
    },
/*VERRIFICATION DE VICTOIRE */
    checkWin: function() {
        /* VERIFICATION DE TOUTES LES CASES  */
        for (let i = 1; i <= this.settings['lines']; i++) {
            for (let j = 1; j <= this.settings['columns']; j++) {
               let v = this.game.field[i][j];
                if (v !== -1 && v !== -2 && v !== -101)
                    return;
            }
        }

        /* SI AUCUNE CASE N'EST BLOQUANTE AFFICHER LA VICTOIRE */
        this.displayWin();
    },

    displayWin: function() {
        /* AFFICHAGE DE VICTOIRE */
        document.getElementById('result').innerHTML = 'Gagn&eacute;';
        document.getElementById('result').style.color = '#43b456';

        /* CHANGE LE STATUT DU JEU A TERMINER */
        this.game.status = 0;
    },

    displayLose: function() {
        /* AFFICHAGE DEFAITE  */
        document.getElementById('result').innerHTML = 'Vous avez perdu !';
        document.getElementById('result').style.color = '#CC3333';
        document.getElementById('result').style.fontWeight = "bold";

        /* CHANGE LE STATUT DU JEU A TERMINER */
        this.game.status = 0;
    },
};




