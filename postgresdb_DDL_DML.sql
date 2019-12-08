### Create the first base Table "ENV_APPL".

>> CREATE TABLE env_appl (
  ID SERIAL PRIMARY KEY,
  environment_name VARCHAR(20) NOT NULL,
  application_name VARCHAR(50) NOT NULL
);

### Add Unique index to the above table.

>> CREATE UNIQUE INDEX env_app_name_idx on env_appl (environment_name, application_name);

### Create the Tables holding the configuration related information for the test environment for eg. E2E2 test environment.

CREATE TABLE E2E2_CONFIG_DATA (
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
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX E2E2_CONFIG_DATA_unique_data_idx on E2E2_CONFIG_DATA (application_name, sub_application_name, service_name, operation_name, service_name_version, configuration_url);

### Create the Tables holding the configuration related information for the test environment for eg. E2E1 test environment.

CREATE TABLE E2E1_CONFIG_DATA (
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
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX E2E1_CONFIG_DATA_unique_data_idx on E2E1_CONFIG_DATA (application_name, sub_application_name, service_name, operation_name, service_name_version, configuration_url);


### Create the Tables holding the configuration related information for the test db environment for eg. E2E2 test DB environment.

CREATE TABLE E2E2_DB_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  database_name VARCHAR(20) NOT NULL,
  service_name VARCHAR(50) NOT NULL,
  service_type VARCHAR(10) NOT NULL,
  service_health_information VARCHAR(4000),
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP,
  database_service_details VARCHAR(50) NOT NULL,
  database_package_name VARCHAR(35) NOT NULL
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX E2E2_DB_CONFIG_DATA_unique_data_idx on E2E2_DB_CONFIG_DATA (application_name, database_name, service_name, service_type, database_service_details, database_package_name);

### Create the Tables holding the configuration related information for the test db environment for eg. E2E1 test DB environment.

CREATE TABLE E2E1_DB_CONFIG_DATA (
  ID SERIAL PRIMARY KEY,
  application_name VARCHAR(50) NOT NULL,
  database_name VARCHAR(20) NOT NULL,
  service_name VARCHAR(50) NOT NULL,
  service_type VARCHAR(10) NOT NULL,
  service_health_information VARCHAR(4000),
  service_operation_health SMALLINT NOT NULL,
  service_operation_healthcheckTimestamp TIMESTAMP,
  installation_downtime SMALLINT DEFAULT 0,
  installation_startTimestamp TIMESTAMP,
  installation_finishTimestamp TIMESTAMP,
  service_operation_conf_lastchanged TIMESTAMP,
  database_service_details VARCHAR(50) NOT NULL,
  database_package_name VARCHAR(35) NOT NULL
);

### Create unique index on the above table.
>> CREATE UNIQUE INDEX E2E1_DB_CONFIG_DATA_unique_data_idx on E2E1_DB_CONFIG_DATA (application_name, database_name, service_name, service_type, database_service_details, database_package_name);