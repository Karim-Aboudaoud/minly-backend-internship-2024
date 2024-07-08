import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1720397545450 implements MigrationInterface {
    name = ' $npmConfigName1720397545450'

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
