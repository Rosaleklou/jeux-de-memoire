const divResultat = document.querySelector("#resultat");
// divResultat.innerHTML = "coucou";
// console.log(divResultat);

var tabJeu =[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

afficherTableau();

function afficherTableau(){
    var txt ="";

    for(var i=0; i <tabJeu.length; i++){
        txt +="<div>";
        for(var j=0; j < tabJeu[i].length ; j++){
            txt +="<button class='btn btn-primary m-2' style='width:100px;height:100px'>Afficher</button>";
        }
        txt += "</div>";

    }

    divResultat.innerHTML = txt;
} 