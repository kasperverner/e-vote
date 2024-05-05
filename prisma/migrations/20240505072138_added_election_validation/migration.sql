/*
  Warnings:

  - Made the column `end_at` on table `Elections` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Elections" ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "validation_id" TEXT,
ALTER COLUMN "end_at" SET NOT NULL;

-- CreateTable
CREATE TABLE "ElectionValidation" (
    "id" TEXT NOT NULL,
    "election_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_ballots_valid" BOOLEAN NOT NULL DEFAULT false,
    "is_propositions_valid" BOOLEAN NOT NULL DEFAULT false,
    "is_votes_valid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ElectionValidation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Elections" ADD CONSTRAINT "Elections_validation_id_fkey" FOREIGN KEY ("validation_id") REFERENCES "ElectionValidation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
