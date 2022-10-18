import { Inject, Injectable } from '@nestjs/common'
import { MySqlProvider } from 'src/database/mysql.provider'

@Injectable()
export class ProductService {
  constructor(@Inject('DATABASE') private readonly mysql: MySqlProvider) {}
  async findAll(): Promise<any> {
    const result = await this.mysql.getValue()
    return result
  }
}
