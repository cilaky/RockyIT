function processus(pageID) {

    /*====Login=======*/

    var obj4 = document.createElement('div');
    obj4.id = 'obj_4';
    obj4.title = 'obj_4';
    obj4.style = 'position: absolute; top: 85px; left: 160px; width: 80px; height: 30px; border: 3px solid rgb(0,0,0); border-radius:10px; text-align:center;';
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

    var txt2 = document.createTextNode("Accueil");
    obj8.appendChild(txt2);

    /*======Ligne======*/
    var obj9 = document.createElement('div');
    obj9.id = 'obj_9';
    obj9.title = 'obj_9';
    obj9.style.position = 'absolute';
    obj9.style.left = '200px';
    obj9.style.top = '193px';
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
    obj10.style.top = '220px';
    obj10.style.width = '20px';
    obj10.style.height = '20px';
    document.getElementById('processus').appendChild(obj10);

    var obj11 = document.createElement('div');
    obj11.style.borderTop = '10px solid rgb(0,0,0)';
    obj11.style.borderLeft = '10px solid transparent';
    obj11.style.borderRight = '10px solid transparent';
    document.getElementById('obj_10').appendChild(obj11);

    /*======Texte : Clic sur MED======*/
    var obj12 = document.createElement('div');
    obj12.id = 'obj_12';
    obj12.title = 'obj_12';
    obj12.style.position = 'absolute';
    obj12.style.left = '220px';
    obj12.style.top = '210px';
    obj12.style.width = '220px';
    obj12.style.height = '30px';
    obj12.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj12);

    var txt3 = document.createTextNode("Clic sur MED");
    obj12.appendChild(txt3);

    /*======Recherche des notes======*/
    var obj13 = document.createElement('div');
    obj13.id = 'obj_13';
    obj13.title = 'obj_13';
    obj13.style.position = 'absolute';
    obj13.style.left = '100px';
    obj13.style.top = '230px';
    obj13.style.width = '300px';
    obj13.style.height = '40px';
    obj13.style.border = '2px solid rgb(0,0,0)';
    obj13.style.borderRadius = '10px';
    obj13.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj13);

    var txt3 = document.createTextNode("Rechercher des notes pour lesquelles etablir des MED par:");
    obj13.appendChild(txt3);

    /*======Ligne======*/
    var obj14 = document.createElement('div');
    obj14.id = 'obj_14';
    obj14.title = 'obj_14';
    obj14.style.position = 'absolute';
    obj14.style.left = '200px';
    obj14.style.top = '273px';
    obj14.style.width = '3px';
    obj14.style.height = '30px';
    obj14.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj14);

    /*======Flèche======*/
    var obj15 = document.createElement('div');
    obj15.id = 'obj_15';
    obj15.title = 'obj_15';
    obj15.style.position = 'absolute';
    obj15.style.left = '190px';
    obj15.style.top = '300px';
    obj15.style.width = '20px';
    obj15.style.height = '20px';
    document.getElementById('processus').appendChild(obj15);

    var obj16 = document.createElement('div');
    obj16.style.borderTop = '10px solid rgb(0,0,0)';
    obj16.style.borderLeft = '10px solid transparent';
    obj16.style.borderRight = '10px solid transparent';
    document.getElementById('obj_15').appendChild(obj16);

    //Ligne horizontale
    var obj17 = document.createElement('div');
    obj17.id = 'obj_17';
    obj17.title = 'obj_17';
    obj17.style.position = 'absolute';
    obj17.style.left = '-50px';
    obj17.style.top = '310px';
    obj17.style.width = '1050px';
    obj17.style.height = '0px';
    obj17.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj17);

    /*======Ligne droite======*/
    var obj18 = document.createElement('div');
    obj18.id = 'obj_18';
    obj18.title = 'obj_18';
    obj18.style.position = 'absolute';
    obj18.style.left = '-50px';
    obj18.style.top = '310px';
    obj18.style.width = '3px';
    obj18.style.height = '30px';
    obj18.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj18);

    /*======Flèche======*/
    var obj19 = document.createElement('div');
    obj19.id = 'obj_19';
    obj19.title = 'obj_19';
    obj19.style.position = 'absolute';
    obj19.style.left = '-58px';
    obj19.style.top = '340px';
    obj19.style.width = '20px';
    obj19.style.height = '20px';
    document.getElementById('processus').appendChild(obj19);

    var obj20 = document.createElement('div');
    obj20.style.borderTop = '10px solid rgb(0,0,0)';
    obj20.style.borderLeft = '10px solid transparent';
    obj20.style.borderRight = '10px solid transparent';
    document.getElementById('obj_19').appendChild(obj20);

    /*======Saisir notes======*/
    var obj21 = document.createElement('div');
    obj21.id = 'obj_21';
    obj21.title = 'obj_21';
    obj21.style.position = 'absolute';
    obj21.style.left = '-100px';
    obj21.style.top = '350px';
    obj21.style.width = '100px';
    obj21.style.height = '30px';
    obj21.style.border = '2px solid rgb(0,0,0)';
    obj21.style.borderRadius = '10px';
    obj21.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj21);

    var txt4 = document.createTextNode("Note");
    obj21.appendChild(txt4);

    // /*======Texte : Clic note======*/
    var obj22 = document.createElement('div');
    obj22.id = 'obj_22';
    obj22.title = 'obj_22';
    obj22.style.position = 'absolute';
    obj22.style.left = '-40px';
    obj22.style.top = '390px';
    obj22.style.width = '200px';
    obj22.style.height = '30px';
    obj22.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj22);

    var txt4 = document.createTextNode("Clic sur note");
    obj22.appendChild(txt4);

    ///*======Ligne======*/
    var obj23 = document.createElement('div');
    obj23.id = 'obj_23';
    obj23.title = 'obj_23';
    obj23.style.position = 'absolute';
    obj23.style.left = '-50px';
    obj23.style.top = '382px';
    obj23.style.width = '3px';
    obj23.style.height = '30px';
    obj23.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj23);

    ///*======Flèche======*/
    var obj24 = document.createElement('div');
    obj24.id = 'obj_24';
    obj24.title = 'obj_24';
    obj24.style.position = 'absolute';
    obj24.style.left = '-58px';
    obj24.style.top = '410px';
    obj24.style.width = '20px';
    obj24.style.height = '20px';
    document.getElementById('processus').appendChild(obj24);

    var obj25 = document.createElement('div');
    obj25.style.borderTop = '10px solid rgb(0,0,0)';
    obj25.style.borderLeft = '10px solid transparent';
    obj25.style.borderRight = '10px solid transparent';
    document.getElementById('obj_24').appendChild(obj25);


    /*======saisir le numero de la note======*/
    var obj26 = document.createElement('div');
    obj26.id = 'obj_26';
    obj26.title = 'obj_26';
    obj26.style.position = 'absolute';
    obj26.style.left = '-100px';
    obj26.style.top = '420px';
    obj26.style.width = '110px';
    obj26.style.height = '40px';
    obj26.style.border = '2px solid rgb(0,0,0)';
    obj26.style.borderRadius = '10px';
    obj26.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj26);

    var txt5 = document.createTextNode("Saisir le numero de la note");
    obj26.appendChild(txt5);

    /*======Ligne======*/
    var obj27 = document.createElement('div');
    obj27.id = 'obj_27';
    obj27.title = 'obj_27';
    obj27.style.position = 'absolute';
    obj27.style.left = '-50px';
    obj27.style.top = '462px';
    obj27.style.width = '3px';
    obj27.style.height = '70px';
    obj27.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj27);

    /*======Flèche======*/
    var obj28 = document.createElement('div');
    obj28.id = 'obj_28';
    obj28.title = 'obj_28';
    obj28.style.position = 'absolute';
    obj28.style.left = '-58px';
    obj28.style.top = '532px';
    obj28.style.width = '20px';
    obj28.style.height = '20px';
    document.getElementById('processus').appendChild(obj28);

    var obj29 = document.createElement('div');
    obj29.style.borderTop = '10px solid rgb(0,0,0)';
    obj29.style.borderLeft = '10px solid transparent';
    obj29.style.borderRight = '10px solid transparent';
    document.getElementById('obj_28').appendChild(obj29);

    /*======Afficher le resultat======*/
    var obj30 = document.createElement('div');
    obj30.id = 'obj_30';
    obj30.title = 'obj_30';
    obj30.style.position = 'absolute';
    obj30.style.left = '-120px';
    obj30.style.top = '542px';
    obj30.style.width = '150px';
    obj30.style.height = '40px';
    obj30.style.border = '2px solid rgb(0,0,0)';
    obj30.style.borderRadius = '10px';
    obj30.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj30);

    var txt6 = document.createTextNode("Afficher le résultat de la validation");
    obj30.appendChild(txt6);

    /*======Texte : Clic verifier le paiement======*/
    var obj31 = document.createElement('div');
    obj31.id = 'obj_31';
    obj31.title = 'obj_31';
    obj31.style.position = 'absolute';
    obj31.style.left = '-40px';
    obj31.style.top = '470px';
    obj31.style.width = '150px';
    obj31.style.height = '65px';
    obj31.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj31);

    var txt6 = document.createTextNode("Clic sur verifier le paiement avant d'etablir la MED");
    obj31.appendChild(txt6);

    /*======Ligne droite======*/
    var obj32 = document.createElement('div');
    obj32.id = 'obj_32';
    obj32.title = 'obj_32';
    obj32.style.position = 'absolute';
    obj32.style.left = '-50px';
    obj32.style.top = '585px';
    obj32.style.width = '3px';
    obj32.style.height = '30px';
    obj32.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj32);

    //Ligne horizontale
    var obj33 = document.createElement('div');
    obj33.id = 'obj_33';
    obj33.title = 'obj_33';
    obj33.style.position = 'absolute';
    obj33.style.left = '-120px';
    obj33.style.top = '637px';
    obj33.style.width = '50px';
    obj33.style.height = '0px';
    obj33.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj33);

    /*======Ligne droite======*/
    var obj34 = document.createElement('div');
    obj34.id = 'obj_34';
    obj34.title = 'obj_34';
    obj34.style.position = 'absolute';
    obj34.style.left = '-120px';
    obj34.style.top = '638px';
    obj34.style.width = '3px';
    obj34.style.height = '23px';
    obj34.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj34);

    /*======Afficher le bouton retour======*/
    var obj35 = document.createElement('div');
    obj35.id = 'obj_35';
    obj35.title = 'obj_35';
    obj35.style.position = 'absolute';
    obj35.style.left = '-140px';
    obj35.style.top = '660px';
    obj35.style.width = '80px';
    obj35.style.height = '60px';
    obj35.style.border = '2px solid rgb(0,0,0)';
    obj35.style.borderRadius = '10px';
    obj35.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj35);

    var txt7 = document.createTextNode("Afficher le bouton retour");
    obj35.appendChild(txt7);

    /*======Texte : Clic sur note ======*/
    var obj36 = document.createElement('div');
    obj36.id = 'obj_36';
    obj36.title = 'obj_36';
    obj36.style.position = 'absolute';
    obj36.style.left = '-115px';
    obj36.style.top = '590px';
    obj36.style.width = '60px';
    obj36.style.height = '20px';
    obj36.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj36);

    var txt7 = document.createTextNode("Clic sur note");
    obj36.appendChild(txt7);

    //Ligne horizontale
    var obj37 = document.createElement('div');
    obj37.id = 'obj_37';
    obj37.title = 'obj_37';
    obj37.style.position = 'absolute';
    obj37.style.left = '-25px';
    obj37.style.top = '636px';
    obj37.style.width = '50px';
    obj37.style.height = '0px';
    obj37.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj37);

    /*======Ligne droite======*/
    var obj38 = document.createElement('div');
    obj38.id = 'obj_38';
    obj38.title = 'obj_38';
    obj38.style.position = 'absolute';
    obj38.style.left = '25px';
    obj38.style.top = '636px';
    obj38.style.width = '3px';
    obj38.style.height = '25px';
    obj38.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj38);

    /*======Affiche de bouton etablir la MED======*/
    var obj39 = document.createElement('div');
    obj39.id = 'obj_39';
    obj39.title = 'obj_39';
    obj39.style.position = 'absolute';
    obj39.style.left = '-20px';
    obj39.style.top = '660px';
    obj39.style.width = '100px';
    obj39.style.height = '58px';
    obj39.style.border = '2px solid rgb(0,0,0)';
    obj39.style.borderRadius = '10px';
    obj39.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj39);

    var txt8 = document.createTextNode("Afficher de bouton établir la MED");
    obj39.appendChild(txt8);

    /*======Texte : Clic sur note en souffrances ======*/
    var obj40 = document.createElement('div');
    obj40.id = 'obj_40';
    obj40.title = 'obj_40';
    obj40.style.position = 'absolute';
    obj40.style.left = '-30px';
    obj40.style.top = '588px';
    obj40.style.width = '100px';
    obj40.style.height = '30px';
    obj40.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj40);

    var txt8 = document.createTextNode("Clic sur note en souffrance");
    obj40.appendChild(txt8);

    /*======Ligne======*/
    var obj41 = document.createElement('div');
    obj41.id = 'obj_41';
    obj41.title = 'obj_41';
    obj41.style.position = 'absolute';
    obj41.style.left = '50px';
    obj41.style.top = '310px';
    obj41.style.width = '3px';
    obj41.style.height = '30px';
    obj41.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj41);

    /*======Flèche======*/
    var obj42 = document.createElement('div');
    obj42.id = 'obj_42';
    obj42.title = 'obj_42';
    obj42.style.position = 'absolute';
    obj42.style.left = '40px';
    obj42.style.top = '340px';
    obj42.style.width = '20px';
    obj42.style.height = '20px';
    document.getElementById('processus').appendChild(obj42);

    var obj43 = document.createElement('div');
    obj43.style.borderTop = '10px solid rgb(0,0,0)';
    obj43.style.borderLeft = '10px solid transparent';
    obj43.style.borderRight = '10px solid transparent';
    document.getElementById('obj_42').appendChild(obj43);

    /*======Assujetti======*/
    var obj44 = document.createElement('div');
    obj44.id = 'obj_44';
    obj44.title = 'obj_44';
    obj44.style.position = 'absolute';
    obj44.style.left = '10px';
    obj44.style.top = '350px';
    obj44.style.width = '80px';
    obj44.style.height = '30px';
    obj44.style.border = '2px solid rgb(0,0,0)';
    obj44.style.borderRadius = '10px';
    obj44.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj44);

    var txt9 = document.createTextNode("Assujetti");
    obj44.appendChild(txt9);


    /*======Ligne======*/
    var obj45 = document.createElement('div');
    obj45.id = 'obj_45';
    obj45.title = 'obj_45';
    obj45.style.position = 'absolute';
    obj45.style.left = '150px';
    obj45.style.top = '310px';
    obj45.style.width = '3px';
    obj45.style.height = '30px';
    obj45.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj45);

    /*======Article======*/
    var obj46 = document.createElement('div');
    obj46.id = 'obj_46';
    obj46.title = 'obj_46';
    obj46.style.position = 'absolute';
    obj46.style.left = '110px';
    obj46.style.top = '350px';
    obj46.style.width = '80px';
    obj46.style.height = '30px';
    obj46.style.border = '2px solid rgb(0,0,0)';
    obj46.style.borderRadius = '10px';
    obj46.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj46);

    var txt10 = document.createTextNode("Article");
    obj46.appendChild(txt10);

    ///*======Flèche======*/
    var obj47 = document.createElement('div');
    obj47.id = 'obj_47';
    obj47.title = 'obj_47';
    obj47.style.position = 'absolute';
    obj47.style.left = '140px';
    obj47.style.top = '340px';
    obj47.style.width = '20px';
    obj47.style.height = '20px';
    document.getElementById('processus').appendChild(obj47);

    var obj48 = document.createElement('div');
    obj48.style.borderTop = '10px solid rgb(0,0,0)';
    obj48.style.borderLeft = '10px solid transparent';
    obj48.style.borderRight = '10px solid transparent';
    document.getElementById('obj_47').appendChild(obj48);


    ///*======Ligne droite======*/
    var obj49 = document.createElement('div');
    obj49.id = 'obj_49';
    obj49.title = 'obj_49';
    obj49.style.position = 'absolute';
    obj49.style.left = '250px';
    obj49.style.top = '310px'
    obj49.style.width = '3px';
    obj49.style.height = '30px';
    obj49.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj49);

    /*======Flèche======*/
    var obj50 = document.createElement('div');
    obj50.id = 'obj_50';
    obj50.title = 'obj_50';
    obj50.style.position = 'absolute';
    obj50.style.left = '242px';
    obj50.style.top = '340px';
    obj50.style.width = '20px';
    obj50.style.height = '20px';
    document.getElementById('processus').appendChild(obj50);

    var obj51 = document.createElement('div');
    obj51.style.borderTop = '10px solid rgb(0,0,0)';
    obj51.style.borderLeft = '10px solid transparent';
    obj51.style.borderRight = '10px solid transparent';
    document.getElementById('obj_50').appendChild(obj51);

    /*======centre assujettis======*/
    var obj53 = document.createElement('div');
    obj53.id = 'obj_53';
    obj53.title = 'obj_53';
    obj53.style.position = 'absolute';
    obj53.style.left = '200px';
    obj53.style.top = '350px';
    obj53.style.width = '150px';
    obj53.style.height = '60px';
    obj53.style.border = '2px solid rgb(0,0,0)';
    obj53.style.borderRadius = '10px';
    obj53.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj53);

    var txt11 = document.createTextNode("Centre y compris les anciennes et les service d'assiette");
    obj53.appendChild(txt11);

    ///*======Ligne droite======*/
    var obj54 = document.createElement('div');
    obj54.id = 'obj_54';
    obj54.title = 'obj_54';
    obj54.style.position = 'absolute';
    obj54.style.left = '400px';
    obj54.style.top = '310px';
    obj54.style.width = '3px';
    obj54.style.height = '30px';
    obj54.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj54);

    /*======Flèche======*/
    var obj55 = document.createElement('div');
    obj55.id = 'obj_55';
    obj55.title = 'obj_55';
    obj55.style.position = 'absolute';
    obj55.style.left = '390px';
    obj55.style.top = '340px';
    obj55.style.width = '20px';
    obj55.style.height = '20px';
    document.getElementById('processus').appendChild(obj55);

    var obj56 = document.createElement('div');
    obj56.style.borderTop = '10px solid rgb(0,0,0)';
    obj56.style.borderLeft = '10px solid transparent';
    obj56.style.borderRight = '10px solid transparent';
    document.getElementById('obj_55').appendChild(obj56);

    /*======Centre seul======*/
    var obj57 = document.createElement('div');
    obj57.id = 'obj_57';
    obj57.title = 'obj_57';
    obj57.style.position = 'absolute';
    obj57.style.left = '360px';
    obj57.style.top = '350px';
    obj57.style.width = '90px';
    obj57.style.height = '30px';
    obj57.style.border = '2px solid rgb(0,0,0)';
    obj57.style.borderRadius = '10px';
    obj57.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj57);

    var txt12 = document.createTextNode("Centre seul");
    obj57.appendChild(txt12);

    ///*======Ligne droite======*/
    var obj58 = document.createElement('div');
    obj58.id = 'obj_58';
    obj58.title = 'obj_58';
    obj58.style.position = 'absolute';
    obj58.style.left = '500px';
    obj58.style.top = '310px';
    obj58.style.width = '3px';
    obj58.style.height = '30px';
    obj58.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj58);

    /*======Flèche======*/
    var obj59 = document.createElement('div');
    obj59.id = 'obj_59';
    obj59.title = 'obj_59';
    obj59.style.position = 'absolute';
    obj59.style.left = '492px';
    obj59.style.top = '340px';
    obj59.style.width = '20px';
    obj59.style.height = '20px';
    document.getElementById('processus').appendChild(obj59);

    var obj60 = document.createElement('div');
    obj60.style.borderTop = '10px solid rgb(0,0,0)';
    obj60.style.borderLeft = '10px solid transparent';
    obj60.style.borderRight = '10px solid transparent';
    document.getElementById('obj_59').appendChild(obj60);

    /*======Antenne======*/
    var obj61 = document.createElement('div');
    obj61.id = 'obj_61';
    obj61.title = 'obj_61';
    obj61.style.position = 'absolute';
    obj61.style.left = '460px';
    obj61.style.top = '350px';
    obj61.style.width = '90px';
    obj61.style.height = '30px';
    obj61.style.border = '2px solid rgb(0,0,0)';
    obj61.style.borderRadius = '10px';
    obj61.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj61);

    var txt13 = document.createTextNode("Antenne");
    obj61.appendChild(txt13);


    ///*======Ligne droite======*/
    var obj62 = document.createElement('div');
    obj62.id = 'obj_62';
    obj62.title = 'obj_62';
    obj62.style.position = 'absolute';
    obj62.style.left = '600px';
    obj62.style.top = '310px';
    obj62.style.width = '3px';
    obj62.style.height = '30px';
    obj62.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj62);

    /*======Flèche======*/
    var obj63 = document.createElement('div');
    obj63.id = 'obj_63';
    obj63.title = 'obj_63';
    obj63.style.position = 'absolute';
    obj63.style.left = '592px';
    obj63.style.top = '340px';
    obj63.style.width = '20px';
    obj63.style.height = '20px';
    document.getElementById('processus').appendChild(obj63);

    var obj64 = document.createElement('div');
    obj64.style.borderTop = '10px solid rgb(0,0,0)';
    obj64.style.borderLeft = '10px solid transparent';
    obj64.style.borderRight = '10px solid transparent';
    document.getElementById('obj_63').appendChild(obj64);

    /*======Service d'assiette======*/
    var obj65 = document.createElement('div');
    obj65.id = 'obj_65';
    obj65.title = 'obj_65';
    obj65.style.position = 'absolute';
    obj65.style.left = '560px';
    obj65.style.top = '350px';
    obj65.style.width = '90px';
    obj65.style.height = '40px';
    obj65.style.border = '2px solid rgb(0,0,0)';
    obj65.style.borderRadius = '10px';
    obj65.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj65);

    var txt14 = document.createTextNode("Service d'assiette");
    obj65.appendChild(txt14);


    ///*======Ligne droite======*/
    var obj66 = document.createElement('div');
    obj66.id = 'obj_66';
    obj66.title = 'obj_66';
    obj66.style.position = 'absolute';
    obj66.style.left = '700px';
    obj66.style.top = '310px';
    obj66.style.width = '3px';
    obj66.style.height = '30px';
    obj66.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj66);

    /*======Flèche======*/
    var obj67 = document.createElement('div');
    obj67.id = 'obj_67';
    obj67.title = 'obj_67';
    obj67.style.position = 'absolute';
    obj67.style.left = '690px';
    obj67.style.top = '340px';
    obj67.style.width = '20px';
    obj67.style.height = '20px';
    document.getElementById('processus').appendChild(obj67);

    var obj68 = document.createElement('div');
    obj68.style.borderTop = '10px solid rgb(0,0,0)';
    obj68.style.borderLeft = '10px solid transparent';
    obj68.style.borderRight = '10px solid transparent';
    document.getElementById('obj_67').appendChild(obj68);

    /*======Montant======*/
    var obj69 = document.createElement('div');
    obj69.id = 'obj_69';
    obj69.title = 'obj_69';
    obj69.style.position = 'absolute';
    obj69.style.left = '660px';
    obj69.style.top = '350px';
    obj69.style.width = '90px';
    obj69.style.height = '30px';
    obj69.style.border = '2px solid rgb(0,0,0)';
    obj69.style.borderRadius = '10px';
    obj69.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj69);

    var txt15 = document.createTextNode("Montant");
    obj69.appendChild(txt15);

    ///*======Ligne droite======*/
    var obj70 = document.createElement('div');
    obj70.id = 'obj_70';
    obj70.title = 'obj_70';
    obj70.style.position = 'absolute';
    obj70.style.left = '800px';
    obj70.style.top = '310px';
    obj70.style.width = '3px';
    obj70.style.height = '80px';
    obj70.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj70);

    /*======Flèche======*/
    var obj71 = document.createElement('div');
    obj71.id = 'obj_71';
    obj71.title = 'obj_71';
    obj71.style.position = 'absolute';
    obj71.style.left = '792px';
    obj71.style.top = '390px';
    obj71.style.width = '20px';
    obj71.style.height = '20px';
    document.getElementById('processus').appendChild(obj71);

    var obj72 = document.createElement('div');
    obj72.style.borderTop = '10px solid rgb(0,0,0)';
    obj72.style.borderLeft = '10px solid transparent';
    obj72.style.borderRight = '10px solid transparent';
    document.getElementById('obj_71').appendChild(obj72);

    /*======Nature de la base imposable======*/
    var obj73 = document.createElement('div');
    obj73.id = 'obj_73';
    obj73.title = 'obj_73';
    obj73.style.position = 'absolute';
    obj73.style.left = '750px';
    obj73.style.top = '400px';
    obj73.style.width = '103px';
    obj73.style.height = '42px';
    obj73.style.border = '2px solid rgb(0,0,0)';
    obj73.style.borderRadius = '10px';
    obj73.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj73);

    var txt16 = document.createTextNode("Nature de la base imposable");
    obj73.appendChild(txt16);

    /*======Texte : Clic sur ature de la base imposable======*/
    var obj74 = document.createElement('div');
    obj74.id = 'obj_74';
    obj74.title = 'obj_74';
    obj74.style.position = 'absolute';
    obj74.style.left = '810px';
    obj74.style.top = '455px';
    obj74.style.width = '120px';
    obj74.style.height = '30px';
    obj74.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj74);

    var txt16 = document.createTextNode("Clic sur nature de la base imposable");
    obj74.appendChild(txt16);

    ///*======Ligne droite======*/
    var obj75 = document.createElement('div');
    obj75.id = 'obj_75';
    obj75.title = 'obj_75';
    obj75.style.position = 'absolute';
    obj75.style.left = '800px';
    obj75.style.top = '445px';
    obj75.style.width = '3px';
    obj75.style.height = '50px';
    obj75.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj75);

    /*======Flèche======*/
    var obj76 = document.createElement('div');
    obj76.id = 'obj_76';
    obj76.title = 'obj_76';
    obj76.style.position = 'absolute';
    obj76.style.left = '792px';
    obj76.style.top = '495px';
    obj76.style.width = '20px';
    obj76.style.height = '20px';
    document.getElementById('processus').appendChild(obj76);

    var obj77 = document.createElement('div');
    obj77.style.borderTop = '10px solid rgb(0,0,0)';
    obj77.style.borderLeft = '10px solid transparent';
    obj77.style.borderRight = '10px solid transparent';
    document.getElementById('obj_76').appendChild(obj77);


    /*======Afficher les nature des bases imposables======*/
    var obj78 = document.createElement('div');
    obj78.id = 'obj_78';
    obj78.title = 'obj_78';
    obj78.style.position = 'absolute';
    obj78.style.left = '710px';
    obj78.style.top = '505px';
    obj78.style.width = '183px';
    obj78.style.height = '98px';
    obj78.style.border = '2px solid rgb(0,0,0)';
    obj78.style.borderRadius = '10px';
    obj78.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj78);

    var txt17 = document.createTextNode("Afficher les natures des bases imposables le nombre de notes et le montant en FC congolais et convertis en USD");
    obj78.appendChild(txt17);

    /*======Texte : Clic sur la nature======*/
    var obj79 = document.createElement('div');
    obj79.id = 'obj_79';
    obj79.title = 'obj_79';
    obj79.style.position = 'absolute';
    obj79.style.left = '805px';
    obj79.style.top = '610px';
    obj79.style.width = '120px';
    obj79.style.height = '30px';
    obj79.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj79);

    var txt17 = document.createTextNode("Clic sur la nature ");
    obj79.appendChild(txt17);

    /*======Ligne droite======*/
    var obj80 = document.createElement('div');
    obj80.id = 'obj_80';
    obj80.title = 'obj_80';
    obj80.style.position = 'absolute';
    obj80.style.left = '795px';
    obj80.style.top = '605px';
    obj80.style.width = '3px';
    obj80.style.height = '30px';
    obj80.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj80);

    ///*======Ligne droite de la date======*/
    var obj81 = document.createElement('div');
    obj81.id = 'obj_81';
    obj81.title = 'obj_81';
    obj81.style.position = 'absolute';
    obj81.style.left = '900px';
    obj81.style.top = '310px';
    obj81.style.width = '3px';
    obj81.style.height = '30px';
    obj81.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj81);

    /*======Flèche======*/
    var obj82 = document.createElement('div');
    obj82.id = 'obj_82';
    obj82.title = 'obj_82';
    obj82.style.position = 'absolute';
    obj82.style.left = '892px';
    obj82.style.top = '340px';
    obj82.style.width = '20px';
    obj82.style.height = '20px';
    document.getElementById('processus').appendChild(obj82);

    var obj83 = document.createElement('div');
    obj83.style.borderTop = '10px solid rgb(0,0,0)';
    obj83.style.borderLeft = '10px solid transparent';
    obj83.style.borderRight = '10px solid transparent';
    document.getElementById('obj_82').appendChild(obj83);

    /*======Date======*/
    var obj84 = document.createElement('div');
    obj84.id = 'obj_84';
    obj84.title = 'obj_84';
    obj84.style.position = 'absolute';
    obj84.style.left = '860px';
    obj84.style.top = '350px';
    obj84.style.width = '80px';
    obj84.style.height = '30px';
    obj84.style.border = '2px solid rgb(0,0,0)';
    obj84.style.borderRadius = '10px';
    obj84.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj84);

    var txt18 = document.createTextNode("Date");
    obj84.appendChild(txt18);

    ///*======Ligne droite======*/
    var obj85 = document.createElement('div');
    obj85.id = 'obj_85';
    obj85.title = 'obj_85';
    obj85.style.position = 'absolute';
    obj85.style.left = '1000px';
    obj85.style.top = '310px';
    obj85.style.width = '3px';
    obj85.style.height = '30px';
    obj85.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj85);

    /*======Flèche======*/
    var obj86 = document.createElement('div');
    obj86.id = 'obj_86';
    obj86.title = 'obj_86';
    obj86.style.position = 'absolute';
    obj86.style.left = '992px';
    obj86.style.top = '340px';
    obj86.style.width = '20px';
    obj86.style.height = '20px';
    document.getElementById('processus').appendChild(obj86);

    var obj87 = document.createElement('div');
    obj87.style.borderTop = '10px solid rgb(0,0,0)';
    obj87.style.borderLeft = '10px solid transparent';
    obj87.style.borderRight = '10px solid transparent';
    document.getElementById('obj_86').appendChild(obj87);

    /*======Adresse======*/
    var obj88 = document.createElement('div');
    obj88.id = 'obj_88';
    obj88.title = 'obj_88';
    obj88.style.position = 'absolute';
    obj88.style.left = '960px';
    obj88.style.top = '350px';
    obj88.style.width = '80px';
    obj88.style.height = '30px';
    obj88.style.border = '2px solid rgb(0,0,0)';
    obj88.style.borderRadius = '10px';
    obj88.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj88);

    var txt19 = document.createTextNode("Adresse");
    obj88.appendChild(txt19);
}