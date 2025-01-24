import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  // const user = await getUser();


  return isAuthenticated ? (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile!
      </h2>
    </div>
  ) : (
    redirect("/api/auth/login?redirect_to=/profile")
  );
};

export default Profile;
