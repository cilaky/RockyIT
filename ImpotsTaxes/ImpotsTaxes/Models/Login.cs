using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SQLServerConnection;

namespace ImpotsTaxes.Models
{
    public class Login
    {
        public int nbre { set; get; }
        public string id { get; set; }
        public string Nom { get; set; }
        public string MotDePasse { get; set; }
        public string role { get; set; }

        public int Connecter(string nom,string pswd)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            return Convert.ToInt32(con.Show_Data("SELECT COUNT(*) AS connecter FROM tUser WHERE Nom='" + nom + "' AND MotDePasse='" + pswd + "'", "connecter"));
        }

        //select the group of the user
        public string Connect(string id, string pswd)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            return con.Show_Data("select id,pswd,group_name from user_login WHERE id='" + id + "' AND pswd='" + pswd + "'", "group_name");
        }

        //SAVE LOGIN
        //==========
        public void Save(Login login)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO user_login " +
                                "(" +
                                "id," +
                                "pswd," +
                                "group_name" +                                
                                ") " +
                                "VALUES(" +
                                "'" + login.id + "'," +
                                "'" + login.MotDePasse + "'," +
                                "'" + login.role + "'" +                                
                                ")"
                                );
        }

        //CHECK PSWD
        //==========
        public string CheckPswd(string id)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            return con.Show_Data("select COUNT(*) as nbre from user_login where id='"+ id +"' and pswd like '%rgd%'","nbre");
        }

        //USER ENTITY
        //===========
        public string UserEntity(string user)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            return con.Show_Data("select " +
                                    "case when initials is null then '-' else " +
                                    "initials " +
                                    "end " +
                                    "as initials " + 
                                    "from worker " + 
                                    "inner join " +
                                    "fiscal_entity on worker.entity_id=fiscal_entity.entity_id " + 
                                    "where worker.id='" + user + "'",
                                    "initials");
        }

        //USER ENTITY
        //===========
        public string UserEntityID(string user)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("~\\bin\\connexion.xml"));
            return con.Show_Data("select " +
                                "entity_id " +
                                "from worker " +
                                "where worker.id='" + user + "'",
                                "entity_id");
        }
    }
}