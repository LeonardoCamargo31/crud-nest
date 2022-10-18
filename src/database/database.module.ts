import { DynamicModule, Global, Module } from '@nestjs/common'
import { MySqlProvider } from './mysql.provider'

@Global() // modulo global
@Module({})
export class DatabaseModule {
  // padrão do nest, retornar um módulo dinamico
  static forRoot(): DynamicModule {
    const connectionFactory = {
      provide: 'DATABASE',
      useFactory: () => {
        return new MySqlProvider()
      },
    }
    return {
      module: DatabaseModule,
      providers: [connectionFactory],
      exports: ['DATABASE'], // nesse caso quero esse provide
    }
  }
}
