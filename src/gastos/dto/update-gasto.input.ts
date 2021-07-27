import { CreateGastoInput } from './create-gasto.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGastoInput extends PartialType(CreateGastoInput) {
  id: number;
}
