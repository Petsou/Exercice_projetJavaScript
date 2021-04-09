// Pour afficher dans le compteur, le nombre de message sur la page

var compteur = document.getElementById('count');
var paragraphe = document.getElementsByTagName('p');
var suppr = document.getElementsByClassName('trash');
var ajouter = document.getElementById('btn-add');
var inputtext = document.getElementById('add-message');

compteur.textContent = paragraphe.length

// Supprimer un message en cliquant sur la poubelle

for (var i = 0; i < suppr.length; i++){

    suppr[i].addEventListener('click',function(){
        
        console.log('Le message a été supprimé')
        this.parentNode.remove()
        console.log("Il reste : " + paragraphe.length + " messages")
        compteur.textContent = paragraphe.length
        
    })

}

// Pour ajouter de nouveaux messages :

ajouter.addEventListener('click',function(){

    console.log("J'ai rajouté un nouveau poste")

    // Je crée une nouvelle div à laquelle j'insère la class row déjà existante que j'insère dans le body

    var boite = document.createElement('div')
    boite.classList.add("row")
    document.body.appendChild(boite)

    // J'insère à l'intérieur de ma nouvelle div les éléments correspondants (img, h6 et p)

    //Création du nouvel avatar

    var newAvatar = document.createElement('img') //Je crée un nouvel élément img dans une variable newAvatar
    newAvatar.src ="images/avatar-1.jpg" //Je lui défini sa source
    newAvatar.classList.add("avatar") // Je lui attribut la class 'avatar' déjà existante dans le HTML
    boite.appendChild(newAvatar) //J'intègre mon newAvatar dans ma div boite

    //Création de la div qui regroupe le nom de l'avatar et son message

    var divh6ETp = document.createElement('div')
    boite.appendChild(divh6ETp)

    //Création du nouveau nom

    var newh6 = document.createElement('h6')
    var texth6 = document.createTextNode('Fred Tonio')
    newh6.appendChild(texth6)
    divh6ETp.appendChild(newh6) //J'insère cette fois-ci le h6 dans la div divh6ETp

    //Création du nouveau message

    var newp =document.createElement('p')
    divh6ETp.appendChild(newp) //J'insère cette fois-ci le h6 dans la div divh6ETp
    newp.textContent = inputtext.value
    inputtext.value = ""; // Pour supprimer le texte dans l'input après le clique
    compteur.textContent = paragraphe.length

    // Création de la nouvelle poubelle

    var newbin = document.createElement('img')
    newbin.src ="images/trash.png"
    newbin.classList.add('trash')
    boite.appendChild(newbin)

    // Pour supprimer le nouveau message crée

    newbin.addEventListener('click',function(){
        
        console.log('Le noveau message a été supprimé')
        this.parentNode.remove()
        console.log("Il reste : " + paragraphe.length + " messages")
        compteur.textContent = paragraphe.length
    })

})



// document.getElementById('btn-search').addEventListener('click',function(){
//     for(var i = 0 ; i < document.getElementsByTagName('p').length ; i++ ){
//         if(document.getElementsByTagName('h6')[i].textContent != document.getElementById("search-message").value){
//             document.getElementsByTagName('p')[i].parentNode.parentNode.style.display ='none'
//         }else{
//             document.getElementsByTagName('p')[i].style.display ='block'
//         }
//     }
// })




    







