INSERT INTO Users
VALUES 
	('Clarke Walker', 'clarke.w', 'Love000', 'clarke.walker@gmail.com'),  
	('Meredith Grey', 'meredith.grey', 'Love001', 'meredith.grey@gmail.com'), 
    ('Alex Karev', 'alex.karev', 'Love200', 'alex.karev@gmail.com'), 
    ('Isobel Stevens', 'izzy123', 'Love300', 'izzy123@gmail.com'), 
    ('George O''Malley', 'georgie', 'Love400', 'georgie41@gmail.com'), 
    ('Steve Harrington', 'stevie01', 'Love500', 'steve01@gmail.com'), 
    ('Stephen King', 'scaremaster', 'Spook100', 'scaremaster@gmail.com'), 
    ('Jack Murphy', 'jacktheripper', 'Kill100', 'jackther@gmail.com'), 
    ('Michael Meyers', 'mike.meyers', 'Kill200', 'mikey@gmail.com'), 
    ('Josephine Lockeheart', 'josiepoo', 'Love600', 'josiepoo@gmail.com'), 
    ('Tony Stark', 'iamironman', 'Love3000', 'tony.stark@gmail.com'),
    ('Arya Stark', 'nofacewoman', 'Kill300', 'agirlhasnoname@gmail.com'), 
    ('Steve Rogers', 'captmurica', 'Just100', 'americasass@gmail.com'), 
    ('Peter Parker', 'friendlyspider', 'Cute100', 'idontfeelgood@gmail.com'), 
    ('Natasha Romanoff', 'blackwidow', 'Kill400', 'shouldvebeenhawkeye@gmail.com');

INSERT INTO Moods
VALUES 
	('happy', 3), 
    ('productive', 3), 
    ('excited', 3), 
    ('usual', 1), 
    ('sad', 0), 
    ('angry', 0), 
    ('stressed', 0), 
    ('tired', 0), 
    ('neutral', 1), 
    ('chill', 3), 
    ('exhausted', 0), 
    ('fine', 1), 
    ('awesome', 5), 
    ('best day ever', 5), 
    ('worst day ever', -5), 
    ('extremely happy', 4);
    
INSERT INTO Habits 
VALUES 
	(1, 'Exercise', True), 
	(2, 'Floss', True), 
    (3, 'Sleep for 7-9 hours', True), 
    (4, 'Meditate', True), 
    (5, 'Take Vitamins', TRUE), 
    (6, 'No Junk Food', True),
    (7, 'Check Bank Account', True),
    (8, 'Call Mom', True),
    (9, 'Deposit Checks', True),
    (10, 'Facemask', True),
    (11, 'Yoga', True),
    (12, 'Call brother', True),
    (13, 'Limit Caffeine', False),
    (14, 'Hairmask', True),
    (15, 'Drink protein shake', False);
    
INSERT INTO Todos
VALUES 
	(1, 'HW1 CS157a', True), 
    (2, 'HW2 CS157a', True), 
    (3, 'HW3 CS157a', True), 
    (4, 'HW4 CS157a', True), 
    (5, 'HW5 CS157a', True), 
    (6, 'HW6 CS157a', True), 
    (7, 'Send package', True), 
    (8, 'Go DMV', True), 
    (9, 'HW1 CS122', True), 
    (10, 'HW2 CS122', True), 
    (11, 'HW3 CS122', True), 
    (12, 'HW4 CS122', True), 
    (13, 'HW5 CS122', True), 
    (14, 'HW1 CS100W', True), 
    (15, 'HW2 CS100W', True); 

INSERT INTO Moods_of_the_day
VALUES 
	(1, '2019-10-01', 'happy'), 
    (2, '2019-10-02', 'sad'), 
    (3, '2019-10-03', 'usual'), 
    (4, '2019-10-04', 'productive'), 
    (5, '2019-10-05', 'sad'), 
    (6, '2019-10-06', 'usual'), 
    (7, '2019-10-07', 'happy'), 
    (8, '2019-10-08', 'tired'), 
    (9, '2019-10-09', 'usual'), 
    (10, '2019-10-10', 'excited'), 
    (11, '2019-10-11', 'angry'), 
    (12, '2019-10-12', 'usual'), 
    (13, '2019-10-13', 'productive'), 
    (14, '2019-10-14', 'happy'), 
    (15, '2019-10-15', 'usual');
    
