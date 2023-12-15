const { Sequelize } = require('sequelize')

// database
const dbUser = esgi_cloud_exam_18858_user;
const dbPassword = yKeZnFiLqTfQFZ0sqvgXUTWLI739uXOb;
const dbName = esgi_cloud_exam_18858;
const dbHost =dpg-clu1s68l5elc738868e0-a;
const dbPort = 5432;
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_18858_user:yKeZnFiLqTfQFZ0sqvgXUTWLI739uXOb@dpg-clu1s68l5elc738868e0-a.frankfurt-postgres.render.com/esgi_cloud_exam_18858',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;