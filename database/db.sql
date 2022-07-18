-- creando tabla de tareas

CREATE TABLE tasks(
  id int not null auto_increment,
  title varchar(20) not null,
  description varchar(300),
  done boolean not null default 0, 
  createAt timestamp not null default current_timestamp
);