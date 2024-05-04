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
    <nav className="py-4 md:py-6 bg-slate-300">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="font-extrabold text-2xl md:text-3xl hover:underline"
            >
              eDemokrati
            </Link>
          </div>
          <div className="flex gap-6 align-middle">
            <SignedOut>
              <SignInButton forceRedirectUrl="/">
                <button className="font-bold text-lg hover:underline">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/teams" className="font-bold text-lg hover:underline">
                My Teams
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
