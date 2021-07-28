import { CreateClienteInput } from './create-cliente.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClienteInput extends PartialType(CreateClienteInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'email do cliente' })
  readonly email: string;
}
