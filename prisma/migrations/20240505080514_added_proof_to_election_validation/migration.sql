/*
  Warnings:

  - Added the required column `proof` to the `ElectionValidation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ElectionValidation" ADD COLUMN     "proof" TEXT NOT NULL;
