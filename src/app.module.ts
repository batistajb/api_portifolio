import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { GastosModule } from './gastos/gastos.module';

@Module({
  imports: [ClientesModule, GastosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
