import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return user ? (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile, {user.given_name || "Guest"}!
      </h2>
    </div>
  ) : (
    redirect("/api/auth/login?redirect_to=/profile")
  );
};

export default Profile;
