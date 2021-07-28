import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import {Cliente} from "../../entities/cliente.entity";

@Injectable()
export class ClientesService {

  create(createClienteInput: CreateClienteInput) {
    return 'This action adds a new cliente';
  }

  async findAll() {
    return [
      {
        id: 1,
        email: "joao@batista.com"
      }
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteInput: UpdateClienteInput) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
