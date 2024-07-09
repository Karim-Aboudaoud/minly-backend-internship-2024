import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1720484877140 implements MigrationInterface {
    name = 'InitialMigration1720484877140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying(200) NOT NULL, "releaseDate" TIMESTAMP WITH TIME ZONE NOT NULL, "poster" character varying, "averageRating" double precision, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "director_id" bigint NOT NULL, "trailer" character varying(200), "uuid" character varying NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "director" ("id" SERIAL NOT NULL, "first_name" character varying(200) NOT NULL, "last_name" character varying(200) NOT NULL, "birthdate" TIMESTAMP WITH TIME ZONE NOT NULL, "bio" character varying(1000) NOT NULL, "gender" character varying NOT NULL, "nationality" character varying, "uuid" bigint NOT NULL, "picture" character varying, "number_of_awards" bigint, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_b85b179882f31c43324ef124fea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "director"`);
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
