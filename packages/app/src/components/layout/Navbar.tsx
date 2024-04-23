import { Link } from "@tanstack/react-router";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="font-extrabold hover:underline">
              e-vote
            </Link>
          </div>
          <div className="flex gap-4">
            {/* Example Links, to show how they are implemented */}
            <Link to="/teams" className="hover:underline">
              Teams
            </Link>
            <Link
              to="/teams/$team_slug"
              params={{
                team_slug: "87654321",
              }}
              className="hover:underline"
            >
              Team
            </Link>
            <Link to="/not-found-page" className="hover:underline">
              404 Page
            </Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar
