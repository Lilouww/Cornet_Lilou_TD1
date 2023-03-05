# M413 - TD1 : Réponses aux Questions

## Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

L'evenement qui declenchera l'appelle de cette fonction est le chargement de la page.

## Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ?

La methode utilisee pour recuperer l'objet representant la balise h1 est getElementById().

## Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ?

La propriete de l'objet representant la balise h1 utilisee est .textContent.

## Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise <h2> ?

La methode utilisee pour recuperer l'objet representant la premiere balise h2 est querySelector().

## Comment faire pour connaitre le nombre de balise <h2> du document ?

Pour connaitre le nombre de balise h2 du document, il faut utiliser querySelectorAll() puis .length.

## Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?

La methode utilisee pour recuperer les objets de la classe est getElementsByClassName().

## Comment avez-vous déterminé si un nombre est pair ?

Pour determiner si un nombre est pair ou non, il suffit de verifier que %2==0.

## Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?

textContent et innerText ne recuperent pas la balise "span", innerHTML si.

## Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?

Il suffit de faire un querySelectorAll[0]

## Même question avec le dernier auteur de la liste.

Il suffit de faire un querySelectorAll[longueur-1]

## Comment obtenez-vous le nombre de jours ?
en faisant la date du 19 juillet 2023 - la date du jour.

##  Comment faites-vous la mise à jour du texte ?
la mise à jour du texte se fait avec un document.getElementById().textContent=

## Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?
setInterval() est mieux car elle permet de repeter la fonction toutes les x intervalles alors que setTimeout(), meme si dans ce contexte donne le meme resultat, permet juste d'executer la fonction apres x temps donné.

## Quel évènement avez-vous utilisé ?
un addEventListener sur le input du formulaire en lui donnant un id.

## Comment avez-vous fait changer la couleur du champ texte ?
classList.add et classList.remove pour ajouter et enlever une classe.