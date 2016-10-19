using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Steadyworks.Work.Base;
using Steadyworks.Work.WorkInterfaces;

namespace Steadyworks.Work.Works
{
    public class Customer : UnitOfWork, ICustomer
    {
        public Customer(IConnection connection) : base(connection)
        {

        }
    }
}
