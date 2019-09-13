CREATE TABLE simproduct (
name varchar(40) NOT NULL,
image_URL text Not NULL,
price integer NOT NULL );

INSERT INTO simproduct (name, image_URL, price)
VALUES
('Very Large Cow', 'pretendurl', '10000');

SELECT * FROM simproduct;