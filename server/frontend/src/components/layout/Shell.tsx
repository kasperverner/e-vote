import Container from "./Container";
import Footer from "./Footer";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
// import BreadCrumbs from "./BreadCrumbs";


const Shell = () => (
  <div className="bg-neutral-50 min-h-screen flex flex-col justify-between">
    <div>
      <Navbar />
      <Container>
        <section className="py-4">
          {/* <BreadCrumbs /> */}
          {/* The Outlet is where the router will place the page content */}
          <Outlet />
        </section>
      </Container>
    </div>
    <Footer />
  </div>
);

export default Shell;
