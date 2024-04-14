import { Link } from "@tanstack/react-router";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Container from "./Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white">
            <Link to="/" className="font-extrabold hover:underline">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="text-xl"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            {/* Example Links, to show how they are implemented */}
            <Link to="/organizations" className="hover:underline">
              Organizations
            </Link>
            <Link
              to="/organizations/$organization_slug"
              params={{
                organization_slug: "87654321",
              }}
              className="hover:underline"
            >
              Organization
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
