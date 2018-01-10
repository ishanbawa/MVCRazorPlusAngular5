using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCAng.Startup))]
namespace MVCAng
{
  public partial class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      ConfigureAuth(app);
    }
  }
}
