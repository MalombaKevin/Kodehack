import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })


// database config
const DBconfig = {
    user: 'sa',
    password:'KMalomba23;',
    database: 'kodehack',
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true,
    }
  }

  export default DBconfig