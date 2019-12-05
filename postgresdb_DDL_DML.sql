### Create the first base Table.

>> CREATE TABLE env_appl (
  ID SERIAL PRIMARY KEY,
  environment_name VARCHAR(20),
  application_name VARCHAR(50)
);

### Add Unique infdex to the above table.

>> CREATE UNIQUE INDEX env_app_name_idx on env_appl (environment_name, application_name);
