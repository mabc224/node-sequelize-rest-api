const development = {
  database: {
    username: process.env.PGUSER || 'postgres',
    dbname: process.env.PGDATABASE || 'sample',
    password: process.env.PGPASSWORD || '',
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    dialect: 'postgres',
    DATABASE_URL: process.env.DATABASE_URL,
  },
  jwtSecret: process.env.JWT_SECRET || 'f!DT3[i+Zl(W}17:%@]Tly*#/F&&L',
  appPort: process.env.PORT || 3000,
  SWAPI_BASE_URL: 'https://swapi.co/api',
};

const production = {
  database: {
    username: process.env.PGUSER,
    dbname: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    DATABASE_URL: process.env.DATABASE_URL,
  },
  jwtSecret: process.env.JWT_SECRET || 'f!DT3[i+Zl(W}17:%@]Tly*#/F&&L',
  appPort: process.env.PORT || 3000,
  SWAPI_BASE_URL: 'https://swapi.co/api',
};


module.exports = global.process.env.NODE_ENV === 'production' ? production : development;
