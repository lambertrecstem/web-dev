// External Libraries
import { Routes, Route } from "react-router-dom";

// Context Providers
import { PublicationDataProvider } from "./context/PublicationDataProvider";
import { OfficerDataProvider } from "./context/OfficerDataProvider";

// Components
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/navbar/NavBar";

// Pages and Page Sections
// import LandingPage from "./pages/landingpageREDO/LandingPage";
import LandingPage from "./pages/landingpage/LandingPage";
import ContactSection from "./pages/landingpage/sections/ContactSection";
import Footer from "./pages/landingpage/sections/Footer";
import Publications from "./pages/Publications";
import ViewPublication from "./pages/ViewPublication";
import ComingSoon from "./components/ComingSoon";
import Officers from "./pages/Officers";

// Admin-specific Pages
import Register from "./pages/admin/Register";
import Unauthorized from "./pages/admin/Unauthorized";
import Dashboard from "./pages/admin/Dashboard";
import ManagePublications from "./pages/admin/ManagePublications";
import ManageTestimonials from "./pages/admin/ManageTestimonials";
import ManagePictures from "./pages/admin/ManagePictures";
import Login from "./pages/admin/Login";
import ManageOfficers from "./pages/admin/ManageOfficers";

// Assets
import logo from "./assets/logo.png";

function App() {
  console.log(screen.height)
  const MemberView = ({ children }: any) => {
    return (
      <div className="flex flex-col w-auto h-screen ">
        <ScrollToTop />
        <NavBar />
        <div className="w-auto h-screen">
          {children}
          <ContactSection />
          <Footer />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route
          index
          element={
            <MemberView>
              <LandingPage />
            </MemberView>
          }
        />
        <Route
          path="about"
          element={
            <MemberView>
              <ComingSoon />
            </MemberView>
          }
        />
        <Route
          path="officers"
          element={
            <MemberView>
              <Officers />
            </MemberView>
          }
        />
        <Route
          path="competitions"
          element={
            <MemberView>
              <ComingSoon />
            </MemberView>
          }
        />
        <Route
          path="events"
          element={
            <MemberView>
              <ComingSoon />
            </MemberView>
          }
        />
        <Route
          path="publications"
          element={
            <MemberView>
              <Publications />
            </MemberView>
          }
        />
        <Route
          path={"publications/view"}
          element={
            <MemberView>
              <ViewPublication />
            </MemberView>
          }
        />

        <Route
          path="unauthorized"
          element={
            <MemberView>
              <Unauthorized />
            </MemberView>
          }
        />
        <Route
          path="login"
          element={
            <div className="w-auto h-screen bg-primary">
              <img
                className="w-[200px] absolute duration-[10000ms] transition-all hover:rotate-[3600deg]"
                src={logo}
                alt=""
              />
              <Login />
            </div>
          }
        />
        <Route
          path="register"
          element={
            <div className="w-auto h-screen bg-primary">
              <img
                className="w-[200px] absolute duration-[10000ms] transition-all hover:rotate-[3600deg]"
                src={logo}
                alt=""
              />
              <Register />
            </div>
          }
        />

        {/* Private routes */}

        <Route element={<RequireAuth allowedRoles={[5150]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="manage-publications"
            element={
              <PublicationDataProvider>
                <div className="w-auto h-screen bg-primary">
                  <img
                    className="w-[100px] absolute duration-[10000ms] transition-all hover:rotate-[3600deg]"
                    src={logo}
                    alt=""
                  />
                  <ManagePublications />
                </div>
              </PublicationDataProvider>
            }
          />

          <Route
            path="manage-testimonials"
            element={
              <div className="w-auto h-screen bg-primary">
                <img
                  className="w-[200px] absolute duration-[10000ms] transition-all hover:rotate-[3600deg]"
                  src={logo}
                  alt=""
                />
                <ManageTestimonials />
              </div>
            }
          />
          <Route
            path="manage-pictures"
            element={
              <div className="w-auto h-screen bg-primary">
                <img
                  className="w-[200px] absolute duration-[10000ms] transition-all hover:rotate-[3600deg]"
                  src={logo}
                  alt=""
                />
                <ManagePictures />
              </div>
            }
          />
          <Route
            path="manage-officers"
            element={
              <OfficerDataProvider>
                <div className="w-auto h-screen bg-primary">
                  <ManageOfficers />
                </div>
              </OfficerDataProvider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
