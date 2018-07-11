using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ImpotsTaxes.Controllers
{
    public class AcceuilController : Controller
    {
        //
        // GET: /Acceuil/

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
            
        }

        public ActionResult Index()
        {
            SessionVerification();
            return View();
        }

    }
}
