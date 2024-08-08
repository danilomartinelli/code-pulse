"use client";

import ProfilePicture from "./profile-picture";

type ProfilePictureWrapperProps = {
  userImage: string | null;
};

const ProfilePictureWrapper = ({ userImage }: ProfilePictureWrapperProps) => {
  const handleDelete = async () => {
    // TODO: Implement your delete logic here
  };

  const handleUpload = async (_imageUrl: string) => {
    // TODO: Implement your upload logic here
  };

  return (
    <ProfilePicture
      onDelete={handleDelete}
      userImage={userImage}
      onUpload={handleUpload}
    />
  );
};

export default ProfilePictureWrapper;
