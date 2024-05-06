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
            element={currentUser ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/dashboard" /> : <Register />}
          />
        </Route>

        {/* Protected Routes (Dashboard) */}
        <Route
          path="/dashboard"
          element={currentUser ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Account />} />
          <Route path="create" element={<CreateNewFeedback />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="forms" element={<AvailableForms />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
