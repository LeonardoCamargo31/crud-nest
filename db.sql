create table products (
 	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	price float(12) NOT NULL,
	PRIMARY KEY (id)
)

insert into products (name, price) values ('new bike', 5000)
insert into products (name, price) values ('skate', 2000)