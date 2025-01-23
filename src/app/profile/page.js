import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Fetch session and check authentication before page rendering
export async function getServerSideProps(context) {
  // Get the session from the server
  const session = await getKindeServerSession();

  // If no session or user, redirect to login page
  if (!session || !session.getUser()) {
    return {
      redirect: {
        destination: "/api/auth/login", // Redirect to login page
        permanent: false,
      },
    };
  }

  // If user is authenticated, return user info as props
  return {
    props: {},
  };
}

const ProfilePage = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default ProfilePage;
