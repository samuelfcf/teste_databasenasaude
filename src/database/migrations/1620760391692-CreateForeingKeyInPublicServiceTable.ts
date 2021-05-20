import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateForeingKeyInPublicServiceTable1620760391692 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'publicService',
            new TableForeignKey({
                name: 'FKUser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'FKUser')
    }

}
