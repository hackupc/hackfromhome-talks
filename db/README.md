# Hack From Home: Database

This module contains the needed configuration for setting up the PostgreSQL database.

## Agenda database

Inside the initialization [SQL script](init/create_ddl_agenda_1_contact.sql) you can find all the needed commands for starting up the needed tables for this project.

### Contact sequence

This sequence is being using for generating identifiers for the contact entity (explained below).

```sql
CREATE SEQUENCE agenda_contact_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
```

### Contact table

This SQL table contains all the needed information related to a contact.

```sql
CREATE TABLE agenda_contact
(
    id integer NOT NULL DEFAULT nextval('agenda_contact_id_seq'::regclass),
    name character varying(128) NOT NULL COLLATE pg_catalog."default",
    last_name character varying(128) NOT NULL COLLATE pg_catalog."default",
    image_url character varying(128) NOT NULL COLLATE pg_catalog."default",
    address character varying(128) NOT NULL COLLATE pg_catalog."default",
    phone_number character varying(128) NOT NULL COLLATE pg_catalog."default",
    email character varying(128) NOT NULL COLLATE pg_catalog."default",
    CONSTRAINT agenda_contact_pkey PRIMARY KEY (id)
);
```

### Insert values

Some initialization variables have been added for not having an empty table at the very beginning of the application.

```sql
INSERT INTO agenda_contact VALUES (
	default, 
  'Albert', 
  'Suarez', 
  'https://randomuser.me/api/portraits/men/48.jpg', 
  'Cardedeu', 
  '666543789', 
  'hi@asuarez.dev'
);
```

