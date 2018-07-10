using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using SQLServerConnection;

namespace ImpotsTaxes.Models
{
    public class Person
    {
        public int nbre { set; get; }
        public string Id_person { get; set; }
        public string name_company { get; set; }
        public string initials { get; set; }
        public string tax_num_dgi { get; set; }
        public string numid_nat { get; set; }
        public string name { get; set; }
        public string last_name {get;set;}
        public string nick_name {get;set;}
        public string p_o_box { get; set; }
        public string email { get; set; }
        public string province { get; set; }
        public string town_dist { get; set; }
        public string commune { get; set; }
        public string quarter { get; set; }
        public string avenue { get; set; }
        public string number { get; set; }
        public string telephone { get; set; }
        public string entite { get; set; }
        public int rank { get; set; }
        public string employee_function { get; set; }
        public string employee_grade { get; set; }
        public string employee_grade_id { get; set; }

        //Accessors for Modification
        //======================================
        public string Id_person_mod { get; set; }
        public string name_company_mod { get; set; }
        public string initials_mod { get; set; }
        public string tax_num_dgi_mod { get; set; }
        public string numid_nat_mod { get; set; }
        public string name_mod { get; set; }
        public string last_name_mod { get; set; }
        public string nick_name_mod { get; set; }
        public string p_o_box_mod { get; set; }
        public string email_mod { get; set; }
        public string province_mod { get; set; }
        public string town_dist_mod { get; set; }
        public string commune_mod { get; set; }
        public string quarter_mod { get; set; }
        public string avenue_mod { get; set; }
        public string number_mod { get; set; }
        public string telephone_mod { get; set; }
      

        //save in the differentes tables
        //==================================

        public void save_adresse()
        {
            //save in Address
            //==============================
            DBConnection conadd = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            
        }
       //save in Person
      //==============================
        public void Save_physical_person()
        {
            DBConnection conn = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            /*conn.Execute_Query("INSERT into addres Values('" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "'," + rank + ")");
            conn.Execute_Query("INSERT INTO person  VALUES('" + Id_person + "','" + email + "','" + p_o_box + "','" + province + "','" + town_dist + "','" + commune  + "','" + quarter + "','" + avenue + "','" + number + "')");
            conn.Execute_Query("INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "')");
            conn.Execute_Query("INSERT INTO physical_person  VALUES('" + Id_person + "','" + name + "','" + last_name + "','" + nick_name + "')");*/
            //conn.Execute_Query("EXEC savePhysicalPerson");


            //conn.Execute_Query("Begin TRANSACTION trans BEGIN TRY if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='" + province + " " + town_dist + " " + commune + " " + quarter + " " + avenue + " " + number + "') is null) BEGIN INSERT into addres Values('" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "'," + rank + ") END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END INSERT INTO person  VALUES('" + Id_person + "','" + email + "','" + p_o_box + "','" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "'); INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "'); INSERT INTO physical_person  VALUES('" + Id_person + "','" + name + "','" + last_name + "','" + nick_name + "'); IF @@TRANCOUNT>0 BEGIN COMMIT TRANSACTION trans END END TRY BEGIN CATCH declare @msg varchar(250) set @msg=ERROR_MESSAGE()RAISERROR(@msg, 16, 1) IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END END CATCH");

            conn.Execute_Query("Begin TRANSACTION trans BEGIN TRY if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='" + province.Replace("'", "''") + " " + town_dist.Replace("'", "''") + " " + commune.Replace("'", "''") + " " + quarter.Replace("'", "''") + " " + avenue.Replace("'", "''") + " " + number + "') is null) BEGIN INSERT into addres Values('" + province.Replace("'", "''") + "','" + town_dist.Replace("'", "''") + "','" + commune.Replace("'", "''") + "','" + quarter.Replace("'", "''") + "','" + avenue.Replace("'", "''") + "','" + number + "'," + rank + ") END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END INSERT INTO person  VALUES('" + Id_person + "','" + email.Replace("'", "''") + "','" + p_o_box.Replace("'", "''") + "','" + province.Replace("'", "''") + "','" + town_dist.Replace("'", "''") + "','" + commune.Replace("'", "''") + "','" + quarter.Replace("'", "''") + "','" + avenue.Replace("'", "''") + "','" + number.Replace("'", "''") + "'); INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "'); INSERT INTO physical_person  VALUES('" + Id_person + "','" + name.Replace("'", "''") + "','" + last_name.Replace("'", "''") + "','" + nick_name.Replace("'", "''") + "'); IF @@TRANCOUNT>0 BEGIN COMMIT TRANSACTION trans END END TRY BEGIN CATCH declare @msg varchar(250) set @msg=ERROR_MESSAGE()RAISERROR(@msg, 16, 1) IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END END CATCH");
            
            //conn.RowNumber = 0;
            //return conn.Read_Table("Begin TRANSACTION trans BEGIN TRY if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='Nord-Kivu Goma Goma Les Volcans Grevilleas 30') is null) BEGIN INSERT into addres Values('Nord-Kivu','Goma','Goma','Les Volcans','Grevilleas','30',1) END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END INSERT INTO person  VALUES('26','kambale@gmail.com','-','Nord-Kivu','Goma','Goma','Les Volcans','Grevilleas','30'); INSERT INTO telephone  VALUES('26','+24399085676'); INSERT INTO physical_person  VALUES('26','kambale','kyamuva','jerome'); IF @@TRANCOUNT>0 BEGIN COMMIT TRANSACTION trans END SELECT 'Enregistrement effectué avec succès' AS Response END TRY BEGIN CATCH SELECT ERROR_MESSAGE() AS Response IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END END CATCH", "", "Response");
             
        }

