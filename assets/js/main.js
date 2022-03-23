// Les variables utiles
let saisie = document.getElementById(`saisie`); // La saisie utilisateur
let formulaire = document.champs; // Le formulaire

// Cibler l'élément ul dans HTML
let ul = document.getElementById(`ul`);

/*************************************************************************
************************** EVENT principal = SUBMIT **********************
**************************************************************************/

/******* EVENT = Ajout d'une tache avec submit *******/
formulaire.addEventListener(`submit`, function (e) {

    e.preventDefault();

    // Créer l'élement li (enfant de ul)
    let list = document.createElement(`li`);
    list.setAttribute(`class`, `list`);
    ul.appendChild(list);

    // Créer l'élement a (enfant de li)
    let tache = document.createElement(`a`);
    tache.setAttribute(`class`, `tache`);
    list.appendChild(tache);

    // Créer l'élement button (enfant de li)
    let btn = document.createElement(`button`);
    btn.setAttribute(`type`, `button`);
    btn.setAttribute(`class`, `btn-close`);
    btn.setAttribute(`id`, `btn`);
    list.appendChild(btn);

    // Condition si champs pas vide
    if (saisie.value != ``) {

        // Insérer la saisie utilisateur dans le a
        tache.innerText = saisie.value;
        
        // Réinitialiser le champs
        saisie.value = ``;

    } else {
        alert(`Ce champs est requis !!!`)
    }


    /**********************************************************
    *** EVENT = Suppression d'un li avec click sur la croix ***
    ***********************************************************/
    btn.addEventListener(`click`, function () {

        list.style.display = `none`;

    });

    /******************************************************************************************
    * EVENT = Griser bgcolor de li + barrer le texte d'une tache (a) avec click sur l'item li *
    *******************************************************************************************/

    list.addEventListener(`click`, function () {

        list.style.backgroundColor = `grey`;

        tache.style.color = `white`;
        tache.style.textDecoration = "line-through";

    });

    // // // BOUCLE FOR pour les BGCOLOR // // //

    //Cibler les index pairs
    let liPair = document.querySelectorAll('li:nth-child(2n)');

    // Changer le bgcolor des index pairs avec boucle FOR
    for (i = 0; i < liPair.length; i++) {

        liPair[i].setAttribute(`id`,`test`);

    };

    /*****************************************************
    *** EVENT = Enlever le bleu lors du mouseover du a ***
    ******************************************************/
     tache.addEventListener(`mouseover`, function(){
        
        tache.style.color=`black`;

    });

});