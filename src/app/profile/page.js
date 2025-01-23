import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const session = getKindeServerSession();

  if (!session || !session.getUser()) {
    console.error("Redirecting to login: No session or user found.");
    redirect("/api/auth/login");
    return null;
  }

  const user = session.getUser();
  console.log("Authenticated user:", user);

  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default ProfilePage;
