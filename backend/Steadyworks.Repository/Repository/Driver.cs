using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Steadyworks.Repository.Repository
{
    public class Driver
    {
        private readonly DriverConnection _driverConnection;
        private readonly MongoClient _client;

        public Driver(string connectionString)
        {
            _driverConnection = new DriverConnection(connectionString);
            _client = new MongoClient(_driverConnection.Url);
        }

        public IMongoDatabase Database => _client.GetDatabase(_driverConnection.Url.DatabaseName);
    }
}
