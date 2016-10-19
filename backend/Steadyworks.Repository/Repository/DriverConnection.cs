using MongoDB.Driver;

namespace Steadyworks.Repository.Repository
{
    public class DriverConnection
    {
        public readonly MongoUrl Url;

        public DriverConnection(string connectionString)
        {
            //TODO: see additional parameters
            var builder = new MongoUrlBuilder(connectionString);

            Url = builder.ToMongoUrl();
        }
    }
}
