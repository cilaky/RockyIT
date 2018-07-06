using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace ImpotsTaxes.Models
{
    public class Declaration
    {
        public int nbre { set; get; }
       
        //Tax
        public string tax_id { get; set; }
        public string tax_name { get; set; }
        public int Nbre { get; set; }
        public string generating_fact { get; set; }
        public string periodicity { get; set; }
        public string entity_name { get; set; }

        
         //DECLARATION
        //============
        public string id_decl { get; set; }
        public DateTime decl_dat { get; set; }
        public string exerc_fisc { get; set; }

        //DECLARATION_PROPRIETE
        //=====================
        
        //public string id_decl { get; set; }
        public string nature { get; set; }
        public string id { get; set; }
        public string prov { get; set; }
        public string town_dist { get; set; }
        public string commune { get; set; }
        public string quarter_sect { get; set; }
        public string avenue_loc { get; set; }
        public string number { get; set; }
        public string montant { get; set; }
        public string monnaie { get; set; }

        //Methode Enregistrement de la Declaration
        //========================================
        public void EnregisterDeclaration(Declaration decl)
        {
            DBConnection cnx = new DBConnection();
            cnx.Execute_Query("Exec EnregisterDeclaration '" + decl.id_decl + "','" + decl.decl_dat + "', " +
                              "'" + decl.exerc_fisc + "'");
        }

        //Methode Enregistrement de la Declaration_Propriete
        //==================================================
        public void EnregDeclar_Propriete(Declaration declPro)
        {
            DBConnection cnx = new DBConnection();
            cnx.Execute_Query("Exec EnregDeclar_Propriete '" + declPro.nature + "','" + declPro.id + "','" + declPro.prov + "' " +
                              "'" + declPro.town_dist + "','" + declPro.commune + "','" + declPro.quarter_sect + "','" + declPro.avenue_loc + "', " +
                              "'" + declPro.number + "','" + declPro.montant + "','" + declPro.monnaie + "'");
        }

       















        public List<Declaration> lstBaseImposable(string ass)
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("EXEC BaseImposable @id='" + ass + "'", "BaseImposable");

            List<Declaration> lstBImpo = new List<Declaration>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstBImpo.Add(new Declaration()
                {
                    id_decl = dtt.Rows[i]["id_decl"].ToString(),
                    decl_dat=Convert.ToDateTime (dtt.Rows[i]["decl_dat"].ToString()),
                    exerc_fisc= dtt.Rows[i]["exerc_fisc"].ToString(),
                    nature = dtt.Rows[i]["nature"].ToString(),
                    id= dtt.Rows[i]["id"].ToString(),
                    prov= dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter_sect = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString(),
                    montant= dtt.Rows[i]["montant"].ToString(),
                });
            }

            return lstBImpo;
        }

        //LISTE DES ARTICLES 
        //==================

        public List<Declaration> lstArticleBI()
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("EXEC ArticleBaseImp ", "EXEC ArticleBaseImp");

            List<Declaration> lstArtBI = new List<Declaration>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstArtBI.Add(new Declaration()
                {
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    generating_fact = dtt.Rows[i]["generating_fact"].ToString(),
                    periodicity = dtt.Rows[i]["periodicity"].ToString(),

                });
            }

            return lstArtBI;
        }
    }

}
