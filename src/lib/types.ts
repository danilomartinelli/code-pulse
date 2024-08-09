import { z } from "zod";

// Profile Form Component Schema and Data Types

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});

export type EditUserProfileData = z.infer<typeof EditUserProfileSchema>;
