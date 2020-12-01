// const initBase = `drop database node;
// create database node;
// use node;
// `

const creatUser = `create table if not exists users(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(20) NOT NULL unique,
   pass VARCHAR(32) NOT NULL,
   createtime DATETIME DEFAULT CURRENT_TIMESTAMP, 
   PRIMARY KEY (ID)
) DEFAULT CHARSET 'utf8';`.replace(/[\r\n]/g,'')


const creatList = `create table if not exists list(
   id INT NOT NULL AUTO_INCREMENT,
   user VARCHAR(20),
   says VARCHAR(140),
   PRIMARY KEY (ID),
   createtime DATETIME DEFAULT CURRENT_TIMESTAMP,
   foreign key (user) references users (name)
) DEFAULT CHARSET 'utf8';`.replace(/[\r\n]/g,'')


const creatRelation = `create table if not exists relation(
   id INT NOT NULL AUTO_INCREMENT,
   userid INT,
   agreeid INT,
   PRIMARY KEY (id),
   createtime DATETIME DEFAULT CURRENT_TIMESTAMP,
   foreign key (userid) references users (id) on delete cascade on update cascade,
   foreign key (agreeid) references list (id) on delete cascade on update cascade,
   UNIQUE(userid,agreeid)
)`

// const create

module.exports = {
   creatUser,creatList,creatRelation
}