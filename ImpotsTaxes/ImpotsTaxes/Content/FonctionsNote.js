/********************************************
*   MODIFICATION D'UN ELEMENT DE LA NOTE    *
*********************************************/
function ModifierElement(element, champ, table) {
    window.location.href = '/Correction/ModificationElementNote?note=' + document.getElementById('assessment_id').value + '&element=' + element + '&champ=' + champ + '&tbl=' + table;
}

/********************************************
*   MODIFICATION DE L'ENTITE DE LA NOTE     *
*********************************************/
function ModifierEntite(element, champ, table) {
    window.location.href = '/Correction/ModifEntiteNote?note=' + document.getElementById('assessment_id').value + '&element=' + element + '&champ=' + champ + '&tbl=' + table;
}

/************************************
*   MODIFICATION DE L'ASSUJETTI     *
*************************************/
function ModifierAssujetti() {
    window.location.href = '/Correction/ModifierAssujetti?note=' + document.getElementById('assessment_id').value;
}

/******************************************
*   MODIFICATION DE LA BASE IMPOSABLE     *
*******************************************/
function ModifierBase() {
    window.location.href = '/Correction/ModificationBase?note=' + document.getElementById('assessment_id').value;
}

/********************************************
*   MODIFICATION DE L'ARTICLE DE LA NOTE     *
*********************************************/
function ModifierArticle(element, champ, table) {
    window.location.href = '/Correction/ModificationArticle?note=' + document.getElementById('assessment_id').value + '&element=' + element + '&champ=' + champ + '&tbl=' + table;
}

/************************************************
*   MODIFICATION DU TAXATEUR OU ORDONNATEUR     *
*************************************************/
function ModifierAgent(element, champ, table) {
    window.location.href = '/Correction/RechercherAgent?note=' + document.getElementById('assessment_id').value + '&element=' + element + '&champ=' + champ + '&tbl=' + table;
}

/********************************************
*   MODIFICATION DE L'ENTITE DE LA NOTE     *
*********************************************/
function SelectionEntite(action) {
    window.location.href = '/SharedFunctions/SelectEntity?action=' + action +
                            '&note=' + document.getElementById('assessment_id').value +
                            '&ent=' + document.getElementById('ent').value +
                            '&entpc=' + document.getElementById('entpc').value +
                            '&dttx=' + document.getElementById('dateNote').value +
                            '&ntdeb=' + document.getElementById('noteDebit').value +
                            '&ntdebnum=' + document.getElementById('numNoteDebit').value +
                            '&ass=' + document.getElementById('ass').value +
                            '&asspc=' + document.getElementById('asspc').value +
                            '&art=' + document.getElementById('art').value +
                            '&tref=' + document.getElementById('tauxref').value +
                            '&mttx=' + document.getElementById('amount').value +
                            '&mntx=' + document.getElementById('currencytx').value +
                            '&enlettx=' + document.getElementById('in_wordtx').value +
                            '&idtx=' + document.getElementById('idtx').value +
                            '&taux=' + document.getElementById('exchangeRate').value +
                            '&precis=' + document.getElementById('descript').value +
                            '&nature=' + document.getElementById('nature').value +
                            '&ens=' + document.getElementById('enseigne').value +
                            '&idprop=' + document.getElementById('id').value +
                            '&prov=' + document.getElementById('provAct').value +
                            '&vil=' + document.getElementById('villeAct').value +
                            '&com=' + document.getElementById('communeAct').value +
                            '&quart=' + document.getElementById('quartierAct').value +
                            '&av=' + document.getElementById('AvenueAct').value +
                            '&num=' + document.getElementById('NumeroAct').value +
                            '&dim=' + document.getElementById('dimensionAct').value +
                            '&unit=' + document.getElementById('uniteAct').value +
                            '&dtord=' + document.getElementById('dateOrdo').value +
                            '&avis=' + document.getElementById('notice').value +
                            '&mtord=' + document.getElementById('amountOrdo').value +
                            '&mnord=' + document.getElementById('mnord').value +
                            '&enletord=' + document.getElementById('in_wordOrdo').value +
                            '&idord=' + document.getElementById('idord').value;
}

/*********************************
*   SELECTION DE L'ASSUJETTI     *
**********************************/
function SelectionAss(action) {
    window.location.href = '/SharedFunctions/SearchPersonByName?action=' + action +
                            '&note=' + document.getElementById('assessment_id').value +
                            '&ent=' + document.getElementById('ent').value +
                            '&entpc=' + document.getElementById('entpc').value +
                            '&dttx=' + document.getElementById('dateNote').value +
                            '&ntdeb=' + document.getElementById('noteDebit').value +
                            '&ntdebnum=' + document.getElementById('numNoteDebit').value +
                            '&ass=' + document.getElementById('ass').value +
                            '&asspc=' + document.getElementById('asspc').value +
                            '&art=' + document.getElementById('art').value +
                            '&tref=' + document.getElementById('tauxref').value +
                            '&mttx=' + document.getElementById('amount').value +
                            '&mntx=' + document.getElementById('currencytx').value +
                            '&enlettx=' + document.getElementById('in_wordtx').value +
                            '&idtx=' + document.getElementById('idtx').value +
                            '&taux=' + document.getElementById('exchangeRate').value +
                            '&precis=' + document.getElementById('descript').value +
                            '&nature=' + document.getElementById('nature').value +
                            '&ens=' + document.getElementById('enseigne').value +
                            '&idprop=' + document.getElementById('id').value +
                            '&prov=' + document.getElementById('provAct').value +
                            '&vil=' + document.getElementById('villeAct').value +
                            '&com=' + document.getElementById('communeAct').value +
                            '&quart=' + document.getElementById('quartierAct').value +
                            '&av=' + document.getElementById('AvenueAct').value +
                            '&num=' + document.getElementById('NumeroAct').value +
                            '&dim=' + document.getElementById('dimensionAct').value +
                            '&unit=' + document.getElementById('uniteAct').value +
                            '&dtord=' + document.getElementById('dateOrdo').value +
                            '&avis=' + document.getElementById('notice').value +
                            '&mtord=' + document.getElementById('amountOrdo').value +
                            '&mnord=' + document.getElementById('mnord').value +
                            '&enletord=' + document.getElementById('in_wordOrdo').value +
                            '&idord=' + document.getElementById('idord').value;
}

