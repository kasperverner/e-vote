import { Link } from "@tanstack/react-router";
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
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar
