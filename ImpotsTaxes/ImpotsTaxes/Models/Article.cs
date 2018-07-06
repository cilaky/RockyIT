using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImpotsTaxes.Models
{
    public class Article
    {
        public int nbre { get; set; }
        public string tax_id { set; get; }
        public string tax_name { set; get; }
        public string generating_fact { set; get; }
        public string periodicity { set; get; }
        public DateTime datevalidation { set; get; }
    }
}