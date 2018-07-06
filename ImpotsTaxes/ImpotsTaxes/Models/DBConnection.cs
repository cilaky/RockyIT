using System.Text;
using System.Data;
using System.Data.SqlClient;
//using System.Windows.Forms;
//using CrystalDecisions.CrystalReports.Engine;

namespace ImpotsTaxes.Models
{
    public class DBConnection
    {
        private SqlConnection con;
        private SqlDataAdapter dta;
        private SqlCommand cmd;
        private DataSet dts;
        private DataTable dtt;
        private SqlDataReader dtr;
        private int num;

        public DBConnection()
        {
            con = new SqlConnection(@"Data Source=JUSTINKABANZA\KABANZA;Initial Catalog=Recouvrement;Integrated Security=True");
            
            cmd = new SqlCommand();
            dta = new SqlDataAdapter(cmd);
            dts = new DataSet();
        }

        public int RowNumber
        {
            set 
            {
                num=value;
            }
            get 
            {
                return num;
            }
          
        }
        public void Execute_Query(string Query)
        {
            cmd.CommandText = Query;
            con.Open();
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public DataTable Data_Source(string Query, string table)
        {
            cmd.CommandText = Query;
            con.Open();
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            dts.Clear();
            dta.Fill(dts, table);             
            con.Close();
            return dts.Tables[table];
        }

        public string Show_Data(string Query, string field)
        {
            cmd.CommandText = Query;
            con.Open();
            cmd.Connection = con;
            dtr = cmd.ExecuteReader();
            string value = "";
            if (dtr.Read())
            {            
                value = dtr[field].ToString();                
            }
            con.Close();
            return value;
        }

        public string Read_Table(string Query, string table, string field)
        {
            cmd.CommandText = Query;
            con.Open();
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            dta.Fill(dts, table);
            dtt = dts.Tables[table];
            con.Close();
            return dtt.Rows[num][field].ToString();
        }

        /*public ReportDocument Show_Report(string Query, string table, string RPTFile)
        {
            cmd.CommandText = Query;
            con.Open();
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            dta.Fill(dts, table);
            ReportDocument rd = new ReportDocument();
            rd.Load(RPTFile);
            rd.SetDataSource(dts.Tables[table]);
            con.Close();
            return rd;
            
        }*/
    }
}
