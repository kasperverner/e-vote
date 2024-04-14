import Container from "./Container";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const Shell = () => (
  <div className="bg-slate-100 min-h-screen">
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
);

export default Shell;
