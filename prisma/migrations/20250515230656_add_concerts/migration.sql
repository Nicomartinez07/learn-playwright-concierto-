/*
  Warnings:

  - You are about to drop the column `ticketsAvailable` on the `Event` table. All the data in the column will be lost.
  - Added the required column `availableTickets` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "totalTickets" INTEGER NOT NULL,
    "availableTickets" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Event" ("createdAt", "date", "description", "id", "name", "totalTickets") SELECT "createdAt", "date", "description", "id", "name", "totalTickets" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
