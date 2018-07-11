using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ImpotsTaxes.Models;
using SQLServerConnection;

namespace ImpotsTaxes.Controllers
{
    public class DeclarationController : Controller
    {
        //
        // GET: /Declaration/

        public ActionResult Index()
        {
            return View();
        }

        // Etablissement de la déclaration
        //================================
        public ActionResult ElaborDeclaration()
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            ViewBag.id = con.Show_Data("declare @str varchar(50); "+
                                       "set @str=(SELECT NewId()); "+
                                       "select idDeclaration from (select SUBSTRING(@str,10,9) as idDeclaration) t "+
                                       "where idDeclaration not in(select id_decl from Declaration)", "idDeclaration");
            return View();
        }

        // Enregistrer déclaration
        //========================
        public ActionResult EnregistrerDeclaration()
        {
            try
            {
                Declaration dcl = new Declaration()
                {
                    id_decl = Request.Form["numdeclaration"],
                    decl_dat = Convert.ToDateTime(Request.Form["date"]),
                    exerc_fisc = Request.Form["exerciceFisc"]
                };
                dcl.EnregisterDeclaration(dcl);
                ViewBag.Message = "Enregistrement réussi avec succès";
            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
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

        //Enregistrer personne
        //====================
        public ActionResult EnregistrerPersonne()
        {

            return View();
        }

        //affichage des Proprietes
        //========================
        public ActionResult AffichagePropriete()
        {
            return View();
        }

        //Saisie de la Propriété ou bien imposable à ajouter sur la déclaration
        //=====================================================================
        public ActionResult EnregistrerProprieteDec()
        {
            return View();
        }

        //Enregistrer la Propriete ou bien imposable sur la déclaration
        //============================================================
        public ActionResult EnregistrerProprieteDeclare()
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

        public ActionResult SelectNature()
        {
            return View();
        }

        /*Enregistrement de bien ou Base Imposable
        ==========================================*/
        public ActionResult SaisirElementsBaseImp()
        {
            return View();
        }

        /*Enregistrer de bien ou Base Imposable
        =======================================*/
        public ActionResult EnregistrerBaseImp(string prop)
        {
            return View();
        }

        /*Enregistrer de la personne morale
        ===================================*/  
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

        public ActionResult AfficherDeclaration()
        {
            return View();
        }

    }
}
