# Password Generator with node

Description : Simple password generator build in full js runnable with node for personnal usage.<br>
**Warning!** : If you save your password with the option --save or -s, only the root user will access to the password for security reasons.

## Development

### 1. Clone the project
```sh
git clone https://github.com/Guillaume-FAURE/passwordgen-node.git //HTTPS
git clone git@github.com:Guillaume-FAURE/passwordgen-node.git //SSH
```
### 2. Install npm dependencies
```sh
npm i
```
### 3. Link the program in your computer
```sh
npm link
```
**Warning!** : you will probably need to have root permissions to link the programm if you installed node with root permissions.
to unlink just use in this repo
```sh
npm unlink
```
### 4. Run it from everywhere
To print help and know all the options
```sh
passwordgen-node -h
```
To run the program with initial configuration
```sh
passwordgen-node
```
**Warning!** : with the --save option the password will always be save in the file password.txt inside the repo, you can link it with
```sh
ln -s password.txt passwordgen-node/password.txt
```