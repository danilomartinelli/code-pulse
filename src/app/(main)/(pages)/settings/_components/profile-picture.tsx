"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import UploadCareButton from "./uploadcare-button";

// TODO: Replate this with the actual user type from database/prisma
interface User {
  name: string;
  email: string;
}

type ProfilePictureProps = {
  userImage: string | null;
  onDelete: () => Promise<User | null>;
  onUpload: (image: string) => Promise<User | null>;
};

const ProfilePicture = ({
  userImage,
  onDelete,
  onUpload,
}: ProfilePictureProps) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const response = await onDelete();

    if (response) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User_Image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
