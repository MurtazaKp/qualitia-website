#######################################
## Development Setup on Local Machine## 
PgAdmin Port  : 8080
DB Port       : 5432
Frontend Port : 3000
Backend Port  : 1337

#Database Container
you can run docker-compose-db.yml to launch PostgreSQL and PgAdmin Container, you can also find database details in same file. 
To run PostgreSQL and PgAdmin Container you can run [ docker-compose -f docker-compose-db.yml up -d ] command and can open PgAdmin at [ http://<your local ip>:8080 ]
Import Database using PgAdmin or command 

#Frontend and Backend Container
Clone git repo in your system 
Go to the project folder 
Put .env file in frontend and backend folder 
To run frontend and backend container you can run [ docker-compose -f docker-compose-local.yml --project-name dev-cubyts up -d --build ] command
###########################################

####################################
## Development Setup on Dev Server## 

#Database Container
you can run docker-compose-db.yml to launch PostgreSQL and PgAdmin Container, you can also find database details in same file. 
To run PostgreSQL and PgAdmin Container you can run [ docker-compose -f docker-compose-db.yml up -d ] command and can open PgAdmin at [ http://<your local ip>:8080 ]
Import Database using PgAdmin or command 

#Nginx Container
clone nginx repo 
Go to the project folder 
Place SSL certificate (fullchain.pem & privkey.pem) in "ssl/cubyts.geexu.org" directory
Run nginx container using [ docker-compose up -d] command 

#Frontend and Backend Container
Clone git app project repo in server 
Go to the project folder 
Put .env file in frontend and backend folder 
To run frontend and backend container you can run [ docker-compose --project-name dev-cubyts up -d --build ] command

###################################
To update .env file
ssh into server with ubuntu user 
cd /data/projects/cubyts/cubyts-website
vim frontend/.env
vim backend/.env
