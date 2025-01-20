/*
  Warnings:

  - The values [postomat] on the enum `DeliveryVariants` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeliveryVariants_new" AS ENUM ('department', 'courier');
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" TYPE "DeliveryVariants_new" USING ("deliveryVariants"::text::"DeliveryVariants_new");
ALTER TYPE "DeliveryVariants" RENAME TO "DeliveryVariants_old";
ALTER TYPE "DeliveryVariants_new" RENAME TO "DeliveryVariants";
DROP TYPE "DeliveryVariants_old";
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" SET DEFAULT 'department';
COMMIT;
