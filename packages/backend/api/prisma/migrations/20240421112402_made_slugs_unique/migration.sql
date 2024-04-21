/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Elections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Elections_slug_key" ON "Elections"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_slug_key" ON "Teams"("slug");
