DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    street VARCHAR NOT NULL,
    neighborhood VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    id_course INTEGER NOT NULL,
    FOREIGN KEY (id_course) REFERENCES courses(id)
);

DROP TABLE courses;
CREATE TABLE IF NOT EXISTS courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    hours VARCHAR CHECK (hours IN ('40h', '60h', '160h', '240h')) DEFAULT '160h'
);

DROP TABLE phones;
CREATE TABLE IF NOT EXISTS phones(
    number VARCHAR NOT NULL,
    student_id INTEGER NOT NULL,
    PRIMARY KEY (number, student_id),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

SELECT * FROM students;
INSERT INTO students (name, street, neighborhood, city, id_course) VALUES 
('Neji', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Shikamaru','Rua A', 'Bairro B', 'Cidade C', 1),
('Lee','Rua A', 'Bairro B', 'Cidade C', 2);

SELECT * FROM courses;
INSERT INTO courses (name, hours) VALUES
('Controle do Chakra', '40h'),
('Jutsu clone das sombras', '160h'),
('Jutsu de invocação', '240h');

SELECT students.name, courses.name AS course
FROM students INNER JOIN courses
ON students.id_course = courses.id;

INSERT INTO phones (number, student_id) VALUES
('(11) 4002-8922', 1),
('(11) 4002-8927', 1),
('(11) 4002-8929', 2),
('(16) 4002-8934', 3);

SELECT students.name, phones.number AS phone
FROM students INNER JOIN phones
ON students.id = phones.student_id;

DELETE FROM course WHERE id = 1;
