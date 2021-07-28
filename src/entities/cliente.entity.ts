import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Gasto} from "./gasto.entity";

@ObjectType()
@Entity({name: 'clientes'})
export class Cliente {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({name:"nome_empresa"})
  nome_empresa:string;

  @Field()
  @Column({name:"nome_completo"})
  nome_completo:string;

  @Field()
  @Column()
  email:string;

  @Field()
  @CreateDateColumn({ name: "created_at", type: "timestamp"})
  created_at: Date;

  @Field()
  @CreateDateColumn({ name: "updated_at", type: "timestamp"})
  updated_at: Date;

  // relacionamento gastos

  @OneToMany(()=> Gasto,gasto => gasto.clienteConnection)
  clienteConnection: Promise<Gasto[]>;
}
