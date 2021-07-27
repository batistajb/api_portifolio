import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GastosService } from './gastos.service';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';

@Resolver('Gasto')
export class GastosResolver {
  constructor(private readonly gastosService: GastosService) {}

  @Mutation('createGasto')
  create(@Args('createGastoInput') createGastoInput: CreateGastoInput) {
    return this.gastosService.create(createGastoInput);
  }

  @Query('gastos')
  findAll() {
    return this.gastosService.findAll();
  }

  @Query('gasto')
  findOne(@Args('id') id: number) {
    return this.gastosService.findOne(id);
  }

  @Mutation('updateGasto')
  update(@Args('updateGastoInput') updateGastoInput: UpdateGastoInput) {
    return this.gastosService.update(updateGastoInput.id, updateGastoInput);
  }

  @Mutation('removeGasto')
  remove(@Args('id') id: number) {
    return this.gastosService.remove(id);
  }
}
