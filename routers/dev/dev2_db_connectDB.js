require('dotenv').config();
const { pool } = require('../../dbConnect');

const getDEV2DBConfig = (request, response) => {
    pool.query('SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM DEV2_db_config_data ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.json(results.rows);
      });
};

const getDEV2DBConfigById = (request, response) => {
    pool.query('SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM DEV2_db_config_data WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      });
};

const createDEV2DBConfig = (request, response) => {
    const {application_name, database_name, service_name, service_type, service_operation_health, service_operation_healthchecktimestamp, database_service_details, database_package_name } = request.body;

    pool.query('INSERT INTO DEV2_db_config_data ( application_name, database_name, service_name, service_type, service_operation_health, service_operation_healthchecktimestamp, database_service_details, database_package_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [application_name, database_name, service_name, service_type, service_operation_health, service_operation_healthchecktimestamp, database_service_details, database_package_name], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`New Entry in the Table DEV2_db_config_data added.`)
    })
};

const deleteDEV2DBConfigById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM DEV2_db_config_data WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Entry from Table DEV2_db_config_data deleted with ID: ${id}`)
    })
  }

const updateDEV2DBConfigById = (request, response) => {
  const id = parseInt(request.params.id)
  const { application_name, database_name, service_name, service_type, service_operation_health, service_operation_healthchecktimestamp, database_service_details, database_package_name } = request.body

  pool.query(
    'UPDATE DEV2_db_config_data SET application_name = $1, database_name = $2, service_name = $3, service_type = $4, service_operation_health = $5, service_operation_healthchecktimestamp= $6, database_service_details = $7, database_package_name = $8 WHERE id = $9',
    [application_name, database_name, service_name, service_type, service_operation_health, service_operation_healthchecktimestamp, database_service_details, database_package_name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Table DEV2_db_config_data modified with ID: ${id}`)
    }
  )
}

module.exports = {
    getDEV2DBConfig,
    getDEV2DBConfigById,
    createDEV2DBConfig,
    updateDEV2DBConfigById,
    deleteDEV2DBConfigById,
  }