INSERT INTO Users_have_moods
VALUES 
	(1, 'clarke.w'), 
    (2, 'meredith.grey'), 
    (3, 'alex.karev'), 
    (4, 'izzy123'),
    (5, 'georgie'),
    (6, 'stevie01'), 
    (7, 'scaremaster'), 
    (8, 'jacktheripper'),
    (9, 'mike.meyers'), 
    (10, 'josiepoo'), 
    (11, 'iamironman'), 
    (12, 'nofacewoman'), 
    (13, 'captmurica'), 
    (14, 'friendlyspider'), 
    (15, 'blackwidow');
    
INSERT INTO Users_create_habits
VALUES 
	(1, 'clarke.w'), 
    (2, 'meredith.grey'), 
    (3, 'alex.karev'), 
    (4, 'izzy123'),
    (5, 'georgie'),
    (6, 'stevie01'), 
    (7, 'scaremaster'), 
    (8, 'jacktheripper'),
    (9, 'mike.meyers'), 
    (10, 'josiepoo'), 
    (11, 'iamironman'), 
    (12, 'nofacewoman'), 
    (13, 'captmurica'), 
    (14, 'friendlyspider'), 
    (15, 'blackwidow');
   
INSERT INTO Users_create_todos
VALUES 
	(1, 'clarke.w'), 
    (2, 'meredith.grey'), 
    (3, 'alex.karev'), 
    (4, 'izzy123'),
    (5, 'georgie'),
    (6, 'stevie01'), 
    (7, 'scaremaster'), 
    (8, 'jacktheripper'),
    (9, 'mike.meyers'), 
    (10, 'josiepoo'), 
    (11, 'iamironman'), 
    (12, 'nofacewoman'), 
    (13, 'captmurica'), 
    (14, 'friendlyspider'), 
    (15, 'blackwidow');

INSERT INTO Users_completes_habits
VALUES 
	(1, 'clarke.w', '2019-10-01'), 
    (2, 'clarke.w', '2019-10-01'), 
    (1, 'clarke.w', '2019-10-02'), 
    (1, 'clarke.w', '2019-10-03'), 
    (1, 'clarke.w', '2019-10-04'), 
    (1, 'clarke.w', '2019-10-05'), 
    (1, 'clarke.w', '2019-10-06'),
    (1, 'clarke.w', '2019-10-07'), 
    (1, 'clarke.w', '2019-10-08'), 
    (2, 'clarke.w', '2019-10-02'), 
    (2, 'clarke.w', '2019-10-08'), 
    (3, 'clarke.w', '2019-10-01'), 
    (4, 'clarke.w', '2019-10-01'),
    (1, 'alex.karev', '2019-10-01'), 
    (2, 'alex.karev', '2019-10-01'); 
    
INSERT INTO Users_completes_todos
VALUES 
	(1, 'clarke.w', '2019-10-01'), 
    (2, 'clarke.w', '2019-10-01'), 
    (1, 'clarke.w', '2019-10-02'), 
    (1, 'clarke.w', '2019-10-03'), 
    (1, 'clarke.w', '2019-10-04'), 
    (1, 'clarke.w', '2019-10-05'), 
    (1, 'clarke.w', '2019-10-06'),
    (1, 'clarke.w', '2019-10-07'), 
    (1, 'clarke.w', '2019-10-08'), 
    (2, 'clarke.w', '2019-10-02'), 
    (2, 'clarke.w', '2019-10-08'), 
    (3, 'clarke.w', '2019-10-01'), 
    (4, 'clarke.w', '2019-10-01'),
    (1, 'alex.karev', '2019-10-01'), 
    (2, 'alex.karev', '2019-10-01'); 

	
  
    