using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace ImpotsTaxes.Models
{
    public class Recovery
    {
        public int nbre { get; set; }
        public string assessment_id { get; set; }
        public string taxpayer { get; set; }
        public string taxpayer_id { get; set; }
        public string adresse { get; set; }
        public string tax_id { get; set; }
        public string tax_name { get; set; }
        public string entity_id { get; set; }
        public string entity_name { get; set; }
        public string assessment_date { get; set; }
        public string payment_date { get; set; }
        public double amount_FC { get; set; }
        public double amount_USD { get; set; }
        public string bank { get; set; }
        public string receipt_number { get; set; }
        public string letter_number { get; set; }
        public string town_dist { get; set; }
        public string commune { get; set; }
        public string quarter_sect { get; set; }
        public string avenue_loc { get; set; }
        public string number { get; set; }
        public string email { get; set; }
        public string telephone { get; set; }
        public string letter_date { get; set; }
        public string place { get; set; }
        public string copy { get; set; }
        public string validation_date { get; set; }
        public double amount { get; set; }
        public string currency { get; set; }        
        public string signator { get; set; }
        public string visa { get; set; }
        public string function_signator { get; set; }
        public string function_visa { get; set; }
        public string reference { get; set; }
        public string reference_number { get; set; }
        public int months { get; set; }
        public string huissier { get; set; }
        public string descript { get; set; }
        public string summons_date { get; set; }


        //Montant et penalite
        public double PrincFC { get; set; }
        public double PrincUSD { get; set; }
        public double PenProvFC { get; set; }
        public double PenProvUSD { get; set; }
        public double PenDGRNKFC { get; set; }
        public double PenDGRNKUSD { get; set; }
        public double TotProvFC { get; set; }
        public double TotProvUSD { get; set; }
        public double TotDGRNKFC { get; set; }
        public double TotDGRNKUSD { get; set; }
    }

  
}
