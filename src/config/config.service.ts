import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('TYPEORM_PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('TYPEORM_HOST'),
            port: parseInt(this.getValue('TYPEORM_PORT')),
            username: this.getValue('TYPEORM_USERNAME'),
            password: this.getValue('TYPEORM_PASSWORD'),
            database: this.getValue('TYPEORM_DATABASE'),

            entities: [this.getValue('TYPEORM_ENTITIES')],

            migrationsTableName: 'migration',

            migrations: [this.getValue('TYPEORM_MIGRATIONS')],

            cli: {
                migrationsDir: 'src/migrations',
            },

            ssl: this.isProduction(),
        };
    }

}

const configService = new ConfigService(process.env)
    .ensureValues([
        'TYPEORM_HOST',
        'TYPEORM_USERNAME',
        'TYPEORM_PASSWORD',
        'TYPEORM_DATABASE',
        'TYPEORM_PORT',
        'TYPEORM_ENTITIES',
        'TYPEORM_ENTITIES_DIR',
        'TYPEORM_MIGRATIONS',
        'TYPEORM_MIGRATIONS_DIR',
        'RUN_MIGRATIONS'
    ]);

export { configService };