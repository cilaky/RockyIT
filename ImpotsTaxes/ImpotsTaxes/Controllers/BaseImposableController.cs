using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using ImpotsTaxes.Models;

namespace ImpotsTaxes.Controllers
{
    public class BaseImposableController : Controller
    {
        //
        // GET: /RecensementBaseImposable/

        public ActionResult Index()
        {
            return View();
        }

        //SELECTION NATURE BASE IMPOSABLE
        //===============================
        public ActionResult SelectNature_base_imposable()
        {
            return View();
        }

        //SELECTION PROVINCE
        //===============
        public ActionResult SelectProv()
        {
            return View();
        }
        //SELECTION VILLE
        //===============
        public ActionResult SelectVille()
        {
            return View();
        }

        //SELECTION Commune
        //==================
        public ActionResult SelectCommune()
        {
            return View();
        }

        //SELECTION QUARTIER
        //==================
        public ActionResult SelectQuartier()
        {
            return View();
        }

        //SELECTION AVENUE
        //=================
        public ActionResult SelectAvenue()
        {
            return View();
        }

        //SAISIE BASE IMPOSABLE 
        //=====================
        public ActionResult EnregistrerBase_Imposable()
        {
            return View();
        }

        //ENREGISTREMENT DE L'ACTIVITE 
        //============================
        //[HttpPost]
        public ActionResult EnregistrementBase_Imposable()
        {
            try
            {


                BaseImposable avt = new BaseImposable()
                {
                  
                    nature = Request.Form["nat"],
                    id = Request.Form["ass"],
                    prov = Request.Form["prov"],
                    town_dist = Request.Form["vil"],
                    commune = Request.Form["com"],
                    quarter_sect = Request.Form["quar"],
                    avenue_loc = Request.Form["av"],
                    inspector_id = Session["entity"] as string,
                    number = Request.Form["num"],
                    sizeAct = Convert.ToInt32(Request.Form["mes"]),
                    unity = Request.Form["unite"],
                    signboard = Request.Form["enseign"],
                    id_user =Session["utilisateur"] as string,
                    datecensus = Convert.ToDateTime(Request.Form["dater"]),
                };
                avt.EnregistrerActivite(avt);
                ViewBag.Message = "Enregistrement reussi";
                Response.Redirect("/TaxAssessment/SelectionArticle?action=NouvelleBase&feuil=" + Request.Form["feuil"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);

                //ViewBag.Message = avt.EnregistrerActivite(avt);
            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
                //Response.Redirect("/BaseImposable/EnregistrerBase_Imposable?action=" + Request.Form[""] + "&feuil=" + Request.Form["ass"] + "&ass=" + Request.Form["ass"] + "&nat=" + Request.Form["nat"] + "&prov=" + Request.Form["prov"] + "&vil=" + Request.Form["vil"] + "&com=" + Request.Form["com"] + "&quar=" + Request.Form["quar"] + "&av=" + Request.Form["av"] + "&num=" + Request.Form["num"] + "&note=" + Request.Params["note"]);
            }
            return View(); 
        }

        public ActionResult EnregistrerImpositionFeuille()
        {
            try
            {
                BaseImposable bi = new BaseImposable()
                {
                    nature = Request.Form["nature"],
                    id = Request.Form["id"],
                    prov = Request.Form["province"],
                    town_dist = Request.Form["ville"],
                    commune = Request.Form["commune"],
                    quarter_sect = Request.Form["quartier"],
                    avenue_loc = Request.Form["avenue"],
                    number = Request.Form["number"],
                    tax_id = Request.Form["article"],
                    id_feuille = Convert.ToInt32(Request.Form["numfeuille"]),
                    Montant = Convert.ToInt32(Request.Form["montant"]),
                    Monnaie = Request.Form["monnaie"],
                    Observation = Request.Form["obs"]
                };
                bi.EnregistrementImpositionFeuille(bi);
                Response.Redirect("/TaxAssessment/AffichageBaseImp?action=&feuil=&ass=&nat=&prov=&vil=&com=&quar=&av=&num=&note=&art=");

            }
            catch(Exception ex){
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
            }
            return View();
        }
    }
}
