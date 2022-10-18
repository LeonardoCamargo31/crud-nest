import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class MySqlProvider {
  private readonly logger: Logger
  constructor() {
    this.logger = new Logger('MySqlProvider')
    this.logger.log('Initialized!')
  }

  getValue(): string {
    return 'Value from MySql Provider!'
  }
}
