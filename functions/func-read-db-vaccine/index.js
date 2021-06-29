
const endpoint = process.env["cosmos_endpoint"]
const key = process.env["cosmos_key"]

const CosmosClient = require("@azure/cosmos").CosmosClient
const client = new CosmosClient({endpoint, key})
const database = client.database('db-vaccine')
const container = database.container('container-data')

module.exports = async function (context, req) {
    context.log('Function Webinar');

    const query = {
        query: 'Select * from c'
    }
    const { resources: items} = await container.items
     .query(query)
     .fetchAll()


    context.res = {
        status: 200, 
        body: items
    };
}