import ProfilePictureWrapper from './_components/profile-picture-wrapper';
import ProfileForm from '@/components/forms/profile-form';

const Settings = async () => {
  // TODO: Replace all the following with real data
  const userImage = null;
  const updateUserInfo = (_name: string) => false;
  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
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
        <ProfilePictureWrapper userImage={userImage} />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
