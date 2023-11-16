create database linuxws;

use linuxws;

create user 'user'@'%' identified by 'password';
grant all privileges on * . * to 'user';

create table names (
    name varchar(100) not null
);

insert into names value ('Maarten Marx');
