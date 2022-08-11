"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableNotes1658877252372 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableNotes1658877252372 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('notes', true, true, true);
    }
    ;
}
exports.CreateTableNotes1658877252372 = CreateTableNotes1658877252372;
;
