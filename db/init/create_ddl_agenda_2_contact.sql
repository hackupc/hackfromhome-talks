-- Schema
CREATE SCHEMA agenda AUTHORIZATION agenda;

-- Sequence
CREATE SEQUENCE agenda_contact_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE agenda_contact_id_seq
    OWNER TO agenda;

-- Table
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
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE agenda_contact
    OWNER to agenda;
