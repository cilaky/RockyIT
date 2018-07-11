using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using SQLServerConnection;

namespace ImpotsTaxes.Models
{
    public class BaseImposable
    {
        public int nbr { get; set; }
        public string nature { get; set; }
        public string id { get; set; }
        //-------  From person  -------
        public string company_name { get; set; }
        public string sigle { get; set; }
        public string numid_nat { get; set; }
        public string email { get; set; }
        public string p_o_box { get; set; }
        public string nom { get; set; }
        public string postNom { get; set; }
        public string prenom { get; set; }
        public string initials { get; set; }
        public string tax_num_dgi { get; set; }
        public string tel_number { get; set; }

        //------- Fin  ------------------
        public string prov { get; set; }
        public string town_dist { get; set; }
        public string commune { get; set; }
        public string quarter_sect { get; set; }
        public string avenue_loc { get; set; }
        public string number { get; set; }
        public string inspector_id { get; set; }
        public string seller_id { get; set; }
        public double sizeAct { get; set; }
        public string unity { get; set; }
        public string signboard { get; set; }
        public string id_user { get; set; }
        public DateTime saving_date { get; set; }
        public DateTime datecensus { get; set; } 
        public string tax_id { get; set; }
        public string tax_name { get; set; }
        public string generating_fact { get; set; }
        public string periodicity { get; set; }
        public double rate { get; set; }

        //Relence
        public int year { get; set; }
	    public int period { get; set; }
	    public string letter_number { get; set; }
        public  float amount { get; set; }
        public string currency { get; set; }

        public DateTime letter_date { get; set; }
        public string letter_type { get; set; }

        //Feuille de calcul
        public int id_feuille { get; set; }
        public DateTime datef { get; set; }
        public Double Montant { get; set; }
        public string   Monnaie { get; set; }
        public string Observation { get; set; }

        //Enregistrement de la nature base_imposable
        //==========================================
        public void EnregistrerNatureActivite(BaseImposable act)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO nature_base_imposable (nature,id_user,saving_date) values ('" + act.nature.Replace("'", "''") + "','" + act.id_user + "',getdate())");
        }

        //Enregistrement de la base imposable
        //===================================
        public void EnregistrerActivite(BaseImposable act)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query(" SET DATEFORMAT DMY Exec EnregistrerBaseImposable  @nat='" + act.nature.Replace("'", "''") + "',@ass='" + act.id + "',@prov='" + act.prov.Replace("'", "''") + "',@vill='" + act.town_dist.Replace("'", "''") + "',@com='" + act.commune.Replace("'", "''") + "',@quart='" + act.quarter_sect.Replace("'", "''") + "',@aven='" + act.avenue_loc.Replace("'", "''") + "',@idinsp='" + act.inspector_id + "',@num='" + act.number + "',@mes=" + act.sizeAct + ",@unit='" + act.unity + "',@enseig='" + act.signboard + "',@datesav='"+ DateTime.Now +"',@iduser='" + act.id_user + "',@datrec='" + act.datecensus + "'"); 
        }

        //Enregistrement de la taxe
        //=========================
        public void EnregistrerTaxe(BaseImposable tx)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO tax ( " +
                "(" +
                "tax_id, " +
                "tax_name, " +
                "generating_fact," +
                "periodicity" +
                ")" +
                "VALUES(" +
                "'" + tx.tax_id + "'," +
                "'" + tx.tax_name.Replace("'", "''") + "'," +
                "'" + tx.generating_fact.Replace("'", "''") + "'," +
                "'" + tx.periodicity + "'" +
                ")"
            );
        }

        //Enregistrement de la taxe due
        //=============================
        public void Enregistrer_Taxe_due(BaseImposable tx)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO taxe_due " +
                "(" +
                "nature, " +
                "id, " +
                "prov," +
                "town_dist," +
                "commune," +
                "quarter_sect," +
                "avenue_loc," +
                "number," +
                "tax_id," +
                "rate," +
                "id_user," +
                "saving_date" +
                ")" +
                "VALUES(" +
                "'" + tx.nature + "', " +
                "'" + tx.id + "', " +
                "'" + tx.prov.Replace("'", "''") + "', " +
                "'" + tx.town_dist.Replace("'", "''") + "', " +
                "'" + tx.commune.Replace("'", "''") + "', " +
                "'" + tx.quarter_sect.Replace("'", "''") + "', " +
                "'" + tx.avenue_loc.Replace("'", "''") + "', " +
                "'" + tx.number + "', " +
                "'" + tx.tax_id + "', " +
                "" + tx.rate + "," +
                "'" + tx.id_user + "', " +
                "getDate() " +
                ")"
            );
        }

        /************************************
           Enregistrement Feuille de Calcul
        =================================*/
        public void EnregistrerFeuille_Calcul(BaseImposable feuille)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query("SET DATEFORMAT DMY INSERT INTO Feuille_Calcul " +
                "(" +
                "id_feuille, " +
                "datef, " +
                "userID " +
                ")" +
                "VALUES(" +
                "'" + feuille.id_feuille + "', " +
                "'" + feuille.datef + "', " +
                "'" + feuille.id_user + "' " +
                ")"
            );
        }

        //LISTE DES NATURES D'ACTIVITES
        //-----================--------
        public List<BaseImposable> Nature_Base_Imposable()
        {
            DBConnection cnx = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            DataTable dtt = cnx.Data_Source("select nature from nature_base_imposable", "nature_base_imposable");
            List<BaseImposable> lstNatActivite = new List<BaseImposable>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstNatActivite.Add(new BaseImposable()
                {
                    nbr = i + 1,
                    nature = dtt.Rows[i]["nature"].ToString()
                });

            }
            return lstNatActivite;
        }

        //LISTE DES TAXES
        //---------------
        public List<BaseImposable> Taxes()
        {
            DBConnection cnx = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            DataTable dtt = cnx.Data_Source("select * from tax", "tax");
            List<BaseImposable> lstTaxe = new List<BaseImposable>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstTaxe.Add(new BaseImposable()
                {
                    nbr = i + 1,
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    generating_fact = dtt.Rows[i]["generating_fact"].ToString(),
                    periodicity = dtt.Rows[i]["periodicity"].ToString()

                });

            }
            return lstTaxe;
        }

        //ENREGISTREMENT IMPOSITION FEUILLE
        public void EnregistrementImpositionFeuille(BaseImposable bas)
        {
            DBConnection cnx = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            cnx.Execute_Query("Insert into Imposition_Feuille "+
                "(nature, "+
                "id, "+
                "prov, "+
                "town_dist, "+
                "commune, "+
                "quarter_sect, "+
                "avenue_loc, "+
                "number, "+
                "tax_id, "+
                "id_feuille, "+
                "Montant, "+
                "Monnaie, "+
                "Observation "+
                ") "+
                "values "+
                "('"+ bas.nature +"', "+
                "'"+ bas.id +"', "+
                "'"+ bas.prov +"', "+ 
                "'"+ bas.town_dist +"', "+
                "'" + bas.commune + "', " +
                "'" + bas.quarter_sect + "', " +
                "'" + bas.avenue_loc + "', " +
                "'" + bas.number + "', " +
                "'" + bas.tax_id + "', " +
                "'" + bas.id_feuille + "', " +
                "'" + bas.Montant + "', " +
                "'" + bas.Monnaie + "', " +
                "'" + bas.Observation + "' " +
                ")  "+ 
                "");
        }
    }
}