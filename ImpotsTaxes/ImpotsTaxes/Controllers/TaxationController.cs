using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ImpotsTaxes.Models;

namespace ImpotsTaxes.Controllers
{
    public class TaxationController : Controller
    {
        //
        // GET: /TaxAssessment/

        public ActionResult Index()
        {
            return View();
        }

        //public ActionResult assessment()
        //{
        //    //SessionVerification();
        //    return View("Taxation");
        //}

        ////CHOOSE IF THE NOTE IS AUTOMATIC OR MANUEL
        //public ActionResult SelectNote()
        //{
        //    DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
        //    string id_note = con.Show_Data("DECLARE @Random INT; DECLARE @Upper INT; DECLARE @Lower INT SET @Lower = 10000000 SET @Upper = 99999999 SELECT @Random = ROUND(((@Upper - @Lower -1) * RAND() + @Lower), 0) SELECT @Random as Number where convert(varchar(10),@Random) not in (select assessment_id from tax_assessment)", "Number");
        //    ViewBag.idNote = id_note;
        //    return View();
        //}

        //////Search for tax payer by taping his name
        //public ActionResult SearchTPbyName()
        //{
        //    //SessionVerification();
        //   return View();
        //}


        //================================POUR ALICE===============

        //RECHERCHE DE L'ASSUJETTI
        //========================
        public ActionResult AffichageEdit()
        {
            return View();
        }


        //Rechercher l'agent(taxateur, verificateur ou inspecteur)
        //========================
        public ActionResult RechercherAgent()
        {
            return View();
        }

        //elaborer feuille de calcul
        //========================
        public ActionResult ElaborFeuille()
        {

            return View();
        }

        //enregistrement de la feuille de calcul
        //========================
        public ActionResult EnregistrerFeuille()
        {

            return View();
        }

        //RECHERCHE DE L'ASSUJETTI
        //========================
        public ActionResult RechercherAssujetti()
        {
            return View();
        }
        //affichage de la bases imposable
        //========================
        public ActionResult AffichageBaseImp()
        {

            return View();
        }
        //selectionner l'article
        //========================
        public ActionResult SelectionArticle()
        {

            return View();
        }
        //Ajouter les biens imposable sur la feuille de calcul
        //=======================================
        public ActionResult AjoutBiensImpFeuille()
        {

            return View();
        }
        ////Enregistrement de la feuille
        ////========================
        //public void AjoutBIFeuille()
        //{
        //    DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
        //    con.Execute_Query("INSERT INTO () values()");
           
        //}
        //Affichage de la feuille de calcul avec tous les elements taxés
        //=======================================================================
        public ActionResult AffichageFeuilleCalcul()
        {

            return View();
        }
        //envoi message
        //=======================================================================
        public ActionResult EnvoyerMessage()
        {
            return View();
        }
        //etablir la note
        //=======================================================================
        public ActionResult EtablirNote()
        {
            return View();
        }
        //Affichage  liste des note
        //========================
        public ActionResult AffichListeNote()
        {
            return View();
        }
        //Affichage   note
        //========================
        public ActionResult AffichageNote()
        {

            return View();
        }
    }
}
