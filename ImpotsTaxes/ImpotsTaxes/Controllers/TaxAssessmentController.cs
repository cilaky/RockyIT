using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ImpotsTaxes.Models;
using SQLServerConnection;

namespace ImpotsTaxes.Controllers
{
    public class TaxAssessmentController : Controller
    {
        //
        // GET: /TaxAssessment/

        public ActionResult Index()
        {
            return View();
        }

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
            DBConnection con = new DBConnection("C:\\connexion.xml");
            ViewBag.id = con.Show_Data("select number from (select CONVERT(int,RAND() * 100000) as number) feuille where number not in (select id_feuille from Feuille_Calcul)", "number");
            return View();
        }

        //Enregistrer feuille de calcul
        //==============================
        //[HttpPost]
        //public ActionResult ElaborFeuille(string en)
        //{
        //    //try
        //    //{
        //    //    BaseImposable fll = new BaseImposable()
        //    //    {
        //    //        id_feuille = Convert.ToInt32(Request.Form["numfeuille"]),
        //    //        datef = Convert.ToDateTime(Request.Form["date"]),
        //    //        id_user = Request.Form["livraison"] //Session["utilisateur"] as string,
        //    //    };
        //    //    fll.EnregistrerFeuille_Calcul(fll);
        //    //    ViewBag.Message = "Enregistrement réussie avec succès";
        //    //    Response.Redirect("/TaxAssessment/EnregistrerFeuille?msg=Ok&action=" + Request.Form[""] + "&feuil=" + Request.Form["numfeuille"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);
        //    //}
        //    //catch (Exception ex)
        //    //{
        //    //    ViewBag.Message = "ERROR:" + ex.Message.ToString();
        //    //    Response.Redirect("/TaxAssessment/EnregistrerFeuille?msg=Echec&action=&feuil=" + Request.Form["id_feuille"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);
        //    //}
        //    //return View();
        //}

        //enregistrement de la feuille de calcul
        //========================
        public ActionResult EnregistrerFeuille()
        {

            try
            {
                BaseImposable fll = new BaseImposable()
                {
                    id_feuille = Convert.ToInt32(Request.Form["numfeuille"]),
                    datef = Convert.ToDateTime(Request.Form["date"]),
                    id_user = Request.Form["livraison"] //Session["utilisateur"] as string,
                };
                fll.EnregistrerFeuille_Calcul(fll);
                ViewBag.Message = "Enregistrement réussie avec succès";
                //Response.Redirect("/TaxAssessment/EnregistrerFeuille?msg=Ok&action=" + Request.Form[""] + "&feuil=" + Request.Form["numfeuille"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);
            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
                //Response.Redirect("/TaxAssessment/EnregistrerFeuille?msg=Echec&action=&feuil=" + Request.Form["id_feuille"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);
            }                
            return View();

        }

        //RECHERCHE DE L'ASSUJETTI
        //========================
        public ActionResult RechercherAssujetti()
        {
            return View();
        }

        [HttpPost]
        public ActionResult RechercherAssujetti(string tpname)
        {

            return View();
        }
        //SURCHARCGE DE LA LISTE DES ASSUJETTI RECHERCHE
        //==============================================
        
        //public ActionResult RechercherAssujetti()
        //{
        //    return View();
        //}

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
        //    DBConnection con = new DBConnection("C:\\connexion.xml");
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

        public ActionResult SelectForme()
        {
            return View();
        }

        public ActionResult SaisirCoordonneesEntreprise()
        {
            return View();
        }

        public ActionResult SaisieCoordonneesEntreprise()
        {
            try
            {
                Person pers = new Person() 
                {
                    Id_person = Request.Form["ass"],
                    email = Request.Form["email"],
                    p_o_box = Request.Form["pobox"],
                    province = Request.Form["prov"],
                    town_dist = Request.Form["vil"],
                    commune = Request.Form["com"],
                    quarter = Request.Form["quar"],
                    avenue = Request.Form["av"],
                    number = Request.Form["num"],
                    telephone = Request.Form["numtel"],
                    name_company = Request.Form["rais"],
                    initials = Request.Form["inial"],
                    numid_nat = Request.Form["numid"],
                    tax_num_dgi = Request.Form["numdgi"]
                };
                pers.save_company(pers);
                Response.Redirect("/BaseImposable/SelectNature_base_imposable?action=NouvelAssujetti&feuil=" + Request.Form["feuil"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);


            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
            }
            return View();
        }
    }
}
