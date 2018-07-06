function processus(pageID) {
    
    /*====Login=======*/
    var obj4 = document.createElement('div');
    obj4.id = 'obj_4';
    obj4.title = 'obj_4';
    obj4.style = 'position: absolute; top: 80px; left: 160px; width: 80px; height: 30px; border: 3px solid rgb(0,0,0); border-radius:10px; text-align:center;';
    document.getElementById('processus').appendChild(obj4);

    var txt1 = document.createTextNode("Login");
    obj4.appendChild(txt1);

    /*======Ligne======*/
    var obj5 = document.createElement('div');
    obj5.id = 'obj_5';
    obj5.title = 'obj_5';
    obj5.style.position = 'absolute';
    obj5.style.left = '200px';
    obj5.style.top = '120px';
    obj5.style.width = '3px';
    obj5.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj5.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj5);

    /*======Flèche======*/
    var obj6 = document.createElement('div');
    obj6.id = 'obj_6';
    obj6.title = 'obj_6';
    obj6.style.position = 'absolute';
    obj6.style.left = '190px';
    obj6.style.top = '150px';
    obj6.style.width = '20px';
    obj6.style.height = '20px';
    document.getElementById('processus').appendChild(obj6);

    var obj7 = document.createElement('div');
    obj7.style.borderTop = '10px solid rgb(0,0,0)';
    obj7.style.borderLeft = '10px solid transparent';
    obj7.style.borderRight = '10px solid transparent';
    document.getElementById('obj_6').appendChild(obj7);

    /*======Acceuil======*/
    var obj8 = document.createElement('div');
    obj8.id = 'obj_8';
    obj8.title = 'obj_8';
    obj8.style.position = 'absolute';
    obj8.style.left = '160px';
    obj8.style.top = '160px';
    obj8.style.width = '80px';
    obj8.style.height = '30px';
    obj8.style.border = '2px solid rgb(0,0,0)';
    obj8.style.borderRadius = '10px';
    obj8.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj8);

    var txt2 = document.createTextNode("Acceuil");
    obj8.appendChild(txt2);

    /*======Ligne======*/
    var obj9 = document.createElement('div');
    obj9.id = 'obj_9';
    obj9.title = 'obj_9';
    obj9.style.position = 'absolute';
    obj9.style.left = '200px';
    obj9.style.top = '200px';
    obj9.style.width = '3px';
    obj9.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj9.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj9);

    /*======Flèche======*/
    var obj10 = document.createElement('div');
    obj10.id = 'obj_10';
    obj10.title = 'obj_10';
    obj10.style.position = 'absolute';
    obj10.style.left = '190px';
    obj10.style.top = '230px';
    obj10.style.width = '20px';
    obj10.style.height = '20px';
    document.getElementById('processus').appendChild(obj10);

    var obj11 = document.createElement('div');
    obj11.style.borderTop = '10px solid rgb(0,0,0)';
    obj11.style.borderLeft = '10px solid transparent';
    obj11.style.borderRight = '10px solid transparent';
    document.getElementById('obj_10').appendChild(obj11);

    /*======Completer la date et le lieu======*/
    var obj12 = document.createElement('div');
    obj12.id = 'obj_12';
    obj12.title = 'obj_12';
    obj12.style.position = 'absolute';
    obj12.style.left = '100px';
    obj12.style.top = '240px';
    obj12.style.width = '200px';
    obj12.style.height = '30px';
    obj12.style.border = '2px solid rgb(0,0,0)';
    obj12.style.borderRadius = '10px';
    obj12.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj12);

    var txt3 = document.createTextNode("Completer la date et le lieu");
    obj12.appendChild(txt3);

    /*======Ligne======*/
    var obj13 = document.createElement('div');
    obj13.id = 'obj_13';
    obj13.title = 'obj_13';
    obj13.style.position = 'absolute';
    obj13.style.left = '200px';
    obj13.style.top = '280px';
    obj13.style.width = '3px';
    obj13.style.height = '30px';
    obj13.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj13);

    /*======Texte : Clic sur Suivant======*/
    var obj14 = document.createElement('div');
    obj14.id = 'obj_14';
    obj14.title = 'obj_14';
    obj14.style.position = 'absolute';
    obj14.style.left = '210px';
    obj14.style.top = '290px';
    obj14.style.width = '200px';
    obj14.style.height = '30px';
    obj14.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj14);

    var txt4 = document.createTextNode("Clic sur Suivant");
    obj14.appendChild(txt4);

    /*======Flèche======*/
    var obj15 = document.createElement('div');
    obj15.id = 'obj_15';
    obj15.title = 'obj_15';
    obj15.style.position = 'absolute';
    obj15.style.left = '190px';
    obj15.style.top = '310px';
    obj15.style.width = '20px';
    obj15.style.height = '20px';
    document.getElementById('processus').appendChild(obj15);

    var obj16 = document.createElement('div');
    obj16.style.borderTop = '10px solid rgb(0,0,0)';
    obj16.style.borderLeft = '10px solid transparent';
    obj16.style.borderRight = '10px solid transparent';
    document.getElementById('obj_15').appendChild(obj16);

    /*======Enregistrer le numéro, le lieu et la date======*/
    var obj17 = document.createElement('div');
    obj17.id = 'obj_17';
    obj17.title = 'obj_17';
    obj17.style.position = 'absolute';
    obj17.style.left = '100px';
    obj17.style.top = '320px';
    obj17.style.width = '200px';
    obj17.style.height = '50px';
    obj17.style.border = '2px solid rgb(0,0,0)';
    obj17.style.borderRadius = '10px';
    obj17.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj17);

    var txt5 = document.createTextNode("Enregistrer le numéro, le lieu et la date");
    obj17.appendChild(txt5);

    /*======Ligne======*/
    var obj18 = document.createElement('div');
    obj18.id = 'obj_18';
    obj18.title = 'obj_18';
    obj18.style.position = 'absolute';
    obj18.style.left = '200px';
    obj18.style.top = '373px';
    obj18.style.width = '3px';
    obj18.style.height = '30px';
    obj18.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj18);

    /*======Flèche======*/
    var obj19 = document.createElement('div');
    obj19.id = 'obj_19';
    obj19.title = 'obj_19';
    obj19.style.position = 'absolute';
    obj19.style.left = '190px';
    obj19.style.top = '400px';
    obj19.style.width = '20px';
    obj19.style.height = '20px';
    document.getElementById('processus').appendChild(obj19);

    var obj20 = document.createElement('div');
    obj20.style.borderTop = '10px solid rgb(0,0,0)';
    obj20.style.borderLeft = '10px solid transparent';
    obj20.style.borderRight = '10px solid transparent';
    document.getElementById('obj_19').appendChild(obj20);

    /*======Enregistrer le numéro, le lieu et la date======*/
    var obj21 = document.createElement('div');
    obj21.id = 'obj_17';
    obj21.title = 'obj_17';
    obj21.style.position = 'absolute';
    obj21.style.left = '100px';
    obj21.style.top = '410px';
    obj21.style.width = '200px';
    obj21.style.height = '30px';
    obj21.style.border = '2px solid rgb(0,0,0)';
    obj21.style.borderRadius = '10px';
    obj21.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj21);

    var txt6 = document.createTextNode("Recherche de l'assujetti");
    obj21.appendChild(txt6);

    switch (pageID) {
        case 'ElaborFeuille':
            obj4.style.border = '5px solid rgb(100,200,0)';
            obj4.style.backgroundColor = 'rgb(100,200,0)';
            obj5.style.backgroundColor = 'rgb(100,200,0)';
            obj7.style.borderTop = '10px solid rgb(100,200,0)';
            obj8.style.border = '5px solid rgb(100,200,0)';
            obj8.style.backgroundColor = 'rgb(100,200,0)';

            obj9.style.backgroundColor = 'rgb(100,200,0)';
            obj11.style.borderTop = '10px solid rgb(100,200,0)';

            obj12.style.border = '5px solid rgb(255, 216, 0)';
            obj12.style.backgroundColor = 'rgb(255, 216, 0)';
            break;
    }

}