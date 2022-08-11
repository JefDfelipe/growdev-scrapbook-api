import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNotes1658877252372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notes',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'date',
                    type: 'timestamp',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes', true, true, true);
    };
};