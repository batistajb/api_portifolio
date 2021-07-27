import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientesService } from './clientes.service';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Resolver('Cliente')
export class ClientesResolver {
  constructor(private readonly clientesService: ClientesService) {}

  @Mutation('createCliente')
  create(@Args('createClienteInput') createClienteInput: CreateClienteInput) {
    return this.clientesService.create(createClienteInput);
  }

  @Query('clientes')
  findAll() {
    return this.clientesService.findAll();
  }

  @Query('cliente')
  findOne(@Args('id') id: number) {
    return this.clientesService.findOne(id);
  }

  @Mutation('updateCliente')
  update(@Args('updateClienteInput') updateClienteInput: UpdateClienteInput) {
    return this.clientesService.update(updateClienteInput.id, updateClienteInput);
  }

  @Mutation('removeCliente')
  remove(@Args('id') id: number) {
    return this.clientesService.remove(id);
  }
}
