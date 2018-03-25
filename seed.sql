-- create database food_db;
use food_db;

-- -----------------------
delete from charityinfos;
INSERT into charityInfos 
(name, address, city, state, zip, contact, taxNumber, PreferredFood, 
email, mobile, twitter, instagram, contact_mobile, contact_email, contact_twitter, 
contact_instagram, username, password)

VALUES 
("Chicago Community Ministry","6525 N Clark St.","Chicago","IL",60626,"Mr. Smith","C123",1,
 "","(773)761-6688","","",1,1,0,0,"u","p"),
("South Loop Community Church", "1347 S State St", 
"Chicago", "IL", "60605","Mr. Smithe","C123",1,
 "","(312) 566-9076","","",1,1,0,0,"u","p"),
("Abundant Life MBC", "2306 W 69th St",
"Chicago", "IL", "60636","Mrs. Bono","C123",1,
 "","(773)434-7875","","",1,1,0,0,"u","p"),
("Inner-City Missions Network" , "7445 S South Chicago Ave",  
"Chicago", "IL", "60619", "Mrs. Bono","C123",1,
 "","(708) 417-6226","","",1,1,0,0,"u","p");


-- -----------------------
delete from donorinfos;
INSERT into donorinfos
 (name, address, city, state, zip, contact, PreferredFood, email, mobile, twitter, instagram, contact_mobile, contact_email, contact_twitter, contact_instagram, username, password) 
VALUES ("Food4Less Yards Plaza Shopping Center","4620 S Damen Ave","Chicago","IL",60609,"Mr Gomez",1,"m@food.com","(773) 376-0750","@mainfood","",true,true,false,false,"m","p"),
       ("Food4Less Washington Square","4821 W North Ave","Chicago","IL", 60639,"Ms McDougal",1,"p@food.com","(773)235-1783","@Wash","",true,true,false,false,"m","p"),
       ("Food4Less Main Street", "2400 West Main St", "Evanston", "IL", 60202, "Mr Balbow" , 1, "y@food.com", "(847)492-1904" ,"@main" , "", true, true,false,false,"m","p"),
       ("Mariano's Elmhurst", "678 N. York Street", "ELMHURST", "IL",60126,"Marie Lowl" , 1, "ml@food.com", "(630)782-0017" , "@main" , "", true, true,false,false,"m","p")
-- -----------------------






