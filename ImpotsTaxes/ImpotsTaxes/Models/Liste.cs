using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using SQLServerConnection;

namespace ImpotsTaxes.Models
{
    public class Liste
    {
        public string tax_id { get; set; }
        public int Nbre { get; set; }
        public string generating_fact { get; set; }
        public string periodicity { get; set; }
        public string entity_name { get; set; }
        public string tax_name { get; set; }
        public Liste()
        {

        }
      
        /*
        //LISTE DES ENTITES
        //================
        public List<FiscalEntity> Entity()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("Select " +
                                            "entity_id, " +
                                            "initials, " +
                                            "entity_name, " +
                                            "prov, " +
                                            "town_dist, " +
                                            "commune, " +
                                            "quarter_sect, " +
                                            "avenue_loc, " +
                                            "number, " +
                                            "email, " +
                                            "telephone " + 
                                            "from fiscal_entity " +
                                            "ORDER BY entity_name",
                                            "fiscal_entity");
            List<FiscalEntity> lstEntity = new List<FiscalEntity>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstEntity.Add(new FiscalEntity()
                { 
                    nbre = i + 1,
                    entity_id = dtt.Rows[i]["entity_id"].ToString(),
                    initials = dtt.Rows[i]["initials"].ToString(),
                    entity_name = dtt.Rows[i]["entity_name"].ToString(),
                    prov = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter_sect = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString(),
                    email = dtt.Rows[i]["email"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString()
                });
            }
            return lstEntity;
        }
        */

