import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Cliente} from "./cliente.entity";

@ObjectType()
@Entity({name: 'gastos'})
export class Gasto {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Float)
  @Column({ name: "valor", precision: 10, scale: 2 })
  valor: number;

  @Field(() => Int)
  @Column({ name: "cliente_id"} )
  cliente_id: number;

  @Field()
  @CreateDateColumn({ name: "created_at", type: "timestamp"})
  created_at: Date;

  @Field()
  @CreateDateColumn({ name: "updated_at", type: "timestamp"})
  updated_at: Date;


  @ManyToOne(
      () => Cliente,
      cliente => cliente.clienteConnection,
      { primary: true},
      )
  @JoinColumn({name: 'cliente_id '})
  clienteConnection: Promise<Cliente>


}
