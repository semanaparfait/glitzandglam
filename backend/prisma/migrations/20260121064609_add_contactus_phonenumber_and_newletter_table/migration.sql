/*
  Warnings:

  - Added the required column `phoneNumber` to the `ContactUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactUs" ADD COLUMN     "phoneNumber" TEXT NOT NULL;
