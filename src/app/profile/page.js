import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

// This is a server component that checks for authentication before rendering the page
const ProfilePage = async () => {
  // Get the session and user from Kinde Auth
  const session = await getKindeServerSession();
  const user = await session.getUser();

  // If no user is found, redirect to the login page
  if (!user) {
    redirect("/api/auth/login");
  }

  // If the user is authenticated, render the profile page with a welcome message
  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default ProfilePage;
