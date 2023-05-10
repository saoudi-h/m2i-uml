require('dotenv').config();

module.exports = {
    app: {
        port: 5005,
        host: 'localhost',
    },
    db: {
        host: '127.0.0.1',
        port: '27017',
        name: '',
        logLevel: "",
        userName: '',
        userPwd: ''
    },
    client: {
        url: 'http://localhost:3000'
    },
    session:{
        maxMessages:10,
    }
}
