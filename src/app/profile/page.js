import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">Welcome to your profile!</h2>
    </div>
  );
};

export default ProfilePage;
