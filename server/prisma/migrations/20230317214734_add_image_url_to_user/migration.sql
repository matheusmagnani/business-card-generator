/*
  Warnings:

  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `history` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_User" ("githubUrl", "history", "id", "linkedinUrl", "name", "slug") SELECT "githubUrl", "history", "id", "linkedinUrl", "name", "slug" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
