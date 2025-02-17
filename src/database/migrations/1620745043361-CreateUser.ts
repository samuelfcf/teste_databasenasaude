import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1620745043361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'login',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'age',
                        type: 'int'
                    },
                    {
                        name: 'gender',
                        type: 'enum',
                        enum: [
                            "masculino",
                            "feminino",
                            "outro"
                        ]
                    },
                    {
                        name: 'martialStatus',
                        type: 'enum',
                        enum: [
                            "solteiro",
                            "casado",
                            "união estável",
                            "divorciado"
                        ]
                    },
                    {
                        name: 'isPregnant',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'isLactating',
                        type: 'boolean',
                        isNullable: true
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
