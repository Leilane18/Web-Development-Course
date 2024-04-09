--DDL
DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  age NUMERIC
);

--DML
INSERT INTO students (name, cpf, age) 
VALUES ('Leilane Henrique', '124.386.940-48', 24);
