function processus(pageID, action, formJuridiq) {
    /*====Login=======*/
    var obj1 = document.createElement('div');
    obj1.id = 'obj_1';
    obj1.title = 'obj_1';
    obj1.style.position = 'absolute';
    obj1.style.left = '160px';
    obj1.style.top = '88px';
    obj1.style.width = '80px';
    obj1.style.height = '30px';
    obj1.style.border = '2px solid rgb(0,0,0)';
    obj1.style.borderRadius = '10px';
    obj1.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj1);

    var txt1 = document.createTextNode("Login");
    obj1.appendChild(txt1);

    /*======Ligne======*/
    var obj2 = document.createElement('div');
    obj2.id = 'obj_2';
    obj2.title = 'obj_2';
    obj2.style.position = 'absolute';
    obj2.style.left = '200px';
    obj2.style.top = '120px';
    obj2.style.width = '3px';
    obj2.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj2.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj2);

    /*======Flèche======*/
    var obj3 = document.createElement('div');
    obj3.id = 'obj_3';
    obj3.title = 'obj_3';
    obj3.style.position = 'absolute';
    obj3.style.left = '191px';
    obj3.style.top = '150px';
    obj3.style.width = '20px';
    obj3.style.height = '20px';
    document.getElementById('processus').appendChild(obj3);

    var obj4 = document.createElement('div');
    obj4.style.borderTop = '10px solid rgb(0,0,0)';
    obj4.style.borderLeft = '10px solid transparent';
    obj4.style.borderRight = '10px solid transparent';
    document.getElementById('obj_3').appendChild(obj4);

    /*======Cas d'utilisation======*/
    var obj5 = document.createElement('div');
    obj5.id = 'obj_5';
    obj5.title = 'obj_5';
    obj5.style.position = 'absolute';
    obj5.style.left = '145px';
    obj5.style.top = '160px';
    obj5.style.width = '100px';
    obj5.style.height = '40px';
    obj5.style.border = '2px solid rgb(0,0,0)';
    obj5.style.borderRadius = '10px';
    obj5.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj5);

    var txt2 = document.createTextNode("Accueil");
    obj5.appendChild(txt2);

    /*======Ligne======*/
    var obj6 = document.createElement('div');
    obj6.id = 'obj_6';
    obj6.title = 'obj_6';
    obj6.style.position = 'absolute';
    obj6.style.left = '200px';
    obj6.style.top = '202px';
    obj6.style.width = '3px';
    obj6.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj6.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj6);

    /*======Flèche======*/
    var obj7 = document.createElement('div');
    obj7.id = 'obj_7';
    obj7.title = 'obj_7';
    obj7.style.position = 'absolute';
    obj7.style.left = '191px';
    obj7.style.top = '232px';
    obj7.style.width = '20px';
    obj7.style.height = '20px';
    document.getElementById('processus').appendChild(obj7);

    var obj8 = document.createElement('div');
    obj8.style.borderTop = '10px solid rgb(0,0,0)';
    obj8.style.borderLeft = '10px solid transparent';
    obj8.style.borderRight = '10px solid transparent';
    document.getElementById('obj_7').appendChild(obj8);

    /*======Elaborer la feuille de calcul======*/
    var obj9 = document.createElement('div');
    obj9.id = 'obj_9';
    obj9.title = 'obj_9';
    obj9.style.position = 'absolute';
    obj9.style.left = '130px';
    obj9.style.top = '242px';
    obj9.style.width = '130px';
    obj9.style.height = '40px';
    obj9.style.border = '2px solid rgb(0,0,0)';
    obj9.style.borderRadius = '10px';
    obj9.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj9);

    var txt3 = document.createTextNode("Saisir la déclaration");
    obj9.appendChild(txt3);

    /*======Ligne======*/
    var obj10 = document.createElement('div');
    obj10.id = 'obj_10';
    obj10.title = 'obj_10';
    obj10.style.position = 'absolute';
    obj10.style.left = '200px';
    obj10.style.top = '285px';
    obj10.style.width = '3px';
    obj10.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj10.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj10);

    /*======Flèche======*/
    var obj11 = document.createElement('div');
    obj11.id = 'obj_11';
    obj11.title = 'obj_11';
    obj11.style.position = 'absolute';
    obj11.style.left = '191px';
    obj11.style.top = '314px';
    obj11.style.width = '20px';
    obj11.style.height = '20px';
    document.getElementById('processus').appendChild(obj11);

    var obj12 = document.createElement('div');
    obj12.style.borderTop = '10px solid rgb(0,0,0)';
    obj12.style.borderLeft = '10px solid transparent';
    obj12.style.borderRight = '10px solid transparent';
    document.getElementById('obj_11').appendChild(obj12);

    /*======Texte : Déclaration saisie======*/
    var obj13 = document.createElement('div');
    obj13.id = 'obj_13';
    obj13.title = 'obj_13';
    obj13.style.position = 'absolute';
    obj13.style.left = '210px';
    obj13.style.top = '290px';
    obj13.style.width = '200px';
    obj13.style.height = '20px';
    obj13.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj13);

    var txt4 = document.createTextNode("Déclaration saisie");
    obj13.appendChild(txt4);

    /*======Recherche de l'assujetti======*/
    var obj14 = document.createElement('div');
    obj14.id = 'obj_14';
    obj14.title = 'obj_14';
    obj14.style.position = 'absolute';
    obj14.style.left = '130px';
    obj14.style.top = '323px';
    obj14.style.width = '130px';
    obj14.style.height = '40px';
    obj14.style.border = '2px solid rgb(0,0,0)';
    obj14.style.borderRadius = '10px';
    obj14.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj14);

    var txt5 = document.createTextNode("Recherche de l'assujetti");
    obj14.appendChild(txt5);

    /*======Ligne======*/
    var obj15 = document.createElement('div');
    obj15.id = 'obj_15';
    obj15.title = 'obj_15';
    obj15.style.position = 'absolute';
    obj15.style.left = '199px';
    obj15.style.top = '367px';
    obj15.style.width = '3px';
    obj15.style.height = '28px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj15.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj15);

    /*======Flèche======*/
    var obj16 = document.createElement('div');
    obj16.id = 'obj_16';
    obj16.title = 'obj_16';
    obj16.style.position = 'absolute';
    obj16.style.left = '190px';
    obj16.style.top = '395px';
    obj16.style.width = '20px';
    obj16.style.height = '20px';
    document.getElementById('processus').appendChild(obj16);

    var obj17 = document.createElement('div');
    obj17.style.borderTop = '10px solid rgb(0,0,0)';
    obj17.style.borderLeft = '10px solid transparent';
    obj17.style.borderRight = '10px solid transparent';
    document.getElementById('obj_16').appendChild(obj17);

    //Lozange
    //=======

    var obj18 = document.createElement('div');
    obj18.id = 'obj_18';
    obj18.title = 'obj_18';
    obj18.style.position = 'absolute';
    obj18.style.left = '185px';
    obj18.style.top = '405px';
    obj18.style.width = '30px';
    obj18.style.height = '30px';
    document.getElementById('processus').appendChild(obj18);

    var obj19 = document.createElement('div');
    obj19.style.borderBottom = '15px solid rgb(0,0,0)';
    obj19.style.borderLeft = '15px solid transparent';
    obj19.style.borderRight = '15px solid transparent';
    document.getElementById('obj_18').appendChild(obj19);

    var obj20 = document.createElement('div');
    obj20.style.borderTop = '15px solid rgb(0,0,0)';
    obj20.style.borderLeft = '15px solid transparent';
    obj20.style.borderRight = '15px solid transparent';
    document.getElementById('obj_18').appendChild(obj20);

    //LIgne horizontale
    //==================
    var obj21 = document.createElement('div');
    obj21.id = 'obj_21';
    obj21.title = 'obj_21';
    obj21.style.position = 'absolute';
    obj21.style.left = '30px';
    obj21.style.top = '420px';
    obj21.style.width = '154px';
    obj21.style.height = '0px';
    obj21.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj21);

    /*======Ligne======*/
    var obj22 = document.createElement('div');
    obj22.id = 'obj_22';
    obj22.title = 'obj_22';
    obj22.style.position = 'absolute';
    obj22.style.left = '30px';
    obj22.style.top = '420px';
    obj22.style.width = '3px';
    obj22.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj22.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj22);

    /*======Texte : Nouvel assujetti======*/
    var obj23 = document.createElement('div');
    obj23.id = 'obj_23';
    obj23.title = 'obj_23';
    obj23.style.position = 'absolute';
    obj23.style.left = '40px';
    obj23.style.top = '400px';
    obj23.style.width = '200px';
    obj23.style.height = '20px';
    obj23.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj23);

    var txt6 = document.createTextNode("Nouvel assujetti");
    obj23.appendChild(txt6);

    /*======Flèche======*/
    var obj24 = document.createElement('div');
    obj24.id = 'obj_24';
    obj24.title = 'obj_24';
    obj24.style.position = 'absolute';
    obj24.style.left = '20px';
    obj24.style.top = '450px';
    obj24.style.width = '20px';
    obj24.style.height = '20px';
    document.getElementById('processus').appendChild(obj24);

    var obj25 = document.createElement('div');
    obj25.style.borderTop = '10px solid rgb(0,0,0)';
    obj25.style.borderLeft = '10px solid transparent';
    obj25.style.borderRight = '10px solid transparent';
    document.getElementById('obj_24').appendChild(obj25);

    /*======Selection de la forme juridique de l'assujetti======*/
    var obj26 = document.createElement('div');
    obj26.id = 'obj_26';
    obj26.title = 'obj_26';
    obj26.style.position = 'absolute';
    obj26.style.left = '-40px';
    obj26.style.top = '460px';
    obj26.style.width = '160px';
    obj26.style.height = '40px';
    obj26.style.border = '2px solid rgb(0,0,0)';
    obj26.style.borderRadius = '10px';
    obj26.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj26);

    var txt7 = document.createTextNode("Selection de la forme juridique de l'assujetti");
    obj26.appendChild(txt7);

    /*======Ligne======*/
    var obj27 = document.createElement('div');
    obj27.id = 'obj_27';
    obj27.title = 'obj_27';
    obj27.style.position = 'absolute';
    obj27.style.left = '30px';
    obj27.style.top = '502px';
    obj27.style.width = '3px';
    obj27.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj27.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj27);

    /*======Flèche======*/
    var obj28 = document.createElement('div');
    obj28.id = 'obj_28';
    obj28.title = 'obj_28';
    obj28.style.position = 'absolute';
    obj28.style.left = '20px';
    obj28.style.top = '532px';
    obj28.style.width = '20px';
    obj28.style.height = '20px';
    document.getElementById('processus').appendChild(obj28);

    var obj29 = document.createElement('div');
    obj29.style.borderTop = '10px solid rgb(0,0,0)';
    obj29.style.borderLeft = '10px solid transparent';
    obj29.style.borderRight = '10px solid transparent';
    document.getElementById('obj_28').appendChild(obj29);

    //Lozange
    //=======

    var obj30 = document.createElement('div');
    obj30.id = 'obj_30';
    obj30.title = 'obj_30';
    obj30.style.position = 'absolute';
    obj30.style.left = '15px';
    obj30.style.top = '540px';
    obj30.style.width = '30px';
    obj30.style.height = '30px';
    document.getElementById('processus').appendChild(obj30);

    var obj31 = document.createElement('div');
    obj31.style.borderBottom = '15px solid rgb(0,0,0)';
    obj31.style.borderLeft = '15px solid transparent';
    obj31.style.borderRight = '15px solid transparent';
    document.getElementById('obj_30').appendChild(obj31);

    var obj32 = document.createElement('div');
    obj32.style.borderTop = '15px solid rgb(0,0,0)';
    obj32.style.borderLeft = '15px solid transparent';
    obj32.style.borderRight = '15px solid transparent';
    document.getElementById('obj_30').appendChild(obj32);

    //LIgne horizontale
    //==================
    var obj33 = document.createElement('div');
    obj33.id = 'obj_33';
    obj33.title = 'obj_33';
    obj33.style.position = 'absolute';
    obj33.style.left = '43px';
    obj33.style.top = '555px';
    obj33.style.width = '100px';
    obj33.style.height = '0px';
    obj33.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj33);

    //LIgne horizontale
    //==================
    var obj34 = document.createElement('div');
    obj34.id = 'obj_34';
    obj34.title = 'obj_34';
    obj34.style.position = 'absolute';
    obj34.style.left = '-85px';
    obj34.style.top = '555px';
    obj34.style.width = '100px';
    obj34.style.height = '0px';
    obj34.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj34);

    /*======Texte : Individu======*/
    var obj35 = document.createElement('div');
    obj35.id = 'obj_35';
    obj35.title = 'obj_35';
    obj35.style.position = 'absolute';
    obj35.style.left = '50px';
    obj35.style.top = '535px';
    obj35.style.width = '200px';
    obj35.style.height = '20px';
    obj35.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj35);

    var txt8 = document.createTextNode("Individu");
    obj35.appendChild(txt8);

    /*======Texte : Entreprise======*/
    var obj35 = document.createElement('div');
    obj35.id = 'obj_35';
    obj35.title = 'obj_35';
    obj35.style.position = 'absolute';
    obj35.style.left = '-60px';
    obj35.style.top = '535px';
    obj35.style.width = '200px';
    obj35.style.height = '20px';
    obj35.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj35);

    var txt8 = document.createTextNode("Entreprise");
    obj35.appendChild(txt8);

    /*======Ligne======*/
    var obj36 = document.createElement('div');
    obj36.id = 'obj_36';
    obj36.title = 'obj_36';
    obj36.style.position = 'absolute';
    obj36.style.left = '-85px';
    obj36.style.top = '555px';
    obj36.style.width = '3px';
    obj36.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj36.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj36);

    /*======Flèche======*/
    var obj37 = document.createElement('div');
    obj37.id = 'obj_37';
    obj37.title = 'obj_37';
    obj37.style.position = 'absolute';
    obj37.style.left = '-95px';
    obj37.style.top = '585px';
    obj37.style.width = '20px';
    obj37.style.height = '20px';
    document.getElementById('processus').appendChild(obj37);

    var obj38 = document.createElement('div');
    obj38.style.borderTop = '10px solid rgb(0,0,0)';
    obj38.style.borderLeft = '10px solid transparent';
    obj38.style.borderRight = '10px solid transparent';
    document.getElementById('obj_37').appendChild(obj38);

    /*======Ligne======*/
    var obj39 = document.createElement('div');
    obj39.id = 'obj_39';
    obj39.title = 'obj_39';
    obj39.style.position = 'absolute';
    obj39.style.left = '145px';
    obj39.style.top = '555px';
    obj39.style.width = '3px';
    obj39.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj39.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj39);

    /*======Flèche======*/
    var obj40 = document.createElement('div');
    obj40.id = 'obj_40';
    obj40.title = 'obj_40';
    obj40.style.position = 'absolute';
    obj40.style.left = '135px';
    obj40.style.top = '585px';
    obj40.style.width = '20px';
    obj40.style.height = '20px';
    document.getElementById('processus').appendChild(obj40);

    var obj41 = document.createElement('div');
    obj41.style.borderTop = '10px solid rgb(0,0,0)';
    obj41.style.borderLeft = '10px solid transparent';
    obj41.style.borderRight = '10px solid transparent';
    document.getElementById('obj_40').appendChild(obj41);

    /*======Saisir les cooordonnées de l'entreprise======*/
    var obj42 = document.createElement('div');
    obj42.id = 'obj_42';
    obj42.title = 'obj_42';
    obj42.style.position = 'absolute';
    obj42.style.left = '-160px';
    obj42.style.top = '595px';
    obj42.style.width = '160px';
    obj42.style.height = '40px';
    obj42.style.border = '2px solid rgb(0,0,0)';
    obj42.style.borderRadius = '10px';
    obj42.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj42);

    var txt9 = document.createTextNode("Saisir les cooordonnées de l'entreprise");
    obj42.appendChild(txt9);

    /*======Saisir les cooordonnées de la personne======*/
    var obj43 = document.createElement('div');
    obj43.id = 'obj_43';
    obj43.title = 'obj_43';
    obj43.style.position = 'absolute';
    obj43.style.left = '50px';
    obj43.style.top = '595px';
    obj43.style.width = '160px';
    obj43.style.height = '40px';
    obj43.style.border = '2px solid rgb(0,0,0)';
    obj43.style.borderRadius = '10px';
    obj43.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj43);

    var txt10 = document.createTextNode("Saisir les cooordonnées de la personne");
    obj43.appendChild(txt10);

    /*======Ligne======*/
    var obj44 = document.createElement('div');
    obj44.id = 'obj_44';
    obj44.title = 'obj_44';
    obj44.style.position = 'absolute';
    obj44.style.left = '145px';
    obj44.style.top = '637px';
    obj44.style.width = '3px';
    obj44.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj44.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj44);

    /*======Flèche======*/
    var obj45 = document.createElement('div');
    obj45.id = 'obj_45';
    obj45.title = 'obj_45';
    obj45.style.position = 'absolute';
    obj45.style.left = '135px';
    obj45.style.top = '667px';
    obj45.style.width = '20px';
    obj45.style.height = '20px';
    document.getElementById('processus').appendChild(obj45);

    var obj46 = document.createElement('div');
    obj46.style.borderTop = '10px solid rgb(0,0,0)';
    obj46.style.borderLeft = '10px solid transparent';
    obj46.style.borderRight = '10px solid transparent';
    document.getElementById('obj_45').appendChild(obj46);

    /*======Ligne======*/
    var obj47 = document.createElement('div');
    obj47.id = 'obj_47';
    obj47.title = 'obj_47';
    obj47.style.position = 'absolute';
    obj47.style.left = '-85px';
    obj47.style.top = '637px';
    obj47.style.width = '3px';
    obj47.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj47.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj47);

    /*======Flèche======*/
    var obj48 = document.createElement('div');
    obj48.id = 'obj_48';
    obj48.title = 'obj_48';
    obj48.style.position = 'absolute';
    obj48.style.left = '-95px';
    obj48.style.top = '667px';
    obj48.style.width = '20px';
    obj48.style.height = '20px';
    document.getElementById('processus').appendChild(obj48);

    var obj49 = document.createElement('div');
    obj49.style.borderTop = '10px solid rgb(0,0,0)';
    obj49.style.borderLeft = '10px solid transparent';
    obj49.style.borderRight = '10px solid transparent';
    document.getElementById('obj_48').appendChild(obj49);

    /*======Enregistrer======*/
    var obj50 = document.createElement('div');
    obj50.id = 'obj_50';
    obj50.title = 'obj_50';
    obj50.style.position = 'absolute';
    obj50.style.left = '94px';
    obj50.style.top = '678px';
    obj50.style.width = '90px';
    obj50.style.height = '30px';
    obj50.style.border = '2px solid rgb(0,0,0)';
    obj50.style.borderRadius = '10px';
    obj50.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj50);

    var txt11 = document.createTextNode("Enregistrer");
    obj50.appendChild(txt11);

    /*======Enregistrer======*/
    var obj51 = document.createElement('div');
    obj51.id = 'obj_51';
    obj51.title = 'obj_51';
    obj51.style.position = 'absolute';
    obj51.style.left = '-135px';
    obj51.style.top = '678px';
    obj51.style.width = '90px';
    obj51.style.height = '30px';
    obj51.style.border = '2px solid rgb(0,0,0)';
    obj51.style.borderRadius = '10px';
    obj51.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj51);

    var txt12 = document.createTextNode("Enregistrer");
    obj51.appendChild(txt12);

    /*======Ligne======*/
    var obj52 = document.createElement('div');
    obj52.id = 'obj_52';
    obj52.title = 'obj_52';
    obj52.style.position = 'absolute';
    obj52.style.left = '145px';
    obj52.style.top = '710px';
    obj52.style.width = '3px';
    obj52.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj52.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj52);

    /*======Flèche======*/
    var obj53 = document.createElement('div');
    obj53.id = 'obj_53';
    obj53.title = 'obj_53';
    obj53.style.position = 'absolute';
    obj53.style.left = '135px';
    obj53.style.top = '740px';
    obj53.style.width = '20px';
    obj53.style.height = '20px';
    document.getElementById('processus').appendChild(obj53);

    var obj54 = document.createElement('div');
    obj54.style.borderTop = '10px solid rgb(0,0,0)';
    obj54.style.borderLeft = '10px solid transparent';
    obj54.style.borderRight = '10px solid transparent';
    document.getElementById('obj_53').appendChild(obj54);

    //Lozange
    //=======

    var obj55 = document.createElement('div');
    obj55.id = 'obj_55';
    obj55.title = 'obj_55';
    obj55.style.position = 'absolute';
    obj55.style.left = '130px';
    obj55.style.top = '750px';
    obj55.style.width = '30px';
    obj55.style.height = '30px';
    document.getElementById('processus').appendChild(obj55);

    var obj56 = document.createElement('div');
    obj56.style.borderBottom = '15px solid rgb(0,0,0)';
    obj56.style.borderLeft = '15px solid transparent';
    obj56.style.borderRight = '15px solid transparent';
    document.getElementById('obj_55').appendChild(obj56);

    var obj57 = document.createElement('div');
    obj57.style.borderTop = '15px solid rgb(0,0,0)';
    obj57.style.borderLeft = '15px solid transparent';
    obj57.style.borderRight = '15px solid transparent';
    document.getElementById('obj_55').appendChild(obj57);

    /*======Ligne======*/
    var obj58 = document.createElement('div');
    obj58.id = 'obj_58';
    obj58.title = 'obj_58';
    obj58.style.position = 'absolute';
    obj58.style.left = '-90px';
    obj58.style.top = '710px';
    obj58.style.width = '3px';
    obj58.style.height = '57px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj58.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj58);

    //LIgne horizontale
    //==================
    var obj59 = document.createElement('div');
    obj59.id = 'obj_59';
    obj59.title = 'obj_59';
    obj59.style.position = 'absolute';
    obj59.style.left = '-87px';
    obj59.style.top = '765px';
    obj59.style.width = '210px';
    obj59.style.height = '0px';
    obj59.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj59);

    //Flêche gauche
    //==================

    var obj60 = document.createElement('div');
    obj60.id = 'obj_60';
    obj60.title = 'obj_60';
    obj60.style.position = 'absolute';
    obj60.style.left = '120px';
    obj60.style.top = '755px';
    obj60.style.width = '20px';
    obj60.style.height = '20px';
    document.getElementById('processus').appendChild(obj60);

    var obj61 = document.createElement('div');
    obj61.style.borderLeft = '10px solid rgb(0,0,0)';
    obj61.style.borderTop = '10px solid transparent';
    obj61.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_60').appendChild(obj61);

    //LIgne horizontale
    //==================
    var obj62 = document.createElement('div');
    obj62.id = 'obj_62';
    obj62.title = 'obj_62';
    obj62.style.position = 'absolute';
    obj62.style.left = '213px';
    obj62.style.top = '420px';
    obj62.style.width = '285px';
    obj62.style.height = '0px';
    obj62.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj62);

    /*======Texte : Selectionner l'assujetti======*/
    var obj63 = document.createElement('div');
    obj63.id = 'obj_63';
    obj63.title = 'obj_63';
    obj63.style.position = 'absolute';
    obj63.style.left = '250px';
    obj63.style.top = '400px';
    obj63.style.width = '200px';
    obj63.style.height = '20px';
    obj63.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj63);

    var txt14 = document.createTextNode("Selectionner l'assujetti");
    obj63.appendChild(txt14);

    /*======Ligne======*/
    var obj64 = document.createElement('div');
    obj64.id = 'obj_64';
    obj64.title = 'obj_64';
    obj64.style.position = 'absolute';
    obj64.style.left = '500px';
    obj64.style.top = '420px';
    obj64.style.width = '3px';
    obj64.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj64.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj64);

    /*======Flèche======*/
    var obj65 = document.createElement('div');
    obj65.id = 'obj_65';
    obj65.title = 'obj_65';
    obj65.style.position = 'absolute';
    obj65.style.left = '490px';
    obj65.style.top = '450px';
    obj65.style.width = '20px';
    obj65.style.height = '20px';
    document.getElementById('processus').appendChild(obj65);

    var obj66 = document.createElement('div');
    obj66.style.borderTop = '10px solid rgb(0,0,0)';
    obj66.style.borderLeft = '10px solid transparent';
    obj66.style.borderRight = '10px solid transparent';
    document.getElementById('obj_65').appendChild(obj66);

    /*======Affichage des biens ou bases imposables======*/
    var obj67 = document.createElement('div');
    obj67.id = 'obj_67';
    obj67.title = 'obj_67';
    obj67.style.position = 'absolute';
    obj67.style.left = '430px';
    obj67.style.top = '460px';
    obj67.style.width = '140px';
    obj67.style.height = '40px';
    obj67.style.border = '2px solid rgb(0,0,0)';
    obj67.style.borderRadius = '10px';
    obj67.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj67);

    var txt15 = document.createTextNode("Affichage des biens ou bases imposables");
    obj67.appendChild(txt15);

    /*======Ligne======*/
    var obj68 = document.createElement('div');
    obj68.id = 'obj_68';
    obj68.title = 'obj_68';
    obj68.style.position = 'absolute';
    obj68.style.left = '499px';
    obj68.style.top = '503px';
    obj68.style.width = '3px';
    obj68.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj68.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj68);

    /*======Flèche======*/
    var obj69 = document.createElement('div');
    obj69.id = 'obj_69';
    obj69.title = 'obj_69';
    obj69.style.position = 'absolute';
    obj69.style.left = '490px';
    obj69.style.top = '532px';
    obj69.style.width = '20px';
    obj69.style.height = '20px';
    document.getElementById('processus').appendChild(obj69);

    var obj70 = document.createElement('div');
    obj70.style.borderTop = '10px solid rgb(0,0,0)';
    obj70.style.borderLeft = '10px solid transparent';
    obj70.style.borderRight = '10px solid transparent';
    document.getElementById('obj_69').appendChild(obj70);

    //Lozange
    //=======

    var obj71 = document.createElement('div');
    obj71.id = 'obj_71';
    obj71.title = 'obj_71';
    obj71.style.position = 'absolute';
    obj71.style.left = '485px';
    obj71.style.top = '540px';
    obj71.style.width = '30px';
    obj71.style.height = '30px';
    document.getElementById('processus').appendChild(obj71);

    var obj72 = document.createElement('div');
    obj72.style.borderBottom = '15px solid rgb(0,0,0)';
    obj72.style.borderLeft = '15px solid transparent';
    obj72.style.borderRight = '15px solid transparent';
    document.getElementById('obj_71').appendChild(obj72);

    var obj73 = document.createElement('div');
    obj73.style.borderTop = '15px solid rgb(0,0,0)';
    obj73.style.borderLeft = '15px solid transparent';
    obj73.style.borderRight = '15px solid transparent';
    document.getElementById('obj_71').appendChild(obj73);

    //LIgne horizontale
    //==================
    var obj74 = document.createElement('div');
    obj74.id = 'obj_74';
    obj74.title = 'obj_74';
    obj74.style.position = 'absolute';
    obj74.style.left = '513px';
    obj74.style.top = '555px';
    obj74.style.width = '170px';
    obj74.style.height = '0px';
    obj74.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj74);

    //LIgne horizontale
    //==================
    var obj75 = document.createElement('div');
    obj75.id = 'obj_75';
    obj75.title = 'obj_75';
    obj75.style.position = 'absolute';
    obj75.style.left = '385px';
    obj75.style.top = '555px';
    obj75.style.width = '100px';
    obj75.style.height = '0px';
    obj75.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj75);

    //Flêche gauche
    //==================

    var obj76 = document.createElement('div');
    obj76.id = 'obj_76';
    obj76.title = 'obj_76';
    obj76.style.position = 'absolute';
    obj76.style.left = '310px';
    obj76.style.top = '755px';
    obj76.style.width = '20px';
    obj76.style.height = '20px';
    document.getElementById('processus').appendChild(obj76);

    var obj77 = document.createElement('div');
    obj77.style.borderLeft = '10px solid rgb(0,0,0)';
    obj77.style.borderTop = '10px solid transparent';
    obj77.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_76').appendChild(obj77);

    /*======Selectionner la nature  du bien ou de la base imposable======*/
    var obj78 = document.createElement('div');
    obj78.id = 'obj_78';
    obj78.title = 'obj_78';
    obj78.style.position = 'absolute';
    obj78.style.left = '320px';
    obj78.style.top = '735px';
    obj78.style.width = '135px';
    obj78.style.height = '60px';
    obj78.style.border = '2px solid rgb(0,0,0)';
    obj78.style.borderRadius = '10px';
    obj78.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj78);

    var txt16 = document.createTextNode("Selectionner la nature du bien ou de la base imposable");
    obj78.appendChild(txt16);

    /*======Ligne======*/
    var obj79 = document.createElement('div');
    obj79.id = 'obj_79';
    obj79.title = 'obj_79';
    obj79.style.position = 'absolute';
    obj79.style.left = '383px';
    obj79.style.top = '555px';
    obj79.style.width = '3px';
    obj79.style.height = '170px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj79.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj79);

    /*======Flèche======*/
    var obj80 = document.createElement('div');
    obj80.id = 'obj_80';
    obj80.title = 'obj_80';
    obj80.style.position = 'absolute';
    obj80.style.left = '373px';
    obj80.style.top = '725px';
    obj80.style.width = '20px';
    obj80.style.height = '20px';
    document.getElementById('processus').appendChild(obj80);

    var obj81 = document.createElement('div');
    obj81.style.borderTop = '10px solid rgb(0,0,0)';
    obj81.style.borderLeft = '10px solid transparent';
    obj81.style.borderRight = '10px solid transparent';
    document.getElementById('obj_80').appendChild(obj81);

    //LIgne horizontale
    //==================
    var obj82 = document.createElement('div');
    obj82.id = 'obj_82';
    obj82.title = 'obj_82';
    obj82.style.position = 'absolute';
    obj82.style.left = '150px';
    obj82.style.top = '765px';
    obj82.style.width = '161px';
    obj82.style.height = '0px';
    obj82.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj82);

    /*======Texte : Nouvelle base imposable======*/
    var obj83 = document.createElement('div');
    obj83.id = 'obj_83';
    obj83.title = 'obj_83';
    obj83.style.position = 'absolute';
    obj83.style.left = '320px';
    obj83.style.top = '535px';
    obj83.style.width = '200px';
    obj83.style.height = '20px';
    obj83.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj83);

    var txt17 = document.createTextNode("Nouvelle base imposable");
    obj83.appendChild(txt17);

    /*======Texte : Selectionner la base======*/
    var obj84 = document.createElement('div');
    obj84.id = 'obj_84';
    obj84.title = 'obj_84';
    obj84.style.position = 'absolute';
    obj84.style.left = '520px';
    obj84.style.top = '535px';
    obj84.style.width = '200px';
    obj84.style.height = '20px';
    obj84.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj84);

    var txt18 = document.createTextNode("Selectionner la base");
    obj84.appendChild(txt18);

    /*======Ligne======*/
    var obj85 = document.createElement('div');
    obj85.id = 'obj_85';
    obj85.title = 'obj_85';
    obj85.style.position = 'absolute';
    obj85.style.left = '683px';
    obj85.style.top = '555px';
    obj85.style.width = '3px';
    obj85.style.height = '280px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj85.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj85);

    /*======Flèche======*/
    var obj86 = document.createElement('div');
    obj86.id = 'obj_86';
    obj86.title = 'obj_86';
    obj86.style.position = 'absolute';
    obj86.style.left = '673px';
    obj86.style.top = '835px';
    obj86.style.width = '20px';
    obj86.style.height = '20px';
    document.getElementById('processus').appendChild(obj86);

    var obj87 = document.createElement('div');
    obj87.style.borderTop = '10px solid rgb(0,0,0)';
    obj87.style.borderLeft = '10px solid transparent';
    obj87.style.borderRight = '10px solid transparent';
    document.getElementById('obj_86').appendChild(obj87);

    /*======Ajout de la base sur la déclaration======*/
    var obj88 = document.createElement('div');
    obj88.id = 'obj_88';
    obj88.title = 'obj_88';
    obj88.style.position = 'absolute';
    obj88.style.left = '630px';
    obj88.style.top = '845px';
    obj88.style.width = '120px';
    obj88.style.height = '40px';
    obj88.style.border = '2px solid rgb(0,0,0)';
    obj88.style.borderRadius = '10px';
    obj88.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj88);

    var txt19 = document.createTextNode("Ajout de la base sur la déclaration");
    obj88.appendChild(txt19);

    /*======Ligne======*/
    var obj89 = document.createElement('div');
    obj89.id = 'obj_89';
    obj89.title = 'obj_89';
    obj89.style.position = 'absolute';
    obj89.style.left = '383px';
    obj89.style.top = '797px';
    obj89.style.width = '3px';
    obj89.style.height = '40px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj89.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj89);

    /*======Flèche======*/
    var obj90 = document.createElement('div');
    obj90.id = 'obj_90';
    obj90.title = 'obj_90';
    obj90.style.position = 'absolute';
    obj90.style.left = '373px';
    obj90.style.top = '835px';
    obj90.style.width = '20px';
    obj90.style.height = '20px';
    document.getElementById('processus').appendChild(obj90);

    var obj91 = document.createElement('div');
    obj91.style.borderTop = '10px solid rgb(0,0,0)';
    obj91.style.borderLeft = '10px solid transparent';
    obj91.style.borderRight = '10px solid transparent';
    document.getElementById('obj_90').appendChild(obj91);

    /*======Saisir les éléments de la base imposable======*/
    var obj92 = document.createElement('div');
    obj92.id = 'obj_92';
    obj92.title = 'obj_92';
    obj92.style.position = 'absolute';
    obj92.style.left = '320px';
    obj92.style.top = '845px';
    obj92.style.width = '120px';
    obj92.style.height = '60px';
    obj92.style.border = '2px solid rgb(0,0,0)';
    obj92.style.borderRadius = '10px';
    obj92.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj92);

    var txt20 = document.createTextNode("Saisir les éléments de la base imposable");
    obj92.appendChild(txt20);

    /*======Enregistrer la base imposable======*/
    var obj93 = document.createElement('div');
    obj93.id = 'obj_93';
    obj93.title = 'obj_93';
    obj93.style.position = 'absolute';
    obj93.style.left = '480px';
    obj93.style.top = '845px';
    obj93.style.width = '110px';
    obj93.style.height = '40px';
    obj93.style.border = '2px solid rgb(0,0,0)';
    obj93.style.borderRadius = '10px';
    obj93.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj93);

    var txt21 = document.createTextNode("Enregistrer la base imposable");
    obj93.appendChild(txt21);

    //LIgne horizontale
    //==================
    var obj94 = document.createElement('div');
    obj94.id = 'obj_94';
    obj94.title = 'obj_94';
    obj94.style.position = 'absolute';
    obj94.style.left = '442px';
    obj94.style.top = '870px';
    obj94.style.width = '30px';
    obj94.style.height = '0px';
    obj94.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj94);

    //Flêche gauche
    //==================

    var obj95 = document.createElement('div');
    obj95.id = 'obj_95';
    obj95.title = 'obj_95';
    obj95.style.position = 'absolute';
    obj95.style.left = '470px';
    obj95.style.top = '861px';
    obj95.style.width = '20px';
    obj95.style.height = '20px';
    document.getElementById('processus').appendChild(obj95);

    var obj96 = document.createElement('div');
    obj96.style.borderLeft = '10px solid rgb(0,0,0)';
    obj96.style.borderTop = '10px solid transparent';
    obj96.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_95').appendChild(obj96);

    //LIgne horizontale
    //==================
    var obj97 = document.createElement('div');
    obj97.id = 'obj_97';
    obj97.title = 'obj_97';
    obj97.style.position = 'absolute';
    obj97.style.left = '592px';
    obj97.style.top = '870px';
    obj97.style.width = '30px';
    obj97.style.height = '0px';
    obj97.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj97);

    //Flêche gauche
    //==================

    var obj98 = document.createElement('div');
    obj98.id = 'obj_98';
    obj98.title = 'obj_98';
    obj98.style.position = 'absolute';
    obj98.style.left = '622px';
    obj98.style.top = '860px';
    obj98.style.width = '20px';
    obj98.style.height = '20px';
    document.getElementById('processus').appendChild(obj98);

    var obj99 = document.createElement('div');
    obj99.style.borderLeft = '10px solid rgb(0,0,0)';
    obj99.style.borderTop = '10px solid transparent';
    obj99.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_98').appendChild(obj99);

    /*======Ligne======*/
    var obj100 = document.createElement('div');
    obj100.id = 'obj_100';
    obj100.title = 'obj_100';
    obj100.style.position = 'absolute';
    obj100.style.left = '682px';
    obj100.style.top = '887px';
    obj100.style.width = '3px';
    obj100.style.height = '50px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj100.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj100);

    /*======Flèche======*/
    //var obj101 = document.createElement('div');
    //obj101.id = 'obj_101';
    //obj101.title = 'obj_101';
    //obj101.style.position = 'absolute';
    //obj101.style.left = '673px';
    //obj101.style.top = '927px';
    //obj101.style.width = '20px';
    //obj101.style.height = '20px';
    //document.getElementById('processus').appendChild(obj101);

    //var obj102 = document.createElement('div');
    //obj102.style.borderTop = '10px solid rgb(0,0,0)';
    //obj102.style.borderLeft = '10px solid transparent';
    //obj102.style.borderRight = '10px solid transparent';
    //document.getElementById('obj_101').appendChild(obj102);

    /*======Ajout de la base sur la feuille de calcul======*/
    //var obj103 = document.createElement('div');
    //obj103.id = 'obj_103';
    //obj103.title = 'obj_103';
    //obj103.style.position = 'absolute';
    //obj103.style.left = '620px';
    //obj103.style.top = '938px';
    //obj103.style.width = '110px';
    //obj103.style.height = '60px';
    //obj103.style.border = '2px solid rgb(0,0,0)';
    //obj103.style.borderRadius = '10px';
    //obj103.style.textAlign = 'center';
    ////obj8.style.backgroundColor = 'rgb(0,0,0)';
    //document.getElementById('processus').appendChild(obj103);

    //var txt23 = document.createTextNode("Ajout de la base sur la feuille de calcul");
    //obj103.appendChild(txt23);

    /*======Ligne======*/
    //var obj104 = document.createElement('div');
    //obj104.id = 'obj_104';
    //obj104.title = 'obj_104';
    //obj104.style.position = 'absolute';
    //obj104.style.left = '682px';
    //obj104.style.top = '900px';
    //obj104.style.width = '3px';
    //obj104.style.height = '30px';
    ////obj5.style.border = '2px solid rgb(0,0,0)';
    //obj104.style.backgroundColor = 'rgb(0,0,0)';
    //document.getElementById('processus').appendChild(obj104);

    /*======Flèche======*/
    var obj105 = document.createElement('div');
    obj105.id = 'obj_105';
    obj105.title = 'obj_105';
    obj105.style.position = 'absolute';
    obj105.style.left = '673px';
    obj105.style.top = '937px';
    obj105.style.width = '20px';
    obj105.style.height = '20px';
    document.getElementById('processus').appendChild(obj105);

    var obj106 = document.createElement('div');
    obj106.style.borderTop = '10px solid rgb(0,0,0)';
    obj106.style.borderLeft = '10px solid transparent';
    obj106.style.borderRight = '10px solid transparent';
    document.getElementById('obj_105').appendChild(obj106);

    //Lozange
    //=======

    var obj107 = document.createElement('div');
    obj107.id = 'obj_107';
    obj107.title = 'obj_107';
    obj107.style.position = 'absolute';
    obj107.style.left = '668px';
    obj107.style.top = '947px';
    obj107.style.width = '30px';
    obj107.style.height = '30px';
    document.getElementById('processus').appendChild(obj107);

    var obj108 = document.createElement('div');
    obj108.style.borderBottom = '15px solid rgb(0,0,0)';
    obj108.style.borderLeft = '15px solid transparent';
    obj108.style.borderRight = '15px solid transparent';
    document.getElementById('obj_107').appendChild(obj108);

    var obj109 = document.createElement('div');
    obj109.style.borderTop = '15px solid rgb(0,0,0)';
    obj109.style.borderLeft = '15px solid transparent';
    obj109.style.borderRight = '15px solid transparent';
    document.getElementById('obj_107').appendChild(obj109);

    //LIgne horizontale
    //==================
    var obj110 = document.createElement('div');
    obj110.id = 'obj_110';
    obj110.title = 'obj_110';
    obj110.style.position = 'absolute';
    obj110.style.left = '695px';
    obj110.style.top = '961px';
    obj110.style.width = '80px';
    obj110.style.height = '0px';
    obj110.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj110);

    /*======Ligne======*/
    var obj111 = document.createElement('div');
    obj111.id = 'obj_111';
    obj111.title = 'obj_111';
    obj111.style.position = 'absolute';
    obj111.style.left = '775px';
    obj111.style.top = '480px';
    obj111.style.width = '3px';
    obj111.style.height = '483px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj111.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj111);

    //LIgne horizontale
    //==================
    var obj112 = document.createElement('div');
    obj112.id = 'obj_112';
    obj112.title = 'obj_112';
    obj112.style.position = 'absolute';
    obj112.style.left = '585px';
    obj112.style.top = '480px';
    obj112.style.width = '188px';
    obj112.style.height = '0px';
    obj112.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj112);

    //Flêche gauche
    //==================

    var obj113 = document.createElement('div');
    obj113.id = 'obj_113';
    obj113.title = 'obj_113';
    obj113.style.position = 'absolute';
    obj113.style.left = '565px';
    obj113.style.top = '470px';
    obj113.style.width = '20px';
    obj113.style.height = '20px';
    document.getElementById('processus').appendChild(obj113);

    var obj114 = document.createElement('div');
    obj114.style.borderRight = '10px solid rgb(0,0,0)';
    obj114.style.borderTop = '10px solid transparent';
    obj114.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_113').appendChild(obj114);

    /*======Texte : Suivant======*/
    var obj115 = document.createElement('div');
    obj115.id = 'obj_115';
    obj115.title = 'obj_115';
    obj115.style.position = 'absolute';
    obj115.style.left = '720px';
    obj115.style.top = '940px';
    obj115.style.width = '200px';
    obj115.style.height = '20px';
    obj115.style.textAlign = 'Left';
    document.getElementById('processus').appendChild(obj115);

    var txt27 = document.createTextNode("Suivant");
    obj115.appendChild(txt27);

    //LIgne 
    //=====
    var obj116 = document.createElement('div');
    obj116.id = 'obj_116';
    obj116.title = 'obj_116';
    obj116.style.position = 'absolute';
    obj116.style.left = '681px';
    obj116.style.top = '975px';
    obj116.style.width = '3px';
    obj116.style.height = '35px';
    //obj116.style.border = '1px solid rgb(0,0,0)';
    obj116.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj116);

    //Flêche 
    //======

    var obj117 = document.createElement('div');
    obj117.id = 'obj_117';
    obj117.title = 'obj_117';
    obj117.style.position = 'absolute';
    obj117.style.left = '672px';
    obj117.style.top = '1010px';
    obj117.style.width = '20px';
    obj117.style.height = '20px';
    document.getElementById('processus').appendChild(obj117);

    var obj118 = document.createElement('div');
    obj118.style.borderTop = '10px solid rgb(0,0,0)';
    obj118.style.borderLeft = '10px solid transparent';
    obj118.style.borderRight = '10px solid transparent';
    document.getElementById('obj_117').appendChild(obj118);

   

    /*======Texte : Fin======*/
    var obj120 = document.createElement('div');
    obj120.id = 'obj_120';
    obj120.title = 'obj_120';
    obj120.style.position = 'absolute';
    obj120.style.left = '688px';
    obj120.style.top = '980px';
    obj120.style.width = '200px';
    obj120.style.height = '20px';
    obj120.style.textAlign = 'Left';
    document.getElementById('processus').appendChild(obj120);

    var txt29 = document.createTextNode("Fin");
    obj120.appendChild(txt29);

    

    /* ======Afficher les déclarations====== */

    var obj125 = document.createElement('div');
    obj125.id = 'obj_125';
    obj125.title = 'obj_125';
    obj125.style.position = 'absolute';
    obj125.style.left = '625px';
    obj125.style.top = '1020px';
    obj125.style.width = '120px';
    obj125.style.height = '40px';
    obj125.style.border = '2px solid rgb(0,0,0)';
    obj125.style.borderRadius = '10px';
    obj125.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj125);

    var txt29 = document.createTextNode("Afficher la déclaration");
    obj125.appendChild(txt29);

    

    /*======Ligne======*/
    var obj164 = document.createElement('div');
    obj164.id = 'obj_164';
    obj164.title = 'obj_164';
    obj164.style.position = 'absolute';
    obj164.style.left = '829px';
    obj164.style.top = '440px';
    obj164.style.width = '3px';
    obj164.style.height = '600px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj164.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj164);

    //LIgne horizontale
    //==================
    var obj165 = document.createElement('div');
    obj165.id = 'obj_165';
    obj165.title = 'obj_165';
    obj165.style.position = 'absolute';
    obj165.style.left = '529px';
    obj165.style.top = '440px';
    obj165.style.width = '300px';
    obj165.style.height = '0px';
    obj165.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj165);

    /*======Ligne======*/
    var obj166 = document.createElement('div');
    obj166.id = 'obj_166';
    obj166.title = 'obj_166';
    obj166.style.position = 'absolute';
    obj166.style.left = '529px';
    obj166.style.top = '180px';
    obj166.style.width = '3px';
    obj166.style.height = '260px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj166.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj166);

    //LIgne horizontale
    //==================
    var obj167 = document.createElement('div');
    obj167.id = 'obj_167';
    obj167.title = 'obj_167';
    obj167.style.position = 'absolute';
    obj167.style.left = '259px';
    obj167.style.top = '180px';
    obj167.style.width = '270px';
    obj167.style.height = '0px';
    obj167.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj167);

    //Flêche gauche
    //==================

    var obj168 = document.createElement('div');
    obj168.id = 'obj_168';
    obj168.title = 'obj_168';
    obj168.style.position = 'absolute';
    obj168.style.left = '239px';
    obj168.style.top = '170px';
    obj168.style.width = '20px';
    obj168.style.height = '20px';
    document.getElementById('processus').appendChild(obj168);

    var obj169 = document.createElement('div');
    obj169.style.borderRight = '10px solid rgb(0,0,0)';
    obj169.style.borderTop = '10px solid transparent';
    obj169.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_168').appendChild(obj169);

    //LIgne horizontale
    //==================
    var obj170 = document.createElement('div');
    obj170.id = 'obj_170';
    obj170.title = 'obj_170';
    obj170.style.position = 'absolute';
    obj170.style.left = '749px';
    obj170.style.top = '1038px';
    obj170.style.width = '80px';
    obj170.style.height = '0px';
    obj170.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj170);

    switch (pageID) {
        case 'RechercherAssujetti':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj1, obj5, obj9];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*=======Liste des lignes==========*/
            var lstLignes = [obj2, obj6, obj10];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }



            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj4, obj8, obj12];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj14.style.border = '5px solid rgb(255, 216, 0)';
            obj14.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'AffichagePropriete':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj1, obj5, obj9, obj14];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*=======Liste des lignes==========*/
            var lstLignes = [obj2, obj6, obj10, obj15, obj64];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj62];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj4, obj8, obj12, obj17, obj66];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj67.style.border = '5px solid rgb(255, 216, 0)';
            obj67.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'ElaborDeclaration':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj1, obj5];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*=======Liste des lignes==========*/
            var lstLignes = [obj2, obj6];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj4, obj8];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj9.style.border = '5px solid rgb(255, 216, 0)';
            obj9.style.backgroundColor = 'rgb(255, 216, 0)';
            break;


        case 'EnregistrerProprieteDec':
            switch (action) {
                case 'AncienneBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj85];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj74];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj87];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj88.style.border = '5px solid rgb(255, 216, 0)';
                    obj88.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'NouvelleBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67, obj78, obj92, obj93];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj79, obj89];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj75, obj94, obj97];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj81, obj91];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj88.style.border = '5px solid rgb(255, 216, 0)';
                    obj88.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

            }
            break;

        case 'SelectNature':
            switch (action) {
                case 'NouvelAssujetti':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj26, obj42, obj51];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj22, obj27, obj36, obj47, obj58];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj21, obj34, obj59, obj82];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj25, obj29, obj38, obj49];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }
                    obj78.style.border = '5px solid rgb(255, 216, 0)';
                    obj78.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'NouvelleBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj79];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj75];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj81];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj78.style.border = '5px solid rgb(255, 216, 0)';
                    obj78.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
            break;

        case 'SaisirElementsBaseImp':
            switch (action) {
                case 'NouvelAssujetti':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj26, obj42, obj51, obj78];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj22, obj27, obj36, obj47, obj58, obj89];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj21, obj34, obj59, obj82];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj25, obj29, obj38, obj49, obj91];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }
                    obj92.style.border = '5px solid rgb(255, 216, 0)';
                    obj92.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'NouvelleBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67, obj78];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj79];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj75];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj81];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj92.style.border = '5px solid rgb(255, 216, 0)';
                    obj92.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
            break;


        case 'EnregistrerBaseImp':
            switch (action) {
                case 'NouvelleBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67, obj78, obj92];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj79, obj89];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj75, obj94];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj81, obj91];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj93.style.border = '5px solid rgb(255, 216, 0)';
                    obj93.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'NouvelAssujetti':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj26, obj42, obj51, obj78, obj92];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj22, obj27, obj36, obj47, obj58, obj89];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj21, obj34, obj59, obj82, obj94];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj25, obj29, obj38, obj49, obj91, obj96];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }
                    obj93.style.border = '5px solid rgb(255, 216, 0)';
                    obj93.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
            break;

        case 'SelectForme':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj1, obj5, obj9, obj14];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*=======Liste des lignes==========*/
            var lstLignes = [obj2, obj6, obj10, obj15, obj22];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj21];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj4, obj8, obj12, obj17, obj25];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj26.style.border = '5px solid rgb(255, 216, 0)';
            obj26.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SaisirCoordonneesEntreprise':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj1, obj5, obj9, obj14, obj26];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }


            /*=======Liste des lignes==========*/
            var lstLignes = [obj2, obj6, obj10, obj15, obj22, obj27, obj36];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj21, obj34];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj4, obj8, obj12, obj17, obj25, obj29, obj38];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }
            obj42.style.border = '5px solid rgb(255, 216, 0)';
            obj42.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'AfficherDeclaration':
            switch (action) {
        case 'EnregistrerPersonne':

                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj26,obj42];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }
                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj22, obj27, obj36,obj47];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }
                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj21, obj34];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }
                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj25, obj29, obj38,obj49];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }
                    obj51.style.border = '5px solid rgb(255, 216, 0)';
                    obj51.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'AncienneBase':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj1, obj5, obj9, obj14, obj67, obj88];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj2, obj6, obj10, obj15, obj64, obj68, obj85, obj100, obj116];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj62, obj74];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj4, obj8, obj12, obj17, obj66, obj70, obj87, obj106, obj118];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj125.style.border = '5px solid rgb(255, 216, 0)';
                    obj125.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
    }

}