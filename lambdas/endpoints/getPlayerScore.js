const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event =>{
    console.log('event', event);

    if(!event.pathParameters || !event.pathParameters.ID){
        return Responses._400({message: 'No Player exit'})
    }

    let ID = event.pathParameters.ID;

    const user = await Dynamo.get(ID, tableName).catch(err=>{
        console.log('error in dynamo get', err);

        return null;
    })

    if(!user){
        return Responses._400({message: 'No user found in dyanmo by ID'})
    }

    return Responses._200({user});

}