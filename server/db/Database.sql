CREATE TYPE ROLE AS ENUM ('vet', 'assistant', 'receptionist', 'admin', 'customer');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULLm
    email VARCHAR(255) NOT NULL UNIQUE,
    role ROLE NOT NULL DEFAULT 'customer'
    registered_on DATE NOT NULL
);

CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(100) NOT NULL,
    breed VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    owner_id INT NOT NULL
    registered_on DATE NOT NULL,
    CONSTRAINT fk_users FOREIGN(owner_id) REFERENCES users(id)
);

-- Define statuses for appointments and treatments
CREATE TYPE APPOINTMENT_STATUS AS ENUM ('scheduled', 'completed', 'cancelled');
CREATE TYPE TREATMENT_STATUS AS ENUM ('pending', 'in progress', 'completed');


CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    registered_on DATE NOT NULL
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status APPOINTMENT_STATUS NOT NULL DEFAULT 'scheduled'
);

CREATE TABLE treatments (
    id SERIAL PRIMARY KEY,
    appointment_id INT NOT NULL,
    treatment_name VARCHAR(255) NOT NULL,
    status TREATMENT_STATUS NOT NULL DEFAULT 'pending',
    CONSTRAINT fk_appointments FOREIGN KEY (appointment_id) REFERENCES appointment(id)
);

