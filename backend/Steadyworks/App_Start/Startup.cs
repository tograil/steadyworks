using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Practices.Unity;
using Owin;
using Steadyworks.DI;

[assembly: OwinStartup(typeof(Steadyworks.Startup))]

namespace Steadyworks
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Configure Web API for self-host. 
            var config = new HttpConfiguration();

            var container = new UnityContainer();
            DependenciesRegistration.Register(container);
            config.DependencyResolver = new UnityResolver(container);

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                "DefaultApi",
                "api/{controller}/{id}",
                new { id = RouteParameter.Optional }
            );

            app.UseWebApi(config);
        }
    }
}
