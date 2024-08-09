import ProfileForm from "@/components/forms/profile-form";
import ProfilePicture from "./_components/profile-picture";

// TODO: Replate this with the actual user type from database/prisma
interface User {
  name: string;
  email: string;
}

const Settings = async () => {
  // TODO: Replace all the following with real data
  const userImage: string | null = null;
  const user: User = {
    name: "John Doe",
    email: "john.doe@email.com",
  };

  const removeProfileImage = async (): Promise<User | null> => {
    "use server";

    // TODO: Do the actual delete on the server and return the updated user
    // const response = await db.user.update({
    //   where: {
    //     clerkId: authUser.id,
    //   },
    //   data: {
    //     profileImage: '',
    //   },
    // });

    return null;
  };

  const uploadProfileImage = async (_image: string): Promise<User | null> => {
    "use server";

    // TODO: Do the actual upload on the server and return the updated user
    // const id = authUser.id;
    // const response = await db.user.update({
    //   where: {
    //     clerkId: id,
    //   },
    //   data: {
    //     profileImage: image,
    //   },
    // });

    return null;
  };

  const updateUserInfo = async (_name: string): Promise<User | null> => {
    "use server";

    // TODO: Do the actual update on the server and return the updated user
    // const updateUser = await db.user.update({
    //   where: {
    //     clerkId: authUser.id,
    //   },
    //   data: {
    //     name,
    //   },
    // });

    return null;
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
          userImage={userImage}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
