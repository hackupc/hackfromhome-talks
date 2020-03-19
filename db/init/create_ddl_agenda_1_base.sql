-- User
CREATE USER agenda WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  PASSWORD 'agenda1234';

-- Database
CREATE DATABASE agenda
    WITH
    OWNER = agenda
    ENCODING = 'utf8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default;

-- Role
ALTER ROLE agenda IN DATABASE agenda SET search_path TO agenda;