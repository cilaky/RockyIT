using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ImpotsTaxes.Models;
using System.Data;

namespace ImpotsTaxes.Controllers
{
    public class RecouvrementController : Controller
    {

        //VERIFICATION OF SESSION
        private void SessionVerification()
        {
            //Check session
            string value = Session["utilisateur"] as string;
            string group = Session["user_group"] as string;
            //DBConnection con = new DBConnection();

            if (String.IsNullOrEmpty(value))
            {
                Response.Redirect("/Login/Index");
            }
            else if (group != "Receveur")
            {
                Response.Redirect("/Login/Index");
            }
        }

        /********************************************
         *  INDEX ET DIAGRAMME DE CAS D'UTILISATION *
         * ******************************************/
        public ActionResult Index()
        {
            SessionVerification();
            return View();
        }

        /*******************************************************
         *  RECHERCHE DES NOTES POUR LEQUELLES ETABLIR LES MED *
         * *****************************************************/
        public ActionResult RechercheNoteMED()
        {
            SessionVerification();
            return View();
        }

        /*************************************************
         *           SAISIR LE NUMERO DE LA NOTE
         * ************************************************/
        public ActionResult SaisirNumNote()
        {
            SessionVerification();
            return View();
        }
       
        /*************************************************
         * VERIFICATION DU PAIEMENT
         * ***************************************/
        public ActionResult VerifPaiement()
        {
            SessionVerification();
            return View();
        }

        /*************************************************
         * LISTE DES NOTES EN SOUFFRANCE DE L'ASSUJETTI
         * ***********************************************/
        public ActionResult LstnotesouffAss()
        {
            SessionVerification();
            return View();
        }
        
        /*************************************************
         * RECHERCHE DE L'ASSUJETTI
         * ***********************************************/
        public ActionResult RechercheAssujetti()
        {
            SessionVerification();
            return View();
        }

        /*************************************************
         * LISTE DES NOTES EN SOUFFRANCE DE L'ASSUJETTI
         * ***********************************************/
        public ActionResult ModeAffMED()
        {
            SessionVerification();

            //DBConnection con = new DBConnection();
            //ViewBag.message=con.Show_Data("exec EnregistrerMED @assujetti='" + Request.Params["ass"] + "',@userId='" + Session["utilisateur"] + "'", "Msg");
            //DataTable dtt = con.Data_Source("exec EnregistrerMED @assujetti='" + Request.Params["ass"] + "',@userId='" + Session["utilisateur"] + "'", "t");
            //ViewBag.lettre = dtt.Rows[0]["lettre"].ToString();
            //ViewBag.message = dtt.Rows[0]["Msg"].ToString();
            return View();
        }

        /*************************************************
         * LISTE POUR LA RECHERCHE DE L'ASSUJETTI
         * ***********************************************/
        public ActionResult LstRechAssujetti()
        {
            SessionVerification();
            if (Request.Params["action"] == "assMED")
            {
                ViewBag.noms = Request.Form["nom"];

            }
            return View();
        }

        /*************************************************
         * LISTE DES ARTICLES
         * ***********************************************/
        public ActionResult SelectArticle()
        {
            SessionVerification();
            return View();
        }

        /******************************************************
         * LISTE DES ASSUJETTIS POUR LESQUELS ENVOYER DES MED
         * ****************************************************/
        public ActionResult AssujettisMED()
        {
            SessionVerification();
            //ViewBag.action = Request.Params["action"];
            if (Request.Params["action"] == "dateMED")
            {
                ViewBag.dateDeb = Request.Form["dateDebut"];
                ViewBag.dateFin = Request.Form["dateFin"];
            }
            else if (Request.Params["action"] == "montMED")
            {
                ViewBag.mont = Request.Form["mont"];
                ViewBag.monn = Request.Form["monn"];
            }
            return View();
        }

        /******************************************************
         * LISTE DES ANTENNES POUR LES MED
         * ****************************************************/
        public ActionResult SelectAntenne()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * LISTE DES SERVICES D'ASSIETTES QUI ONT DES NOTE POUR LES MED
         * *************************************************************/
        public ActionResult ServiceAssiette()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR MONTANT
         * *************************************************************/
        public ActionResult SaisirMontant()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR DATE
         * *************************************************************/
        public ActionResult SaisirDate()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR ADRESSE
         * *************************************************************/
        public ActionResult SelectProv()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR BASE IMPOSABLE
         * *************************************************************/
        public ActionResult SelectNatBase()
        {
            SessionVerification();
            return View();
        }

                                                /*DEUT  KUDRA*/
                                               //--------------

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR ADRESSE
         * *************************************************************/
        public ActionResult SelectVille()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
        * RECHERCHE DES NOTES POUR MED PAR ADRESSE
        * *************************************************************/
        public ActionResult SelectCommune()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
        * RECHERCHE DES NOTES POUR MED PAR ADRESSE
        * *************************************************************/
        public ActionResult SelectQuartier()
        {
            SessionVerification();
            return View();
        }

        /***************************************************************
         * RECHERCHE DES NOTES POUR MED PAR ADRESSE
         * *************************************************************/
        public ActionResult SelectAvenue()
        {
            SessionVerification();
            return View();
        }

        public ActionResult MED()
        {
            SessionVerification();
            return View();
        }
       
    }
}
