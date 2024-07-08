import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationTable1720397869075 implements MigrationInterface {
    name = 'NewMigrationTable1720397869075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "releaseDate" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "releaseDate"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "firstName" character varying NOT NULL`);
    }

}
