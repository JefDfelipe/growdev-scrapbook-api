"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1658877234776 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUser1658877234776 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'notes_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedTableName: 'notes',
                    referencedColumnNames: ['id'],
                    columnNames: ['notes_id']
                })
            ]
        }));
    }
    ;
    async down(queryRunner) {
        await queryRunner.dropTable('user', true, true, true);
    }
    ;
}
exports.CreateTableUser1658877234776 = CreateTableUser1658877234776;
;
