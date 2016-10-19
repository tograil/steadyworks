using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Steadyworks.Repository.Base
{
    public interface IEntity
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        string Id { get; set; }
    }
}
