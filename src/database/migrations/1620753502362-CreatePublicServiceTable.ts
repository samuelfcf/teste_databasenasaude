import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePublicServiceTable1620745769539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'publicService',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: 'institution',
                        type: 'varchar'
                    },
                    {
                        name: 'yearOfStart',
                        type: 'int'
                    },
                    {
                        name: 'carrer',
                        type: 'enum',
                        enum: [
                            "magistério superior",
                            "magistério do ensino básico, técnico e tecnológico",
                            "técnico-administrativo em educação"
                        ]
                    },
                    {
                        name: 'sector',
                        type: 'varchar'
                    },
                    {
                        name: 'modalityOfWork',
                        type: 'enum',
                        enum: [
                            "presencial",
                            "híbrido",
                            "teletrabalho"
                        ]
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('publicService');
      
    }
}
