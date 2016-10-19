using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Steadyworks.Work.Base;
using Steadyworks.Work.WorkInterfaces;
using Steadyworks.Work.Works;

namespace Steadyworks
{
    public class Connection : IConnection
    {
        public string ConnectionString => "mongodb://steady:syeady1@ds059888.mlab.com:59888/steadyworks";
    }

    public static class DependenciesRegistration
    {
        public static void Register(UnityContainer container)
        {
            container.RegisterType<ICustomer, Customer>(new InjectionConstructor(new Connection()));
        }
    }
}