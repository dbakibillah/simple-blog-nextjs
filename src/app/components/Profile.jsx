import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession(); // Get session methods
  const user = await getUser(); // Get user info from the session

  if (!user) {
    // Redirect to login if the user is not authenticated
    redirect("/api/auth/login?redirect_to=/profile");
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