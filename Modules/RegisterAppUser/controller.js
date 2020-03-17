const BaseController = require('../../Base/controller')
const registerAppUser = require('./model')

class RegisterAppUser extends BaseController {
    async registerAppUser(req, res) {
        // getting object for post
        const { ph, client } = req.body;
        // mapping all the properties in client object through client model
        const clientObj = await registerAppUser.findAll({
            where: {
                Ph: ph,
                Client: client
            },
        }).then(clientObj => {
            if (!clientObj.Ph || !clientObj.Client) {
               return res.status(400).json({
               " RegisterAppUserResult ": false
        }
        )
            } else {
                // **to check international formate
            //     if (ph is in international formate & valid) {
            //        if(user is already register) {
                // **yes
                // 1-Delete User from Block list (db)	( call the store procedure name spne_DeleteUserBlockedStateByPhoneNumber ) Param (phone Number)
                  
                // 2-Update user device info (db)
                // 3-Change User Device Key
                // 4-Update User Account (voipApi)
            // }else {
                //  1- Delete User from block list
                // 2-Create User Directory (profile image) Create User Directory (profile)Param (phone Number)

                // *3-Register User On Xmpp
// a)	Phone Number
// A string containing the phone number. This is used to register user on XMPP server.
// b)	Device Key
// A string containing generated device key (password) for xmpp registration

// Returns 
//   true if user account is successfully registered on XMPP server; otherwise, false.*


//                 *4)	Update User Device Info ( call the store procedure )
// Param
  
// Inserts or updates the user's device information in the database. If a record does not exist, it creates that record and if a record already exists then it updates that record.

// a)	userID   
//      A string containing the user's phone number as user id
// b)	applicationID    
//      An string containing the application id
// c)	 applicationVersion 
//       A string containing application version
// d)	deviceInfo  
//      An object of DeviceInfo class that contains the device information 
// e)	isTransactional  
//      A bool if true, is telling about this method is a part of a transaction, otherwise false.  
// f)	Insert Update All Fields  
//      A bool if true, is telling about whether method can enter a new record or update the      whole record. If false, it can only update some fields not whole record

//  Returns  
// true if user's device information is successfully updated; otherwise false*
                
                
//                * 5)	Register User (Neeo Voip Api)

// URL : http://rtsip.neeopal.com/NeoWeb/register.php
// Method :       POST
// Query Parameter:
// 1)	mode (enum)
//            Add = 1,
//            Get = 2,
//            Set = 3
    
// 2)	mob (string )
// A string containing phone number for registering account

// 3)	pass (string)
// A string containing password for registering account*


            // }
            // }
            // else {
            //         return
            //     }
            }
        })
       

    }

}