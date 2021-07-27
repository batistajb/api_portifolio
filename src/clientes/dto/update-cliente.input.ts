import { CreateClienteInput } from './create-cliente.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClienteInput extends PartialType(CreateClienteInput) {
  id: number;
}
