import bcrypt from 'bcrypt';

export function pwdHasher(pwd:string){

// Define a password to hash
const password = pwd;

// Generate a salt
const saltRounds = 10;
const hashSalt = bcrypt.genSaltSync(saltRounds);

// Hash the password with the salt
const hashedPassword = bcrypt.hashSync(password, hashSalt);

return ({
    hashedPassword,
    hashSalt
})
}

export function pwdConfirm(password:string, hash:string){

return bcrypt.compareSync(password, hash);

// Log the result to the console

}
