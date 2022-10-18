import { Injectable } from '@nestjs/common'
import { MySqlProvider } from 'src/database/mysql.provider'

@Injectable()
export class ProductService {
  constructor(private readonly mysql: MySqlProvider) {}
  async findAll(): Promise<any> {
    console.log(this.mysql.getValue())
    return [{ id: 1 }, { id: 2 }]
  }
}
