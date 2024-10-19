import mysql from 'mysql2/promise';

export const db = await mysql.createConnection('mysql://root:root@localhost:3306/productos')