        public void Save_physical_person(Person person)
        {
            DBConnection conn = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            conn.Execute_Query("Begin TRANSACTION trans "+
                                "BEGIN TRY "+
                                "if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='" + province.Replace("'", "''") + " " + town_dist.Replace("'", "''") + " " + commune.Replace("'", "''") + " " + quarter.Replace("'", "''") + " " + avenue.Replace("'", "''") + " " + number + "') is null) "+
                                "BEGIN "+
                                "INSERT into addres Values("+
                                "'" + person.province.Replace("'", "''") + "'," +
                                "'" + person.town_dist.Replace("'", "''") + "'," +
                                "'" + person.commune.Replace("'", "''") + "'," +
                                "'" + person.quarter.Replace("'", "''") + "'," +
                                "'" + person.avenue.Replace("'", "''") + "'," +
                                "'" + person.number + "'," +
                                person.rank + 
                                ") "+
                                "END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END "+
                                "INSERT INTO person  VALUES("+
                                "'" + person.Id_person + "'," +
                                "'" + person.email.Replace("'", "''") + "'," +
                                "'" + person.p_o_box.Replace("'", "''") + "'," +
                                "'" + person.province.Replace("'", "''") + "'," +
                                "'" + person.town_dist.Replace("'", "''") + "'," +
                                "'" + person.commune.Replace("'", "''") + "'," +
                                "'" + person.quarter.Replace("'", "''") + "'," +
                                "'" + person.avenue.Replace("'", "''") + "'," +
                                "'" + person.number.Replace("'", "''") + "'" +
                                "); "+
                                "INSERT INTO telephone  VALUES("+
                                "'" + person.Id_person + "'," +
                                "'" + person.telephone + "'); " +
                                "INSERT INTO physical_person  VALUES("+
                                "'" + person.Id_person + "'," +
                                "'" + person.name.Replace("'", "''") + "'," +
                                "'" + person.last_name.Replace("'", "''") + "'," +
                                "'" + person.nick_name.Replace("'", "''") + "'" +
                                "); "+
                                "IF @@TRANCOUNT>0 "+
                                "BEGIN COMMIT TRANSACTION trans END "+
                                "END TRY BEGIN CATCH declare @msg varchar(250) set @msg=ERROR_MESSAGE()RAISERROR(@msg, 16, 1) "+
                                "IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END "+
                                "END CATCH");
                        
        }
         //save in company
         //==============================
        public void save_company(Person person)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            /*con.Execute_Query("INSERT into addres Values('" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "'," + rank + ")");
            con.Execute_Query("INSERT INTO person  VALUES('" + Id_person + "','" + email + "','" + p_o_box + "','" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "')");
            con.Execute_Query("INSERT INTO company  VALUES('" + Id_person + "','" + name_company + "','" + initials + "','" + tax_num_dgi + "','" + numid_nat + "')");
            con.Execute_Query("INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "')");*/


