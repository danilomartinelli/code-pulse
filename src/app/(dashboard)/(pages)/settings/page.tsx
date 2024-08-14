import ProfileForm from "./_components/profile-form";
import { User } from "@prisma/client";
import { getAuthenticatedDbUser } from "@/lib/server/utils";
import ProfilePicture from "./_components/profile-picture";
import { updateUserAction } from "@/lib/server/actions/user";
import { CompleteUser } from "@/lib/database/schemas/user";
import { db } from "@/lib/database";

const Settings = async () => {
  const { clerkId, name, email, profileImage, id } =
    await getAuthenticatedDbUser();

  const removeProfileImage = async (): Promise<User | null> => {
    "use server";

    const response = await db.user.update({
      where: {
        clerkId: clerkId,
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
        clerkId: clerkId,
      },
      data: {
        profileImage: image,
      },
    });

    return response;
  };

  const updateUserInfo = async (name: string): Promise<CompleteUser | null> => {
    "use server";

    return updateUserAction(id, { name });
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
          userImage={profileImage}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={{ name, email }} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
