import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// This will run on the server before the page is rendered
export async function getServerSideProps(context) {
  const session = await getKindeServerSession();
  const user = await session.getUser();

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    return {
      redirect: {
        destination: "/api/auth/login", // Adjust if needed
        permanent: false,
      },
    };
  }

  return {
    props: {
      user, // Pass user data to the page
    },
  };
}

const ProfilePage = ({ user }) => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold">
        Welcome to your profile, {user.given_name}!
      </h2>
    </div>
  );
};

export default ProfilePage;