            con.Execute_Query("Begin TRANSACTION trans "+
                                "BEGIN TRY " +
                                "if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='" + province.Replace("'", "''") + " " + town_dist.Replace("'", "''") + " " + commune.Replace("'", "''") + " " + quarter.Replace("'", "''") + " " + avenue.Replace("'", "''") + " " + number + "') is null) " +
                                "BEGIN " +
                                "INSERT into addres Values(" +
                                "'" + person.province.Replace("'", "''") + "'," +
                                "'" + person.town_dist.Replace("'", "''") + "'," +
                                "'" + person.commune.Replace("'", "''") + "'," +
                                "'" + person.quarter.Replace("'", "''") + "'," +
                                "'" + person.avenue.Replace("'", "''") + "'," +
                                "'" + person.number + "' "+
                                ") " +
                                "END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END " +
                                "INSERT INTO person  VALUES(" +
                                "'" + person.Id_person + "'," +
                                "'" + person.email.Replace("'", "''") + "'," +
                                "'" + person.p_o_box.Replace("'", "''") + "'," +
                                "'" + person.province.Replace("'", "''") + "'," +
                                "'" + person.town_dist.Replace("'", "''") + "'," +
                                "'" + person.commune.Replace("'", "''") + "'," +
                                "'" + person.quarter.Replace("'", "''") + "'," +
                                "'" + person.avenue.Replace("'", "''") + "'," +
                                "'" + person.number.Replace("'", "''") + "'" +
                                "); " +
                                "INSERT INTO telephone  VALUES(" +
                                "'" + person.Id_person + "'," +
                                "'" + person.telephone + "'); " +
                                "INSERT INTO company  VALUES("+
                                "'" + person.Id_person + "'," +
                                "'" + person.name_company.Replace("'", "''") + "'," +
                                "'" + person.initials.Replace("'", "''") + "'," +
                                "'" + person.numid_nat + "'," +
                                "'" + person.tax_num_dgi + "'" +
                                "); "+
                                "IF @@TRANCOUNT>0 " +
                                "BEGIN COMMIT TRANSACTION trans END " +
                                "END TRY BEGIN CATCH declare @msg varchar(250) set @msg=ERROR_MESSAGE()RAISERROR(@msg, 16, 1) " +
                                "IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END " +
                                "END CATCH");
        }

