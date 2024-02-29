module.exports= {
    HOST: 'localhost',
    PORT: '3306',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'libreria',
    dialect: 'mariadb',

    pool: {
        max: 10,
        min: 0,
        acquire: 40000,
        idle: 10000,
    }
}