import { Injectable, Logger } from '@nestjs/common'
import { createPool, Pool } from 'mysql2/promise'

@Injectable()
export class MySqlProvider {
  private readonly logger: Logger
  private readonly pool: Pool

  constructor() {
    this.logger = new Logger('MySqlProvider')
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'db',
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0,
    })
    this.logger.log('Initialized!')
  }

  async getValue(): Promise<any> {
    const conn = await this.pool.getConnection()
    const [results] = await conn.query('select * from products')
    return results
  }
}
