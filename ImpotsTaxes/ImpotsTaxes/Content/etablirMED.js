function processus(pageID,action) {

    /*====Login=======*/

    var obj4 = document.createElement('div');
    obj4.id = 'obj_4';
    obj4.title = 'obj_4';
    obj4.style.position = 'absolute';
    obj4.style.left = '360px';
    obj4.style.top = '85px';
    obj4.style.width = '80px';
    obj4.style.height = '20px';
    obj4.style.border = '3px solid rgb(0,0,0)';
    obj4.style.borderRadius = '10px';
    obj4.style.textAlign = 'center';
    //obj4.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj4);
   
    //var txt1 = document.createTextNode("Login");
    //obj4.appendChild(txt1);

    /*======LIEN=======*/
    var lien1 = document.createElement('a');
    lien1.id = "lien_2";
    lien1.href = "/Login/Index";
    //lien4.style.color = "red";
    //lien4.className = "blink_text";
    obj4.appendChild(lien1);
    var txt1 = document.createTextNode("Login");
    lien1.appendChild(txt1);

    /*======Ligne======*/
    var obj5 = document.createElement('div');
    obj5.id = 'obj_5';
    obj5.title = 'obj_5';
    obj5.style.position = 'absolute';
    obj5.style.left = '400px';
    obj5.style.top = '110px';
    obj5.style.width = '3px';
    obj5.style.height = '30px';
    obj5.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj5);

    /*======Flèche======*/
    var obj6 = document.createElement('div');
    obj6.id = 'obj_6';
    obj6.title = 'obj_6';
    obj6.style.position = 'absolute';
    obj6.style.left = '391px';
    obj6.style.top = '132px';
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
    obj8.style.left = '360px';
    obj8.style.top = '142px';
    obj8.style.width = '80px';
    obj8.style.height = '20px';
    obj8.style.border = '2px solid rgb(0,0,0)';
    obj8.style.borderRadius = '10px';
    obj8.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj8);

    //var txt2 = document.createTextNode("Acceuil");
    //obj8.appendChild(txt2);

    /*======LIEN=======*/
    var lien3 = document.createElement('a');
    lien3.id = "lien_3";
    lien3.href = "/Recouvrement/Index";
    //lien4.style.color = "red";
    //lien4.className = "blink_text";
    obj8.appendChild(lien3);
    var txt2 = document.createTextNode("Acceuil");
    lien3.appendChild(txt2);

    /*======Texte : Clic sur se connecter======*/
    var obj9 = document.createElement('div');
    obj9.id = 'obj_9';
    obj9.title = 'obj_9';
    obj9.style.position = 'absolute';
    obj9.style.left = '412px';
    obj9.style.top = '120px';
    obj9.style.width = '200px';
    obj9.style.height = '30px';
    obj9.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj9);

    var txt3 = document.createTextNode("Clic sur se connecter");
    obj9.appendChild(txt3);

    /*======Ligne======*/
    var obj10 = document.createElement('div');
    obj10.id = 'obj_10';
    obj10.title = 'obj_10';
    obj10.style.position = 'absolute';
    obj10.style.left = '400px';
    obj10.style.top = '165px';
    obj10.style.width = '3px';
    obj10.style.height = '40px';
    obj10.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj10);

    /*======Flèche======*/
    var obj11 = document.createElement('div');
    obj11.id = 'obj_11';
    obj11.title = 'obj_11';
    obj11.style.position = 'absolute';
    obj11.style.left = '391px';
    obj11.style.top = '202px';
    obj11.style.width = '20px';
    obj11.style.height = '20px';
    document.getElementById('processus').appendChild(obj11);

    var obj12 = document.createElement('div');
    obj12.style.borderTop = '10px solid rgb(0,0,0)';
    obj12.style.borderLeft = '10px solid transparent';
    obj12.style.borderRight = '10px solid transparent';
    document.getElementById('obj_11').appendChild(obj12);

    /*======Texte : Clic sur MED======*/
    var obj13 = document.createElement('div');
    obj13.id = 'obj_13';
    obj13.title = 'obj_13';
    obj13.style.position = 'absolute';
    obj13.style.left = '412px';
    obj13.style.top = '180px';
    obj13.style.width = '200px';
    obj13.style.height = '30px';
    obj13.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj13);

    var txt4 = document.createTextNode("Clic sur MED");
    obj13.appendChild(txt4);

    /*======Recherche les notes======*/
    var obj14 = document.createElement('div');
    obj14.id = 'obj_14';
    obj14.title = 'obj_14';
    obj14.style.position = 'absolute';
    obj14.style.left = '300px';
    obj14.style.top = '212px';
    obj14.style.width = '210px';
    obj14.style.height = '40px';
    obj14.style.border = '2px solid rgb(0,0,0)';
    obj14.style.borderRadius = '10px';
    obj14.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj14);

    //var txt5 = document.createTextNode("Recherche des notes pour les quelles établir des MCD par:");
    //obj14.appendChild(txt5);

    /*======LIEN=======*/
    var lien4 = document.createElement('a');
    lien4.id = "lien_4";
    lien4.href = "/Recouvrement/RechercheNoteMED";
    //lien4.style.color = "red";
    //lien4.className = "blink_text";
    obj14.appendChild(lien4);
    var txt5 = document.createTextNode("Recherche des notes pour les quelles établir des MED par:");
    lien4.appendChild(txt5);

    /*======Ligne======*/
    var obj15 = document.createElement('div');
    obj15.id = 'obj_15';
    obj15.title = 'obj_15';
    obj15.style.position = 'absolute';
    obj15.style.left = '400px';
    obj15.style.top = '255px';
    obj15.style.width = '3px';
    obj15.style.height = '30px';
    obj15.style.backgroundColor = 'rgb(0,0,0)';    
    document.getElementById('processus').appendChild(obj15);

    /*======Flèche======*/
    var obj16 = document.createElement('div');
    obj16.id = 'obj_16';
    obj16.title = 'obj_16';
    obj16.style.position = 'absolute';
    obj16.style.left = '392px';
    obj16.style.top = '285px';
    obj16.style.width = '20px';
    obj16.style.height = '20px';    
    document.getElementById('processus').appendChild(obj16);

    var obj17 = document.createElement('div');
    obj17.style.borderTop = '10px solid rgb(0,0,0)';
    obj17.style.borderLeft = '10px solid transparent';
    obj17.style.borderRight = '10px solid transparent';
    document.getElementById('obj_16').appendChild(obj17);

    //LIgne horizontale
    //==================
    var obj18 = document.createElement('div');
    obj18.id = 'obj_18';
    obj18.title = 'obj_18';
    obj18.style.position = 'absolute';
    obj18.style.left = '130px';
    obj18.style.top = '295px';
    obj18.style.width = '580px';
    obj18.style.height = '0px';
    obj18.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj18);

    /*======Ligne======*/
    var obj19 = document.createElement('div');
    obj19.id = 'obj_19';
    obj19.title = 'obj_19';
    obj19.style.position = 'absolute';
    obj19.style.left = '130px';
    obj19.style.top = '295px';
    obj19.style.width = '3px';
    obj19.style.height = '30px';
    obj19.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj19);

    /*======Flèche======*/
    var obj20 = document.createElement('div');
    obj20.id = 'obj_20';
    obj20.title = 'obj_20';
    obj20.style.position = 'absolute';
    obj20.style.left = '121px';
    obj20.style.top = '325px';
    obj20.style.width = '20px';
    obj20.style.height = '20px';
    document.getElementById('processus').appendChild(obj20);

    var obj21 = document.createElement('div');
    obj21.style.borderTop = '10px solid rgb(0,0,0)';
    obj21.style.borderLeft = '10px solid transparent';
    obj21.style.borderRight = '10px solid transparent';
    document.getElementById('obj_20').appendChild(obj21);

    /*======note======*/
    var obj22 = document.createElement('div');
    obj22.id = 'obj_22';
    obj22.title = 'obj_22';
    obj22.style.position = 'absolute';
    obj22.style.left = '92px';
    obj22.style.top = '335px';
    obj22.style.width = '70px';
    obj22.style.height = '20px';
    obj22.style.border = '2px solid rgb(0,0,0)';
    obj22.style.borderRadius = '10px';
    obj22.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj22);

    /*======LIEN=======*/
    var lien5=document.createElement('a');
    lien5.id = "lien_5";
    lien5.href = "/Recouvrement/SaisirNumNote?action=noteMED";
    lien5.style.color = "red";
    lien5.className = "blink_text";
    obj22.appendChild(lien5);
    var txt6 = document.createTextNode("Note");    
    lien5.appendChild(txt6);


    /*======Ligne======*/
    var obj23 = document.createElement('div');
    obj23.id = 'obj_23';
    obj23.title = 'obj_23';
    obj23.style.position = 'absolute';
    obj23.style.left = '170px';
    obj23.style.top = '295px';
    obj23.style.width = '3px';
    obj23.style.height = '70px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj23.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj23);

    /*======Flèche======*/
    var obj24 = document.createElement('div');
    obj24.id = 'obj_24';
    obj24.title = 'obj_24';
    obj24.style.position = 'absolute';
    obj24.style.left = '162px';
    obj24.style.top = '365px';
    obj24.style.width = '20px';
    obj24.style.height = '20px';
    document.getElementById('processus').appendChild(obj24);

    var obj25 = document.createElement('div');
    obj25.style.borderTop = '10px solid rgb(0,0,0)';
    obj25.style.borderLeft = '10px solid transparent';
    obj25.style.borderRight = '10px solid transparent';
    document.getElementById('obj_24').appendChild(obj25);

    /*======Assujetti======*/
    var obj26 = document.createElement('div');
    obj26.id = 'obj_26';
    obj26.title = 'obj_26';
    obj26.style.position = 'absolute';
    obj26.style.left = '133px';
    obj26.style.top = '375px';
    obj26.style.width = '70px';
    obj26.style.height = '20px';
    obj26.style.border = '2px solid rgb(0,0,0)';
    obj26.style.borderRadius = '10px';
    obj26.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj26);

    //var txt7 = document.createTextNode("Assujetti");
    //obj26.appendChild(txt7);

    /*======LIEN=======*/
    var lien6 = document.createElement('a');
    lien6.id = "lien_6";
    lien6.href = "/Recouvrement/RechercheAssujetti?action=assMED";
    lien6.style.color = "red";
    lien6.className = "blink_text";
    obj26.appendChild(lien6);
    var txt7 = document.createTextNode("Assujetti");
    lien6.appendChild(txt7);

    /*======Ligne======*/
    var obj27 = document.createElement('div');
    obj27.id = 'obj_27';
    obj27.title = 'obj_27';
    obj27.style.position = 'absolute';
    obj27.style.left = '215px';
    obj27.style.top = '295px';
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
    obj28.style.left = '206px';
    obj28.style.top = '325px';
    obj28.style.width = '20px';
    obj28.style.height = '20px';
    document.getElementById('processus').appendChild(obj28);

    var obj29 = document.createElement('div');
    obj29.style.borderTop = '10px solid rgb(0,0,0)';
    obj29.style.borderLeft = '10px solid transparent';
    obj29.style.borderRight = '10px solid transparent';
    document.getElementById('obj_28').appendChild(obj29);

    /*======Article======*/
    var obj30 = document.createElement('div');
    obj30.id = 'obj_30';
    obj30.title = 'obj_30';
    obj30.style.position = 'absolute';
    obj30.style.left = '180px';
    obj30.style.top = '335px';
    obj30.style.width = '70px';
    obj30.style.height = '20px';
    obj30.style.border = '2px solid rgb(0,0,0)';
    obj30.style.borderRadius = '10px';
    obj30.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj30);

    //var txt8 = document.createTextNode("Article");
    //obj30.appendChild(txt8);

    /*======LIEN=======*/
    var lien7 = document.createElement('a');
    lien7.id = "lien_7";
    lien7.href = "/Recouvrement/SelectArticle?action=artMED";
    lien7.style.color = "red";
    lien7.className = "blink_text";
    obj30.appendChild(lien7);
    var txt8 = document.createTextNode("Article");
    lien7.appendChild(txt8);

    /*======Ligne======*/
    var obj35 = document.createElement('div');
    obj35.id = 'obj_35';
    obj35.title = 'obj_35';
    obj35.style.position = 'absolute';
    obj35.style.left = '260px';
    obj35.style.top = '295px';
    obj35.style.width = '3px';
    obj35.style.height = '70px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj35.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj35);

    /*======Flèche======*/
    var obj36 = document.createElement('div');
    obj36.id = 'obj_36';
    obj36.title = 'obj_36';
    obj36.style.position = 'absolute';
    obj36.style.left = '251px';
    obj36.style.top = '365px';
    obj36.style.width = '20px';
    obj36.style.height = '20px';
    document.getElementById('processus').appendChild(obj36);

    var obj37 = document.createElement('div');
    obj37.style.borderTop = '10px solid rgb(0,0,0)';
    obj37.style.borderLeft = '10px solid transparent';
    obj37.style.borderRight = '10px solid transparent';
    document.getElementById('obj_36').appendChild(obj37);

    /*======Centre======*/
    var obj38 = document.createElement('div');
    obj38.id = 'obj_38';
    obj38.title = 'obj_38';
    obj38.style.position = 'absolute';
    obj38.style.left = '230px';
    obj38.style.top = '375px';
    obj38.style.width = '50px';
    obj38.style.height = '40px';
    obj38.style.border = '2px solid rgb(0,0,0)';
    obj38.style.borderRadius = '10px';
    obj38.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj38);

    //var txt10 = document.createTextNode("Centre Seul");
    //obj38.appendChild(txt10);

    /*======LIEN Centre seul=======*/
    var lien8 = document.createElement('a');
    lien8.id = "lien_8";
    lien8.href = "/Recouvrement/AssujettisMED?action=ctreSeulMED&inf=0&sup=50";
    lien8.style.color = "red";
    lien8.className = "blink_text";
    obj38.appendChild(lien8);
    var txt10 = document.createTextNode("Centre Seul");
    lien8.appendChild(txt10);
    
    /*======Ligne======*/
    var obj31 = document.createElement('div');
    obj31.id = 'obj_31';
    obj31.title = 'obj_31';
    obj31.style.position = 'absolute';
    obj31.style.left = '340px';
    obj31.style.top = '295px';
    obj31.style.width = '3px';
    obj31.style.height = '50px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj31.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj31);

    /*======Flèche======*/
    var obj32 = document.createElement('div');
    obj32.id = 'obj_32';
    obj32.title = 'obj_32';
    obj32.style.position = 'absolute';
    obj32.style.left = '332px';
    obj32.style.top = '345px';
    obj32.style.width = '20px';
    obj32.style.height = '20px';
    document.getElementById('processus').appendChild(obj32);

    var obj33 = document.createElement('div');
    obj33.style.borderTop = '10px solid rgb(0,0,0)';
    obj33.style.borderLeft = '10px solid transparent';
    obj33.style.borderRight = '10px solid transparent';
    document.getElementById('obj_32').appendChild(obj33);

    /*======Centre======*/
    var obj34 = document.createElement('div');
    obj34.id = 'obj_34';
    obj34.title = 'obj_34';
    obj34.style.position = 'absolute';
    obj34.style.left = '290px';
    obj34.style.top = '355px';
    obj34.style.width = '114px';
    obj34.style.height = '60px';
    obj34.style.border = '2px solid rgb(0,0,0)';
    obj34.style.borderRadius = '10px';
    obj34.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj34);

    //var txt9 = document.createTextNode("Centre y compris les antenne et les service d'assiettes");
    //obj34.appendChild(txt9);

    /*======LIEN Centre y compris les antennes et les services d'assiette=======*/
    var lien9 = document.createElement('a');
    lien9.id = "lien_9";
    lien9.href = "/Recouvrement/AssujettisMED?action=centreMED&inf=0&sup=10";
    lien9.style.color = "red";
    lien9.className = "blink_text";
    obj34.appendChild(lien9);
    var txt9 = document.createTextNode("Centre y compris les antenne et les service d'assiettes");
    lien9.appendChild(txt9);
  
    /*======Ligne======*/
    var obj39 = document.createElement('div');
    obj39.id = 'obj_39';
    obj39.title = 'obj_39';
    obj39.style.position = 'absolute';
    obj39.style.left = '420px';
    obj39.style.top = '295px';
    obj39.style.width = '3px';
    obj39.style.height = '20px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj39.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj39);

    /*======Flèche======*/
    var obj40 = document.createElement('div');
    obj40.id = 'obj_40';
    obj40.title = 'obj_40';
    obj40.style.position = 'absolute';
    obj40.style.left = '412px';
    obj40.style.top = '310px';
    obj40.style.width = '20px';
    obj40.style.height = '20px';
    document.getElementById('processus').appendChild(obj40);

    var obj41 = document.createElement('div');
    obj41.style.borderTop = '10px solid rgb(0,0,0)';
    obj41.style.borderLeft = '10px solid transparent';
    obj41.style.borderRight = '10px solid transparent';
    document.getElementById('obj_40').appendChild(obj41);

    /*======Antenne======*/
    var obj42 = document.createElement('div');
    obj42.id = 'obj_42';
    obj42.title = 'obj_42';
    obj42.style.position = 'absolute';
    obj42.style.left = '390px';
    obj42.style.top = '320px';
    obj42.style.width = '70px';
    obj42.style.height = '20px';
    obj42.style.border = '2px solid rgb(0,0,0)';
    obj42.style.borderRadius = '10px';
    obj42.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj42);

    //var txt11 = document.createTextNode("Antenne");
    //obj42.appendChild(txt11);
    
    /*======LIEN Antenne=======*/
    var lien10 = document.createElement('a');
    lien10.id = "lien_10";
    lien10.href = "/Recouvrement/SelectAntenne?action=antMED";
    lien10.style.color = "red";
    lien10.className = "blink_text";
    obj42.appendChild(lien10);
    var txt11 = document.createTextNode("Antenne");
    lien10.appendChild(txt11);

    /*======Ligne======*/
    var obj43 = document.createElement('div');
    obj43.id = 'obj_43';
    obj43.title = 'obj_43';
    obj43.style.position = 'absolute';
    obj43.style.left = '480px';
    obj43.style.top = '295px';
    obj43.style.width = '3px';
    obj43.style.height = '50px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj43.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj43);

    /*======Flèche======*/
    var obj44 = document.createElement('div');
    obj44.id = 'obj_44';
    obj44.title = 'obj_44';
    obj44.style.position = 'absolute';
    obj44.style.left = '472px';
    obj44.style.top = '345px';
    obj44.style.width = '20px';
    obj44.style.height = '20px';
    document.getElementById('processus').appendChild(obj44);

    var obj45 = document.createElement('div');
    obj45.style.borderTop = '10px solid rgb(0,0,0)';
    obj45.style.borderLeft = '10px solid transparent';
    obj45.style.borderRight = '10px solid transparent';
    document.getElementById('obj_44').appendChild(obj45);

    /*======Service d'assiette======*/
    var obj46 = document.createElement('div');
    obj46.id = 'obj_46';
    obj46.title = 'obj_46';
    obj46.style.position = 'absolute';
    obj46.style.left = '440px';
    obj46.style.top = '355px';
    obj46.style.width = '80px';
    obj46.style.height = '40px';
    obj46.style.border = '2px solid rgb(0,0,0)';
    obj46.style.borderRadius = '10px';
    obj46.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj46);

    //var txt12 = document.createTextNode("Service d'assiette");
    //obj46.appendChild(txt12);

    /*======LIEN Service d'assiette=======*/
    var lien11 = document.createElement('a');
    lien11.id = "lien_11";
    lien11.href = "/Recouvrement/ServiceAssiette?action=servMED";
    lien11.style.color = "red";
    lien11.className = "blink_text";
    obj46.appendChild(lien11);
    var txt12 = document.createTextNode("Service d'assiette");
    lien11.appendChild(txt12);
    
    /*======Ligne======*/
    var obj47 = document.createElement('div');
    obj47.id = 'obj_47';
    obj47.title = 'obj_47';
    obj47.style.position = 'absolute';
    obj47.style.left = '540px';
    obj47.style.top = '295px';
    obj47.style.width = '3px';
    obj47.style.height = '20px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj47.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj47);

    /*======Flèche======*/
    var obj48 = document.createElement('div');
    obj48.id = 'obj_48';
    obj48.title = 'obj_48';
    obj48.style.position = 'absolute';
    obj48.style.left = '532px';
    obj48.style.top = '315px';
    obj48.style.width = '20px';
    obj48.style.height = '20px';
    document.getElementById('processus').appendChild(obj48);

    var obj49 = document.createElement('div');
    obj49.style.borderTop = '10px solid rgb(0,0,0)';
    obj49.style.borderLeft = '10px solid transparent';
    obj49.style.borderRight = '10px solid transparent';
    document.getElementById('obj_48').appendChild(obj49);

    /*======Montant======*/
    var obj50 = document.createElement('div');
    obj50.id = 'obj_50';
    obj50.title = 'obj_50';
    obj50.style.position = 'absolute';
    obj50.style.left = '511px';
    obj50.style.top = '325px';
    obj50.style.width = '70px';
    obj50.style.height = '20px';
    obj50.style.border = '2px solid rgb(0,0,0)';
    obj50.style.borderRadius = '10px';
    obj50.style.textAlign = 'center';
    document.getElementById('processus').appendChild(obj50);

    //var txt13 = document.createTextNode("Montant");
    //obj50.appendChild(txt13);

    var lien12 = document.createElement('a');
    lien12.id = "lien_12";
    lien12.href = "/Recouvrement/SaisirMontant?action=montMED";
    lien12.style.color = "red";
    lien12.className = "blink_text";
    obj50.appendChild(lien12);
    var txt13 = document.createTextNode("Montant");
    lien12.appendChild(txt13);

    /*======Ligne======*/
    var obj51 = document.createElement('div');
    obj51.id = 'obj_51';
    obj51.title = 'obj_51';
    obj51.style.position = 'absolute';
    obj51.style.left = '590px';
    obj51.style.top = '295px';
    obj51.style.width = '3px';
    obj51.style.height = '65px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj51.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj51);

    /*======Flèche======*/
    var obj52 = document.createElement('div');
    obj52.id = 'obj_52';
    obj52.title = 'obj_52';
    obj52.style.position = 'absolute';
    obj52.style.left = '582px';
    obj52.style.top = '360px';
    obj52.style.width = '20px';
    obj52.style.height = '20px';
    document.getElementById('processus').appendChild(obj52);

    var obj53 = document.createElement('div');
    obj53.style.borderTop = '10px solid rgb(0,0,0)';
    obj53.style.borderLeft = '10px solid transparent';
    obj53.style.borderRight = '10px solid transparent';
    document.getElementById('obj_52').appendChild(obj53);

    /*======Date======*/
    var obj54 = document.createElement('div');
    obj54.id = 'obj_54';
    obj54.title = 'obj_54';
    obj54.style.position = 'absolute';
    obj54.style.left = '557px';
    obj54.style.top = '370px';
    obj54.style.width = '60px';
    obj54.style.height = '20px';
    obj54.style.border = '2px solid rgb(0,0,0)';
    obj54.style.borderRadius = '10px';
    obj54.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj54);

    /*======LIEN Date=======*/
    var lien13 = document.createElement('a');
    lien13.id = "lien_13";
    lien13.href = "/Recouvrement/SaisirDate?action=dateMED";
    lien13.style.color = "red";
    lien13.className = "blink_text";
    obj54.appendChild(lien13);
    var txt14 = document.createTextNode("Date");
    lien13.appendChild(txt14);

    /*======Ligne======*/
    var obj55 = document.createElement('div');
    obj55.id = 'obj_55';
    obj55.title = 'obj_55';
    obj55.style.position = 'absolute';
    obj55.style.left = '630px';
    obj55.style.top = '295px';
    obj55.style.width = '3px';
    obj55.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj55.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj55);

    ///*======Flèche======*/
    var obj56 = document.createElement('div');
    obj56.id = 'obj_56';
    obj56.title = 'obj_56';
    obj56.style.position = 'absolute';
    obj56.style.left = '622px';
    obj56.style.top = '325px';
    obj56.style.width = '20px';
    obj56.style.height = '20px';
    document.getElementById('processus').appendChild(obj56);

    var obj57 = document.createElement('div');
    obj57.style.borderTop = '10px solid rgb(0,0,0)';
    obj57.style.borderLeft = '10px solid transparent';
    obj57.style.borderRight = '10px solid transparent';
    document.getElementById('obj_56').appendChild(obj57);

    /*======Adress======*/
    var obj58 = document.createElement('div');
    obj58.id = 'obj_58';
    obj58.title = 'obj_58';
    obj58.style.position = 'absolute';
    obj58.style.left = '600px';
    obj58.style.top = '335px';
    obj58.style.width = '70px';
    obj58.style.height = '20px';
    obj58.style.border = '2px solid rgb(0,0,0)';
    obj58.style.borderRadius = '10px';
    obj58.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj58);

    /*======Lien======*/

    var lien14 = document.createElement('a');
    lien14.id = "lien_11";
    lien14.href = "/Recouvrement/SelectProv?action=provMED";
    lien14.style.color = "red";
    lien14.className = "blink_text";
    obj58.appendChild(lien14);
    var txt15 = document.createTextNode("Adresse");
    lien14.appendChild(txt15);

    /*======Ligne======*/
    var obj59 = document.createElement('div');
    obj59.id = 'obj_59';
    obj59.title = 'obj_59';
    obj59.style.position = 'absolute';
    obj59.style.left = '710px';
    obj59.style.top = '295px';
    obj59.style.width = '3px';
    obj59.style.height = '30px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj59.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj59);

    ///*======Flèche======*/
    var obj60 = document.createElement('div');
    obj60.id = 'obj_60';
    obj60.title = 'obj_60';
    obj60.style.position = 'absolute';
    obj60.style.left = '702px';
    obj60.style.top = '320px';
    obj60.style.width = '20px';
    obj60.style.height = '20px';
    document.getElementById('processus').appendChild(obj60);

    var obj61 = document.createElement('div');
    obj61.style.borderTop = '10px solid rgb(0,0,0)';
    obj61.style.borderLeft = '10px solid transparent';
    obj61.style.borderRight = '10px solid transparent';
    document.getElementById('obj_60').appendChild(obj61);
        
    /*======Naturee de la base imposable======*/
    var obj62 = document.createElement('div');
    obj62.id = 'obj_62';
    obj62.title = 'obj_62';
    obj62.style.position = 'absolute';
    obj62.style.left = '680px';
    obj62.style.top = '328px';
    obj62.style.width = '80px';
    obj62.style.height = '60px';
    obj62.style.border = '2px solid rgb(0,0,0)';
    obj62.style.borderRadius = '10px';
    obj62.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj62);

    /*======LIEN Nature de la base imposable=======*/
    var lien15 = document.createElement('a');
    lien15.id = "lien_15";
    lien15.href = "/Recouvrement/SelectNatBase?action=baseMED";
    lien15.style.color = "red";
    lien15.className = "blink_text";
    obj62.appendChild(lien15);
    var txt16 = document.createTextNode("Nature de la base imposable");
    lien15.appendChild(txt16);


    /*======Ligne======*/
    var obj63 = document.createElement('div');
    obj63.id = 'obj_63';
    obj63.title = 'obj_63';
    obj63.style.position = 'absolute';
    obj63.style.left = '120px';
    obj63.style.top = '364px';
    obj63.style.width = '3px';
    obj63.style.height = '44px';
    obj63.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj63);

    /*======Flèche======*/
    var obj64 = document.createElement('div');
    obj64.id = 'obj_64';
    obj64.title = 'obj_64';
    obj64.style.position = 'absolute';
    obj64.style.left = '112px';
    obj64.style.top = '405px';
    obj64.style.width = '20px';
    obj64.style.height = '20px';
    document.getElementById('processus').appendChild(obj64);

    var obj65 = document.createElement('div');
    obj65.style.borderTop = '10px solid rgb(0,0,0)';
    obj65.style.borderLeft = '10px solid transparent';
    obj65.style.borderRight = '10px solid transparent';
    document.getElementById('obj_64').appendChild(obj65);

    /*======Saisir le numero de la note======*/
    var obj66 = document.createElement('div');
    obj66.id = 'obj_66';
    obj66.title = 'obj_66';
    obj66.style.position = 'absolute';
    obj66.style.left = '90px';
    obj66.style.top = '415px';
    obj66.style.width = '80px';
    obj66.style.height = '60px';
    obj66.style.border = '2px solid rgb(0,0,0)';
    obj66.style.borderRadius = '10px';
    obj66.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj66);

    var txt17 = document.createTextNode("Saisir le numero de la note");
    obj66.appendChild(txt17);

    ///*======Ligne======*/
    var obj67 = document.createElement('div');
    obj67.id = 'obj_67';
    obj67.title = 'obj_67';
    obj67.style.position = 'absolute';
    obj67.style.left = '120px';
    obj67.style.top = '484px';
    obj67.style.width = '3px';
    obj67.style.height = '56px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj67.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj67);

    /////*======Flèche======*/
    var obj68 = document.createElement('div');
    obj68.id = 'obj_68';
    obj68.title = 'obj_68';
    obj68.style.position = 'absolute';
    obj68.style.left = '111px';
    obj68.style.top = '538px';
    obj68.style.width = '20px';
    obj68.style.height = '20px';
    document.getElementById('processus').appendChild(obj68);

    var obj69 = document.createElement('div');
    obj69.style.borderTop = '10px solid rgb(0,0,0)';
    obj69.style.borderLeft = '10px solid transparent';
    obj69.style.borderRight = '10px solid transparent';
    document.getElementById('obj_68').appendChild(obj69);

    /*======Texte : Clic sur verification de paiement======*/
    var obj70 = document.createElement('div');
    obj70.id = 'obj_70';
    obj70.title = 'obj_70';
    obj70.style.position = 'absolute';
    obj70.style.left = '130px';
    obj70.style.top = '490px';
    obj70.style.width = '80px';
    obj70.style.height = '30px';
    obj70.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj70);

    var txt4 = document.createTextNode("Verification du paiement");
    obj70.appendChild(txt4);

    /*======Afficher le resultant======*/
    var obj74 = document.createElement('div');
    obj74.id = 'obj_74';
    obj74.title = 'obj_74';
    obj74.style.position = 'absolute';
    obj74.style.left = '75px';
    obj74.style.top = '548px';
    obj74.style.width = '90px';
    obj74.style.height = '40px';
    obj74.style.border = '2px solid rgb(0,0,0)';
    obj74.style.borderRadius = '10px';
    obj74.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj74);

    var txt2 = document.createTextNode("Resultant de verification");
    obj74.appendChild(txt2);

    /*======Ligne afficher======*/
    var obj75 = document.createElement('div');
    obj75.id = 'obj_75';
    obj75.title = 'obj_75';
    obj75.style.position = 'absolute';
    obj75.style.left = '120px';
    obj75.style.top = '590px';
    obj75.style.width = '3px';
    obj75.style.height = '45px';
    obj75.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj75);

    //LIgne horizontale
    //==================
    var obj76 = document.createElement('div');
    obj76.id = 'obj_76';
    obj76.title = 'obj_76';
    obj76.style.position = 'absolute';
    obj76.style.left = '58px';
    obj76.style.top = '642px';
    obj76.style.width = '50px';
    obj76.style.height = '0px';
    obj76.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj76);

    /*======Ligne======*/
    var obj77 = document.createElement('div');
    obj77.id = 'obj_77';
    obj77.title = 'obj_77';
    obj77.style.position = 'absolute';
    obj77.style.left = '55px';
    obj77.style.top = '642px';
    obj77.style.width = '3px';
    obj77.style.height = '25px';
    obj77.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj77);

    /*======Flèche======*/
    var obj78 = document.createElement('div');
    obj78.id = 'obj_78';
    obj78.title = 'obj_78';
    obj78.style.position = 'absolute';
    obj78.style.left = '46px';
    obj78.style.top = '665px';
    obj78.style.width = '20px';
    obj78.style.height = '20px';
    document.getElementById('processus').appendChild(obj78);

    var obj79 = document.createElement('div');
    obj79.style.borderTop = '10px solid rgb(0,0,0)';
    obj79.style.borderLeft = '10px solid transparent';
    obj79.style.borderRight = '10px solid transparent';
    document.getElementById('obj_78').appendChild(obj79);
    
    //LIgne horizontale
    //==================
    var obj80 = document.createElement('div');
    obj80.id = 'obj_80';
    obj80.title = 'obj_80';
    obj80.style.position = 'absolute';
    obj80.style.left = '135px';
    obj80.style.top = '642px';
    obj80.style.width = '30px';
    obj80.style.height = '0px';
    obj80.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj80);

    /*======Ligne======*/
    var obj81 = document.createElement('div');
    obj81.id = 'obj_81';
    obj81.title = 'obj_81';
    obj81.style.position = 'absolute';
    obj81.style.left = '167px';
    obj81.style.top = '642px';
    obj81.style.width = '3px';
    obj81.style.height = '85px';
    obj81.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj81);
    
    /*======Afficher le bouton======*/
    var obj82 = document.createElement('div');
    obj82.id = 'obj_82';
    obj82.title = 'obj_82';
    obj82.style.position = 'absolute';
    obj82.style.left = '40px';
    obj82.style.top = '675px';
    obj82.style.width = '90px';
    obj82.style.height = '40px';
    obj82.style.border = '2px solid rgb(0,0,0)';
    obj82.style.borderRadius = '10px';
    obj82.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj82);

    var txt2 = document.createTextNode("Afficher le bouton retour");
    obj82.appendChild(txt2);

    /*======Afficher le resultant======*/
    var obj83 = document.createElement('div');
    obj83.id = 'obj_83';
    obj83.title = 'obj_83';
    obj83.style.position = 'absolute';
    obj83.style.left = '100px';
    obj83.style.top = '735px';
    obj83.style.width = '100px';
    obj83.style.height = '60px';
    obj83.style.border = '2px solid rgb(0,0,0)';
    obj83.style.borderRadius = '10px';
    obj83.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj83);

    var txt2 = document.createTextNode("Afficher le bouton Suivant");
    obj83.appendChild(txt2);

    ///*======Flèche======*/
    var obj84 = document.createElement('div');
    obj84.id = 'obj_84';
    obj84.title = 'obj_84';
    obj84.style.position = 'absolute';
    obj84.style.left = '158px';
    obj84.style.top = '725px';
    obj84.style.width = '20px';
    obj84.style.height = '20px';
    document.getElementById('processus').appendChild(obj84);

    var obj85 = document.createElement('div');
    obj85.style.borderTop = '10px solid rgb(0,0,0)';
    obj85.style.borderLeft = '10px solid transparent';
    obj85.style.borderRight = '10px solid transparent';
    document.getElementById('obj_84').appendChild(obj85);

    /*======Texte : Clic sur paye======*/
    var obj86 = document.createElement('div');
    obj86.id = 'obj_86';
    obj85.title = 'obj_86';
    obj86.style.position = 'absolute';
    obj86.style.left = '60px';
    obj86.style.top = '595px';
    obj86.style.width = '80px';
    obj86.style.height = '30px';
    obj86.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj86);

    var txt4 = document.createTextNode("Clic sur payé ");
    obj86.appendChild(txt4);

    /*======Texte : Clic sur paye en souffrance======*/
    var obj87 = document.createElement('div');
    obj87.id = 'obj_87';
    obj87.title = 'obj_87';
    obj87.style.position = 'absolute';
    obj87.style.left = '135px';
    obj87.style.top = '595px';
    obj87.style.width = '80px';
    obj87.style.height = '30px';
    obj87.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj87);

    var txt4 = document.createTextNode("Payé en souffrance ");
    obj87.appendChild(txt4);
    
    /*======Ligne======*/
    var obj88 = document.createElement('div');
    obj88.id = 'obj_88';
    obj88.title = 'obj_88';
    obj88.style.position = 'absolute';
    obj88.style.left = '140px';
    obj88.style.top = '798px';
    obj88.style.width = '3px';
    obj88.style.height = '803px';
    //obj5.style.border = '2px solid rgb(0,0,0)';
    obj88.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj88);

    /*======saisir le nom de assujetti======*/
    var obj89 = document.createElement('div');
    obj89.id = 'obj_89';
    obj89.title = 'obj_89';
    obj89.style.position = 'absolute';
    obj89.style.left = '170px';
    obj89.style.top = '810px';
    obj89.style.width = '70px';
    obj89.style.height = '60px';
    obj89.style.border = '3px solid rgb(0,0,0)';
    obj89.style.borderRadius = '10px';
    obj89.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj89);

    var txt2 = document.createTextNode("Saisire le nom de l'assujetti");
    obj89.appendChild(txt2);

    /*======Ligne======*/
    var obj90 = document.createElement('div');
    obj90.id = 'obj_90';
    obj90.title = 'obj_90';
    obj90.style.position = 'absolute';
    obj90.style.left = '215px';
    obj90.style.top = '490px';
    obj90.style.width = '3px';
    obj90.style.height = '310px';
    obj90.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj90);

    /*======Flèche======*/
    var obj91 = document.createElement('div');
    obj91.id = 'obj_91';
    obj91.title = 'obj_91';
    obj91.style.position = 'absolute';
    obj91.style.left = '206px';
    obj91.style.top = '800px';
    obj91.style.width = '20px';
    obj91.style.height = '20px';
    document.getElementById('processus').appendChild(obj91);

    var obj92 = document.createElement('div');
    obj92.style.borderTop = '10px solid rgb(0,0,0)';
    obj92.style.borderLeft = '10px solid transparent';
    obj92.style.borderRight = '10px solid transparent';
    document.getElementById('obj_91').appendChild(obj92);

    //LIgne horizontale
    //==================
    var obj93 = document.createElement('div');
    obj93.id = 'obj_93';
    obj93.title = 'obj_93';
    obj93.style.position = 'absolute';
    obj93.style.left = '184px';
    obj93.style.top = '490px';
    obj93.style.width = '30px';
    obj93.style.height = '0px';
    obj93.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj93);

    /*======Ligne======*/
    var obj94 = document.createElement('div');
    obj94.id = 'obj_94';
    obj94.title = 'obj_94';
    obj94.style.position = 'absolute';
    obj94.style.left = '183px';
    obj94.style.top = '398px';
    obj94.style.width = '3px';
    obj94.style.height = '94px';
    obj94.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj94);

    ///*======Afficher assujettis======*/

    var obj95 = document.createElement('div');
    obj95.id = 'obj_95';
    obj95.title = 'obj_95';
    obj95.style.position = 'absolute';
    obj95.style.left = '150px';
    obj95.style.top = '920px';
    obj95.style.width = '100px';
    obj95.style.height = '140px';
    obj95.style.border = '3px solid rgb(0,0,0)';
    obj95.style.borderRadius = '10px';
    obj95.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj95);

    var txt2 = document.createTextNode("Afficher les assujettis correspondant au nom saisi et qui ont des notes en souffrance");
    obj95.appendChild(txt2);

    /*======Texte : Clic sur nature======*/
    var obj96 = document.createElement('div');
    obj96.id = 'obj_96';
    obj96.title = 'obj_96';
    obj96.style.position = 'absolute';
    obj96.style.left = '215px';
    obj96.style.top = '875px';
    obj96.style.width = '70px';
    obj96.style.height = '30px';
    obj96.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj96);

    var txt4 = document.createTextNode("Clic sur recherche ");
    obj96.appendChild(txt4);

    /*======Ligne======*/
    var obj97 = document.createElement('div');
    obj97.id = 'obj_97';
    obj97.title = 'obj_97';
    obj97.style.position = 'absolute';
    obj97.style.left = '200px';
    obj97.style.top = '873px';
    obj97.style.width = '3px';
    obj97.style.height = '40px';
    obj97.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj97);

    /*======Flèche======*/
    var obj98 = document.createElement('div');
    obj98.id = 'obj_98';
    obj98.title = 'obj_98';
    obj98.style.position = 'absolute';
    obj98.style.left = '192px';
    obj98.style.top = '910px';
    obj98.style.width = '20px';
    obj98.style.height = '20px';
    document.getElementById('processus').appendChild(obj98);

    var obj99 = document.createElement('div');
    obj99.style.borderTop = '10px solid rgb(0,0,0)';
    obj99.style.borderLeft = '10px solid transparent';
    obj99.style.borderRight = '10px solid transparent';
    document.getElementById('obj_98').appendChild(obj99);

    /*======Ligne======*/
    var obj100= document.createElement('div');
    obj100.id = 'obj_100';
    obj100.title = 'obj_100';
    obj100.style.position = 'absolute';
    obj100.style.left = '170px';
    obj100.style.top = '1065px';
    obj100.style.width = '3px';
    obj100.style.height = '535px';
    obj100.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj100);

    /*======Texte : Clic sur article======*/
    var obj101 = document.createElement('div');
    obj101.id = 'obj_101';
    obj101.title = 'obj_101';
    obj101.style.position = 'absolute';
    obj101.style.left = '180px';
    obj101.style.top = '1075px';
    obj101.style.width = '60px';
    obj101.style.height = '30px';
    obj101.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj101);

    var txt4 = document.createTextNode("Clic sur le nom ");
    obj101.appendChild(txt4);

    /*======Ligne======*/
    var obj102 = document.createElement('div');
    obj102.id = 'obj_102';
    obj102.title = 'obj_102';
    obj102.style.position = 'absolute';
    obj102.style.left = '210px';
    obj102.style.top = '358px';
    obj102.style.width = '3px';
    obj102.style.height = '115px';
    obj102.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj102);

    //LIgne horizontale
    //==================
    var obj103 = document.createElement('div');
    obj103.id = 'obj_103';
    obj103.title = 'obj_103';
    obj103.style.position = 'absolute';
    obj103.style.left = '210px';
    obj103.style.top = '473px';
    obj103.style.width = '30px';
    obj103.style.height = '0px';
    obj103.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj103);

    /*======Ligne======*/
    var obj105 = document.createElement('div');
    obj105.id = 'obj_105';
    obj105.title = 'obj_105';
    obj105.style.position = 'absolute';
    obj105.style.left = '240px';
    obj105.style.top = '473px';
    obj105.style.width = '3px';
    obj105.style.height = '330px';
    obj105.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj105);
   
    //LIgne horizontale
    //==================
    var obj106 = document.createElement('div');
    obj106.id = 'obj_106';
    obj106.title = 'obj_106';
    obj106.style.position = 'absolute';
    obj106.style.left = '240px';
    obj106.style.top = '802px';
    obj106.style.width = '68px';
    obj106.style.height = '0px';
    obj106.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj106);

    /*======Ligne======*/
    var obj107 = document.createElement('div');
    obj107.id = 'obj_107';
    obj107.title = 'obj_107';
    obj107.style.position = 'absolute';
    obj107.style.left = '310px';
    obj107.style.top = '802px';
    obj107.style.width = '3px';
    obj107.style.height = '130px';
    obj107.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj107);
  
    ///*======Flèche======*/
    var obj108 = document.createElement('div');
    obj108.id = 'obj_108';
    obj108.title = 'obj_108';
    obj108.style.position = 'absolute';
    obj108.style.left = '302px';
    obj108.style.top = '930px';
    obj108.style.width = '20px';
    obj108.style.height = '20px';
    document.getElementById('processus').appendChild(obj108);

    var obj109 = document.createElement('div');
    obj109.style.borderTop = '10px solid rgb(0,0,0)';
    obj109.style.borderLeft = '10px solid transparent';
    obj109.style.borderRight = '10px solid transparent';
    document.getElementById('obj_108').appendChild(obj109);

    /*======Afficher les articles======*/
    var obj110 = document.createElement('div');
    obj110.id = 'obj_110';
    obj110.title = 'obj_110';
    obj110.style.position = 'absolute';
    obj110.style.left = '280px';
    obj110.style.top = '940px';
    obj110.style.width = '80px';
    obj110.style.height = '100px';
    obj110.style.border = '3px solid rgb(0,0,0)';
    obj110.style.borderRadius = '10px';
    obj110.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj110);

    var txt2 = document.createTextNode("Afficher les articles qui ont des notes en souffrance");
    obj110.appendChild(txt2);

    /*======Ligne======*/
    var obj111 = document.createElement('div');
    obj111.id = 'obj_111';
    obj111.title = 'obj_111';
    obj111.style.position = 'absolute';
    obj111.style.left = '295px';
    obj111.style.top = '1043px';
    obj111.style.width = '3px';
    obj111.style.height = '67px';
    obj111.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj111);

    ///*======Flèche======*/
    /*var obj112 = document.createElement('div');
    obj112.id = 'obj_112';
    obj112.title = 'obj_112';
    obj112.style.position = 'absolute';
    obj112.style.left = '285px';
    obj112.style.top = '1080px';
    obj112.style.width = '20px';
    obj112.style.height = '20px';
    document.getElementById('processus').appendChild(obj112);

    var obj113 = document.createElement('div');
    obj113.style.borderTop = '10px solid rgb(0,0,0)';
    obj113.style.borderLeft = '10px solid transparent';
    obj113.style.borderRight = '10px solid transparent';
    document.getElementById('obj_112').appendChild(obj113);*/

    /*======Texte : Clic sur article======*/
    var obj114 = document.createElement('div');
    obj114.id = 'obj_114';
    obj114.title = 'obj_114';
    obj114.style.position = 'absolute';
    obj114.style.left = '308px';
    obj114.style.top = '1048px';
    obj114.style.width = '60px';
    obj114.style.height = '30px';
    obj114.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj114);

    var txt4 = document.createTextNode("Clic sur l'article");
    obj114.appendChild(txt4);

    /*======Afficher la liste des assujettit======*/
    /*var obj115 = document.createElement('div');
    obj115.id = 'obj_115';
    obj115.title = 'obj_115';
    obj115.style.position = 'absolute';
    obj115.style.left = '200px';
    obj115.style.top = '1240px';
    obj115.style.width = '100px';
    obj115.style.height = '120px';
    obj115.style.border = '3px solid rgb(0,0,0)';
    obj115.style.borderRadius = '10px';
    obj115.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj115);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leurs notes en souffrance de l'article choisi");
    obj115.appendChild(txt2);*/

    /*======Texte : Clic sur la liste assujettis======*/
    /*var obj116 = document.createElement('div');
    obj116.id = 'obj_116';
    obj116.title = 'obj_116';
    obj116.style.position = 'absolute';
    obj116.style.left = '180px';
    obj116.style.top = '1370px';
    obj116.style.width = '60px';
    obj116.style.height = '30px';
    obj116.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj116);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj116.appendChild(txt4);*/

    /*======Ligne======*/
    /*var obj117 = document.createElement('div');
    obj117.id = 'obj_117';
    obj117.title = 'obj_117';
    obj117.style.position = 'absolute';
    obj117.style.left = '238px';
    obj117.style.top = '1365px';
    obj117.style.width = '3px';
    obj117.style.height = '237px';
    obj117.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj117);*/

    /*======Ligne======*/
    var obj118 = document.createElement('div');
    obj118.id = 'obj_118';
    obj118.title = 'obj_118';
    obj118.style.position = 'absolute';
    obj118.style.left = '260px';
    obj118.style.top = '418px';
    obj118.style.width = '3px';
    obj118.style.height = '370px';
    obj118.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj118);

    //LIgne horizontale
    //==================
    var obj119 = document.createElement('div');
    obj119.id = 'obj_119';
    obj119.title = 'obj_119';
    obj119.style.position = 'absolute';
    obj119.style.left = '260px';
    obj119.style.top = '787px';
    obj119.style.width = '110px';
    obj119.style.height = '0px';
    obj119.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj119);

    /*======Ligne======*/
    var obj120 = document.createElement('div');
    obj120.id = 'obj_120';
    obj120.title = 'obj_120';
    obj120.style.position = 'absolute';
    obj120.style.left = '370px';
    obj120.style.top = '787px';
    obj120.style.width = '3px';
    obj120.style.height = '323px';
    obj120.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj120);

    ///*======Flèche======*/
    /*var obj121 = document.createElement('div');
    obj121.id = 'obj_121';
    obj121.title = 'obj_121';
    obj121.style.position = 'absolute';
    obj121.style.left = '312px';
    obj121.style.top = '1365px';
    obj121.style.width = '20px';
    obj121.style.height = '20px';
    document.getElementById('processus').appendChild(obj121);

    var obj122 = document.createElement('div');
    obj122.style.borderTop = '10px solid rgb(0,0,0)';
    obj122.style.borderLeft = '10px solid transparent';
    obj122.style.borderRight = '10px solid transparent';
    document.getElementById('obj_121').appendChild(obj122);*/

    ///*======Afficher la liste======*/
    /*var obj123 = document.createElement('div');
    obj123.id = 'obj_123';
    obj123.title = 'obj_123';
    obj123.style.position = 'absolute';
    obj123.style.left = '250px';
    obj123.style.top = '1375px';
    obj123.style.width = '110px';
    obj123.style.height = '140px';
    obj123.style.border = '3px solid rgb(0,0,0)';
    obj123.style.borderRadius = '10px';
    obj123.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj123);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leurs notes en souffrance du centre de l'utilisateur en cours");
    obj123.appendChild(txt2);*/
 
    /*======Ligne======*/
    /*var obj124 = document.createElement('div');
    obj124.id = 'obj_124';
    obj124.title = 'obj_124';
    obj124.style.position = 'absolute';
    obj124.style.left = '300px';
    obj124.style.top = '1518px';
    obj124.style.width = '3px';
    obj124.style.height = '83px';
    obj124.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj124);*/

    //LIgne horizontale
    //==================
    var obj124 = document.createElement('div');
    obj124.id = 'obj_124';
    obj124.title = 'obj_124';
    obj124.style.position = 'absolute';
    obj124.style.left = '290px';
    obj124.style.top = '1110px';
    obj124.style.width = '456px';
    obj124.style.height = '0px';
    obj124.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj124);

    /*======Ligne======*/
    var obj125 = document.createElement('div');
    obj125.id = 'obj_125';
    obj125.title = 'obj_125';
    obj125.style.position = 'absolute';
    obj125.style.left = '345px';
    obj125.style.top = '418px';
    obj125.style.width = '3px';
    obj125.style.height = '370px';
    obj125.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj125);

    ///*======Flèche======*/
    /*var obj126 = document.createElement('div');
    obj126.id = 'obj_126';
    obj126.title = 'obj_126';
    obj126.style.position = 'absolute';
    obj126.style.left = '337px';
    obj126.style.top = '445px';
    obj126.style.width = '20px';
    obj126.style.height = '20px';
    document.getElementById('processus').appendChild(obj126);

    var obj127 = document.createElement('div');
    obj127.style.borderTop = '10px solid rgb(0,0,0)';
    obj127.style.borderLeft = '10px solid transparent';
    obj127.style.borderRight = '10px solid transparent';
    document.getElementById('obj_126').appendChild(obj127);*/

    ///*======Afficher la liste======*/
    var obj128 = document.createElement('div');
    obj128.id = 'obj_128';
    obj128.title = 'obj_128';
    obj128.style.position = 'absolute';
    obj128.style.left = '330px';
    obj128.style.top = '1135px';
    obj128.style.width = '120px';
    obj128.style.height = '140px';
    obj128.style.border = '3px solid rgb(0,0,0)';
    obj128.style.borderRadius = '10px';
    obj128.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj128);

    var txt2 = document.createTextNode("Afficher la liste de 50 assujettis qui ont des notes en souffrances selon le critère");
    obj128.appendChild(txt2);

    /*======Ligne======*/
    var obj129 = document.createElement('div');
    obj129.id = 'obj_129';
    obj129.title = 'obj_129';
    obj129.style.position = 'absolute';
    obj129.style.left = '390px';
    obj129.style.top = '1280px';
    obj129.style.width = '3px';
    obj129.style.height = '40px';
    obj129.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj129); 
    
    //Losange

    //LIgne horizontale
    //==================
    var obj130 = document.createElement('div');
    obj130.id = 'obj_130';
    obj130.title = 'obj_130';
    obj130.style.position = 'absolute';
    obj130.style.left = '350px';
    obj130.style.top = '1331px';
    obj130.style.width = '26px';
    obj130.style.height = '0px';
    obj130.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj130);

    /*======Ligne======*/
    var obj131 = document.createElement('div');
    obj131.id = 'obj_131';
    obj131.title = 'obj_131';
    obj131.style.position = 'absolute';
    obj131.style.left = '350px';
    obj131.style.top = '1331px';
    obj131.style.width = '3px';
    obj131.style.height = '30px';
    obj131.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj131);
    
    ///*======Flèche======*/
    var obj132 = document.createElement('div');
    obj132.id = 'obj_132';
    obj132.title = 'obj_132';
    obj132.style.position = 'absolute';
    obj132.style.left = '343px';
    obj132.style.top = '1360px';
    obj132.style.width = '20px';
    obj132.style.height = '20px';
    document.getElementById('processus').appendChild(obj132);

    var obj133 = document.createElement('div');
    obj133.style.borderTop = '10px solid rgb(0,0,0)';
    obj133.style.borderLeft = '10px solid transparent';
    obj133.style.borderRight = '10px solid transparent';
    document.getElementById('obj_132').appendChild(obj133);
    
    ///*======50 Assujettis precedents======*/
    var obj134 = document.createElement('div');
    obj134.id = 'obj_134';
    obj134.title = 'obj_134';
    obj134.style.position = 'absolute';
    obj134.style.left = '330px';
    obj134.style.top = '1370px';
    obj134.style.width = '90px';
    obj134.style.height = '40px';
    obj134.style.border = '3px solid rgb(0,0,0)';
    obj134.style.borderRadius = '10px';
    obj134.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj134);

    var txt2 = document.createTextNode("50 Assujettis Precedents");
    obj134.appendChild(txt2);

    //LIgne horizontale
    //==================
    var obj135 = document.createElement('div');
    obj135.id = 'obj_135';
    obj135.title = 'obj_135';
    obj135.style.position = 'absolute';
    obj135.style.left = '405px';
    obj135.style.top = '1331px';
    obj135.style.width = '35px';
    obj135.style.height = '0px';
    obj135.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj135);
   
    /*======Ligne======*/
    var obj136 = document.createElement('div');
    obj136.id = 'obj_136';
    obj136.title = 'obj_136';
    obj136.style.position = 'absolute';
    obj136.style.left = '440px';
    obj136.style.top = '1331px';
    obj136.style.width = '3px';
    obj136.style.height = '90px';
    obj136.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj136);

    //*======Flèche======*/
    var obj137 = document.createElement('div');
    obj137.id = 'obj_137';
    obj137.title = 'obj_137';
    obj137.style.position = 'absolute';
    obj137.style.left = '432px';
    obj137.style.top = '1420px';
    obj137.style.width = '20px';
    obj137.style.height = '20px';
    document.getElementById('processus').appendChild(obj137);

    var obj138 = document.createElement('div');
    obj138.style.borderTop = '10px solid rgb(0,0,0)';
    obj138.style.borderLeft = '10px solid transparent';
    obj138.style.borderRight = '10px solid transparent';
    document.getElementById('obj_137').appendChild(obj138);

    /*======Texte : Precedent======*/
    var obj139 = document.createElement('div');
    obj139.id = 'obj_139';
    obj139.title = 'obj_139';
    obj139.style.position = 'absolute';
    obj139.style.left = '320px';
    obj139.style.top = '1295px';
    obj139.style.width = '60px';
    obj139.style.height = '30px';
    obj139.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj139);

    var txt4 = document.createTextNode("Precedent");
    obj139.appendChild(txt4);

    /*======Texte : Suivant======*/
    var obj140 = document.createElement('div');
    obj140.id = 'obj_140';
    obj140.title = 'obj_140';
    obj140.style.position = 'absolute';
    obj140.style.left = '400px';
    obj140.style.top = '1295px';
    obj140.style.width = '60px';
    obj140.style.height = '30px';
    obj140.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj140);

    var txt4 = document.createTextNode("Suivant");
    obj140.appendChild(txt4);

    /*======50 Assujettis Suivants======*/
    var obj141 = document.createElement('div');
    obj141.id = 'obj_141';
    obj141.title = 'obj_141';
    obj141.style.position = 'absolute';
    obj141.style.left = '390px';
    obj141.style.top = '1430px';
    obj141.style.width = '90px';
    obj141.style.height = '40px';
    obj141.style.border = '3px solid rgb(0,0,0)';
    obj141.style.borderRadius = '10px';
    obj141.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj141);

    var txt2 = document.createTextNode("50 Assujettis Suivants");
    obj141.appendChild(txt2);
   
    /*======Ligne======*/
    var obj142 = document.createElement('div');
    obj142.id = 'obj_142';
    obj142.title = 'obj_142';
    obj142.style.position = 'absolute';
    obj142.style.left = '380px';
    obj142.style.top = '1415px';
    obj142.style.width = '3px';
    obj142.style.height = '100px';
    obj142.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj142);

    //LIgne horizontale
    //==================
    var obj143 = document.createElement('div');
    obj143.id = 'obj_143';
    obj143.title = 'obj_143';
    obj143.style.position = 'absolute';
    obj143.style.left = '380px';
    obj143.style.top = '1514px';
    obj143.style.width = '40px';
    obj143.style.height = '0px';
    obj143.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj143);

    /*======Ligne======*/
    var obj144 = document.createElement('div');
    obj144.id = 'obj_144';
    obj144.title = 'obj_144';
    obj144.style.position = 'absolute';
    obj144.style.left = '470px';
    obj144.style.top = '1475px';
    obj144.style.width = '3px';
    obj144.style.height = '41px';
    obj144.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj144);

    //LIgne horizontale
    //==================
    var obj145 = document.createElement('div');
    obj145.id = 'obj_145';
    obj145.title = 'obj_145';
    obj145.style.position = 'absolute';
    obj145.style.left = '450px';
    obj145.style.top = '1514px';
    obj145.style.width = '20px';
    obj145.style.height = '0px';
    obj145.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj145);
    
    /*======Ligne======*/
    var obj146 = document.createElement('div');
    obj146.id = 'obj_146';
    obj146.title = 'obj_146';
    obj146.style.position = 'absolute';
    obj146.style.left = '433px';
    obj146.style.top = '1530px';
    obj146.style.width = '3px';
    obj146.style.height = '70px';
    obj146.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj146);

    /*======Ligne======*/
    var obj147 = document.createElement('div');
    obj147.id = 'obj_147';
    obj147.title = 'obj_147';
    obj147.style.position = 'absolute';
    obj147.style.left = '430px';
    obj147.style.top = '343px';
    obj147.style.width = '3px';
    obj147.style.height = '390px';
    obj147.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj147);

    //*======Flèche======*/
    var obj148 = document.createElement('div');
    obj148.id = 'obj_148';
    obj148.title = 'obj_148';
    obj148.style.position = 'absolute';
    obj148.style.left = '442px';
    obj148.style.top = '870px';
    obj148.style.width = '20px';
    obj148.style.height = '20px';
    document.getElementById('processus').appendChild(obj148);

    var obj149 = document.createElement('div');
    obj149.style.borderTop = '10px solid rgb(0,0,0)';
    obj149.style.borderLeft = '10px solid transparent';
    obj149.style.borderRight = '10px solid transparent';
    document.getElementById('obj_148').appendChild(obj149);

    //LIgne horizontale
    //==================
    var obj150 = document.createElement('div');
    obj150.id = 'obj_150';
    obj150.title = 'obj_150';
    obj150.style.position = 'absolute';
    obj150.style.left = '430px';
    obj150.style.top = '732px';
    obj150.style.width = '20px';
    obj150.style.height = '0px';
    obj150.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj150);

    /*======Ligne======*/
    var obj151 = document.createElement('div');
    obj151.id = 'obj_151';
    obj151.title = 'obj_151';
    obj151.style.position = 'absolute';
    obj151.style.left = '450px';
    obj151.style.top = '732px';
    obj151.style.width = '3px';
    obj151.style.height = '140px';
    obj151.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj151);

    ///*======Afficher la liste des Antennes======*/
    var obj152 = document.createElement('div');
    obj152.id = 'obj_152';
    obj152.title = 'obj_152';
    obj152.style.position = 'absolute';
    obj152.style.left = '400px';
    obj152.style.top = '880px';
    obj152.style.width = '90px';
    obj152.style.height = '160px';
    obj152.style.border = '3px solid rgb(0,0,0)';
    obj152.style.borderRadius = '10px';
    obj152.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj152);

    var txt2 = document.createTextNode("Afficher la liste des Antennes du centre de l'utilisateur en cours qui a des notes en souffrance");
    obj152.appendChild(txt2);
   
    /*======Ligne======*/
    var obj153 = document.createElement('div');
    obj153.id = 'obj_153';
    obj153.title = 'obj_153';
    obj153.style.position = 'absolute';
    obj153.style.left = '425px';
    obj153.style.top = '1043px';
    obj153.style.width = '3px';
    obj153.style.height = '68px';
    obj153.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj153);

    //*======Flèche======*/
    var obj154 = document.createElement('div');
    obj154.id = 'obj_154';
    obj154.title = 'obj_154';
    obj154.style.position = 'absolute';
    obj154.style.left = '386px';
    obj154.style.top = '1125px';
    obj154.style.width = '20px';
    obj154.style.height = '20px';
    document.getElementById('processus').appendChild(obj154);

    var obj155 = document.createElement('div');
    obj155.style.borderTop = '10px solid rgb(0,0,0)';
    obj155.style.borderLeft = '10px solid transparent';
    obj155.style.borderRight = '10px solid transparent';
    document.getElementById('obj_154').appendChild(obj155);
    
    /*======Ligne======*/
    var obj156 = document.createElement('div');
    obj156.id = 'obj_156';
    obj156.title = 'obj_156';
    obj156.style.position = 'absolute';
    obj156.style.left = '395px';
    obj156.style.top = '1110px';
    obj156.style.width = '3px';
    obj156.style.height = '18px';
    obj156.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj156);

    //*======Afficher la liste des Assujettis antennes======*/
    /*var obj156 = document.createElement('div');
    obj156.id = 'obj_156';
    obj156.title = 'obj_156';
    obj156.style.position = 'absolute';
    obj156.style.left = '395px';
    obj156.style.top = '1090px';
    obj156.style.width = '100px';
    obj156.style.height = '140px';
    obj156.style.border = '3px solid rgb(0,0,0)';
    obj156.style.borderRadius = '10px';
    obj156.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj156);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leurs notes en souffrance selon l'antenne choisi:");
    obj156.appendChild(txt2);*/

    /*======Ligne======*/
    var obj157 = document.createElement('div');
    obj157.id = 'obj_157';
    obj157.title = 'obj_157';
    obj157.style.position = 'absolute';
    obj157.style.left = '480px';
    obj157.style.top = '398px';
    obj157.style.width = '3px';
    obj157.style.height = '30px';
    obj157.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj157);

    //*======Flèche======*/
    var obj158 = document.createElement('div');
    obj158.id = 'obj_158';
    obj158.title = 'obj_158';
    obj158.style.position = 'absolute';
    obj158.style.left = '472px';
    obj158.style.top = '426px';
    obj158.style.width = '20px';
    obj158.style.height = '20px';
    document.getElementById('processus').appendChild(obj158);

    var obj159 = document.createElement('div');
    obj159.style.borderTop = '10px solid rgb(0,0,0)';
    obj159.style.borderLeft = '10px solid transparent';
    obj159.style.borderRight = '10px solid transparent';
    document.getElementById('obj_158').appendChild(obj159);

    //*======Afficher la liste des Assujettis antennes======*/
    var obj160 = document.createElement('div');
    obj160.id = 'obj_160';
    obj160.title = 'obj_160';
    obj160.style.position = 'absolute';
    obj160.style.left = '440px';
    obj160.style.top = '436px';
    obj160.style.width = '100px';
    obj160.style.height = '120px';
    obj160.style.border = '3px solid rgb(0,0,0)';
    obj160.style.borderRadius = '10px';
    obj160.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj160);

    var txt2 = document.createTextNode("Afficher la liste des services qui ont des notes en souffrance P/C du centre");
    obj160.appendChild(txt2);
    
    /*======Ligne======*/
    var obj161 = document.createElement('div');
    obj161.id = 'obj_161';
    obj161.title = 'obj_161';
    obj161.style.position = 'absolute';
    obj161.style.left = '470px';
    obj161.style.top = '560px';
    obj161.style.width = '3px';
    obj161.style.height = '165px';
    obj161.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj161);

    //LIgne horizontale
    //==================
    var obj162 = document.createElement('div');
    obj162.id = 'obj_162';
    obj162.title = 'obj_162';
    obj162.style.position = 'absolute';
    obj162.style.left = '470px';
    obj162.style.top = '725px';
    obj162.style.width = '40px';
    obj162.style.height = '0px';
    obj162.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj162);

    //*======Flèche======*/
    /*var obj162 = document.createElement('div');
    obj162.id = 'obj_162';
    obj162.title = 'obj_162';
    obj162.style.position = 'absolute';
    obj162.style.left = '462px';
    obj162.style.top = '590px';
    obj162.style.width = '20px';
    obj162.style.height = '20px';
    document.getElementById('processus').appendChild(obj162);

    var obj163 = document.createElement('div');
    obj163.style.borderTop = '10px solid rgb(0,0,0)';
    obj163.style.borderLeft = '10px solid transparent';
    obj163.style.borderRight = '10px solid transparent';
    document.getElementById('obj_162').appendChild(obj163);*/

    //*======Afficher la liste des Assujettis======*/
    /*var obj164 = document.createElement('div');
    obj164.id = 'obj_164';
    obj164.title = 'obj_164';
    obj164.style.position = 'absolute';
    obj164.style.left = '440px';
    obj164.style.top = '600px';
    obj164.style.width = '100px';
    obj164.style.height = '120px';
    obj164.style.border = '3px solid rgb(0,0,0)';
    obj164.style.borderRadius = '10px';
    obj164.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj164);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leurs notes en souffrance selon le service");
    obj164.appendChild(txt2);*/

    /*======Ligne======*/
    var obj165 = document.createElement('div');
    obj165.id = 'obj_165';
    obj165.title = 'obj_165';
    obj165.style.position = 'absolute';
    obj165.style.left = '510px';
    obj165.style.top = '725px';
    obj165.style.width = '3px';
    obj165.style.height = '387px';
    obj165.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj165);

    /*======Ligne======*/
    var obj166 = document.createElement('div');
    obj166.id = 'obj_166';
    obj166.title = 'obj_166';
    obj166.style.position = 'absolute';
    obj166.style.left = '550px';
    obj166.style.top = '349px';
    obj166.style.width = '3px';
    obj166.style.height = '260px';
    obj166.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj166);

    //*======Flèche======*/
    var obj167 = document.createElement('div');
    obj167.id = 'obj_167';
    obj167.title = 'obj_167';
    obj167.style.position = 'absolute';
    obj167.style.left = '542px';
    obj167.style.top = '608px';
    obj167.style.width = '20px';
    obj167.style.height = '20px';
    document.getElementById('processus').appendChild(obj167);

    var obj168 = document.createElement('div');
    obj168.style.borderTop = '10px solid rgb(0,0,0)';
    obj168.style.borderLeft = '10px solid transparent';
    obj168.style.borderRight = '10px solid transparent';
    document.getElementById('obj_167').appendChild(obj168);
    
    //*======Afficher la liste des Assujettis======*/
    var obj169 = document.createElement('div');
    obj169.id = 'obj_169';
    obj169.title = 'obj_169';
    obj169.style.position = 'absolute';
    obj169.style.left = '520px';
    obj169.style.top = '617px';
    obj169.style.width = '80px';
    obj169.style.height = '80px';
    obj169.style.border = '3px solid rgb(0,0,0)';
    obj169.style.borderRadius = '10px';
    obj169.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj169);

    var txt2 = document.createTextNode("Saisir le montant et la monnaie");
    obj169.appendChild(txt2);

    /*======Ligne======*/
    /*var obj170 = document.createElement('div');
    obj170.id = 'obj_170';
    obj170.title = 'obj_170';
    obj170.style.position = 'absolute';
    obj170.style.left = '540px';
    obj170.style.top = '703px';
    obj170.style.width = '3px';
    obj170.style.height = '40px';
    obj170.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj170);*/

    //*======Flèche======*/
    /*var obj171 = document.createElement('div');
    obj171.id = 'obj_171';
    obj171.title = 'obj_171';
    obj171.style.position = 'absolute';
    obj171.style.left = '532px';
    obj171.style.top = '740px';
    obj171.style.width = '20px';
    obj171.style.height = '20px';
    document.getElementById('processus').appendChild(obj171);

    var obj172 = document.createElement('div');
    obj172.style.borderTop = '10px solid rgb(0,0,0)';
    obj172.style.borderLeft = '10px solid transparent';
    obj172.style.borderRight = '10px solid transparent';
    document.getElementById('obj_171').appendChild(obj172);*/

    //*======Afficher la liste des Assujettis======*/
    /*var obj173 = document.createElement('div');
    obj173.id = 'obj_173';
    obj173.title = 'obj_173';
    obj173.style.position = 'absolute';
    obj173.style.left = '520px';
    obj173.style.top = '890px';
    obj173.style.width = '90px';
    obj173.style.height = '140px';
    obj173.style.border = '3px solid rgb(0,0,0)';
    obj173.style.borderRadius = '10px';
    obj173.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj173);

    var txt2 = document.createTextNode("Afficher la liste desassujettis et notes dont le montant est superieur au montant saisi");
    obj173.appendChild(txt2);*/

    /*======Ligne======*/
    var obj174 = document.createElement('div');
    obj174.id = 'obj_174';
    obj174.title = 'obj_174';
    obj174.style.position = 'absolute';
    obj174.style.left = '550px';
    obj174.style.top = '703px';
    obj174.style.width = '3px';
    obj174.style.height = '407px';
    obj174.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj174);

    /*======Ligne======*/
    var obj175 = document.createElement('div');
    obj175.id = 'obj_175';
    obj175.title = 'obj_175';
    obj175.style.position = 'absolute';
    obj175.style.left = '590px'
    obj175.style.top = '393px';
    obj175.style.width = '3px';
    obj175.style.height = '30px';
    obj175.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj175);

    //*======Flèche======*/
    var obj176 = document.createElement('div');
    obj176.id = 'obj_176';
    obj176.title = 'obj_176';
    obj176.style.position = 'absolute';
    obj176.style.left = '581px';
    obj176.style.top = '420px';
    obj176.style.width = '20px';
    obj176.style.height = '20px';
    document.getElementById('processus').appendChild(obj176);

    var obj177 = document.createElement('div');
    obj177.style.borderTop = '10px solid rgb(0,0,0)';
    obj177.style.borderLeft = '10px solid transparent';
    obj177.style.borderRight = '10px solid transparent';
    document.getElementById('obj_176').appendChild(obj177);

    //*======Afficher la liste des Assujettis======*/
    var obj178 = document.createElement('div');
    obj178.id = 'obj_178';
    obj178.title = 'obj_178';
    obj178.style.position = 'absolute';
    obj178.style.left = '560px';
    obj178.style.top = '430px';
    obj178.style.width = '70px';
    obj178.style.height = '80px';
    obj178.style.border = '3px solid rgb(0,0,0)';
    obj178.style.borderRadius = '10px';
    obj178.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj178);

    var txt2 = document.createTextNode("Saisir la date de debut et la date de fin");
    obj178.appendChild(txt2);

    /*======Ligne======*/
    var obj179 = document.createElement('div');
    obj179.id = 'obj_179';
    obj179.title = 'obj_179';
    obj179.style.position = 'absolute';
    obj179.style.left = '580px';
    obj179.style.top = '513px';
    obj179.style.width = '3px';
    obj179.style.height = '50px';
    obj179.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj179);

    //LIgne horizontale
    //==================
    var obj180 = document.createElement('div');
    obj180.id = 'obj_180';
    obj180.title = 'obj_180';
    obj180.style.position = 'absolute';
    obj180.style.left = '580px';
    obj180.style.top = '563px';
    obj180.style.width = '45px';
    obj180.style.height = '0px';
    obj180.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj180);

    //*======Flèche======*/
    /*var obj180 = document.createElement('div');
    obj180.id = 'obj_180';
    obj180.title = 'obj_180';
    obj180.style.position = 'absolute';
    obj180.style.left = '571px';
    obj180.style.top = '560px';
    obj180.style.width = '20px';
    obj180.style.height = '20px';
    document.getElementById('processus').appendChild(obj180);

    var obj180 = document.createElement('div');
    obj180.style.borderTop = '10px solid rgb(0,0,0)';
    obj180.style.borderLeft = '10px solid transparent';
    obj180.style.borderRight = '10px solid transparent';
    document.getElementById('obj_180').appendChild(obj180);*/

    //*======Afficher la liste des Assujettis======*/
    /*var obj181 = document.createElement('div');
    obj181.id = 'obj_181';
    obj181.title = 'obj_181';
    obj181.style.position = 'absolute';
    obj181.style.left = '560px';
    obj181.style.top = '570px';
    obj181.style.width = '90px';
    obj181.style.height = '140px';
    obj181.style.border = '3px solid rgb(0,0,0)';
    obj181.style.borderRadius = '10px';
    obj181.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj181);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leur notes en souffrance selon l'intervale");
    obj181.appendChild(txt2);*/

    /*======Ligne======*/
    var obj182 = document.createElement('div');
    obj182.id = 'obj_182';
    obj182.title = 'obj_182';
    obj182.style.position = 'absolute';
    obj182.style.left = '625px';
    obj182.style.top = '563px';
    obj182.style.width = '3px';
    obj182.style.height = '197px';
    obj182.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj182);

    /*======Ligne======*/
    var obj183 = document.createElement('div');
    obj183.id = 'obj_183';
    obj183.title = 'obj_183';
    obj183.style.position = 'absolute';
    obj183.style.left = '660px';
    obj183.style.top = '357px';
    obj183.style.width = '3px';
    obj183.style.height = '430px';
    obj183.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj183);

    /*======Texte : clic sur le service======*/
    var obj184 = document.createElement('div');
    obj184.id = 'obj_184';
    obj184.title = 'obj_184';
    obj184.style.position = 'absolute';
    obj184.style.left = '480px';
    obj184.style.top = '560px';
    obj184.style.width = '70px';
    obj184.style.height = '40px';
    obj184.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj184);

    var txt4 = document.createTextNode("Clic sur le service");
    obj184.appendChild(txt4);

    /*======Texte : clic sur le nom======*/
    /*var obj185 = document.createElement('div');
    obj185.id = 'obj_185';
    obj185.title = 'obj_185';
    obj185.style.position = 'absolute';
    obj185.style.left = '457px';
    obj185.style.top = '730px';
    obj185.style.width = '60px';
    obj185.style.height = '40px';
    obj185.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj185);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj185.appendChild(txt4);*/

    /*======Texte : clic sur le nom======*/
    var obj186 = document.createElement('div');
    obj186.id = 'obj_186';
    obj186.title = 'obj_186';
    obj186.style.position = 'absolute';
    obj186.style.left = '445px';
    obj186.style.top = '1520px';
    obj186.style.width = '60px';
    obj186.style.height = '40px';
    obj186.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj186);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj186.appendChild(txt4);

    /*======Texte : clic sur le nom======*/
    var obj187 = document.createElement('div');
    obj187.id = 'obj_187';
    obj187.title = 'obj_187';
    obj187.style.position = 'absolute';
    obj187.style.left = '440px';
    obj187.style.top = '1050px';
    obj187.style.width = '80px';
    obj187.style.height = '40px';
    obj187.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj187);

    var txt4 = document.createTextNode("Clic sur l'antenne");
    obj187.appendChild(txt4);

    /*======Texte : clic sur le nom======*/
    /*var obj188 = document.createElement('div');
    obj188.id = 'obj_188';
    obj188.title = 'obj_188';
    obj188.style.position = 'absolute';
    obj188.style.left = '310px';
    obj188.style.top = '1525px';
    obj188.style.width = '60px';
    obj188.style.height = '40px';
    obj188.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj188);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj188.appendChild(txt4);*/

    /*======Texte : clic sur le nom======*/
    var obj189 = document.createElement('div');
    obj189.id = 'obj_189';
    obj189.title = 'obj_189';
    obj189.style.position = 'absolute';
    obj189.style.left = '590px';
    obj189.style.top = '520px';
    obj189.style.width = '60px';
    obj189.style.height = '40px';
    obj189.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj189);

    var txt4 = document.createTextNode("Clic sur envoyer");
    obj189.appendChild(txt4);

    /*======Texte : clic sur le nom======*/
    /*var obj190 = document.createElement('div');
    obj190.id = 'obj_190';
    obj190.title = 'obj_190';
    obj190.style.position = 'absolute';
    obj190.style.left = '568px';
    obj190.style.top = '715px';
    obj190.style.width = '60px';
    obj190.style.height = '40px';
    obj190.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj190);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj190.appendChild(txt4);*/

    /*======Texte : clic sur le service======*/
    var obj191 = document.createElement('div');
    obj191.id = 'obj_191';
    obj191.title = 'obj_191';
    obj191.style.position = 'absolute';
    obj191.style.left = '555px';
    obj191.style.top = '705px';
    obj191.style.width = '80px';
    obj191.style.height = '40px';
    obj191.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj191);

    var txt4 = document.createTextNode("Clic sur Envoyer");
    obj191.appendChild(txt4);

    /*======Texte : clic sur le nom======*/
    /*var obj192 = document.createElement('div');
    obj192.id = 'obj_192';
    obj192.title = 'obj_192';
    obj192.style.position = 'absolute';
    obj192.style.left = '560px';
    obj192.style.top = '1040px';
    obj192.style.width = '60px';
    obj192.style.height = '40px';
    obj192.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj192);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj192.appendChild(txt4);*/

    /*======Ligne======*/
    /*var obj193 = document.createElement('div');
    obj193.id = 'obj_193';
    obj193.title = 'obj_193';
    obj193.style.position = 'absolute';
    obj193.style.left = '430px';
    obj193.style.top = '1235px';
    obj193.style.width = '3px';
    obj193.style.height = '60px';
    obj193.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj193);*/

    /*======Texte : clic sur le nom======*/
    /*var obj194 = document.createElement('div');
    obj194.id = 'obj_192';
    obj194.title = 'obj_192';
    obj194.style.position = 'absolute';
    obj194.style.left = '440px';
    obj194.style.top = '1240px';
    obj194.style.width = '60px';
    obj194.style.height = '40px';
    obj194.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj194);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj194.appendChild(txt4);*/

    //LIgne horizontale
    //==================
    var obj195 = document.createElement('div');
    obj195.id = 'obj_195';
    obj195.title = 'obj_195';
    obj195.style.position = 'absolute';
    obj195.style.left = '140px';
    obj195.style.top = '1600px';
    obj195.style.width = '456px';
    obj195.style.height = '0px';
    obj195.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj195);

    //LIgne horizontale
    //==================
    /*var obj196 = document.createElement('div');
    obj196.id = 'obj_196';
    obj196.title = 'obj_196';
    obj196.style.position = 'absolute';
    obj196.style.left = '400px';
    obj196.style.top = '1293px';
    obj196.style.width = '30px';
    obj196.style.height = '0px';
    obj196.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj196);*/

    /*======Ligne======*/
    /*var obj197 = document.createElement('div');
    obj197.id = 'obj_197';
    obj197.title = 'obj_197';
    obj197.style.position = 'absolute';
    obj197.style.left = '400px';
    obj197.style.top = '1293px';
    obj197.style.width = '3px';
    obj197.style.height = '308px';
    obj197.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj197);*/

    //LIgne horizontale
    //==================
    /*var obj198 = document.createElement('div');
    obj198.id = 'obj_198';
    obj198.title = 'obj_198';
    obj198.style.position = 'absolute';
    obj198.style.left = '421px';
    obj198.style.top = '1304px';
    obj198.style.width = '90px';
    obj198.style.height = '0px';
    obj198.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj198);*/

    /*======Ligne======*/
    /*var obj199 = document.createElement('div');
    obj199.id = 'obj_199';
    obj199.title = 'obj_199';
    obj199.style.position = 'absolute';
    obj199.style.left = '420px';
    obj199.style.top = '1304px';
    obj199.style.width = '3px';
    obj199.style.height = '296px';
    obj199.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj199);*/

    //LIgne horizontale
    //==================
    /*var obj200 = document.createElement('div');
    obj200.id = 'obj_200';
    obj200.title = 'obj_200';
    obj200.style.position = 'absolute';
    obj200.style.left = '441px';
    obj200.style.top = '1312px';
    obj200.style.width = '110px';
    obj200.style.height = '0px';
    obj200.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj200);*/

    /*======Ligne======*/
    /*var obj201 = document.createElement('div');
    obj201.id = 'obj_201';
    obj201.title = 'obj_201';
    obj201.style.position = 'absolute';
    obj201.style.left = '440px';
    obj201.style.top = '1312px';
    obj201.style.width = '3px';
    obj201.style.height = '288px';
    obj201.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj201);*/

    //LIgne horizontale
    //==================
    var obj202 = document.createElement('div');
    obj202.id = 'obj_202';
    obj202.title = 'obj_202';
    obj202.style.position = 'absolute';
    obj202.style.left = '566px';
    obj202.style.top = '758px';
    obj202.style.width = '60px';
    obj202.style.height = '0px';
    obj202.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj202);

    /*======Ligne======*/
    var obj203 = document.createElement('div');
    obj203.id = 'obj_203';
    obj203.title = 'obj_203';
    obj203.style.position = 'absolute';
    obj203.style.left = '566px';
    obj203.style.top = '760px';
    obj203.style.width = '3px';
    obj203.style.height = '350px';
    obj203.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj203);

    //LIgne horizontale
    //==================
    /*var obj204 = document.createElement('div');
    obj204.id = 'obj_204';
    obj204.title = 'obj_204';
    obj204.style.position = 'absolute';
    obj204.style.left = '457px';
    obj204.style.top = '1325px';
    obj204.style.width = '110px';
    obj204.style.height = '0px';
    obj204.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj204);*/

    /*======Ligne======*/
    /*var obj205 = document.createElement('div');
    obj205.id = 'obj_205';
    obj205.title = 'obj_205';
    obj205.style.position = 'absolute';
    obj205.style.left = '457px';
    obj205.style.top = '1325px';
    obj205.style.width = '3px';
    obj205.style.height = '275px';
    obj205.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj205);*/

    ///*======Flèche======*/
    var obj206 = document.createElement('div');
    obj206.id = 'obj_206';
    obj206.title = 'obj_206';
    obj206.style.position = 'absolute';
    obj206.style.left = '653px';
    obj206.style.top = '787px';
    obj206.style.width = '20px';
    obj206.style.height = '20px';
    document.getElementById('processus').appendChild(obj206);

    var obj207 = document.createElement('div');
    obj207.style.borderTop = '10px solid rgb(0,0,0)';
    obj207.style.borderLeft = '10px solid transparent';
    obj207.style.borderRight = '10px solid transparent';
    document.getElementById('obj_206').appendChild(obj207);


    //*======Afficher la province======*/
    var obj208 = document.createElement('div');
    obj208.id = 'obj_208';
    obj208.title = 'obj_208';
    obj208.style.position = 'absolute';
    obj208.style.left = '575px';
    obj208.style.top = '797px';
    obj208.style.width = '150px';
    obj208.style.height = '20px';
    obj208.style.border = '3px solid rgb(0,0,0)';
    obj208.style.borderRadius = '10px';
    obj208.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj208);

    var txt2 = document.createTextNode("Afficher la province");
    obj208.appendChild(txt2);

    /*======Ligne======*/
    var obj209 = document.createElement('div');
    obj209.id = 'obj_209';
    obj209.title = 'obj_209';
    obj209.style.position = 'absolute';
    obj209.style.left = '600px';
    obj209.style.top = '820px';
    obj209.style.width = '3px';
    obj209.style.height = '30px';
    obj209.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj209);

    ///*======Flèche======*/
    var obj210 = document.createElement('div');
    obj210.id = 'obj_210';
    obj210.title = 'obj_210';
    obj210.style.position = 'absolute';
    obj210.style.left = '592px';
    obj210.style.top = '850px';
    obj210.style.width = '20px';
    obj210.style.height = '20px';
    document.getElementById('processus').appendChild(obj210);

    var obj211 = document.createElement('div');
    obj211.style.borderTop = '10px solid rgb(0,0,0)';
    obj211.style.borderLeft = '10px solid transparent';
    obj211.style.borderRight = '10px solid transparent';
    document.getElementById('obj_210').appendChild(obj211);

    /*======Texte : clic sur la province======*/
    var obj212 = document.createElement('div');
    obj212.id = 'obj_212';
    obj212.title = 'obj_212';
    obj212.style.position = 'absolute';
    obj212.style.left = '610px';
    obj212.style.top = '825px';
    obj212.style.width = '150px';
    obj212.style.height = '40px';
    obj212.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj212);

    var txt4 = document.createTextNode("Clic sur la province");
    obj212.appendChild(txt4);

    //*======Afficher la ville======*/
    var obj213 = document.createElement('div');
    obj213.id = 'obj_213';
    obj213.title = 'obj_213';
    obj213.style.position = 'absolute';
    obj213.style.left = '580px';
    obj213.style.top = '860px';
    obj213.style.width = '150px';
    obj213.style.height = '20px';
    obj213.style.border = '3px solid rgb(0,0,0)';
    obj213.style.borderRadius = '10px';
    obj213.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj213);

    var txt2 = document.createTextNode("Afficher la ville");
    obj213.appendChild(txt2);

    /*======Ligne======*/
    var obj214 = document.createElement('div');
    obj214.id = 'obj_214';
    obj214.title = 'obj_214';
    obj214.style.position = 'absolute';
    obj214.style.left = '600px';
    obj214.style.top = '885px';
    obj214.style.width = '3px';
    obj214.style.height = '30px';
    obj214.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj214);

    ///*======Flèche======*/
    var obj215 = document.createElement('div');
    obj215.id = 'obj_215';
    obj215.title = 'obj_215';
    obj215.style.position = 'absolute';
    obj215.style.left = '592px';
    obj215.style.top = '910px';
    obj215.style.width = '20px';
    obj215.style.height = '20px';
    document.getElementById('processus').appendChild(obj215);

    var obj216 = document.createElement('div');
    obj216.style.borderTop = '10px solid rgb(0,0,0)';
    obj216.style.borderLeft = '10px solid transparent';
    obj216.style.borderRight = '10px solid transparent';
    document.getElementById('obj_215').appendChild(obj216);

    /*======Texte : clic sur la ville======*/
    var obj217 = document.createElement('div');
    obj217.id = 'obj_217';
    obj217.title = 'obj_217';
    obj217.style.position = 'absolute';
    obj217.style.left = '610px';
    obj217.style.top = '890px';
    obj217.style.width = '150px';
    obj217.style.height = '40px';
    obj217.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj217);

    var txt4 = document.createTextNode("Clic sur la ville");
    obj217.appendChild(txt4);

    //*======Afficher les communes======*/
    var obj218 = document.createElement('div');
    obj218.id = 'obj_218';
    obj218.title = 'obj_218';
    obj218.style.position = 'absolute';
    obj218.style.left = '580px';
    obj218.style.top = '920px';
    obj218.style.width = '155px';
    obj218.style.height = '20px';
    obj218.style.border = '3px solid rgb(0,0,0)';
    obj218.style.borderRadius = '10px';
    obj218.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj218);

    var txt2 = document.createTextNode("Afficher les communes");
    obj218.appendChild(txt2);


    /*======Ligne======*/
    var obj219 = document.createElement('div');
    obj219.id = 'obj_219';
    obj219.title = 'obj_219';
    obj219.style.position = 'absolute';
    obj219.style.left = '600px';
    obj219.style.top = '945px';
    obj219.style.width = '3px';
    obj219.style.height = '30px';
    obj219.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj219);

    ///*======Flèche======*/
    var obj220 = document.createElement('div');
    obj220.id = 'obj_220';
    obj220.title = 'obj_220';
    obj220.style.position = 'absolute';
    obj220.style.left = '592px';
    obj220.style.top = '975px';
    obj220.style.width = '20px';
    obj220.style.height = '20px';
    document.getElementById('processus').appendChild(obj220);

    var obj221 = document.createElement('div');
    obj221.style.borderTop = '10px solid rgb(0,0,0)';
    obj221.style.borderLeft = '10px solid transparent';
    obj221.style.borderRight = '10px solid transparent';
    document.getElementById('obj_220').appendChild(obj221);

    /*======Texte : clic sur la commune======*/
    var obj222 = document.createElement('div');
    obj222.id = 'obj_222';
    obj222.title = 'obj_222';
    obj222.style.position = 'absolute';
    obj222.style.left = '610px';
    obj222.style.top = '950px';
    obj222.style.width = '150px';
    obj222.style.height = '40px';
    obj222.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj222);

    var txt4 = document.createTextNode("Clic sur la commune");
    obj222.appendChild(txt4);

    //*======Afficher les quartiers======*/
    var obj223 = document.createElement('div');
    obj223.id = 'obj_223';
    obj223.title = 'obj_223';
    obj223.style.position = 'absolute';
    obj223.style.left = '580px';
    obj223.style.top = '985px';
    obj223.style.width = '155px';
    obj223.style.height = '20px';
    obj223.style.border = '3px solid rgb(0,0,0)';
    obj223.style.borderRadius = '10px';
    obj223.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj223);

    var txt2 = document.createTextNode("Afficher les Quartiers");
    obj223.appendChild(txt2);

    /*======Ligne======*/
    var obj224 = document.createElement('div');
    obj224.id = 'obj_224';
    obj224.title = 'obj_224';
    obj224.style.position = 'absolute';
    obj224.style.left = '600px';
    obj224.style.top = '1010px';
    obj224.style.width = '3px';
    obj224.style.height = '30px';
    obj224.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj224);

    ///*======Flèche======*/
    var obj225 = document.createElement('div');
    obj225.id = 'obj_225';
    obj225.title = 'obj_225';
    obj225.style.position = 'absolute';
    obj225.style.left = '592px';
    obj225.style.top = '1040px';
    obj225.style.width = '20px';
    obj225.style.height = '20px';
    document.getElementById('processus').appendChild(obj225);

    var obj226 = document.createElement('div');
    obj226.style.borderTop = '10px solid rgb(0,0,0)';
    obj226.style.borderLeft = '10px solid transparent';
    obj226.style.borderRight = '10px solid transparent';
    document.getElementById('obj_225').appendChild(obj226);

    /*======Texte : clic sur les quartiers======*/
    var obj227 = document.createElement('div');
    obj227.id = 'obj_227';
    obj227.title = 'obj_227';
    obj227.style.position = 'absolute';
    obj227.style.left = '610px';
    obj227.style.top = '1015px';
    obj227.style.width = '150px';
    obj227.style.height = '40px';
    obj227.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj227);

    var txt4 = document.createTextNode("Clic sur les quartiers");
    obj227.appendChild(txt4);


    //*======Afficher les avenues======*/
    var obj228 = document.createElement('div');
    obj228.id = 'obj_228';
    obj228.title = 'obj_228';
    obj228.style.position = 'absolute';
    obj228.style.left = '580px';
    obj228.style.top = '1050px';
    obj228.style.width = '155px';
    obj228.style.height = '20px';
    obj228.style.border = '3px solid rgb(0,0,0)';
    obj228.style.borderRadius = '10px';
    obj228.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj228);

    var txt2 = document.createTextNode("Afficher les avenues");
    obj228.appendChild(txt2);

    /*======Ligne======*/
    var obj229 = document.createElement('div');
    obj229.id = 'obj_229';
    obj229.title = 'obj_229';
    obj229.style.position = 'absolute';
    obj229.style.left = '600px';
    obj229.style.top = '1075px';
    obj229.style.width = '3px';
    obj229.style.height = '37px';
    obj229.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj229);

    ///*======Flèche======*/
    /*var obj230 = document.createElement('div');
    obj230.id = 'obj_230';
    obj230.title = 'obj_230';
    obj230.style.position = 'absolute';
    obj230.style.left = '592px';
    obj230.style.top = '1105px';
    obj230.style.width = '20px';
    obj230.style.height = '20px';
    document.getElementById('processus').appendChild(obj230);

    var obj231 = document.createElement('div');
    obj231.style.borderTop = '10px solid rgb(0,0,0)';
    obj231.style.borderLeft = '10px solid transparent';
    obj231.style.borderRight = '10px solid transparent';
    document.getElementById('obj_230').appendChild(obj231);*/

    /*======Texte : clic sur les avenues======*/
    var obj232 = document.createElement('div');
    obj232.id = 'obj_232';
    obj232.title = 'obj_232';
    obj232.style.position = 'absolute';
    obj232.style.left = '610px';
    obj232.style.top = '1080px';
    obj232.style.width = '150px';
    obj232.style.height = '40px';
    obj232.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj232);

    var txt4 = document.createTextNode("Clic sur les avenues");
    obj232.appendChild(txt4);

    //*======Afficher les assujettis======*/
    /*var obj233 = document.createElement('div');
    obj233.id = 'obj_233';
    obj233.title = 'obj_233';
    obj233.style.position = 'absolute';
    obj233.style.left = '530px';
    obj233.style.top = '1415px';
    obj233.style.width = '190px';
    obj233.style.height = '80px';
    obj233.style.border = '3px solid rgb(0,0,0)';
    obj233.style.borderRadius = '10px';
    obj233.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj233);

    var txt2 = document.createTextNode("Afficher les assujettis qui ont des notes en souffrance des biens imposable dans l'avenue selectionnée");
    obj233.appendChild(txt2);*/

    /*======Ligne======*/
    /*var obj234 = document.createElement('div');
    obj234.id = 'obj_234';
    obj234.title = 'obj_234';
    obj234.style.position = 'absolute';
    obj234.style.left = '600px';
    obj234.style.top = '1500px';
    obj234.style.width = '3px';
    obj234.style.height = '100px';
    obj234.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj234);*/

    /*======Texte : clic sur le nom======*/
    /*var obj235 = document.createElement('div');
    obj235.id = 'obj_235';
    obj235.title = 'obj_235';
    obj235.style.position = 'absolute';
    obj235.style.left = '610px';
    obj235.style.top = '1510px';
    obj235.style.width = '150px';
    obj235.style.height = '40px';
    obj235.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj235);

    var txt4 = document.createTextNode("Clic sur le nom");
    obj235.appendChild(txt4);*/

    /*======Ligne======*/
    var obj236 = document.createElement('div');
    obj236.id = 'obj_236';
    obj236.title = 'obj_236';
    obj236.style.position = 'absolute';
    obj236.style.left = '720px';
    obj236.style.top = '390px';
    obj236.style.width = '3px';
    obj236.style.height = '30px';
    obj236.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj236);

    ///*======Flèche======*/
    var obj237 = document.createElement('div');
    obj237.id = 'obj_237';
    obj237.title = 'obj_237';
    obj237.style.position = 'absolute';
    obj237.style.left = '712px';
    obj237.style.top = '420px';
    obj237.style.width = '20px';
    obj237.style.height = '20px';
    document.getElementById('processus').appendChild(obj237);

    var obj238 = document.createElement('div');
    obj238.style.borderTop = '10px solid rgb(0,0,0)';
    obj238.style.borderLeft = '10px solid transparent';
    obj238.style.borderRight = '10px solid transparent';
    document.getElementById('obj_237').appendChild(obj238);

    //*======Afficher la liste des nature======*/
    var obj239 = document.createElement('div');
    obj239.id = 'obj_239';
    obj239.title = 'obj_239';
    obj239.style.position = 'absolute';
    obj239.style.left = '670px';
    obj239.style.top = '430px';
    obj239.style.width = '80px';
    obj239.style.height = '100px';
    obj239.style.border = '3px solid rgb(0,0,0)';
    obj239.style.borderRadius = '10px';
    obj239.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj239);

    var txt2 = document.createTextNode("Afficher la liste des nature qui des notes souffrance");
    obj239.appendChild(txt2);

    /*======Ligne======*/
    var obj240 = document.createElement('div');
    obj240.id = 'obj_240';
    obj240.title = 'obj_240';
    obj240.style.position = 'absolute';
    obj240.style.left = '700px';
    obj240.style.top = '535px';
    obj240.style.width = '3px';
    obj240.style.height = '40px';
    obj240.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj240);

    //LIgne horizontale
    //==================
    var obj241 = document.createElement('div');
    obj241.id = 'obj_241';
    obj241.title = 'obj_241';
    obj241.style.position = 'absolute';
    obj241.style.left = '700px';
    obj241.style.top = '575px';
    obj241.style.width = '45px';
    obj241.style.height = '0px';
    obj241.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj241);

    ///*======Flèche======*/
    /*var obj241 = document.createElement('div');
    obj241.id = 'obj_241';
    obj241.title = 'obj_241';
    obj241.style.position = 'absolute';
    obj241.style.left = '692px';
    obj241.style.top = '575px';
    obj241.style.width = '20px';
    obj241.style.height = '20px';
    document.getElementById('processus').appendChild(obj241);

    var obj242 = document.createElement('div');
    obj242.style.borderTop = '10px solid rgb(0,0,0)';
    obj242.style.borderLeft = '10px solid transparent';
    obj242.style.borderRight = '10px solid transparent';
    document.getElementById('obj_241').appendChild(obj242);*/

    /*======Texte : clic sur une nature======*/
    var obj243 = document.createElement('div');
    obj243.id = 'obj_243';
    obj243.title = 'obj_243';
    obj243.style.position = 'absolute';
    obj243.style.left = '705px';
    obj243.style.top = '535px';
    obj243.style.width = '70px';
    obj243.style.height = '40px';
    obj243.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj243);

    var txt4 = document.createTextNode("Clic sur une nature");
    obj243.appendChild(txt4);

    //*======Afficher la liste des nature======*/
    /*var obj244 = document.createElement('div');
    obj244.id = 'obj_244';
    obj244.title = 'obj_244';
    obj244.style.position = 'absolute';
    obj244.style.left = '670px';
    obj244.style.top = '585px';
    obj244.style.width = '80px';
    obj244.style.height = '160px';
    obj244.style.border = '3px solid rgb(0,0,0)';
    obj244.style.borderRadius = '10px';
    obj244.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj244);

    var txt2 = document.createTextNode("Afficher la liste des assujettis et leur notes en souffrance selon l'intervale");
    obj244.appendChild(txt2);*/

    /*======Ligne======*/
    var obj245 = document.createElement('div');
    obj245.id = 'obj_245';
    obj245.title = 'obj_245';
    obj245.style.position = 'absolute';
    obj245.style.left = '745px';
    obj245.style.top = '575px';
    obj245.style.width = '3px';
    obj245.style.height = '535px';
    obj245.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj245);
    
    /*======Ligne======*/
    var obj246 = document.createElement('div');
    obj246.id = 'obj_246';
    obj246.title = 'obj_246';
    obj246.style.position = 'absolute';
    obj246.style.left = '430px';
    obj246.style.top = '1600px';
    obj246.style.width = '3px';
    obj246.style.height = '30px';
    obj246.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj246);

    ///*======Flèche======*/
    var obj247 = document.createElement('div');
    obj247.id = 'obj_247';
    obj247.title = 'obj_247';
    obj247.style.position = 'absolute';
    obj247.style.left = '423px';
    obj247.style.top = '1630px';
    obj247.style.width = '20px';
    obj247.style.height = '20px';
    document.getElementById('processus').appendChild(obj247);

    var obj248 = document.createElement('div');
    obj248.style.borderTop = '10px solid rgb(0,0,0)';
    obj248.style.borderLeft = '10px solid transparent';
    obj248.style.borderRight = '10px solid transparent';
    document.getElementById('obj_247').appendChild(obj248);

    //*======Afficher la liste des nature======*/
    var obj249 = document.createElement('div');
    obj249.id = 'obj_249';
    obj249.title = 'obj_249';
    obj249.style.position = 'absolute';
    obj249.style.left = '350px';
    obj249.style.top = '1640px';
    obj249.style.width = '180px';
    obj249.style.height = '60px';
    obj249.style.border = '3px solid rgb(0,0,0)';
    obj249.style.borderRadius = '10px';
    obj249.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj249);

    var txt2 = document.createTextNode("Afficher la liste de toutes les notes en souffrance de l'asujettis selectionnée");
    obj249.appendChild(txt2);

    /*======Ligne======*/
    var obj250 = document.createElement('div');
    obj250.id = 'obj_250';
    obj250.title = 'obj_250';
    obj250.style.position = 'absolute';
    obj250.style.left = '430px';
    obj250.style.top = '1705px';
    obj250.style.width = '3px';
    obj250.style.height = '40px';
    obj250.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj250);

    ///*======Flèche======*/
    var obj251 = document.createElement('div');
    obj251.id = 'obj_251';
    obj251.title = 'obj_251';
    obj251.style.position = 'absolute';
    obj251.style.left = '421px';
    obj251.style.top = '1740px';
    obj251.style.width = '20px';
    obj251.style.height = '20px';
    document.getElementById('processus').appendChild(obj251);

    var obj252 = document.createElement('div');
    obj252.style.borderTop = '10px solid rgb(0,0,0)';
    obj252.style.borderLeft = '10px solid transparent';
    obj252.style.borderRight = '10px solid transparent';
    document.getElementById('obj_251').appendChild(obj252);

    /*======Texte : clic sur une nature======*/
    var obj253 = document.createElement('div');
    obj253.id = 'obj_253';
    obj253.title = 'obj_253';
    obj253.style.position = 'absolute';
    obj253.style.left = '445px';
    obj253.style.top = '1705px';
    obj253.style.width = '100px';
    obj253.style.height = '90px';
    obj253.style.textAlign = 'left';
    document.getElementById('processus').appendChild(obj253);

    var txt4 = document.createTextNode("Clic sur etablir la MED");
    obj253.appendChild(txt4);

    //*======choisir le mode======*/
    var obj254 = document.createElement('div');
    obj254.id = 'obj_254';
    obj254.title = 'obj_254';
    obj254.style.position = 'absolute';
    obj254.style.left = '350px';
    obj254.style.top = '1750px';
    obj254.style.width = '180px';
    obj254.style.height = '20px';
    obj254.style.border = '3px solid rgb(0,0,0)';
    obj254.style.borderRadius = '10px';
    obj254.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj254);

    var txt2 = document.createTextNode("Choisir le mode d'affichage");
    obj254.appendChild(txt2);

    /*======Ligne======*/
    var obj255 = document.createElement('div');
    obj255.id = 'obj_255';
    obj255.title = 'obj_255';
    obj255.style.position = 'absolute';
    obj255.style.left = '430px';
    obj255.style.top = '1774px';
    obj255.style.width = '3px';
    obj255.style.height = '20px';
    obj255.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj255);

    //LIgne horizontale
    //==================
    var obj256 = document.createElement('div');
    obj256.id = 'obj_256';
    obj256.title = 'obj_256';
    obj256.style.position = 'absolute';
    obj256.style.left = '350px';
    obj256.style.top = '1793px';
    obj256.style.width = '200px';
    obj256.style.height = '0px';
    obj256.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj256);

    /*======Ligne======*/
    var obj257 = document.createElement('div');
    obj257.id = 'obj_257';
    obj257.title = 'obj_257';
    obj257.style.position = 'absolute';
    obj257.style.left = '350px';
    obj257.style.top = '1795px';
    obj257.style.width = '3px';
    obj257.style.height = '20px';
    obj257.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj257);

    ///*======Flèche======*/
    var obj258 = document.createElement('div');
    obj258.id = 'obj_258';
    obj258.title = 'obj_258';
    obj258.style.position = 'absolute';
    obj258.style.left = '341px';
    obj258.style.top = '1810px';
    obj258.style.width = '20px';
    obj258.style.height = '20px';
    document.getElementById('processus').appendChild(obj258);

    var obj259 = document.createElement('div');
    obj259.style.borderTop = '10px solid rgb(0,0,0)';
    obj259.style.borderLeft = '10px solid transparent';
    obj259.style.borderRight = '10px solid transparent';
    document.getElementById('obj_258').appendChild(obj259);
    
    //*======choisir le mode======*/
    var obj260 = document.createElement('div');
    obj260.id = 'obj_260';
    obj260.title = 'obj_260';
    obj260.style.position = 'absolute';
    obj260.style.left = '250px';
    obj260.style.top = '1820px';
    obj260.style.width = '180px';
    obj260.style.height = '60px';
    obj260.style.border = '3px solid rgb(0,0,0)';
    obj260.style.borderRadius = '10px';
    obj260.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj260);

    var txt2 = document.createTextNode("Afficher la mise en demeure sur une nouvelle paye");
    obj260.appendChild(txt2);

    /*======Ligne======*/
    var obj261 = document.createElement('div');
    obj261.id = 'obj_261';
    obj261.title = 'obj_261';
    obj261.style.position = 'absolute';
    obj261.style.left = '550px';
    obj261.style.top = '1793px';
    obj261.style.width = '3px';
    obj261.style.height = '20px';
    obj261.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj261);

    ///*======Flèche======*/
    var obj262 = document.createElement('div');
    obj262.id = 'obj_262';
    obj262.title = 'obj_262';
    obj262.style.position = 'absolute';
    obj262.style.left = '543px';
    obj262.style.top = '1810px';
    obj262.style.width = '20px';
    obj262.style.height = '20px';
    document.getElementById('processus').appendChild(obj262);

    var obj263 = document.createElement('div');
    obj263.style.borderTop = '10px solid rgb(0,0,0)';
    obj263.style.borderLeft = '10px solid transparent';
    obj263.style.borderRight = '10px solid transparent';
    document.getElementById('obj_262').appendChild(obj263);

    //*======choisir le mode======*/
    var obj264 = document.createElement('div');
    obj264.id = 'obj_264';
    obj264.title = 'obj_264';
    obj264.style.position = 'absolute';
    obj264.style.left = '450px';
    obj264.style.top = '1820px';
    obj264.style.width = '180px';
    obj264.style.height = '20px';
    obj264.style.border = '3px solid rgb(0,0,0)';
    obj264.style.borderRadius = '10px';
    obj264.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj264);

    var txt2 = document.createTextNode("Generer la MED en pdf");
    obj264.appendChild(txt2);

    /*======Ligne======*/
    var obj265 = document.createElement('div');
    obj265.id = 'obj_265';
    obj265.title = 'obj_265';
    obj265.style.position = 'absolute';
    obj265.style.left = '550px';
    obj265.style.top = '1845px';
    obj265.style.width = '3px';
    obj265.style.height = '20px';
    obj265.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj265);

    ///*======Flèche======*/
    var obj266 = document.createElement('div');
    obj266.id = 'obj_266';
    obj266.title = 'obj_266';
    obj266.style.position = 'absolute';
    obj266.style.left = '542px';
    obj266.style.top = '1865px';
    obj266.style.width = '20px';
    obj266.style.height = '20px';
    document.getElementById('processus').appendChild(obj266);

    var obj267 = document.createElement('div');
    obj267.style.borderTop = '10px solid rgb(0,0,0)';
    obj267.style.borderLeft = '10px solid transparent';
    obj267.style.borderRight = '10px solid transparent';
    document.getElementById('obj_266').appendChild(obj267);

    //*======Telecharger======*/
    var obj268 = document.createElement('div');
    obj268.id = 'obj_268';
    obj268.title = 'obj_268';
    obj268.style.position = 'absolute';
    obj268.style.left = '450px';
    obj268.style.top = '1875px';
    obj268.style.width = '180px';
    obj268.style.height = '20px';
    obj268.style.border = '3px solid rgb(0,0,0)';
    obj268.style.borderRadius = '10px';
    obj268.style.textAlign = 'center';
    //obj8.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj268);

    var txt2 = document.createTextNode("Telecharger la MED");
    obj268.appendChild(txt2);

    /*======Ligne======*/
    var obj269 = document.createElement('div');
    obj269.id = 'obj_269';
    obj269.title = 'obj_269';
    obj269.style.position = 'absolute';
    obj269.style.left = '330px';
    obj269.style.top = '1885px';
    obj269.style.width = '3px';
    obj269.style.height = '20px';
    obj269.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj269);

    //LIgne horizontale
    //==================
    var obj270 = document.createElement('div');
    obj270.id = 'obj_270';
    obj270.title = 'obj_270';
    obj270.style.position = 'absolute';
    obj270.style.left = '20px';
    obj270.style.top = '1905px';
    obj270.style.width = '311px';
    obj270.style.height = '0px';
    obj270.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj270);

    /*======Ligne======*/
    var obj271 = document.createElement('div');
    obj271.id = 'obj_271';
    obj271.title = 'obj_271';
    obj271.style.position = 'absolute';
    obj271.style.left = '20px';
    obj271.style.top = '237px';
    obj271.style.width = '3px';
    obj271.style.height = '1670px';
    obj271.style.backgroundColor = 'rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj271);

    //LIgne horizontale
    //==================
    var obj272 = document.createElement('div');
    obj272.id = 'obj_272';
    obj272.title = 'obj_272';
    obj272.style.position = 'absolute';
    obj272.style.left = '20px';
    obj272.style.top = '235px';
    obj272.style.width = '270px';
    obj272.style.height = '0px';
    obj272.style.border = '1px solid rgb(0,0,0)';
    document.getElementById('processus').appendChild(obj272);

    //Lozange
    //=======
    
    var obj273 = document.createElement('div');
    obj273.id = 'obj_273';
    obj273.title = 'obj_273';
    obj273.style.position = 'absolute';
    obj273.style.left = '107px';
    obj273.style.top = '627px';
    obj273.style.width = '30px';
    obj273.style.height = '30px';    
    document.getElementById('processus').appendChild(obj273);

    var obj274 = document.createElement('div');
    obj274.style.borderBottom = '15px solid rgb(0,0,0)';
    obj274.style.borderLeft = '15px solid transparent';
    obj274.style.borderRight = '15px solid transparent';    
    document.getElementById('obj_273').appendChild(obj274);

    var obj275 = document.createElement('div');
    obj275.style.borderTop = '15px solid rgb(0,0,0)';
    obj275.style.borderLeft = '15px solid transparent';
    obj275.style.borderRight = '15px solid transparent';
    document.getElementById('obj_273').appendChild(obj275);

    //Lozange
    //=======
    var obj276 = document.createElement('div');
    obj276.id = 'obj_276';
    obj276.title = 'obj_276';
    obj276.style.position = 'absolute';
    obj276.style.left = '377px';
    obj276.style.top = '1316px';
    obj276.style.width = '30px';
    obj276.style.height = '30px';
    document.getElementById('processus').appendChild(obj276);

    var obj277 = document.createElement('div');
    obj277.style.borderBottom = '15px solid rgb(0,0,0)';
    obj277.style.borderLeft = '15px solid transparent';
    obj277.style.borderRight = '15px solid transparent';
    document.getElementById('obj_276').appendChild(obj277);

    var obj278 = document.createElement('div');
    obj278.style.borderTop = '15px solid rgb(0,0,0)';
    obj278.style.borderLeft = '15px solid transparent';
    obj278.style.borderRight = '15px solid transparent';
    document.getElementById('obj_276').appendChild(obj278);

    //Lozange
    //=======
    var obj279 = document.createElement('div');
    obj279.id = 'obj_279';
    obj279.title = 'obj_279';
    obj279.style.position = 'absolute';
    obj279.style.left = '420px';
    obj279.style.top = '1499px';
    obj279.style.width = '30px';
    obj279.style.height = '30px';
    document.getElementById('processus').appendChild(obj279);

    var obj280 = document.createElement('div');
    obj280.style.borderBottom = '15px solid rgb(0,0,0)';
    obj280.style.borderLeft = '15px solid transparent';
    obj280.style.borderRight = '15px solid transparent';
    document.getElementById('obj_279').appendChild(obj280);

    var obj281 = document.createElement('div');
    obj281.style.borderTop = '15px solid rgb(0,0,0)';
    obj281.style.borderLeft = '15px solid transparent';
    obj281.style.borderRight = '15px solid transparent';
    document.getElementById('obj_279').appendChild(obj281);

    //FLECHE DE RETOUR
    //================
    /*
    <div id="obj_1_ fleche" title="obj_1_ fleche" style="position:absolute; top: 50px; left: 50px; width:50px; height: 50px;">
	<div style="border-left: 25px solid rgb(0,0,0); border-top: 25px solid transparent; border-bottom: 25px solid transparent;"></div>
</div>
*/
    var obj282 = document.createElement('div');
    obj282.id = 'obj_282';
    obj282.title = 'obj_282';
    obj282.style.position = 'absolute';
    obj282.style.left = '290px';
    obj282.style.top = '227px';
    obj282.style.width = '20px';
    obj282.style.height = '20px';
    document.getElementById('processus').appendChild(obj282);

    var obj283 = document.createElement('div');
    obj283.style.borderLeft = '10px solid rgb(0,0,0)';
    obj283.style.borderTop = '10px solid transparent';
    obj283.style.borderBottom = '10px solid transparent';
    document.getElementById('obj_282').appendChild(obj283);

    switch (pageID) {
        case 'RechercheNoteMED':
            obj4.style.border = '5px solid rgb(100,200,0)';
            obj4.style.backgroundColor = 'rgb(100,200,0)';
            obj5.style.backgroundColor = 'rgb(100,200,0)';
            obj7.style.borderTop = '10px solid rgb(100,200,0)';
            obj8.style.border = '5px solid rgb(100,200,0)';
            obj8.style.backgroundColor = 'rgb(100,200,0)';

            obj10.style.backgroundColor = 'rgb(100,200,0)';
            obj12.style.borderTop = '10px solid rgb(100,200,0)';

            obj14.style.border = '5px solid rgb(255, 216, 0)';
            obj14.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SaisirNumNote':
            obj4.style.border = '5px solid rgb(100,200,0)';
            obj4.style.backgroundColor = 'rgb(100,200,0)';
            obj5.style.backgroundColor = 'rgb(100,200,0)';
            obj7.style.borderTop = '10px solid rgb(100,200,0)';
            obj8.style.border = '5px solid rgb(100,200,0)';
            obj8.style.backgroundColor = 'rgb(100,200,0)';

            obj10.style.backgroundColor = 'rgb(100,200,0)';
            obj12.style.borderTop = '10px solid rgb(100,200,0)';

            obj14.style.border = '5px solid rgb(100,200,0)'; // div Recherche des notes
            obj14.style.backgroundColor = 'rgb(100,200,0)';

            obj15.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj17.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj18.style.border = '3px solid rgb(100,200,0)';//ligne
            obj18.style.backgroundColor = 'rgb(100,200,0)';

            obj19.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj21.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj22.style.border = '5px solid rgb(100,200,0)'; // div Recherche des notes
            obj22.style.backgroundColor = 'rgb(100,200,0)';

            obj63.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj65.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj66.style.border = '5px solid rgb(255, 216, 0)';
            obj66.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'VerifPaiement':
            obj4.style.border = '5px solid rgb(100,200,0)';
            obj4.style.backgroundColor = 'rgb(100,200,0)';
            obj5.style.backgroundColor = 'rgb(100,200,0)';
            obj7.style.borderTop = '10px solid rgb(100,200,0)';
            obj8.style.border = '5px solid rgb(100,200,0)';
            obj8.style.backgroundColor = 'rgb(100,200,0)';

            obj10.style.backgroundColor = 'rgb(100,200,0)';
            obj12.style.borderTop = '10px solid rgb(100,200,0)';

            obj14.style.border = '5px solid rgb(100,200,0)'; // div Recherche des notes
            obj14.style.backgroundColor = 'rgb(100,200,0)';

            obj15.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj17.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj18.style.border = '3px solid rgb(100,200,0)';//ligne
            obj18.style.backgroundColor = 'rgb(100,200,0)';

            obj19.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj21.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj22.style.border = '5px solid rgb(100,200,0)'; // div Recherche des notes
            obj22.style.backgroundColor = 'rgb(100,200,0)';

            obj63.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj65.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj66.style.border = '5px solid rgb(100,200,0)'; // div Saisir le numero de la note
            obj66.style.backgroundColor = 'rgb(100,200,0)';

            obj67.style.backgroundColor = 'rgb(100,200,0)';//ligne

            obj69.style.borderTop = '10px solid rgb(100,200,0)'; //fleche

            obj74.style.border = '5px solid rgb(255, 216, 0)'; //div Resultat de verification
            obj74.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'LstnotesouffAss':

            switch (action) {
                case 'assMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj26, obj89, obj95];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj23, obj90, obj94, obj97, obj100, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj93, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj25, obj92, obj99, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'noteMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj22, obj66, obj74, obj83];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }


                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj19, obj63, obj67, obj75, obj80, obj81, obj88, obj195, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj80, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj21, obj65, obj69, obj85, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'artMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj30, obj110, obj124, obj128];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj27, obj102, obj103, obj105, obj106, obj107, obj111, obj129, obj131, obj136, obj142, obj144, obj146, obj156, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj103, obj106, obj124, obj130, obj135, obj143, obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj29, obj109, obj133, obj138,obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'ctreSeulMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj38, obj128];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj35, obj118, obj120, obj129, obj136, obj144, obj146, obj156, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj119, obj124, obj135, obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj37,obj138, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'centreMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj34, obj128];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj31, obj120, obj125, obj129, obj136, obj144, obj146, obj156, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj119, obj124, obj135, obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj33,obj138, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'antMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj42,obj128, obj152];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj39, obj129, obj136, obj144, obj146, obj147, obj151, obj153, obj156, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj150, obj124, obj135, obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj41, obj138, obj149, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'servMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj46,obj128, obj160];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj43, obj129, obj136, obj144, obj146, obj157, obj161, obj165, obj156, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj162, obj124, obj135, obj145,obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj45,obj138, obj159, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'montMED':
                    /*========Liste des DIV des actions========*/

                    var lstDivAction = [obj4, obj8, obj14, obj50,obj128, obj169];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj47, obj129, obj136, obj144, obj146, obj166, obj156, obj174, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj124, obj135, obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj49, obj138, obj168, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'dateMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj54,obj128, obj178];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj51, obj129, obj136, obj144, obj146, obj156, obj175, obj179, obj182, obj202, obj203, obj246];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj180, obj202, obj124,obj135,obj145, obj195];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj53,obj138, obj177, obj155, obj248];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj249.style.border = '5px solid rgb(255, 216, 0)';
                    obj249.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
            break;

        

        case 'RechercheAssujetti':

            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj18, obj26];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj23, obj94, obj93, obj90];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj93];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj25, obj92];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj89.style.border = '5px solid rgb(255, 216, 0)';
            obj89.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'LstRechAssujetti':

            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj18, obj26,obj89];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';                
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj23, obj94, obj93, obj90, obj97];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj93];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj25, obj92, obj99];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj95.style.border = '5px solid rgb(255, 216, 0)';
            obj95.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectArticle':

            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj18, obj30];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj27, obj102, obj103, obj105, obj106, obj107];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj103, obj106];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj29, obj109];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj110.style.border = '5px solid rgb(255, 216, 0)';
            obj110.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'AssujettisMED':
            switch (action) {
                case 'artMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj30, obj110, obj124];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj27, obj102, obj103, obj105, obj106, obj107, obj111, obj156];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj103, obj106, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj29, obj109, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'ctreSeulMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj38];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj35, obj118, obj120, obj156];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj119, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj37, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'centreMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj34];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes verticales==========*/
                    var lstLignes = [obj5, obj10, obj15, obj31, obj125, obj120, obj156];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj119, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj33, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'antMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj18, obj42, obj152];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj39, obj147, obj151, obj153, obj156];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj150, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj41, obj149, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'servMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj46, obj160];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj43, obj157, obj161, obj165, obj156];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj162, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj45, obj159, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'montMED':
                    /*========Liste des DIV des actions========*/

                    var lstDivAction = [obj4, obj8, obj14, obj50, obj169];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj47, obj166, obj156, obj174];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj49, obj155, obj168];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'dateMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj54, obj178];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj51, obj156, obj175, obj179, obj182, obj202, obj203];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj180, obj202, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj53, obj177, obj155];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'provMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj58, obj208, obj213, obj218, obj213, obj223, obj228];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj55, obj156, obj183, obj209, obj214, obj219, obj224, obj229];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj57, obj155, obj207, obj211, obj216, obj221, obj226];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }

                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;

                case 'baseMED':
                    /*========Liste des DIV des actions========*/
                    var lstDivAction = [obj4, obj8, obj14, obj62];
                    for (var i = 0; i < lstDivAction.length; i++) {
                        lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                        lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*=======Liste des lignes==========*/
                    var lstLignes = [obj5, obj10, obj15, obj59, obj156, obj236, obj240, obj245];
                    for (var i = 0; i < lstLignes.length; i++) {
                        lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*========Liste des lignes horizontales========*/
                    var lstLignesHor = [obj18, obj241, obj124];
                    for (var i = 0; i < lstLignesHor.length; i++) {
                        lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                        lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
                    }

                    /*======Liste des fleches + 1 =====*/
                    var lstFleches = [obj7, obj12, obj17, obj61, obj155, obj238];
                    for (var i = 0; i < lstFleches.length; i++) {
                        lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
                    }
                    obj239.style.border = '5px solid rgb(100,200,0)';
                    obj239.style.backgroundColor = 'rgb(100,200,0)';
                    obj128.style.border = '5px solid rgb(255, 216, 0)';
                    obj128.style.backgroundColor = 'rgb(255, 216, 0)';
                    break;
            }
            break;

        case 'SelectAntenne':

            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj18, obj42];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj39, obj147, obj151];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj150];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj41, obj149];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj152.style.border = '5px solid rgb(255, 216, 0)';
            obj152.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'ServiceAssiette':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj46];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj43, obj157];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj45, obj159];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj160.style.border = '5px solid rgb(255, 216, 0)';
            obj160.style.backgroundColor = 'rgb(255, 216, 0)';
            break;


        case 'SaisirMontant':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj50];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj47, obj166];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj49, obj168];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj169.style.border = '5px solid rgb(255, 216, 0)';
            obj169.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SaisirDate':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj54];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj51, obj202];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj53];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj178.style.border = '5px solid rgb(255, 216, 0)';
            obj178.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectProv':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj58];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj55, obj183];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj57, obj207];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj208.style.border = '5px solid rgb(255, 216, 0)';
            obj208.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectVille':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj58, obj208];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj55, obj183, obj209];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj57, obj207, obj211];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj213.style.border = '5px solid rgb(255, 216, 0)';
            obj213.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectCommune':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj58, obj208, obj213];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj55, obj183, obj209, obj214];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj57, obj207, obj211, obj216];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj218.style.border = '5px solid rgb(255, 216, 0)';
            obj218.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectQuartier':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj58, obj208, obj213, obj218];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj55, obj183, obj209, obj214, obj219];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj57, obj207, obj211, obj216, obj221];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj223.style.border = '5px solid rgb(255, 216, 0)';
            obj223.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectAvenue':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj58, obj208, obj213, obj218, obj213, obj223];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj55, obj183, obj209, obj214, obj219, obj224];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj57, obj207, obj211, obj216, obj221, obj226];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }

            obj228.style.border = '5px solid rgb(255, 216, 0)';
            obj228.style.backgroundColor = 'rgb(255, 216, 0)';
            break;

        case 'SelectNatBase':
            /*========Liste des DIV des actions========*/
            var lstDivAction = [obj4, obj8, obj14, obj62];
            for (var i = 0; i < lstDivAction.length; i++) {
                lstDivAction[i].style.border = '3px solid rgb(100,200,0)';
                lstDivAction[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*=======Liste des lignes==========*/
            var lstLignes = [obj5, obj10, obj15, obj59, obj236];
            for (var i = 0; i < lstLignes.length; i++) {
                lstLignes[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*========Liste des lignes horizontales========*/
            var lstLignesHor = [obj18];
            for (var i = 0; i < lstLignesHor.length; i++) {
                lstLignesHor[i].style.border = '2px solid rgb(100,200,0)';
                lstLignesHor[i].style.backgroundColor = 'rgb(100,200,0)';
            }

            /*======Liste des fleches + 1 =====*/
            var lstFleches = [obj7, obj12, obj17, obj61, obj238];
            for (var i = 0; i < lstFleches.length; i++) {
                lstFleches[i].style.borderTop = '10px solid rgb(100,200,0)';
            }
            obj239.style.border = '5px solid rgb(255, 216, 0)';
            obj239.style.backgroundColor = 'rgb(255, 216, 0)';
            break;
    } 
}
