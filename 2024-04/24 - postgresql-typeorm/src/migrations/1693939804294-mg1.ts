import { MigrationInterface, QueryRunner } from "typeorm";

export class Mg11693939804294 implements MigrationInterface {
    name = 'Mg11693939804294'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "users" ADD "date_of_birth" TIMESTAMP NOT NULL default now()`);
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_ae78dc6cb10aa14cfef96b2dd90"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_ae78dc6cb10aa14cfef96b2dd90"`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "countries_id_seq"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "countries" ADD "super_key" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "fk_country_user" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
