// Récuperer le nombre de messages :
var messageCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messageCount;


// Lorsque je clique sur une poubelle, le message en question doit etre delete :

for (var i = 0 ; i < document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener('click',function(){
       this.parentNode.remove();

       // Récuperer le nombre de messages mise à jour :
        var messageCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messageCount;
    })
}

// Créer un event sur le bouton pour rajouter un message :
document.getElementById('btn-add').addEventListener("click", function () {

    // Creation de la div parent du message :
    var mainDiv = document.createElement('div')
    mainDiv.className = "row";
    document.body.appendChild(mainDiv);


    // Création et intégration de l'avatar :
    var image = document.createElement("img");
    image.className = "avatar";
    image.src = "avatar-2.jpg";
    mainDiv.appendChild(image)


    // Creation de la div qui englobe le message et le nom de la personne puis integration :
    var nameMessageDiv = document.createElement("div");
    mainDiv.appendChild(nameMessageDiv)


    // Creation du nom de la personne puis integration :
    var nameH6 = document.createElement('h6');
    nameH6.textContent = 'Mouhamed Web';
    nameMessageDiv.appendChild(nameH6);

    // Creation du message puis integration :
    var content = document.createElement('p');
    content.textContent = document.getElementById('add-message').value;
    nameMessageDiv.appendChild(content)

    // clean l'input aprés envoie !
    document.getElementById('add-message').value = "";


    // Creation et integration de la poubelle :
    var trash = document.createElement('img');
    trash.className = "trash";
    trash.src = "trash.png";
    mainDiv.appendChild(trash);


    // Mettre à jour le compteur :
    var messageCount = document.getElementsByTagName('p').length;
    document.getElementById('count').textContent = messageCount;



    // // Mettre en place la suppression des messages crées :
    trash.addEventListener('click',function(){
        this.parentNode.remove()
    })

        // Mettre à jour le compteur :
        var messageCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messageCount;
    


})

