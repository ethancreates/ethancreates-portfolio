DO $$ BEGIN
 CREATE TYPE "UserRoles" AS ENUM('ADMIN', 'BASIC');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"UserRoles" "UserRoles" DEFAULT 'BASIC' NOT NULL
);
