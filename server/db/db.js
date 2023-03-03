const Sequelize = require("sequelize");
const databaseName = "PLACEHOLDER"//PUT DB NAME HERE

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
	logging: false,
});

module.exports = db;