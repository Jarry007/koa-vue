const creatUser = `create table if not exists users(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(20) NOT NULL,
   pass VARCHAR(32) NOT NULL,
   PRIMARY KEY (ID)
);`.replace(/[\r\n]/g,'')



module.exports = {
   creatUser
}