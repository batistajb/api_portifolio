import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClientesTable1627483072361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'clientes',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome_completo',
                    type: 'varchar'
                },
                {
                    name: 'nome_empresa',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'telefone',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clientes');
    }


}