/*********************************************
*   SELECTION DU TAXATEUR OU ORDONNATEUR     *
**********************************************/
function SelectionAgent(action) {
    window.location.href = '/SharedFunctions/SelectionAgent?action=' + action +
                            '&note=' + document.getElementById('assessment_id').value +
                            '&ent=' + document.getElementById('ent').value +
                            '&entpc=' + document.getElementById('entpc').value +
                            '&dttx=' + document.getElementById('dateNote').value +
                            '&ntdeb=' + document.getElementById('noteDebit').value +
                            '&ntdebnum=' + document.getElementById('numNoteDebit').value +
                            '&ass=' + document.getElementById('ass').value +
                            '&asspc=' + document.getElementById('asspc').value +
                            '&art=' + document.getElementById('art').value +
                            '&tref=' + document.getElementById('tauxref').value +
                            '&mttx=' + document.getElementById('amount').value +
                            '&mntx=' + document.getElementById('currencytx').value +
                            '&enlettx=' + document.getElementById('in_wordtx').value +
                            '&idtx=' + document.getElementById('idtx').value +
                            '&taux=' + document.getElementById('exchangeRate').value +
                            '&precis=' + document.getElementById('descript').value +
                            '&nature=' + document.getElementById('nature').value +
                            '&ens=' + document.getElementById('enseigne').value +
                            '&idprop=' + document.getElementById('id').value +
                            '&prov=' + document.getElementById('provAct').value +
                            '&vil=' + document.getElementById('villeAct').value +
                            '&com=' + document.getElementById('communeAct').value +
                            '&quart=' + document.getElementById('quartierAct').value +
                            '&av=' + document.getElementById('AvenueAct').value +
                            '&num=' + document.getElementById('NumeroAct').value +
                            '&dim=' + document.getElementById('dimensionAct').value +
                            '&unit=' + document.getElementById('uniteAct').value +
                            '&dtord=' + document.getElementById('dateOrdo').value +
                            '&avis=' + document.getElementById('notice').value +
                            '&mtord=' + document.getElementById('amountOrdo').value +
                            '&mnord=' + document.getElementById('mnord').value +
                            '&enletord=' + document.getElementById('in_wordOrdo').value +
                            '&idord=' + document.getElementById('idord').value;
}

/***************************************
*   SELECTION DE LA BASE IMPOSABLE     *
****************************************/
function SelectionBase(action) {
    window.location.href = '/SharedFunctions/SelectionBase?action=' + action +
                            '&note=' + document.getElementById('assessment_id').value +
                            '&ent=' + document.getElementById('ent').value +
                            '&entpc=' + document.getElementById('entpc').value +
                            '&dttx=' + document.getElementById('dateNote').value +
                            '&ntdeb=' + document.getElementById('noteDebit').value +
                            '&ntdebnum=' + document.getElementById('numNoteDebit').value +
                            '&ass=' + document.getElementById('ass').value +
                            '&asspc=' + document.getElementById('asspc').value +
                            '&art=' + document.getElementById('art').value +
                            '&tref=' + document.getElementById('tauxref').value +
                            '&mttx=' + document.getElementById('amount').value +
                            '&mntx=' + document.getElementById('currencytx').value +
                            '&enlettx=' + document.getElementById('in_wordtx').value +
                            '&idtx=' + document.getElementById('idtx').value +
                            '&taux=' + document.getElementById('exchangeRate').value +
                            '&precis=' + document.getElementById('descript').value +
                            '&nature=' + document.getElementById('nature').value +
                            '&ens=' + document.getElementById('enseigne').value +
                            '&idprop=' + document.getElementById('id').value +
                            '&prov=' + document.getElementById('provAct').value +
                            '&vil=' + document.getElementById('villeAct').value +
                            '&com=' + document.getElementById('communeAct').value +
                            '&quart=' + document.getElementById('quartierAct').value +
                            '&av=' + document.getElementById('AvenueAct').value +
                            '&num=' + document.getElementById('NumeroAct').value +
                            '&dim=' + document.getElementById('dimensionAct').value +
                            '&unit=' + document.getElementById('uniteAct').value +
                            '&dtord=' + document.getElementById('dateOrdo').value +
                            '&avis=' + document.getElementById('notice').value +
                            '&mtord=' + document.getElementById('amountOrdo').value +
                            '&mnord=' + document.getElementById('mnord').value +
                            '&enletord=' + document.getElementById('in_wordOrdo').value +
                            '&idord=' + document.getElementById('idord').value;
}

function PCAssujetti() {
    document.getElementById('pc').value = document.getElementById('nomRS').value;
    document.getElementById('asspc').value = document.getElementById('ass').value;
}