import Container from "./Container";
import Footer from "./Footer";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const Shell = () => (
  <div className="bg-neutral-50 min-h-screen flex flex-col justify-between">
    <div>
      <Navbar />
      <Container>
        {/* Note sure if Sidebar and Footer is needed, but I've added them just in case */}
        {/* <Sidebar /> */}

        <section className="py-4">
          {/* The Outlet is where the router will place the page content */}
          <Outlet />
        </section>

        {/* <Footer /> */}
      </Container>
    </div>
    <Footer />
  </div>
);

export default Shell;
