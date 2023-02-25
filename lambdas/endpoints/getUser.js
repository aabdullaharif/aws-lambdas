const Responses = require('../common/API_Responses');

exports.handler = async event =>{
    console.log(event);

    if(!event.pathParameters || !event.pathParameters.ID){
        return Responses._400({message: "missing User ID"});
    }

    let ID = event.pathParameters.ID;

    if(users[ID]){
        return Responses._200(users[ID]);
    }

    return Responses._400({message: 'No userId exits'})

}


const users = {
    1234: { name: 'Abdullah', age: 21, job: 'Developer'},
    1235: { name: 'Jasim', age: 22, job: 'Student'},
    1236: { name: 'Sohail', age: 32, job: 'Teacher'}
}