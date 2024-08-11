import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
import { getAuthenticatedDbUser } from "@/lib/server-utils";

type Props = { children: React.ReactNode };

const Layout = async (props: Props) => {
  const { tier, credits } = await getAuthenticatedDbUser();

  if (!tier || !credits) {
    throw new Error("Tier or credits not found");
  }

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar tier={tier} credits={parseInt(credits, 10)} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
