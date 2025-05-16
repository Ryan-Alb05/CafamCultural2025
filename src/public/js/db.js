import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ralberto09',
  database: 'turismo_reservas',
    
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});



export default connection;