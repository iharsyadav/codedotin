import { Outlet,} from "react-router-dom";
import Navbar from "../components/Navbar";


function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      
      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Global Footer */}
     
    </div>
  );
}

export default RootLayout;