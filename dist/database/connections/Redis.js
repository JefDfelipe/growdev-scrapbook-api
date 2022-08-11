"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
require("dotenv/config");
class Redis {
    constructor() { }
    static getInstance() {
        if (!Redis.instance) {
            const redis = new Redis();
            Redis.instance = redis.openConnection();
        }
        return Redis.instance;
    }
    openConnection() {
        try {
            // HEROKU
            // return new IORedis(process.env.REDIS_URL, {
            //     tls: {
            //       rejectUnauthorized: false
            //     }
            // });
            // Local
            return new ioredis_1.default(process.env.REDIS_URL);
        }
        catch (error) {
            throw new Error(`Erro ao conectar no Redis: ${error}`);
        }
    }
}
exports.default = Redis;
