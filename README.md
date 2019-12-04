# nodeJsPostgresProj

## CREATE Postgres DB and DB User for this project.

CREATE USER nodeadmin with encrypted password 'nodeadmin';

create database nodeappdb;

grant all privileges on database nodeappdb to nodeadmin;

alter role nodeadmin set client_encoding to 'utf8';

alter role nodeadmin set default_transaction_isolation to 'read committed';
