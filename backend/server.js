const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const port = 3000;

// Konfigurasi koneksi PostgreSQL
const pool = new Pool({
  host: 'postgres',
  user: 'postgres',
  password: 'rahasiasekali',
  database: 'myapp'
});

// Konfigurasi Redis
const redisClient = redis.createClient({
  host: 'redis'
});

app.get('/', (req, res) => {
  res.json({ message: 'Backend Server Aktif!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
