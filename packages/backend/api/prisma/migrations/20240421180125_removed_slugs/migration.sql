/*
  Warnings:

  - You are about to drop the column `slug` on the `Elections` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Invitations` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Teams` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Elections_slug_key";

-- DropIndex
DROP INDEX "Invitations_token_key";

-- DropIndex
DROP INDEX "Teams_slug_key";

-- AlterTable
ALTER TABLE "Elections" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "Invitations" DROP COLUMN "token";

-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "slug";
