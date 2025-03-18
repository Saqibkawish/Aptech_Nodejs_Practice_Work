
let bcrypt = require('bcryptjs');

let my_password = "killerunknown"
let salt = 13;
let encrypted_password = bcrypt.hashSync(my_password, salt);

// login logic check 

let check = bcrypt.compareSync(my_password,encrypted_password)

if (check) {
    console.log("password is correct");
}else{
    console.log("password is incorrect");
}

console.log(`Orginal Password ${my_password} \n Encrypted Password ${encrypted_password}`);