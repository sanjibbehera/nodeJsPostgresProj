### Create the first base Table "DEV_ENV_APPL".

>> CREATE TABLE IF NOT EXISTS DEV_ENV_APPL (
  ID SERIAL PRIMARY KEY,
  environment_name VARCHAR(20) NOT NULL,
  application_name VARCHAR(50) NOT NULL
);

### Add Unique index to the above table.

>> CREATE UNIQUE INDEX IF NOT EXISTS dev_env_app_name_idx ON DEV_ENV_APPL (environment_name, application_name);

### Create the Tables holding the configuration related information for the dev environment for eg. DEV1 dev environment.

CREATE TABLE IF NOT EXISTS DEV1_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  sub_application_name VARCHAR(50),
  source_application VARCHAR(50),
  target_application VARCHAR(50),
  service_name VARCHAR(100) NOT NULL,
  operation_name VARCHAR(150) NOT NULL,
  service_name_version VARCHAR(150),
  service_type VARCHAR(20) NOT NULL,
  service_health_information VARCHAR(4000),
  application_support_type VARCHAR(50) NOT NULL,
  configuration_url VARCHAR(1000) NOT NULL,
  credentials_base64 VARCHAR(150),
  application_package_name VARCHAR(35),
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP NOT NULL,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX IF NOT EXISTS DEV1_CONFIG_DATA_unique_data_idx on DEV1_CONFIG_DATA (application_name, sub_application_name, service_name, operation_name, service_name_version, configuration_url);

### Create the Tables holding the configuration related information for the dev environment for eg. DEV2 dev environment.

CREATE TABLE IF NOT EXISTS DEV2_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  sub_application_name VARCHAR(50),
  source_application VARCHAR(50),
  target_application VARCHAR(50),
  service_name VARCHAR(100) NOT NULL,
  operation_name VARCHAR(150) NOT NULL,
  service_name_version VARCHAR(150),
  service_type VARCHAR(20) NOT NULL,
  service_health_information VARCHAR(4000),
  application_support_type VARCHAR(50) NOT NULL,
  configuration_url VARCHAR(1000) NOT NULL,
  credentials_base64 VARCHAR(150),
  application_package_name VARCHAR(35),
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP NOT NULL,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX IF NOT EXISTS DEV2_CONFIG_DATA_unique_data_idx on DEV2_CONFIG_DATA (application_name, sub_application_name, service_name, operation_name, service_name_version, configuration_url);


### Create the Tables holding the configuration related information for the dev1 db environment for eg. DEV1 dev DB environment.

CREATE TABLE IF NOT EXISTS DEV1_DB_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  appl_database_name VARCHAR(20) NOT NULL,
  appl_db_service_name VARCHAR(50) NOT NULL,
  appl_db_service_type VARCHAR(10) NOT NULL,
  appl_db_service_health_information VARCHAR(4000),
  appl_db_service_operation_health SMALLINT NOT NULL,
  appl_db_service_operation_healthchecktimestamp TIMESTAMP NOT NULL,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  appl_db_service_operation_conf_lastchanged TIMESTAMP,
  appl_db_service_details VARCHAR(50) NOT NULL,
  appl_db_package_name VARCHAR(35) NOT NULL
);

### Create unique index on the above table.
CREATE UNIQUE INDEX IF NOT EXISTS DEV1_DB_CONFIG_DATA_unique_data_idx on DEV1_DB_CONFIG_DATA (application_name, appl_database_name, appl_db_service_name, appl_db_service_type, appl_db_service_details, appl_db_package_name);

### Create the Tables holding the configuration related information for the dev2 db environment for eg. DEV2 dev DB environment.

CREATE TABLE IF NOT EXISTS DEV2_DB_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  appl_database_name VARCHAR(20) NOT NULL,
  appl_db_service_name VARCHAR(50) NOT NULL,
  appl_db_service_type VARCHAR(10) NOT NULL,
  appl_db_service_health_information VARCHAR(4000),
  appl_db_service_operation_health SMALLINT NOT NULL,
  appl_db_service_operation_healthchecktimestamp TIMESTAMP NOT NULL,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  appl_db_service_operation_conf_lastchanged TIMESTAMP,
  appl_db_service_details VARCHAR(50) NOT NULL,
  appl_db_package_name VARCHAR(35) NOT NULL
);

### Create unique index on the above table.
CREATE UNIQUE INDEX IF NOT EXISTS DEV2_DB_CONFIG_DATA_unique_data_idx on DEV2_DB_CONFIG_DATA (application_name, appl_database_name, appl_db_service_name, appl_db_service_type, appl_db_service_details, appl_db_package_name);
