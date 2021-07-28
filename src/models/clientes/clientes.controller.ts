import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "../../entities/cliente.entity";
import { Repository } from "typeorm";
import { ClientesService } from "./clientes.service";

@Controller()
export class ClientesController {

    constructor(private readonly ClientesService: ClientesService) {}


    @Get()
    async findAll(): Promise<string> {
        return `There are ${ await this.ClientesService.findAll() } existent messages`;
    }
}