        //LISTE DES AGENTS
        //================
        public List<Person> Employee()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select worker.id, "+
                                            "physical_person.name + ' ' + physical_person.last_name  + ' ' + physical_person.nick_name as nom, "+
                                            "person.email, "+
                                            "(select top 1 tel_number from telephone where id=worker.id) as telephone, "+
                                            "fiscal_entity.entity_name "+ 
                                            "from person "+ 
                                            "inner join physical_person on person.id=physical_person.id "+
                                            "inner join worker on physical_person.id=worker.id " +
                                            "inner join fiscal_entity on worker.entity_id=fiscal_entity.entity_id",
                                            "fiscal_entity");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name = dtt.Rows[i]["nom"].ToString(),                    
                    email = dtt.Rows[i]["email"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString(),
                    entite = dtt.Rows[i]["entity_name"].ToString()
                });
            }
            return lst;
        }

        //LISTE DES PERSONNES RECHERCHES PAR NOM
        //======================================
        public List<Person> Persons(string name)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select " + 
                                            "person.id, "+             
                                            "name + ' ' + last_name + ' ' + nick_name as name_company_name, "+
                                            "'-' AS Sigle, "+
                                            "'-' AS numid_nat, "+
                                            "'-' as tax_num_dgi, "+
                                            "prov, "+
                                            "town_dist, "+
                                            "commune, "+
                                            "quarter_sect, "+
                                            "avenue_loc, "+
                                            "number, "+
                                            "email, "+
                                            "p_o_box, "+
                                            "(select top 1 tel_number from telephone where id=person.id) as telephone "+ 
                                            "from person inner join physical_person on person.id=physical_person.id  "+ 
                                            "where name + ' ' + last_name + ' ' + nick_name like '%" + name + "%' "+ 
                                            "union "+ 
                                            "select "+ 
                                            "person.id, "+
                                            "company_name as name_company_name, "+
                                            "company.initials AS Sigle, " +
                                            "company.numid_nat, " +
                                            "company.tax_num_dgi, " +
                                            "prov, "+
                                            "town_dist, "+
                                            "commune, "+
                                            "quarter_sect, "+
                                            "avenue_loc, "+
                                            "number, "+
                                            "email, "+
                                            "p_o_box, "+
                                            "(select top 1 tel_number from telephone where id=person.id) as telephone "+ 
                                            "from person inner join company on person.id=company.id where company_name like '%" + name + "%'", 
                                            "person");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name_company = dtt.Rows[i]["name_company_name"].ToString(),
                    name = dtt.Rows[i]["name_company_name"].ToString(),
                    initials = dtt.Rows[i]["Sigle"].ToString(),
                    numid_nat = dtt.Rows[i]["numid_nat"].ToString(),
                    tax_num_dgi = dtt.Rows[i]["tax_num_dgi"].ToString(),
                    province = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString(),
                    email = dtt.Rows[i]["email"].ToString(),
                    p_o_box = dtt.Rows[i]["p_o_box"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString()
                    
                });
            }
            return lst;
        }

        /*
        //LIST OF USER ROLES
        //==================        
        public List<Login> Roles()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select group_name from user_group order by group_name",
                                            "user_group");
            List<Login> lst = new List<Login>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Login()
                {
                    nbre = i + 1,
                    role = dtt.Rows[i]["group_name"].ToString()                    
                });
            }
            return lst;
        }
        */

        //LIST OF EMPLOYEE FUNCTIONS
        //==========================        
        public List<Person> Employee_Functions()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT function_desc FROM worker_function order by function_desc",
                                            "worker_function");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    employee_function = dtt.Rows[i]["function_desc"].ToString()
                });
            }
            return lst;
        }

        //LIST OF EMPLOYEE GRADES
        //==========================        
        public List<Person> Employee_Grades()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select grade_id,grade_desc from worker_grade order by grade_id",
                                            "worker_grade");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    employee_grade_id = dtt.Rows[i]["grade_id"].ToString(),
                    employee_grade = dtt.Rows[i]["grade_desc"].ToString()
                });
            }
            return lst;
        }

        /*
        //List of Assessment to be shown in the report
        public List<Assessment> ListAssessment(string query, string table)
        {
            List<Assessment> lstAssessment = new List<Assessment>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source(query, table);
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstAssessment.Add(new Assessment() 
                { 
                    validation_date = dtt.Rows[i]["validation_date"].ToString(), 
                    assessment_id = dtt.Rows[i]["assessment_id"].ToString(), 
                    tax_id = dtt.Rows[i]["tax_id"].ToString(), 
                    tax_name = dtt.Rows[i]["tax_name"].ToString(), 
                    taxpayer_name = dtt.Rows[i]["taxPayer"].ToString(), 
                    taxpayer_address = dtt.Rows[i]["AddresPerson"].ToString(), 
                    amount_validation_FC = Convert.ToDouble(dtt.Rows[i]["FC"].ToString()), 
                    amount_validation_USD = Convert.ToDouble(dtt.Rows[i]["USD"].ToString()) 
                });
            }
            return lstAssessment;
        }

        //LIST OF BANKS TO BE DISPLAYED IN SELECT TAGS
        //============================================
        public List<string> lstBank()
        {
            List<string> lst = new List<string>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT initials FROM  company where id in(select bank_id from bank)", "company");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(dtt.Rows[i]["initials"].ToString());
            }
            return lst;
        }

        //LIST OF BANKS SELECT tags
        //=========================
        public List<Person> Banks()
        {
            List<Person> lst = new List<Person>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT id,initials FROM  company where id in(select bank_id from bank)", "company");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    initials = dtt.Rows[i]["initials"].ToString()
                });
            }
            return lst;
        }

        //LISTE DES ASSUJETTIS
        //====================
        public List<Person> AssujettiNoteMig()
        {
            
            ConnectionDB con = new ConnectionDB(1);
            DataTable dtt = con.Data_Source("SELECT DISTINCT top 50   tAssujetti.NumImpot " +
                                            ",tAssujetti.Nom_raison " +
                                            ",tAssujetti.numid_nat " +
                                            ",tAssujetti.Sigle " +
                                            ",tAssujetti.telephone " +
                                            ",tAssujetti.Email " +
                                            ",tAssujetti.typepersonne " +
                                            ",tAssujetti.AdressePost " +
                                            ",tAssujetti.NumImpotDGI " +
                                            ",tAssujetti.Numero " +
                                            ",tAvenue.Avenue " +
                                            ",tQuartier.Quartier " +
                                            ",tCommune.Commune " +
                                            ",tVille.Ville " +
                                            ",tProvince.Province " +
                                            "FROM  tAssujetti " +
                                            "INNER JOIN tNotePercepteur ON tAssujetti.NumImpot=tNotePercepteur.NumImpot " +
                                            "INNER JOIN tAntenne ON tNotePercepteur.IdAntenne=tAntenne.IdAntenne " +
                                            "INNER JOIN tCentre ON tAntenne.IdCentre=tCentre.IdCentre " +
                                            "INNER JOIN tAvenue ON tAssujetti.IdAvenue = tAvenue.IdAvenue " +
                                            "INNER JOIN tQuartier ON tAvenue.IdQuartier = tQuartier.IdQuartier " +
                                            "INNER JOIN tCommune ON dbo.tQuartier.IdCommune = tCommune.IdCommune " +
                                            "INNER JOIN tVille ON dbo.tCommune.IdVille = tVille.IdVille " +
                                            "INNER JOIN dbo.tProvince ON dbo.tVille.IdProv = tProvince.IdProv " +
                                            "WHERE tNotePercepteur.IdNote NOT IN (select tNotePercepteur.IdNote from tNotePercepteur inner join tNoteMigree on tNotePercepteur.IdNote=tNoteMigree.IdNote COLLATE SQL_Latin1_General_CP1_CI_AS) " + 
                                            " ORDER BY Nom_raison ",
                                            "tAssujetti");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["NumImpot"].ToString(),
                    name_company = dtt.Rows[i]["Nom_raison"].ToString(),
                    initials = dtt.Rows[i]["Sigle"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString(),
                    email = dtt.Rows[i]["Email"].ToString(),
                    p_o_box = dtt.Rows[i]["AdressePost"].ToString(),
                    tax_num_dgi = dtt.Rows[i]["NumImpotDGI"].ToString(),
                    avenue = dtt.Rows[i]["Avenue"].ToString(),
                    number = dtt.Rows[i]["Numero"].ToString(),
                    quarter = dtt.Rows[i]["Quartier"].ToString(),
                    commune = dtt.Rows[i]["Commune"].ToString(),
                    town_dist = dtt.Rows[i]["Ville"].ToString()
                });
            }
            return lst;
        }

        //LISTE DES ASSUJETTIS SELON LE CRITERE
        //=====================================
        public List<Person> AssujettiNoteMig(string critere)
        {
            ConnectionDB con = new ConnectionDB(1);
            DataTable dtt = con.Data_Source("SELECT DISTINCT  tAssujetti.NumImpot " +
                                            ",tAssujetti.Nom_raison " +
                                            ",tAssujetti.numid_nat " +
                                            ",tAssujetti.Sigle " +
                                            ",tAssujetti.telephone " +
                                            ",tAssujetti.Email " +
                                            ",tAssujetti.typepersonne " +
                                            ",tAssujetti.AdressePost " +
                                            ",tAssujetti.NumImpotDGI " +
                                            ",tAssujetti.Numero " +
                                            ",tAvenue.Avenue " +
                                            ",tQuartier.Quartier " +
                                            ",tCommune.Commune " +
                                            ",tVille.Ville " +
                                            ",tProvince.Province " +
                                            "FROM  tAssujetti " +
                                            "INNER JOIN tNotePercepteur ON tAssujetti.NumImpot=tNotePercepteur.NumImpot " +
                                            "INNER JOIN tAntenne ON tNotePercepteur.IdAntenne=tAntenne.IdAntenne " +
                                            "INNER JOIN tCentre ON tAntenne.IdCentre=tCentre.IdCentre " +
                                            "INNER JOIN tAvenue ON tAssujetti.IdAvenue = tAvenue.IdAvenue " +
                                            "INNER JOIN tQuartier ON tAvenue.IdQuartier = tQuartier.IdQuartier " +
                                            "INNER JOIN tCommune ON dbo.tQuartier.IdCommune = tCommune.IdCommune " +
                                            "INNER JOIN tVille ON dbo.tCommune.IdVille = tVille.IdVille " +
                                            "INNER JOIN dbo.tProvince ON dbo.tVille.IdProv = tProvince.IdProv " +
                                            "WHERE tNotePercepteur.IdNote NOT IN (select tNotePercepteur.IdNote from tNotePercepteur inner join tNoteMigree on tNotePercepteur.IdNote=tNoteMigree.IdNote COLLATE SQL_Latin1_General_CP1_CI_AS) " +
                                            "AND " + critere +
                                            " ORDER BY Nom_raison ",
                                            "tAssujetti");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["NumImpot"].ToString(),
                    name_company = dtt.Rows[i]["Nom_raison"].ToString(),
                    initials = dtt.Rows[i]["Sigle"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString(),
                    email = dtt.Rows[i]["Email"].ToString(),
                    p_o_box = dtt.Rows[i]["AdressePost"].ToString(),
                    tax_num_dgi = dtt.Rows[i]["NumImpotDGI"].ToString(),
                    avenue = dtt.Rows[i]["Avenue"].ToString(),
                    number = dtt.Rows[i]["Numero"].ToString(),
                    quarter = dtt.Rows[i]["Quartier"].ToString(),
                    commune = dtt.Rows[i]["Commune"].ToString(),
                    town_dist = dtt.Rows[i]["Ville"].ToString()
                });
            }
            return lst;
        }

        //LISTE DES ASSUJETTIS DU NOUVEAU SYSTEME (à comparer à celui selectionné précedemment)
        //=====================================================================================

        public List<Person> lstAssujettiNS(string pnom)
        {
            string[] nom = pnom.Split(' ');

            ConnectionDB con = new ConnectionDB(2);
            DataTable dtt = con.Data_Source("SELECT * from " +
                                            "( " +
                                            "SELECT person.id, " +
                                            "physical_person.name + ' ' + physical_person.last_name + ' ' + physical_person.nick_name as Nom, " +
                                            "'-' AS Sigle, " +
                                            "'-' AS numid_nat, " +
                                            "'-' as tax_num_dgi, " +
                                            "person.email, " +
                                            "person.p_o_box, " +
                                            "person.prov, " +
                                            "person.town_dist, " +
                                            "person.commune, " +
                                            "person.quarter_sect, " +
                                            "person.avenue_loc, " +
                                            "person.number " +
                                            "FROM person " +
                                            "INNER JOIN physical_person ON person.id = physical_person.id " +
                                            "union " +
                                            "SELECT person.id, " +
                                            "company.company_name as Nom, " +
                                            "company.initials AS Sigle, " +
                                            "company.numid_nat, " +
                                            "company.tax_num_dgi, " +
                                            "person.email, " +
                                            "person.p_o_box, " +
                                            "person.prov, " +
                                            "person.town_dist, " +
                                            "person.commune, " +
                                            "person.quarter_sect, " +
                                            "person.avenue_loc, " +
                                            "person.number " +
                                            "FROM person " +
                                            "INNER JOIN company ON person.id = company.id " +
                                            ") as Personne " +
                                            "where Nom like '%" + nom[0] + "%' and Nom like '%" + nom[1] + "%'"
                                            , "person");

            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name = dtt.Rows[i]["Nom"].ToString(),
                    initials = dtt.Rows[i]["Sigle"].ToString(),
                    numid_nat = dtt.Rows[i]["numid_nat"].ToString(),
                    tax_num_dgi = dtt.Rows[i]["tax_num_dgi"].ToString(),
                    email = dtt.Rows[i]["email"].ToString(),
                    p_o_box = dtt.Rows[i]["p_o_box"].ToString(),
                    province = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString()

                });
            }
            return lst;
        }


        //LISTE DES NOTES DE L'ASSUJETTI
        //==============================
        public List<Assessment> lstNotes(string idAssujetti)
        {
            ConnectionDB con = new ConnectionDB(1);
            DataTable dtt = con.Data_Source("select DISTINCT " +
                                            "IdNote, " +
                                            "CONVERT(VARCHAR(10),DateNote,103) as DateNote, " +
                                            "MontantEnChiffre, " +
                                            "Devise, " +
                                            "tArticleBudjetaire.IdArticle, " +
                                            "tArticleBudjetaire.LibelleArticle, " +
                                            "tAntenne.Designation " +
                                            "from " +
                                            "tNotePercepteur " +
                                            "INNER JOIN tAssujetti ON tNotePercepteur.NumImpot=tAssujetti.NumImpot " +
                                            "INNER JOIN tArticleBudjetaire ON tNotePercepteur.IdArticle=tArticleBudjetaire.IdArticle " +
                                            "INNER JOIN tAntenne ON tNotePercepteur.IdAntenne=tAntenne.IdAntenne " +
                                            "where tAssujetti.NumImpot='" + idAssujetti + "' " +
                                            "AND IdNote not in(select tNotePercepteur.IdNote from tNotePercepteur inner join tNoteMigree on tNotePercepteur.IdNote=tNoteMigree.IdNote COLLATE SQL_Latin1_General_CP1_CI_AS)"
                                            , "tNotePercepteur");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    assessment_id = dtt.Rows[i]["IdNote"].ToString(),
                    assessment_date = dtt.Rows[i]["DateNote"].ToString(),
                    amount = Convert.ToDouble(dtt.Rows[i]["MontantEnChiffre"].ToString()),
                    currency = dtt.Rows[i]["Devise"].ToString(),
                    tax_id = dtt.Rows[i]["IdArticle"].ToString(),
                    tax_name = dtt.Rows[i]["LibelleArticle"].ToString(),
                    entity_name = dtt.Rows[i]["Designation"].ToString()

                });
            }
            
            return lst;
        }

        //RECHERCHE DE LA NOTE A MIGRER A PARTIR DU NUMERO
        //==============================
        public List<Assessment> lstRechercheNote(string note,string entite)
        {
            ConnectionDB con = new ConnectionDB(1);
            DataTable dtt = con.Data_Source("select DISTINCT " +
                                            "IdNote, " +
                                            "CONVERT(VARCHAR(10),DateNote,103) as DateNote, " +
                                            "MontantEnChiffre, " +
                                            "Devise, " +
                                            "tArticleBudjetaire.IdArticle, " +
                                            "tArticleBudjetaire.LibelleArticle, " +
                                            "tAntenne.Designation, " +
                                            "tAssujetti.Nom_raison " +
                                            "from " +
                                            "tNotePercepteur " +
                                            "INNER JOIN tAssujetti ON tNotePercepteur.NumImpot=tAssujetti.NumImpot " +
                                            "INNER JOIN tArticleBudjetaire ON tNotePercepteur.IdArticle=tArticleBudjetaire.IdArticle " +
                                            "INNER JOIN tAntenne ON tNotePercepteur.IdAntenne=tAntenne.IdAntenne " +
                                            "INNER JOIN tCentre ON tAntenne.IdCentre=tCentre.IdCentre " +
                                            "where IdNote like '%" + note + "%' " +
                                            "AND (tAntenne.IdAntenne='" + entite + "' OR tCentre.IdCentre='" + entite + "') " +
                                            "AND IdNote not in(select tNotePercepteur.IdNote from tNotePercepteur inner join tNoteMigree on tNotePercepteur.IdNote=tNoteMigree.IdNote COLLATE SQL_Latin1_General_CP1_CI_AS)"
                                            , "tNotePercepteur");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    assessment_id = dtt.Rows[i]["IdNote"].ToString(),
                    assessment_date = dtt.Rows[i]["DateNote"].ToString(),
                    amount = Convert.ToDouble(dtt.Rows[i]["MontantEnChiffre"].ToString()),
                    currency = dtt.Rows[i]["Devise"].ToString(),
                    tax_id = dtt.Rows[i]["IdArticle"].ToString(),
                    tax_name = dtt.Rows[i]["LibelleArticle"].ToString(),
                    entity_name = dtt.Rows[i]["Designation"].ToString(),
                    taxpayer_name = dtt.Rows[i]["Nom_raison"].ToString()
                });
            }
            return lst;
        }

        //CREATION DE LA LISTE DE CENTRE POUR COMPTE
        //=============================
        private List<string> lstcentre()
        {
            List<string> lstcentre = new List<string>();
            ConnectionDB con = new ConnectionDB(2);
            DataTable dtt = con.Data_Source("SELECT entity_name FROM fiscal_entity", "fiscal_entity");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstcentre.Add(dtt.Rows[i]["entity_name"].ToString());
            }
            return lstcentre;
        }

        //RECETTES PAR ACTE
        //=================
        public List<Assessment> lstRecettesActe(string startDate,string endDate)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT "+  
		                                        "tax.tax_id, "+
                                                "tax.tax_name, "+   
		                                        "round( "+ 
			                                        "sum( "+ 
				                                        "CASE  WHEN tax_payment.currency='USD' THEN tax_payment.amount "+  
				                                        "WHEN tax_payment.currency='FC' THEN tax_payment.amount/tax_payment.exchange_rate "+  
				                                        "ELSE 0 END "+ 
			                                        "),2 "+ 
		                                        ") AS montant "+     
		                                        "FROM tax_assessment "+  
		                                        "INNER JOIN  assessment_validation ON tax_assessment.assessment_id=assessment_validation.assessment_id "+
		                                        "INNER JOIN tax_payment ON assessment_validation.assessment_id=tax_payment.assessment_id "+
		                                        "INNER JOIN tax	on	tax_assessment.tax_id=tax.tax_id "+
                                                "WHERE tax_payment.receipt_date between '" + startDate + "' + ' 00:00:00' and '" + endDate + "' + ' 23:59:00' " +
                                                "GROUP BY tax.tax_id,tax.tax_name " +
		                                        "ORDER BY montant desc"
                                                , "tax_assessment");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    amount = Convert.ToDouble(dtt.Rows[i]["montant"].ToString()),                    
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString()
                });
            }
            return lst;
        }

        //RECETTES PAR MOIS
        //=================
        public List<Assessment> lstRecettesMois(int annee)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select "+
                                                "mois, "+
                                                "nbremois, "+
                                                "ROUND(sum(montant),2) as montant "+
                                                "from "+
                                                "( "+
	                                                "select "+	 
		                                                "CASE "+  
			                                                "WHEN tax_payment.currency='USD' THEN tax_payment.amount "+  
			                                                "WHEN tax_payment.currency='FC' THEN tax_payment.amount/tax_payment.exchange_rate "+  
			                                                "ELSE 0 "+ 
		                                                "END as montant, "+
		                                                "month(receipt_date) as nbremois, "+			
		                                                "case "+ 
			                                                "when month(receipt_date)=1 then 'Janvier' "+
			                                                "when month(receipt_date)=2 then 'Février' "+
			                                                "when month(receipt_date)=3 then 'Mars' "+
			                                                "when month(receipt_date)=4 then 'Avril' "+
			                                                "when month(receipt_date)=5 then 'Mai' "+
			                                                "when month(receipt_date)=6 then 'Juin' "+
			                                                "when month(receipt_date)=7 then 'Juillet' "+
			                                                "when month(receipt_date)=8 then 'Août' "+
			                                                "when month(receipt_date)=9 then 'Septembre' "+
			                                                "when month(receipt_date)=10 then 'Octobre' "+
			                                                "when month(receipt_date)=11 then 'Novembre' "+
			                                                "when month(receipt_date)=12 then 'Décembre' "+
		                                                "end as mois "+ 
	                                                "from tax_payment "+
	                                                "where year(receipt_date)=" + annee +
                                                ") recette "+
                                                "GROUP BY mois,nbremois " +
                                                "ORDER BY nbremois"
                                                , "tax_payment");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    amount = Convert.ToDouble(dtt.Rows[i]["montant"].ToString()),
                    assessment_month = dtt.Rows[i]["mois"].ToString()
                });
            }
            return lst;
        }

        //RECETTES PAR SERVICE
        //=================
        public List<Assessment> lstRecettesServices(string startDate, string endDate)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT "+ 
                                                "fiscal_entity.entity_id, "+
                                                "fiscal_entity.entity_name, "+
                                                "dbo.OrdoEntinty('" + startDate + "','" + endDate + "',entity_id) AS Ordonnancees, " +
                                                "dbo.EncaisEntinty('" + startDate + "','" + endDate + "',entity_id) as Recouvrees, " +
                                                "dbo.ResteARecEntity('" + endDate + "',entity_id) as RestRecouvre " +
                                                "FROM fiscal_entity "+
                                                "WHERE fiscal_entity.entity_id in "+ 
                                                "( "+
                                                "select tax_assessment.entity_id "+ 
                                                "from tax_assessment "+ 
                                                "inner join tax_payment on tax_assessment.assessment_id=tax_payment.assessment_id "+
                                                "where tax_payment.payment_date between '" + startDate + "' and '" + endDate + "' " +
                                                ") " +
                                                "order by entity_name"
                                                , "tax_assessment");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    entity_id = dtt.Rows[i]["entity_id"].ToString(),
                    entity_name = dtt.Rows[i]["entity_name"].ToString(),
                    amount_validation = Convert.ToDouble(dtt.Rows[i]["Ordonnancees"].ToString()),
                    amount_payment = Convert.ToDouble(dtt.Rows[i]["Recouvrees"].ToString()),
                    amount = Convert.ToDouble(dtt.Rows[i]["RestRecouvre"].ToString())                    
                });
            }
            return lst;
        }

        //RECETTES ORDONNANCEES
        //=====================
        public List<Assessment> lstRecettesOrdonnancees(string entity,string startDate, string endDate)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT "+
                                                "tax_assessment.assessment_id, "+ 
                                                "assessment_validation.validation_date, "+ 
                                                "tax.tax_id, tax.tax_name, "+ 
                                                "person.number + ', Avenue ' + person.avenue_loc + ', Quartier ' + person.quarter_sect + ', Commune de ' + person.commune + ', ' + person.town_dist AS AddresPerson, "+ 
                                                "( "+ 
                                                "select name_company_name from (select person.id, name + ' ' + last_name + ' ' + nick_name as name_company_name from person inner join physical_person on person.id=physical_person.id "+ 
                                                "union "+ 
                                                "select person.id,company_name as name_company_name from person inner join company on person.id=company.id) as taxPayer where id=tax_assessment.taxpayer_id "+ 
                                                ") as taxPayer, "+ 
                                                "CASE  WHEN assessment_validation.currency='FC' THEN assessment_validation.amount ELSE 0 END AS FC, "+ 
                                                "CASE  WHEN assessment_validation.currency='USD' THEN assessment_validation.amount ELSE 0 END AS USD, "+ 
                                                "(CASE  WHEN assessment_validation.currency='FC' THEN assessment_validation.amount ELSE 0 END)+(tax_assessment.exchange_rate *(CASE  WHEN assessment_validation.currency='USD' THEN assessment_validation.amount ELSE 0 END))AS MontantFC, "+ 
                                                "(CASE  WHEN assessment_validation.currency='FC' THEN assessment_validation.amount ELSE 0 END)+(tax_assessment.exchange_rate *(CASE  WHEN assessment_validation.currency='USD' THEN assessment_validation.amount ELSE 0 END))AS ConvFC, "+ 
                                                "(CASE  WHEN assessment_validation.currency='USD' THEN assessment_validation.amount ELSE 0 END)+(( CASE  WHEN assessment_validation.currency='FC' THEN assessment_validation.amount ELSE 0 END)/tax_assessment.exchange_rate)AS ConvUSD "+ 
                                                "FROM  tax_assessment "+ 
                                                "INNER JOIN assessment_validation ON tax_assessment.assessment_id = assessment_validation.assessment_id "+ 
                                                "INNER JOIN person ON tax_assessment.taxpayer_id = person.id "+ 
                                                "INNER JOIN tax ON tax_assessment.tax_id = tax.tax_id "+
                                                "where " +
                                                "(select top 1 initials from worker inner join fiscal_entity on worker.entity_id=fiscal_entity.entity_id where worker.id=tax_assessment.userId)='" + entity + "' " +
                                                "AND assessment_validation.validation_date between '" + startDate + "' + ' 00:00:00' and '" + endDate + "' + ' 23:59:00' " +
                                                "ORDER BY assessment_validation.validation_date"
                                                , "tax_assessment");

            List<Assessment> lst = new List<Assessment>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Assessment()
                {
                    validation_date = dtt.Rows[i]["validation_date"].ToString(),
                    assessment_id = dtt.Rows[i]["assessment_id"].ToString(),
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    taxpayer_name = dtt.Rows[i]["taxPayer"].ToString(),
                    taxpayer_address = dtt.Rows[i]["AddresPerson"].ToString(),
                    amount_validation_FC = Convert.ToDouble(dtt.Rows[i]["FC"].ToString()),
                    amount_validation_USD = Convert.ToDouble(dtt.Rows[i]["USD"].ToString())                    
                });
            }
            return lst;
        }

        //RECETTES ENCAISSES
        //=====================
        public List<Recovery> lstRecettesEncaissees(string entity, string startDate, string endDate)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT tax_assessment.assessment_id " +
                ",convert(varchar(10),tax_assessment.assessment_date,103) as DateNP " +
                ",(CASE WHEN tax_payment.currency='FC' THEN tax_payment.amount ELSE 0 END) AS FC " +
                ",(CASE WHEN tax_payment.currency='USD' THEN tax_payment.amount ELSE 0 END) AS USD " +
                ",tax_assessment.tax_id " +
                ",tax.tax_name " +
                ",(SELECT (select Nom_ou_Raison_Sociale from (SELECT id, name+'  '+last_name+'  '+nick_name AS Nom_ou_Raison_Sociale FROM physical_person UNION SELECT id, company_name FROM company) as personne where id=taxpayer_id) as assujetti) AS Nom_ou_raison_Sociale " +
                ",person.town_dist+' , '+person.commune+' , '+person.quarter_sect+' , '+avenue_loc+' , '+person.number AS Adresse " +
                ",convert(varchar(10),tax_payment.receipt_date,103) AS DatePaiement " +
                ",company.initials as bank " +
                ",tax_payment.receipt_number " +
                "FROM tax_assessment " +
                "INNER JOIN tax ON tax_assessment.tax_id=tax.tax_id " +
                "INNER JOIN assessment_validation ON tax_assessment.assessment_id=assessment_validation.assessment_id " +
                "INNER JOIN tax_payment ON assessment_validation.assessment_id=tax_payment.assessment_id " +
                "INNER JOIN person ON tax_assessment.taxpayer_id=person.id " +
                "INNER JOIN company ON tax_payment.bank_id=company.id " +
                "WHERE " +
                "assessment_validation.validation_date between '" + startDate + "' + ' 00:00:00' and '" + endDate + "' + ' 23:59:00' " +
                "and (select top 1 initials from worker inner join fiscal_entity on worker.entity_id=fiscal_entity.entity_id where worker.id=tax_assessment.userId)='" + entity + "' " +
                "order by tax_payment.receipt_date",
                "person");

            //List<Assessment> lst = new List<Assessment>();
            List<Recovery> lst = new List<Recovery>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Recovery()
                {
                    nbre = i + 1,
                    taxpayer = dtt.Rows[i]["Nom_ou_raison_Sociale"].ToString(),
                    adresse = dtt.Rows[i]["Adresse"].ToString(),
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    assessment_id = dtt.Rows[i]["assessment_id"].ToString(),
                    assessment_date = dtt.Rows[i]["DateNP"].ToString(),
                    amount_FC = Convert.ToDouble(dtt.Rows[i]["FC"].ToString()),
                    amount_USD = Convert.ToDouble(dtt.Rows[i]["USD"].ToString()),
                    payment_date = dtt.Rows[i]["DatePaiement"].ToString(),
                    bank = dtt.Rows[i]["bank"].ToString(),
                    receipt_number = dtt.Rows[i]["receipt_number"].ToString()
                });
            }
            return lst;
        }
        */
         
        //LIST OF PROVINCES
        //================
        public List<Adress> listProvince()
        {
            List<Adress> lst = new List<Adress>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT prov from province", "province");

            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Adress()
                {
                    nbre=i+1,
                    prov = dtt.Rows[i]["prov"].ToString()
                });                
            }
            return lst;
        }

        //LIST OF TOWN
        //============
        public List<Adress> listTown(string province)
        {
            List<Adress> lst = new List<Adress>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT town_dist from town_district where prov='" + province.Replace("'","''") + "'", "town_district");
            
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Adress()
                {
                    nbre = i + 1,
                    town_dist = dtt.Rows[i]["town_dist"].ToString()
                });
            }
            return lst;
        }

        //LIST OF COMMUNE
        //===============
        public List<Adress> listCommune(string town)
        {
            List<Adress> lst = new List<Adress>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT commune from commune where town_dist='" + town.Replace("'", "''") + "'", "commune");

            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Adress()
                {
                    nbre = i + 1,
                    commune = dtt.Rows[i]["commune"].ToString()
                });
            }
            return lst;
        }

        //LIST OF QUARTERS
        //================
        public List<Adress> listQuarter(string commune)
        {
            List<Adress> lst = new List<Adress>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT quarter_sect from quarter_sector where commune='" + commune.Replace("'", "''") + "'", "quarter_sector");

            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Adress()
                {
                    nbre = i + 1,
                    quarter_sect = dtt.Rows[i]["quarter_sect"].ToString()
                });
            }
            return lst;
        }

        //LIST OF QUARTERS
        //================
        public List<Adress> listAvenue(string quarter)
        {
            List<Adress> lst = new List<Adress>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("SELECT prov,town_dist,commune,quarter_sect,avenue_loc from avenue_locality where quarter_sect='" + quarter.Replace("'", "''") + "'", "avenue_locality");

            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Adress()
                {
                    nbre = i + 1,
                    avenue_loc = dtt.Rows[i]["avenue_loc"].ToString()
                });
            }
            return lst;
        }

        //LISTE DES UTILISATEURS
        //======================
        public List<Person> lstUtilisateur(string name)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select " +
                                            "person.id, " +
                                            "name + ' ' + last_name + ' ' + nick_name as name_company_name, " +
                                            "prov, " +
                                            "town_dist, " +
                                            "commune, " +
                                            "quarter_sect, " +
                                            "avenue_loc, " +
                                            "number, " +
                                            "email, " +
                                            "p_o_box, " +
                                            "(select top 1 tel_number from telephone where id=person.id) as telephone " +
                                            "from person " +
                                            "inner join physical_person on person.id=physical_person.id  " +
                                            "inner join user_login on person.id=user_login.id " +
                                            "where name + ' ' + last_name + ' ' + nick_name like '%" + name + "%' " +                                            
                                            "union " +
                                            "select " +
                                            "person.id, " +
                                            "company_name as name_company_name, " +
                                            "prov, " +
                                            "town_dist, " +
                                            "commune, " +
                                            "quarter_sect, " +
                                            "avenue_loc, " +
                                            "number, " +
                                            "email, " +
                                            "p_o_box, " +
                                            "(select top 1 tel_number from telephone where id=person.id) as telephone " +
                                            "from person " +
                                            "inner join company on person.id=company.id " +
                                            "inner join user_login on person.id=user_login.id " +
                                            "where company_name like '%" + name + "%'",
                                            "person");
            List<Person> lst = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new Person()
                {
                    nbre = i + 1,
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name_company = dtt.Rows[i]["name_company_name"].ToString(),
                    province = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString(),
                    email = dtt.Rows[i]["email"].ToString(),
                    p_o_box = dtt.Rows[i]["p_o_box"].ToString(),
                    telephone = dtt.Rows[i]["telephone"].ToString()

                });
            }
            return lst;
        }

        /*
        //LISTE DES BASES IMPOSABLES
        //==========================
        public List<BaseImposable> listBase(string id)
        {
            List<BaseImposable> lst = new List<BaseImposable>();
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("select "+ 
                                            "id, "+
                                            "nature, "+
                                            "signboard, "+
                                            "prov, "+
                                            "town_dist, "+
                                            "commune, "+
                                            "quarter_sect, "+
                                            "avenue_loc, "+
                                            "number, "+
                                            "(SELECT (select Nom_ou_Raison_Sociale from "+ 
                                            "(SELECT id, name +'  '+ last_name +'  '+ nick_name AS Nom_ou_Raison_Sociale FROM physical_person "+ 
                                            "UNION SELECT id, company_name AS Nom_ou_Raison_Sociale FROM company) as personne where id=base_imposable.id) as assujetti) AS Nom_ou_raison_Sociale "+
                                            "from base_imposable " +
                                            "where id='" + id + "'", 
                                            "base_imposable");

            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lst.Add(new BaseImposable()
                {
                    nbr = i + 1,
                    id = dtt.Rows[i]["id"].ToString(),
                    nature = dtt.Rows[i]["nature"].ToString(),
                    signboard = dtt.Rows[i]["signboard"].ToString(),
                    prov = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter_sect = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString(),
                    nom = dtt.Rows[i]["Nom_ou_raison_Sociale"].ToString()
                });
            }
            return lst;
        }

        //Liste des Articles Budgetaires
        //-----------------------------
        public List<string> ListTax()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            List<string> lstTax = new List<string>();
            DataTable dtt = con.Data_Source("select tax_id,tax_name,generating_fact,periodicity from tax", "tax");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstTax.Add(dtt.Rows[i]["tax_id"].ToString());

            }
            return lstTax;
        }

        //LISTE D'OBJET TAXE
        //===================
        public List<Tax> LstTaxRec()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            List<Tax> lstTax = new List<Tax>();
            DataTable dtt = con.Data_Source("select tax_id,tax_name,generating_fact,periodicity from tax", "tax");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstTax.Add(new Tax()
                {
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString()
                });

            }
            return lstTax;
        }

        //Liste des Entités/Secteurs
        //-----------------------------
        public List<string> ListEntiteSecteur()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            List<string> lstEntiteSecteur = new List<string>();
            DataTable dtt = con.Data_Source("select entity_name from fiscal_entity", "fiscal_entity");
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstEntiteSecteur.Add(dtt.Rows[i]["entity_name"].ToString());

            }
            return lstEntiteSecteur;
        }*/

        //LISTE DE L'ASSUJETTI/BASE IMPOSABLE
        //===================================
        public List<Person> lstAssujettiBaseImp(string assBI)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("EXEC AssujettiBaseImp @noms='" + assBI + "'", "AssujettiBaseImp");

            List<Person> lstAssjBImpo = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstAssjBImpo.Add(new Person()
                {
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name = dtt.Rows[i]["noms"].ToString(),
                    telephone = dtt.Rows[i]["Telephone"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString()

                });
            }

            return lstAssjBImpo;
        }

        //LISTE DE BASE IMPOSABLE
        //=======================

        public List<Person> lstBaseImposable(string ass)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("EXEC BaseImposable @id='" + ass + "'", "BaseImposable");

            List<Person> lstBImpo = new List<Person>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstBImpo.Add(new Person()
                {
                    Id_person = dtt.Rows[i]["id"].ToString(),
                    name_company = dtt.Rows[i]["nature"].ToString(),
                    province = dtt.Rows[i]["prov"].ToString(),
                    town_dist = dtt.Rows[i]["town_dist"].ToString(),
                    commune = dtt.Rows[i]["commune"].ToString(),
                    quarter = dtt.Rows[i]["quarter_sect"].ToString(),
                    avenue = dtt.Rows[i]["avenue_loc"].ToString(),
                    number = dtt.Rows[i]["number"].ToString()

                });
            }

            return lstBImpo;
        }

        //LISTE DE Taxe Nature
        //====================
        public List<Liste> lstTaxeNature(string nature, string id, string prov, string town_dist, string commune, string quarter_sect, string avenue_loc,string number, string id_feuille)
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("EXEC TaxNature @nature='" + nature + "',"+
                                            " @id='" + id + "',@prov='" + prov + "',"+
                                            "@town_dist='" + town_dist + "',"+
                                            "@commune='" + commune + "',"+
                                            "@quarter_sect='" + quarter_sect + "',"+
                                            "@avenue_loc='" + avenue_loc + "',"+
                                            "@number='" + number + "',"+
                                            "@id_feuille='" + id_feuille + "'", "AssujettiBaseImp");
            
            List<Liste> lstTaxNat = new List<Liste>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstTaxNat.Add(new Liste()
                {
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    generating_fact = dtt.Rows[i]["generating_fact"].ToString(),
                    periodicity = dtt.Rows[i]["periodicity"].ToString()

                });
            }

            return lstTaxNat;
        }

        //LISTE DES ARTICLES 
        //==================

        public List<Liste> lstArticleBI()
        {
            DBConnection con = new DBConnection("C:\\connexion.xml");
            DataTable dtt = con.Data_Source("EXEC ArticleBaseImp ", "EXEC ArticleBaseImp");

            List<Liste> lstArtBI = new List<Liste>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {

                lstArtBI.Add(new Liste()
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
