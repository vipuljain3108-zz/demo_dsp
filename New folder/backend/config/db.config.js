module.exports = {
    HOST : "localhost",
    USER: "postgres",
    PASSWORD : "Jain@7503560505",
    DB : "dsptest",
    dialect : "postgres",
    pool : {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
};

//connection details 
// later we can add them in env also