import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674947992449 implements MigrationInterface {
    name = 'default1674947992449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devs" ("id" SERIAL NOT NULL, "name" text NOT NULL, "developer" text NOT NULL, CONSTRAINT "PK_ad26364e6806d4e4a06ff94435b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "devs"`);
    }

}
