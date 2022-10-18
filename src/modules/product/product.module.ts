import { Module } from '@nestjs/common'
import { MySqlProvider } from 'src/database/mysql.provider'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
  controllers: [ProductController],
  providers: [ProductService, MySqlProvider],
})
export class ProductModule {}
