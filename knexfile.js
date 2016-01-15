// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/swords'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE
  }
};
