using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Steadyworks.Work.WorkInterfaces;

namespace Steadyworks.Controllers
{
    [RoutePrefix("api/customers")]
    public class CustomerController : ApiController
    {
        private readonly ICustomer _customer;

        public CustomerController(ICustomer customer)
        {
            _customer = customer;
        }

        [HttpGet]
        [Route("quote/{message}")]
        public void AddQuote(string message)
        {
            
        }
    }
}
