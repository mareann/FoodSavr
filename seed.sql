-- create database food_db;
use food_db;
-- SELECT * FROM charityInfos;
 insert into charityInfos 
(name, address, city, state, zip, contact, taxNumber, PreferredFood, email, mobile, twitter, instagram, contact_mobile, contact_email, contact_twitter, contact_instagram, username, password)
 values ("Local Pantry 34th Street","134 Main","Chicago","IL",60001,"joe jones","IL14555",1,"feed@feed.com","3125551212","@feed","",true,true,false,false,"pantry34","password");
 insert into donorinfos
 (name, address, city, state, zip, contact, PreferredFood, email, mobile, twitter, instagram, contact_mobile, contact_email, contact_twitter, contact_instagram, username, password)
 values("Restaurant Main Ave","1233 Main Ave","Chicago","IL",60643,"Mr Assistant",1,"mainfood@food.com","3125551212","@mainfood","",true,true,false,false,"mainfood","password")