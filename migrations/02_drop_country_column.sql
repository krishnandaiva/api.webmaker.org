BEGIN;

ALTER TABLE users
DROP COLUMN country;

COMMIT;