using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace ImpotsTaxes.Models
{
    public class ListesMED
    {

        //LISTE DES ENTITES
        //================
        public List<Article> ListArticle()
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select distinct tax.tax_id," +
                                            "tax_name," +
                                            "generating_fact," +
                                            "periodicity " +
                                            "from tax inner join tax_Assessment on tax.tax_id=Tax_Assessment.tax_id " +
                                            "inner join Assessment_Validation on Assessment_Validation.Assessment_id=Tax_Assessment.Assessment_id " +
                                            "where tax.tax_id not like '%-%' " +
                                            "And Assessment_Validation.Assessment_id not  in (select Assessment_id from tax_Payment) " +
                                            "order by tax_name", "Tax_Assessment");
            List<Article> lstArticle = new List<Article>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstArticle.Add(new Article()
                {
                    nbre = i + 1,
                    tax_id = dtt.Rows[i]["tax_id"].ToString(),
                    tax_name = dtt.Rows[i]["tax_name"].ToString(),
                    generating_fact = dtt.Rows[i]["generating_fact"].ToString(),
                    periodicity = dtt.Rows[i]["periodicity"].ToString()                    
                });
            }
            return lstArticle;
        }

        //LISTE DES QUARTIERS
        //================
        public List<Entite> ListQuartier(string commune)
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select quarter_sect " +
                                            "from quarter_sector " +
                                            "where Commune='" + commune + "' " +
                                            "order by quarter_sect", "quarter_sector");
            List<Entite> LstQuartier = new List<Entite>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                LstQuartier.Add(new Entite()
                {
                    nbre = i + 1,
                    quarter_sect = dtt.Rows[i]["quarter_sect"].ToString()

                });
            }
            return LstQuartier;
        }

        //LISTE DES AVENUES
        //================
        public List<Entite> ListAvenue(string quarter)
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select avenue_loc " +
                                            "from avenue_locality " +
                                            "where quarter_sect='"+ quarter +"' " +
                                            "order by avenue_loc", "avenue_locality");
            List<Entite> LstAvenue = new List<Entite>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                LstAvenue.Add(new Entite()
                {
                    nbre = i + 1,
                    avenue_loc = dtt.Rows[i]["avenue_loc"].ToString()
                    
                });
            }
            return LstAvenue;
        }
        //LISTE DES ANTENNES
        //================
        public List<Entite> ListAntennes()
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("SELECT DISTINCT Antenne.entity_Id  " +
                                            ",fiscal_entity.entity_name " +
                                            "FROM  dbo.person " +
                                            "INNER JOIN dbo.tax_assessment ON dbo.person.id = dbo.tax_assessment.taxpayer_id " +
                                            "INNER JOIN dbo.assessment_validation ON dbo.tax_assessment.assessment_id = dbo.assessment_validation.assessment_id " +
                                            "INNER JOIN dbo.tax ON dbo.tax_assessment.tax_id = dbo.tax.tax_id " +
                                            "INNER JOIN fiscal_entity ON fiscal_entity.entity_id=tax_assessment.entity_id " +
                                            "INNER JOIN Antenne on fiscal_entity.entity_id=Antenne.entity_Id " +
                                            "WHERE assessment_validation.assessment_id in " +
                                            "( " +
                                            "select assessment_validation.assessment_id from assessment_validation " +
                                            "inner join tax_assessment on tax_assessment.assessment_id=assessment_validation.assessment_id " +
                                            "where assessment_validation.assessment_id not in(select assessment_id from tax_payment) " +
                                            ") " +
                                            "AND DATEDIFF(d, dbo.assessment_validation.validation_date, (select GETDATE())) > 14 " +
                                            "AND assessment_validation.assessment_id not in (select assessment_id from summons_procedure) " +
                                            "AND assessment_validation.assessment_id not in (select assessment_id from contrainte) " +
                                            "and (tax_assessment.entity_id in(select entity_Id from Antenne where centre=(select entity_id from worker where id='4111000043')) " +
                                            "or tax_assessment.on_ac_of_entity in (select entity_Id from Antenne where " +
                                            "centre=(select entity_id from worker where id='4111000043')))", "fiscal_entity");
            List<Entite> LstAntenne = new List<Entite>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                LstAntenne.Add(new Entite()
                {
                    nbre = i + 1,
                    entity_id = dtt.Rows[i]["entity_Id"].ToString(),
                    entity_name = dtt.Rows[i]["entity_name"].ToString(),
                    //initials = dtt.Rows[i]["Centre"].ToString(),
                });
            }
            return LstAntenne;
        }

        //LISTE PROVINCE
        //==============
        public List<Adresse> ListProvince()
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select prov " +
                                            "from province " +
                                            "where prov not like'-%' " +
                                            "order by prov", "province");
            List<Adresse> lstProvince = new List<Adresse>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstProvince.Add(new Adresse()
                {
                    nbre = i + 1,
                    province = dtt.Rows[i]["prov"].ToString()
                });
            }
            return lstProvince;
        }

        //LISTE VILLE
        //===========
        public List<Adresse> ListVille(string province)
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select town_dist " +
                                            "from town_district where prov='" + province + "' " +
                                            "order by town_dist", "town_district");
            List<Adresse> lstVille = new List<Adresse>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstVille.Add(new Adresse()
                {
                    nbre = i + 1,
                    ville = dtt.Rows[i]["town_dist"].ToString()
                });
            }
            return lstVille;
        }

        //LISTE COMMUNE
        //=============
        public List<Adresse> ListCommune(string ville)
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("select commune " +
                                            "from commune where town_dist='" + ville + "' " +
                                            "order by commune", "commune");
            List<Adresse> lstCommune = new List<Adresse>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                lstCommune.Add(new Adresse()
                {
                    nbre = i + 1,
                    commune = dtt.Rows[i]["commune"].ToString()
                });
            }
            return lstCommune;
        }

        //LISTE  DES SERVICES QUI ONT DES NOTES EN SOUFFRANCES
        //====================================================
        public List<Entite> ListServAss()
        {
            DBConnection con = new DBConnection();
            DataTable dtt = con.Data_Source("SET DATEFORMAT dMy; " +
                                            "SELECT distinct entity_Id, entity_name " +
                                            "FROM " +
                                            "(  " +
                                            "SELECT " +
                                            "assessment_validation.assessment_id " +
                                            ",tax.tax_id " +
                                            ",assessment_validation.validation_date " +
                                            ",person.id " +
                                            ", ServiceAss.entity_Id " +
                                            ",fiscal_entity.entity_name "+
                                            "FROM  dbo.person " +
                                            "INNER JOIN dbo.tax_assessment ON dbo.person.id = dbo.tax_assessment.taxpayer_id " +
                                            "INNER JOIN dbo.assessment_validation ON dbo.tax_assessment.assessment_id = dbo.assessment_validation.assessment_id " +
                                            "INNER JOIN dbo.tax ON dbo.tax_assessment.tax_id = dbo.tax.tax_id " +
                                            "INNER JOIN fiscal_entity ON fiscal_entity.entity_id=tax_assessment.entity_id " +
                                            "INNER JOIN ServiceAss on fiscal_entity.entity_id=ServiceAss.entity_Id " +
                                            "WHERE assessment_validation.assessment_id in " +
                                            "( " +
                                            "select assessment_validation.assessment_id from assessment_validation " +
                                            "inner join tax_assessment on tax_assessment.assessment_id=assessment_validation.assessment_id " +
                                            "where assessment_validation.assessment_id not in(select assessment_id from tax_payment)) " +
                                            "AND DATEDIFF(d, dbo.assessment_validation.validation_date, (select GETDATE())) > 14 " +
                                            "AND assessment_validation.assessment_id not in (select assessment_id from summons_procedure) " +
                                            "AND assessment_validation.assessment_id not in (select assessment_id from contrainte) " +
                                            ") tp", "fiscal_entity");
            List<Entite> LstAntenne = new List<Entite>();
            for (int i = 0; i < dtt.Rows.Count; i++)
            {
                LstAntenne.Add(new Entite()
                {
                    nbre = i + 1,
                    entity_id = dtt.Rows[i]["entity_id"].ToString(),
                    entity_name = dtt.Rows[i]["entity_name"].ToString(),

                });
            }
            return LstAntenne;
        }

        /****************************************************************************************
                      LISTE DES MED A MODIFIER
        *****************************************************************************************/
        public List<Recovery> ListeAssujettiMEDArticle(string utilisateur, int borneInf, int borneSup, string article)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDArt @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ", @Article='" + article + "'"
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES MED DE L'ANTENNE DE L'UTILISATEUR CONNECTE
        //===================================================
        public List<Recovery> ListeAssujettiMEDAntenne(string utilisateur, int borneInf, int borneSup)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDAnt @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ""
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES MED PAR PERIODE
        //=========================
        public List<Recovery> ListeAssujettiMEDDate(string utilisateur, int borneInf, int borneSup, DateTime Dated, DateTime Datef)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDDate @utilisateur='" + utilisateur + "',@borneInf='" + borneInf + "',@borneSup='" + borneSup + "', @datedeb='" + Dated + "',@datefin='" + Datef + "'"
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES MED PAR MONTANT ET PAR RAPPORT A L'UTILISATEUR CONNECTE
        //=================================================================
        public List<Recovery> ListeAssujettiMEDMontant(string utilisateur, int borneInf, int borneSup, Double amount, string currency)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDMontant @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ", @mont=" + amount + ", @monn='" + currency + "'"
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES MED PAR CENTRE
        //========================
        public List<Recovery> ListeAssujettiMEDCentre(string utilisateur, int borneInf, int borneSup)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDCentre @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ""
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES MED PAR SERVICE
        //========================
        public List<Recovery> ListeAssujettiMEDServ(string utilisateur, int borneInf, int borneSup, string service)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDServ @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ", @serv='" + service + "'"
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre=i+1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES ASSUJETTIS QUI ONT DES NOTES EN SOUFFRANCE PAR CENTRE, ANTENNE ET SERVICE
        //===================================================================================
        public List<Recovery> ListeAssujettiMEDCentreAntServ(string utilisateur, int borneInf, int borneSup)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec AssujettiMEDCentreAntServ @utilisateur='" + utilisateur + "',@borneInf=" + borneInf + ",@borneSup=" + borneSup + ""
                        , "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    nbre = i + 1,
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //RECHERCHE DES ASSUJETTIS
        //========================
        public List<Recovery> RechercheAssujetti(string noms)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("select distinct id,NamePayer,telephone,email,town_dist,commune,quarter_sect,avenue_loc,number " +
                                                "from (SELECT assessment_validation.assessment_id " +
                                                        ",tax.tax_id " +
                                                        ",assessment_validation.amount " +
                                                        ",assessment_validation.currency " +
                                                        ",assessment_validation.validation_date " +
                                                        ",person.id " +
                                                        ",(SELECT NameTaxPayer from (SELECT id, (name+' '+last_name+' '+ nick_name) AS NameTaxPayer FROM  dbo.physical_person UNION SELECT id, company_name AS NameTaxPayer FROM dbo.company) as Taxateur WHERE id=dbo.person.id) as NamePayer " +
                                                        ",person.prov " +
                                                        ",person.town_dist " +
                                                        ",person.commune " +
                                                        ",person.quarter_sect " +
                                                        ",person.avenue_loc " +
                                                        ",person.number " +
                                                        ",person.email " +
                                                        ",(select top 1 tel_number from telephone where id=person.id) as telephone " +
                                                        "FROM  dbo.person " +
                                                        "INNER JOIN dbo.tax_assessment ON dbo.person.id = dbo.tax_assessment.taxpayer_id " +
                                                        "INNER JOIN dbo.assessment_validation ON dbo.tax_assessment.assessment_id = dbo.assessment_validation.assessment_id " +
                                                        "INNER JOIN dbo.tax ON dbo.tax_assessment.tax_id = dbo.tax.tax_id " +
                                                        "INNER JOIN fiscal_entity ON fiscal_entity.entity_id=tax_assessment.entity_id " +
                                                        "WHERE assessment_validation.assessment_id in " +
                                                        "( " +
                                                        "select assessment_validation.assessment_id from assessment_validation " +
                                                        "inner join tax_assessment on tax_assessment.assessment_id=assessment_validation.assessment_id " +
                                                        "where assessment_validation.assessment_id not in(select assessment_id from tax_payment)) " +
                                                        "AND DATEDIFF(d, dbo.assessment_validation.validation_date, (select GETDATE())) > 14 " +
                                                        "AND assessment_validation.assessment_id not in (select assessment_id from summons_procedure) " +
                                                        "AND assessment_validation.assessment_id not in (select assessment_id from contrainte) " +
                                                ")tp Where NamePayer like '%" + noms + "%'", "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    //assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    //amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    //currency = dttNote.Rows[i]["currency"].ToString(),
                    //tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    commune = dttNote.Rows[i]["commune"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //LISTE DES NOTES EN SOUFFRANCE DES ASSUJETTIS
        //==============================================
        public List<Recovery> ListeNoteSouffAssujetti(string id)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("select *from (SELECT assessment_validation.assessment_id " +
                                                ",tax.tax_id " +
                                                ",assessment_validation.amount " +
                                                ",assessment_validation.currency " +
                                                ",assessment_validation.validation_date " +
                                                ",person.id " +
                                                ",Tax.tax_name " +
                                                ",(SELECT NameTaxPayer from (SELECT id, (name+' '+last_name+' '+ nick_name) AS NameTaxPayer FROM  dbo.physical_person UNION SELECT id, company_name AS NameTaxPayer FROM dbo.company) as Taxateur WHERE id=dbo.person.id) as NamePayer " +
                                                ",person.prov " +
                                                ",person.town_dist " +
                                                ",person.commune " +
                                                ",person.quarter_sect " +
                                                ",person.avenue_loc " +
                                                ",person.number " +
                                                ",person.email " +
                                                ",(select top 1 tel_number from telephone where id=person.id) as telephone " +
                                                "FROM  dbo.person " +
                                                "INNER JOIN dbo.tax_assessment ON dbo.person.id = dbo.tax_assessment.taxpayer_id " +
                                                "INNER JOIN dbo.assessment_validation ON dbo.tax_assessment.assessment_id = dbo.assessment_validation.assessment_id " +
                                                "INNER JOIN dbo.tax ON dbo.tax_assessment.tax_id = dbo.tax.tax_id " +
                                                "INNER JOIN fiscal_entity ON fiscal_entity.entity_id=tax_assessment.entity_id " +
                                                "WHERE assessment_validation.assessment_id in " +
                                                "( " +
                                                "select assessment_validation.assessment_id from assessment_validation " +
                                                "inner join tax_assessment on tax_assessment.assessment_id=assessment_validation.assessment_id " +
                                                "where assessment_validation.assessment_id not in(select assessment_id from tax_payment)) " +
                                                "AND DATEDIFF(d, dbo.assessment_validation.validation_date, (select GETDATE())) > 14 " +
                                                "AND assessment_validation.assessment_id not in (select assessment_id from summons_procedure) " +
                                                "AND assessment_validation.assessment_id not in (select assessment_id from contrainte) " +
                                                ")tp Where id='" + id + "'", "assessment_validation");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    assessment_id = dttNote.Rows[i]["assessment_id"].ToString(),
                    amount = Convert.ToDouble(dttNote.Rows[i]["amount"].ToString()),
                    currency = dttNote.Rows[i]["currency"].ToString(),
                    tax_id = dttNote.Rows[i]["tax_id"].ToString(),
                    taxpayer_id = dttNote.Rows[i]["id"].ToString(),
                    taxpayer = dttNote.Rows[i]["NamePayer"].ToString(),
                    telephone = dttNote.Rows[i]["telephone"].ToString(),
                    email = dttNote.Rows[i]["email"].ToString(),
                    town_dist = dttNote.Rows[i]["town_dist"].ToString(),
                    quarter_sect = dttNote.Rows[i]["quarter_sect"].ToString(),
                    avenue_loc = dttNote.Rows[i]["avenue_loc"].ToString(),
                    tax_name = dttNote.Rows[i]["tax_name"].ToString(),
                    validation_date = dttNote.Rows[i]["validation_date"].ToString(),
                    number = dttNote.Rows[i]["number"].ToString()
                });
            }
            return listeRecouv;
        }

        //VERIFICATION PAIEMENT
        //=====================
        public string VerifNote(string note, string utilisateur)
        {
            DBConnection con = new DBConnection();
            return con.Show_Data("DECLARE @Message nvarchar(10) " +
                                "IF " +
                                "( " +
                                "'" + note + "' IN ( " +
                                "select assessment_validation.assessment_id " +
                                "FROM dbo.assessment_validation " +
                                "INNER JOIN dbo.tax_assessment ON dbo.tax_assessment.assessment_id = dbo.assessment_validation.assessment_id " +
                                "INNER JOIN dbo.tax ON dbo.tax_assessment.tax_id = dbo.tax.tax_id " +
                                "INNER JOIN fiscal_entity ON fiscal_entity.entity_id=tax_assessment.entity_id " +
                                "WHERE assessment_validation.assessment_id in " +
                                "( " +
                                "select assessment_validation.assessment_id from assessment_validation " +
                                "inner join tax_assessment on tax_assessment.assessment_id=assessment_validation.assessment_id " +
                                "where assessment_validation.assessment_id not in(select assessment_id from tax_payment)) " +
                                "AND DATEDIFF(d, dbo.assessment_validation.validation_date, (select GETDATE())) > 14 " +
                                "AND assessment_validation.assessment_id not in (select assessment_id from summons_procedure) " +
                                "AND assessment_validation.assessment_id not in (select assessment_id from contrainte) " +
                                "and (tax_assessment.entity_id=(select entity_id from worker where id='" + utilisateur + "') " +
                                "or tax_assessment.on_ac_of_entity=(select entity_id from worker where id='" + utilisateur + "')) " +
                                ")) " +
                                "BEGIN " +
                                "SET @Message='Oui' " +
                                "END " +
                                "ELSE " +
                                "BEGIN " +
                                "SET @Message='Non' " +
                                "END " +
                                "SELECT @Message AS Verification  "
                                , "Verification");
        }

        //RECHERCHE DE L'ID DE L'ASSUJETTI A PARTIR DE LA NOTE
        //====================================================
        public string IDAssujettiNote(string note)
        {
            DBConnection con = new DBConnection();
            return con.Show_Data("select taxpayer_id from tax_assessment where assessment_id='" + note + "'", "taxpayer_id");
        }

        //RECHERCHE DU NOM DE L'ASSUJETTI A PARTIR DE SON ID
        //==================================================
        public string NomAssujetti(string id)
        {
            DBConnection con = new DBConnection();
            return con.Show_Data("SELECT NameTaxPayer "+ 
                                    "from "+ 
                                    "( "+
                                    "SELECT id, (name+' '+last_name+' '+ nick_name) AS NameTaxPayer FROM  dbo.physical_person "+ 
                                    "UNION "+ 
                                    "SELECT id, company_name AS NameTaxPayer FROM dbo.company "+
                                    ") as Personne " +
                                    "WHERE id='" + id + "'", "NameTaxPayer");
        }

        //NUMERO DE MED
        //========================
        public List<string> NumeroMED(string utilisateur)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec NumeroMED @userId='"+ utilisateur + "'", "t");

            List<string> numero = new List<string>();
            numero.Add(dttNote.Rows[0]["numOrdre"].ToString());
            numero.Add(dttNote.Rows[0]["numMED"].ToString());

            return numero;
        }

        //ENREGISTREMENT DES MED
        //=====================
        public void EnregistrerMED(string numeroOrd, string numeroMED, string numeroDossier, string utilisateur)
        {
            //exec EnregistrerMED @queue_number=3,@letter_number='3/MED/DR/DG/DGRNK/2018',@assujetti='4111012280',@userId='4444444444'
            DBConnection con = new DBConnection();
            con.Execute_Query("exec EnregistrerMED @queue_number=" + numeroOrd + ",@letter_number='" + numeroMED + "',@assujetti='" + numeroDossier + "',@userId='" + utilisateur + "'");
        }

        //DETAIL MED
        //===========
        public List<Recovery> DetailMED(string numMED)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec DetailMED @numMED='" + numMED + "'"
                        , "MED");

            List<Recovery> listeRecouv = new List<Recovery>();
            for (int i = 0; i < dttNote.Rows.Count; i++)
            {
                listeRecouv.Add(new Recovery()
                {
                    assessment_id = dttNote.Rows[i]["note"].ToString(),
                    validation_date = dttNote.Rows[i]["DateNote"].ToString(),
                    tax_id = dttNote.Rows[i]["article"].ToString(),
                    tax_name = dttNote.Rows[i]["article"].ToString(),
                    PrincFC = Convert.ToDouble(dttNote.Rows[i]["PrincFC"].ToString()),
                    PrincUSD = Convert.ToDouble(dttNote.Rows[i]["PrincUSD"].ToString()),
                    PenProvFC = Convert.ToDouble(dttNote.Rows[i]["PenProvFC"].ToString()),
                    PenProvUSD = Convert.ToDouble(dttNote.Rows[i]["PenProvUSD"].ToString()),
                    PenDGRNKFC = Convert.ToDouble(dttNote.Rows[i]["PenDGRNKFC"].ToString()),
                    PenDGRNKUSD = Convert.ToDouble(dttNote.Rows[i]["PenDGRNKUSD"].ToString()),
                    TotProvFC = Convert.ToDouble(dttNote.Rows[i]["TotProvFC"].ToString()),
                    TotProvUSD = Convert.ToDouble(dttNote.Rows[i]["TotProvUSD"].ToString()),
                    TotDGRNKFC = Convert.ToDouble(dttNote.Rows[i]["TotDGRNKFC"].ToString()),
                    TotDGRNKUSD = Convert.ToDouble(dttNote.Rows[i]["TotDGRNKUSD"].ToString())
                    
                });
            }
            return listeRecouv;
        }

        //ELEMENT DE LA MED
        //=================
        public Recovery ElementMED(string numMED)
        {
            DBConnection con = new DBConnection();
            DataTable dttNote = con.Data_Source("exec ElementMED @numMED='" + numMED + "'"
                        , "procedure_letter");

            Recovery recouv = new Recovery();
            recouv.letter_number = dttNote.Rows[0]["letter_number"].ToString();
            recouv.place = dttNote.Rows[0]["place"].ToString();
            recouv.letter_date = dttNote.Rows[0]["letter_date"].ToString();
            recouv.taxpayer = dttNote.Rows[0]["assujetti"].ToString();
            recouv.taxpayer_id = dttNote.Rows[0]["id"].ToString();
            recouv.number = dttNote.Rows[0]["number"].ToString();
            recouv.avenue_loc = dttNote.Rows[0]["avenue_loc"].ToString();
            recouv.quarter_sect = dttNote.Rows[0]["quarter_sect"].ToString();
            recouv.commune = dttNote.Rows[0]["commune"].ToString();
            recouv.town_dist = dttNote.Rows[0]["town_dist"].ToString();
            recouv.telephone = dttNote.Rows[0]["Telephone"].ToString();
            recouv.email = dttNote.Rows[0]["email"].ToString();
            recouv.copy = dttNote.Rows[0]["copy"].ToString();
            recouv.entity_name = dttNote.Rows[0]["entity_name"].ToString();
            recouv.signator = dttNote.Rows[0]["signator"].ToString();
            recouv.visa = dttNote.Rows[0]["visa"].ToString();
            recouv.function_signator = dttNote.Rows[0]["function_signator"].ToString();
            recouv.function_visa = dttNote.Rows[0]["function_visa"].ToString();
            recouv.adresse = dttNote.Rows[0]["AddressFiscEnt"].ToString();

            return recouv;
        }


    }
}