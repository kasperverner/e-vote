-- AlterTable
ALTER TABLE "Invitations" ADD COLUMN     "state" "InviteStates" NOT NULL DEFAULT 'PENDING';
