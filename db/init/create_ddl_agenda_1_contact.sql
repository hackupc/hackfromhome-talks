-- Sequence
CREATE SEQUENCE agenda_contact_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE agenda_contact_id_seq
    OWNER TO postgres;

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
    OWNER to postgres;

-- Insert
INSERT INTO agenda_contact VALUES (default, 'Albert', 'Suarez', 'https://randomuser.me/api/portraits/men/48.jpg', 'Cardedeu', '666543789', 'hi@asuarez.dev');
INSERT INTO agenda_contact VALUES (default, 'David', 'Aleu', 'https://randomuser.me/api/portraits/men/76.jpg', 'La Bisbal de Falset', '657890321', 'hi@alaamouch.dev');
INSERT INTO agenda_contact VALUES (default, 'Alaa', 'Moucharrafie', 'https://randomuser.me/api/portraits/men/35.jpg', 'Castello', '665775445', 'hi@daleu.dev');
INSERT INTO agenda_contact VALUES (default, 'Carlota', 'Catot', 'https://randomuser.me/api/portraits/women/35.jpg', 'Bellcaire Urgell', '678224531', 'hi@daleu.dev');
INSERT INTO agenda_contact VALUES (default, 'Victor', 'Perez', 'https://randomuser.me/api/portraits/men/40.jpg', 'Lloret de Mar', '654222333', 'hi@victorpm5.dev');
INSERT INTO agenda_contact VALUES (default, 'Elena', 'Ruiz', 'https://randomuser.me/api/portraits/women/40.jpg', 'Badalona', '654765111', 'hi@elena20ruiz.dev');
INSERT INTO agenda_contact VALUES (default, 'Bernat', 'Torres', 'https://randomuser.me/api/portraits/men/37.jpg', 'Argentona', '543777688', 'hi@bernatixer.dev');
INSERT INTO agenda_contact VALUES (default, 'Cori', 'Avila', 'https://randomuser.me/api/portraits/women/44.jpg', 'Barcelona', '678999887', 'hi@corico44.dev');
INSERT INTO agenda_contact VALUES (default, 'Gerard', 'Palomares', 'https://randomuser.me/api/portraits/men/41.jpg', 'Granollers', '678900041', 'hi@thepalo.dev');
INSERT INTO agenda_contact VALUES (default, 'Marina', 'Ramon', 'https://randomuser.me/api/portraits/women/10.jpg', 'Barcelona', '654377612', 'hi@marina.dev');
INSERT INTO agenda_contact VALUES (default, 'Andrea', 'Querol', 'https://randomuser.me/api/portraits/women/12.jpg', 'Tarragona', '61234444', 'hi@dreaqdp.dev');
INSERT INTO agenda_contact VALUES (default, 'Maria', 'Gonzalez', 'https://randomuser.me/api/portraits/women/11.jpg', 'Vic', '632177654', 'hi@mgonzc.dev');