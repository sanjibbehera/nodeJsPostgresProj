require('dotenv').config();
const { pool } = require('../dbConnect');

const getE2E2DBConfig = (request, response) => {
    pool.query('SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM e2e2_db_config_data ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      });
};

const getE2E2DBConfigById = (request, response) => {
    pool.query('SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM e2e2_db_config_data WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      });
};

const createE2E2DBConfig = (request, response) => {
    const {application_name, database_name, service_name, service_type, service_operation_health, database_service_details, database_package_name } = request.body;

    pool.query('INSERT INTO e2e2_db_config_data ( application_name, database_name, service_name, service_type, service_operation_health, database_service_details, database_package_name) VALUES ($1, $2, $3, $4, $5, $6, $7)', [application_name, database_name, service_name, service_type, service_operation_health, database_service_details, database_package_name], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`New Entry in the Table e2e2_db_config_data added.`)
    })
};

const deleteE2E2DBConfigById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM e2e2_db_config_data WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Entry from Table e2e2_db_config_data deleted with ID: ${id}`)
    })
  }

const updateE2E2DBConfigById = (request, response) => {
  const id = parseInt(request.params.id)
  const { application_name, database_name, service_name, service_type, service_operation_health, database_service_details, database_package_name } = request.body

  pool.query(
    'UPDATE e2e2_db_config_data SET application_name = $1, database_name = $2, service_name = $3, service_type = $4, service_operation_health = $5, database_service_details = $6, database_package_name = $7 WHERE id = $8',
    [application_name, database_name, service_name, service_type, service_operation_health, database_service_details, database_package_name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Table e2e2_db_config_data modified with ID: ${id}`)
    }
  )
}

module.exports = {
    getE2E2DBConfig,
    getE2E2DBConfigById,
    createE2E2DBConfig,
    updateE2E2DBConfigById,
    deleteE2E2DBConfigById,
  }