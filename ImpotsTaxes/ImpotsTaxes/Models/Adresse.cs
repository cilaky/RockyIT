using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImpotsTaxes.Models
{
    public class Adresse
    {
        public int nbre { get; set; }
        public string province { get; set; }        
        public string ville { get; set; }        
        public string commune { get; set; }        
        public string quartier { get; set; }        
        public string avenue { get; set; }
        public string numero { get; set; }
    }
}