import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/50 px-4">
      <div className="text-center max-w-md">
        <h1 className="font-bebas text-8xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">404</h1>
        <p className="font-poppins text-xl text-slate-600 mb-2">Oops, this page doesn't exist.</p>
        <p className="font-poppins text-sm text-slate-400 mb-8">Let's get you back to the portfolio.</p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-poppins font-semibold rounded-full px-8 py-5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
