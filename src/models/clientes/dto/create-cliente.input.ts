import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {

  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'email do cliente' })
   readonly email: string;
}