        public void save_company()
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));            
            con.Execute_Query("Begin TRANSACTION trans BEGIN TRY if ((select prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number from addres where prov + ' ' + town_dist + ' ' + commune + ' ' + quarter_sect + ' ' + avenue_loc + ' ' + number='" + province.Replace("'", "''") + " " + town_dist.Replace("'", "''") + " " + commune.Replace("'", "''") + " " + quarter.Replace("'", "''") + " " + avenue.Replace("'", "''") + " " + number + "') is null) BEGIN INSERT into addres Values('" + province.Replace("'", "''") + "','" + town_dist.Replace("'", "''") + "','" + commune.Replace("'", "''") + "','" + quarter.Replace("'", "''") + "','" + avenue.Replace("'", "''") + "','" + number + "'," + rank + ") END IF @@TRANCOUNT>0 BEGIN SAVE TRANSACTION trans; END INSERT INTO person  VALUES('" + Id_person + "','" + email.Replace("'", "''") + "','" + p_o_box.Replace("'", "''") + "','" + province.Replace("'", "''") + "','" + town_dist.Replace("'", "''") + "','" + commune.Replace("'", "''") + "','" + quarter.Replace("'", "''") + "','" + avenue.Replace("'", "''") + "','" + number.Replace("'", "''") + "'); INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "'); INSERT INTO company  VALUES('" + Id_person + "','" + name_company.Replace("'", "''") + "','" + initials.Replace("'", "''") + "','" + numid_nat + "','" + tax_num_dgi + "'); IF @@TRANCOUNT>0 BEGIN COMMIT TRANSACTION trans END END TRY BEGIN CATCH declare @msg varchar(250) set @msg=ERROR_MESSAGE()RAISERROR(@msg, 16, 1) IF @@TRANCOUNT>0 BEGIN ROLLBACK TRANSACTION trans END END CATCH");
        }

        //modify in Person
        //==============================
        public void Modify_person()
        {
            DBConnection conn = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            conn.Execute_Query("INSERT INTO person  VALUES('" + Id_person + "','" + email + "','" + p_o_box + "','" + province + "','" + town_dist + "','" + commune + "','" + quarter + "','" + avenue + "','" + number + "')");

        }

        //modify in company
        //==============================
        public void Modify_company()
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO company  VALUES('" + Id_person + "','" + name_company + "','" + initials + "','" + tax_num_dgi + "','" + numid_nat + "')");
        }
        //modify in telephone
        //==============================
        public void Modify_telephone()
        {
            DBConnection contel = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            contel.Execute_Query("INSERT INTO telephone  VALUES('" + Id_person + "','" + telephone + "')");
        }

        //modify in Person_physical
        //==============================
        public void Modify_Person_physical()
        {
            DBConnection connPP = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            connPP.Execute_Query("INSERT INTO physical_person  VALUES('" + Id_person + "','" + name + "','" + last_name + "','" + nick_name + "')");
        }

        public string Modify_physical_person(Person person)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            DataTable dtt = new DataTable();
            dtt = con.Data_Source("BEGIN TRANSACTION; " +
                                "BEGIN TRY " +
                                    "/*Insertion Addresse " +
                                    "====================*/ " +
                                    "if (select count(*) from addres " +
                                    "where prov='" + person.province + "' " +
                                    "and town_dist='" + person.town_dist + "' " +
                                    "and commune='" + person.commune + "' " +
                                    "and quarter_sect='" + person.quarter + "' " +
                                    "and avenue_loc='" + person.avenue + "' " +
                                    "and number='" + person.number + "')=0 " +
                                    "BEGIN " +
                                        "INSERT into addres Values( " +
                                        "'" + person.province + "', " +
                                        "'" + person.town_dist + "', " +
                                        "'" + person.commune + "', " +
                                        "'" + person.quarter + "', " +
                                        "'" + person.avenue + "', " +
                                        "'" + person.number + "', " +
                                        person.rank + "); " +
                                    "END " +
                                    "/*Modification de personne physique " +
                                    "===================================*/ " +
                                    "UPDATE physical_person SET " +
                                    "name='" + person.name + "', " +
                                    "last_name='" + person.last_name + "', " +
                                    "nick_name='" + person.nick_name + "' " +
                                    "WHERE id='" + person.Id_person + "'; " +
                                    "/*Modification de personne " +
                                    "==========================*/ " +
                                    "UPDATE person SET " +
                                    "email='" + person.email + "', " +
                                    "p_o_box='" + person.p_o_box + "', " +
                                    "prov='" + person.province + "', " +
                                    "town_dist='" + person.town_dist + "', " +
                                    "commune='" + person.commune + "', " +
                                    "quarter_sect='" + person.quarter + "', " +
                                    "avenue_loc='" + person.avenue + "', " +
                                    "number='" + person.number + "' " +
                                    "WHERE id='" + person.Id_person + "'; " +
                                    "/*Insertion du numero de telephone " +
                                    "==================================*/ " +
                                    "IF (SELECT COUNT(*) FROM telephone WHERE id='" + person.Id_person + "' and tel_number='" + person.telephone + "')=0 " +
                                    "BEGIN " +
                                        "INSERT INTO telephone VALUES('" + person.Id_person + "','" + person.telephone + "'); " +
                                    "END " +
                                "END TRY " +
                                "BEGIN CATCH " +
                                        "SELECT ERROR_MESSAGE() AS msg; " +
                                    "IF @@TRANCOUNT > 0 " +
                                        "ROLLBACK TRANSACTION; " +
                                "END CATCH; " +
                                "IF @@TRANCOUNT > 0 " +
                                    "BEGIN " +
                                    "SELECT 'Modification effectuée avec succès' AS msg; " +
                                    "COMMIT TRANSACTION; " +
                                    "END ","person");
            return dtt.Rows[0]["msg"].ToString();
            
        }
       
        //New ID Physical person
        //======================
        public string NewIDPP()
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            return con.Show_Data("select idPers from (select '4111' + CONVERT(varchar(7),CONVERT(int,RAND()*1000000)) as idPers) as pers where idPers not in (select id from person)", "idPers");
        }

        //New ID Physical person
        //======================
        public string NewIDCompany()
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            return con.Show_Data("select idPers from (select '4112' + CONVERT(varchar(7),CONVERT(int,RAND()*1000000)) as idPers) as pers where idPers not in (select id from person)", "idPers");
        }

        //SEARCH
        //======
        public Person SearchById(string id)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            DataTable dtt = new DataTable();
            dtt = con.Data_Source("select person.id, "+ 
                                    "name + ' ' + last_name + ' ' + nick_name as name_company_name, "+
                                    "prov, "+
                                    "town_dist, "+
                                    "commune, "+
                                    "quarter_sect, "+
                                    "avenue_loc, "+
                                    "number, "+
                                    "email, "+
                                    "p_o_box, "+
                                    "(select top 1 tel_number from telephone where id=person.id) as telephone "+ 
                                    "from person "+ 
                                    "inner join physical_person on person.id=physical_person.id "+  
                                    "where person.id='" + id + "' "+ 
                                    "union "+ 
                                    "select person.id, "+
                                    "company_name as name_company_name, "+
                                    "prov, "+
                                    "town_dist, "+
                                    "commune, "+
                                    "quarter_sect, "+
                                    "avenue_loc, "+
                                    "number, "+
                                    "email, "+
                                    "p_o_box, "+
                                    "(select top 1 tel_number from telephone where id=person.id) as telephone " + 
                                    "from person inner join company on person.id=company.id where person.id='" + id + "'",
                                    "person");
            
            Person personne = new Person() { 
                Id_person = dtt.Rows[0]["id"].ToString(),
                name_company = dtt.Rows[0]["name_company_name"].ToString(),
                province = dtt.Rows[0]["prov"].ToString(),
                town_dist = dtt.Rows[0]["town_dist"].ToString(),
                commune = dtt.Rows[0]["commune"].ToString(),
                quarter = dtt.Rows[0]["quarter_sect"].ToString(),
                avenue = dtt.Rows[0]["avenue_loc"].ToString(),
                number = dtt.Rows[0]["number"].ToString(),
                email = dtt.Rows[0]["email"].ToString(),
                telephone = dtt.Rows[0]["telephone"].ToString(),
                p_o_box = dtt.Rows[0]["p_o_box"].ToString()
            };
            return personne;

        }

        //SEARCH WORKER BY ID
        //===================        
        public Person SearchEmployeeById(string id)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            DataTable dtt = con.Data_Source("select worker.id, " +
                                            "physical_person.name + ' ' + physical_person.last_name  + ' ' + physical_person.nick_name as nom, " +
                                            "person.email, " +
                                            "(select top 1 tel_number from telephone where id=worker.id) as telephone, " +
                                            "fiscal_entity.entity_name " +
                                            "from person " +
                                            "inner join physical_person on person.id=physical_person.id " +
                                            "inner join worker on physical_person.id=worker.id " +
                                            "inner join fiscal_entity on worker.entity_id=fiscal_entity.entity_id "+
                                            "WHERE worker.id='" + id + "' ",
                                            "fiscal_entity");

            Person personne = new Person()
            {
                Id_person = dtt.Rows[0]["id"].ToString(),
                name = dtt.Rows[0]["nom"].ToString(),
                /*province = dtt.Rows[0]["prov"].ToString(),
                town_dist = dtt.Rows[0]["town_dist"].ToString(),
                commune = dtt.Rows[0]["commune"].ToString(),
                quarter = dtt.Rows[0]["quarter_sect"].ToString(),
                avenue = dtt.Rows[0]["avenue_loc"].ToString(),
                number = dtt.Rows[0]["number"].ToString(),*/
                email = dtt.Rows[0]["email"].ToString(),
                telephone = dtt.Rows[0]["telephone"].ToString()
            };
            return personne;

        }

        //SAVE EMPLOYEE
        public void Save_Employee(Person employee)
        {
            DBConnection con = new DBConnection(System.Web.HttpContext.Current.Server.MapPath("bin\\connexion.xml"));
            con.Execute_Query("INSERT INTO worker "+
                                "("+
                                "id,"+
                                "entity_id,"+
                                "function_desc,"+
                                "grade_id"+
                                ") "+
                                "VALUES("+
                                "'"+ employee.Id_person + "',"+
                                "'"+ employee.entite + "',"+
                                "'" + employee.employee_function + "',"+
                                "'" + employee.employee_grade_id + "'"+
                                ")"
                                );
        }
    }
}