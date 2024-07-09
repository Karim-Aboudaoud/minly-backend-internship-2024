import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration21720485895977 implements MigrationInterface {
    name = 'Migration21720485895977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "festival" ("id" SERIAL NOT NULL, "title" character varying(200) NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "uuid" character varying NOT NULL, CONSTRAINT "PK_f1bcb856ab1c89180702ea0b47c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actor" ("id" SERIAL NOT NULL, "first_name" character varying(200) NOT NULL, "last_name" character varying(200) NOT NULL, "birthdate" TIMESTAMP WITH TIME ZONE NOT NULL, "bio" character varying(1000) NOT NULL, "gender" character varying NOT NULL, "nationality" character varying, "uuid" bigint NOT NULL, "picture" character varying, "number_of_awards" bigint, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "actor"`);
        await queryRunner.query(`DROP TABLE "festival"`);
    }

}
