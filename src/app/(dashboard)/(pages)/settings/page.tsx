import ProfileForm from "@/components/forms/profile-form";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { getAuthenticatedDbUser } from "@/lib/server-utils";
import ProfilePicture from "./_components/profile-picture";

const Settings = async () => {
  const dbUser = await getAuthenticatedDbUser();

  const removeProfileImage = async (): Promise<User | null> => {
    "use server";

    const response = await db.user.update({
      where: {
        clerkId: dbUser.clerkId,
      },
      data: {
        profileImage: "",
      },
    });

    return response;
  };

  const uploadProfileImage = async (image: string): Promise<User | null> => {
    "use server";

    const response = await db.user.update({
      where: {
        clerkId: dbUser.clerkId,
      },
      data: {
        profileImage: image,
      },
    });

    return response;
  };

  const updateUserInfo = async (name: string): Promise<User | null> => {
    "use server";

    const updateUser = await db.user.update({
      where: {
        clerkId: dbUser.clerkId,
      },
      data: {
        name,
      },
    });

    return updateUser;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={dbUser.profileImage}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={dbUser} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
