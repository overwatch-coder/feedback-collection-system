import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";
import {
  Account,
  ContactUs,
  CreateNewFeedback,
  Feedbacks,
  Home,
  Login,
  Register,
  AvailableForms,
  Submissions,
  Analytics,
  NewFormPage,
} from "./pages";
import { DashboardLayout, RootLayout } from "./components";

function App() {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/login"
            element={
              currentUser?._id ? <Navigate to="/dashboard" /> : <Login />
            }
          />
          <Route
            path="/register"
            element={
              currentUser?._id ? <Navigate to="/dashboard" /> : <Register />
            }
          />
        </Route>

        {/* Protected Routes (Dashboard) */}
        <Route
          path="/dashboard"
          element={
            currentUser?._id ? <DashboardLayout /> : <Navigate to="/login" />
          }
        >
          <Route index element={<Account />} />
          <Route
            path="create"
            element={
              currentUser?._id && currentUser?.role === "admin" ? (
                <CreateNewFeedback />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="create-new"
            element={
              currentUser?._id && currentUser?.role === "admin" ? (
                <NewFormPage />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="feedbacks"
            element={
              currentUser?._id && currentUser?.role === "admin" ? (
                <Feedbacks />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="forms"
            element={
              currentUser?._id && currentUser?.role === "user" ? (
                <AvailableForms />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="submissions"
            element={
              currentUser?._id && currentUser?.role === "user" ? (
                <Submissions />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="analytics"
            element={
              currentUser?._id && currentUser?.role === "admin" ? (
                <Analytics />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
