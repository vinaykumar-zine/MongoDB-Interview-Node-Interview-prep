const { MongoClient } = require('mongodb');


async function main() {
    const uri = "mongodb+srv://vkumarzine:kumar@cluster0.vj55x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);
    try{
        await client.connect(() => console.log("Mongodb connected"));

        await listDatabases(client);

    }catch(e){
        console.error(e);
    }finally{
        await client.close(() => { console.log("closing the client") })
    }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("databases ara as followes");

    databasesList.databases.forEach(element => {
        console.log(element);
    });

}

//mongoDB stores data in the form og bson document; bson is binary representation of json.

