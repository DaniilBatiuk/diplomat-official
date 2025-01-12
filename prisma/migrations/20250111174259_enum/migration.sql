/*
  Warnings:

  - The values [POSTOMAT,DEPARTMENT,COURIER] on the enum `DeliveryVariants` will be removed. If these variants are still used in the database, this will fail.
  - The values [NOVA_POSHTA,UKR_POSHTA] on the enum `DeliveryWays` will be removed. If these variants are still used in the database, this will fail.
  - The values [COMPLETED,IN_PROGRESS,CONFIRMED,DENIED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [COMPLETED,IN_PROGRESS,DENIED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [UPON_RECEIPT,PRIVATE_BANK,CASHLESS] on the enum `PaymentWays` will be removed. If these variants are still used in the database, this will fail.
  - The values [ACTIVE,INACTIVE] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - The values [USER,ADMIN,MANAGER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeliveryVariants_new" AS ENUM ('postomat', 'department', 'courier');
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" TYPE "DeliveryVariants_new" USING ("deliveryVariants"::text::"DeliveryVariants_new");
ALTER TYPE "DeliveryVariants" RENAME TO "DeliveryVariants_old";
ALTER TYPE "DeliveryVariants_new" RENAME TO "DeliveryVariants";
DROP TYPE "DeliveryVariants_old";
ALTER TABLE "Order" ALTER COLUMN "deliveryVariants" SET DEFAULT 'department';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "DeliveryWays_new" AS ENUM ('novaPoshta', 'ukrPoshta');
ALTER TABLE "Order" ALTER COLUMN "deliveryWay" TYPE "DeliveryWays_new" USING ("deliveryWay"::text::"DeliveryWays_new");
ALTER TYPE "DeliveryWays" RENAME TO "DeliveryWays_old";
ALTER TYPE "DeliveryWays_new" RENAME TO "DeliveryWays";
DROP TYPE "DeliveryWays_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('completed', 'inProgress', 'confirmed', 'denied');
ALTER TABLE "Order" ALTER COLUMN "orderStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "orderStatus" TYPE "OrderStatus_new" USING ("orderStatus"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "orderStatus" SET DEFAULT 'inProgress';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('completed', 'inProgress', 'denied');
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" TYPE "PaymentStatus_new" USING ("paymentStatus"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" SET DEFAULT 'inProgress';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentWays_new" AS ENUM ('uponReceipt', 'privateBank', 'cashless');
ALTER TABLE "Order" ALTER COLUMN "paymentWays" TYPE "PaymentWays_new" USING ("paymentWays"::text::"PaymentWays_new");
ALTER TYPE "PaymentWays" RENAME TO "PaymentWays_old";
ALTER TYPE "PaymentWays_new" RENAME TO "PaymentWays";
DROP TYPE "PaymentWays_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('active', 'inactive');
ALTER TABLE "Product" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Product" ALTER COLUMN "status" SET DEFAULT 'inactive';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('user', 'admin', 'manager');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';
COMMIT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "orderStatus" SET DEFAULT 'inProgress',
ALTER COLUMN "paymentStatus" SET DEFAULT 'inProgress',
ALTER COLUMN "deliveryVariants" SET DEFAULT 'department';

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "status" SET DEFAULT 'inactive';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';
