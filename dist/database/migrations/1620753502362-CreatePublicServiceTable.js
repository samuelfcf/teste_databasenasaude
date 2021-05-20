"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicServiceTable1620745769539 = void 0;
const typeorm_1 = require("typeorm");
class CreatePublicServiceTable1620745769539 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('publicService');
        });
    }
}
exports.CreatePublicServiceTable1620745769539 = CreatePublicServiceTable1620745769539;
