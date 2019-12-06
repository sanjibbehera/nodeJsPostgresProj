# nodeJsPostgresProj

## CREATE Postgres DB and DB User for this project.

CREATE USER nodeadmin with encrypted password 'nodeadmin';

create database nodeappdb;

grant all privileges on database nodeappdb to nodeadmin;

alter role nodeadmin set client_encoding to 'utf8';

alter role nodeadmin set default_transaction_isolation to 'read committed';

## Install Nodemon module as global..

npm install -g nodemon

## Install the required Node modules to setup this Dashboard..

npm install --save-dev express

npm install --save-dev dotenv

npm install --save-dev pug

npm install --save-dev bootstrap

npm install --save-dev jquery

npm install --save-dev popper

npm install --save-dev pg

## Some important and handy GIT Commands to push/pull code from GITHUB to your local computer/laptop.

git clone https://github.com/sanjibbehera/nodeJsPostgresProj.git  

###The above cmd will clone the GITHUB repo to your personal desktop/laptop and the Master branch will be cloned, 
###if this is the correct branch, you are ready to start your work, or else use the below like cmd to pull 
###another branch artifacts by issuing the below command. I pulled the code from the development branch issuing the below cmd.

git checkout development  ### Here the development is the checkout branch where you want to make development. 

git add .

git commit -m "Added reqd modules"

git push origin development  ### Here development is the actual branch, you want to work on.

git pull origin development
