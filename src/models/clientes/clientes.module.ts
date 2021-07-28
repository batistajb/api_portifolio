import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientesService } from './clientes.service';
import { ClientesResolver } from './clientes.resolver';

@Module({
  providers: [ClientesResolver, ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
