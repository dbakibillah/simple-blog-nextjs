import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = getKindeServerSession();
  const user = await session.getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile, {user.given_name}!
      </h2>
    </div>
  );
};

export default Profile;
