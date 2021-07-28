import { Module } from '@nestjs/common';
import { GraphQLModule} from '@nestjs/graphql';
// import {ClientesModule} from "./models/clientes/clientes.module";
 import { ClientesModule } from './models/clientes/clientes.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
    }),
    ClientesModule
  ]
})
export class AppModule {}
