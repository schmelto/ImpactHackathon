CREATE TABLE filter_mietobjekt (
	objektid INT8 NOT NULL DEFAULT unique_rowid(),
	filterobjekt INT8 NOT NULL DEFAULT unique_rowid(),
	musthave BOOL NOT NULL,
	valfrom INT8 NOT NULL,
	valto INT8 NOT NULL,
	CONSTRAINT "primary" PRIMARY KEY (objektid ASC, filterobjekt ASC),
	FAMILY "primary" (objektid, filterobjekt, musthave, valfrom, valto)
);

CREATE TABLE filter_nutzer (
	userid INT8 NOT NULL DEFAULT unique_rowid(),
	filterobjekt INT8 NOT NULL DEFAULT unique_rowid(),
	musthave BOOL NOT NULL,
	valfrom INT8 NOT NULL,
	valto INT8 NOT NULL,
	CONSTRAINT "primary" PRIMARY KEY (userid ASC, filterobjekt ASC),
	FAMILY "primary" (userid, filterobjekt, musthave, valfrom, valto)
);

CREATE TABLE filterobjekt (
	filterobjekt INT8 NOT NULL DEFAULT unique_rowid(),
	beschreibung STRING NOT NULL,
	CONSTRAINT "primary" PRIMARY KEY (filterobjekt ASC),
	FAMILY "primary" (filterobjekt, beschreibung)
);

CREATE TABLE matches (
	userid INT8 NOT NULL DEFAULT unique_rowid(),
	objektid INT8 NOT NULL DEFAULT unique_rowid(),
	match BOOL NULL,
	CONSTRAINT "primary" PRIMARY KEY (userid ASC, objektid ASC),
	FAMILY "primary" (userid, objektid, match)
);

CREATE TABLE mietobjekt (
	objektid INT8 NOT NULL DEFAULT unique_rowid(),
	city_area STRING NOT NULL,
	address STRING NOT NULL,
	CONSTRAINT "primary" PRIMARY KEY (objektid ASC),
	FAMILY "primary" (objektid, city_area, address)
);

CREATE TABLE nutzer (
	userid INT8 NOT NULL DEFAULT unique_rowid(),
	email STRING NOT NULL,
	vorname STRING NOT NULL,
	nachname STRING NOT NULL,
	passwort STRING NOT NULL,
	geburtsdatum DATE NOT NULL,
	nutzerkategorie INT8 NOT NULL,
	verifiziert BOOL NULL DEFAULT false,
	hat_wohnung BOOL NULL,
	CONSTRAINT "primary" PRIMARY KEY (userid ASC),
	FAMILY "primary" (userid, email, vorname, nachname, passwort, geburtsdatum, nutzerkategorie, verifiziert, hat_wohnung)
);

CREATE TABLE nutzerkategorie (
	nutzerkategorie INT8 NOT NULL DEFAULT unique_rowid(),
	beschreibung STRING NOT NULL,
	CONSTRAINT "primary" PRIMARY KEY (nutzerkategorie ASC),
	FAMILY "primary" (nutzerkategorie, beschreibung)
);

INSERT INTO filterobjekt (filterobjekt, beschreibung) VALUES
	(1, 'Raucher'),
	(2, 'nr_of_roommates'),
	(3, 'price_in_EUR'),
	(4, 'square_meters'),
	(5, 'available_from'),
	(6, 'available_to'),
	(7, 'Kindergarten'),
	(8, 'Schule'),
	(9, 'Supermarkt'),
	(10, 'Shopping'),
	(11, 'parken'),
	(12, 'fitness'),
	(13, 'natur');

INSERT INTO nutzerkategorie (nutzerkategorie, beschreibung) VALUES
	(1, 'Vermieter'),
	(2, 'Familie'),
	(3, 'Einzelperson'),
	(4, 'Paar'),
	(5, 'HartzIV');
