import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { usePageSeo } from "./hooks/usePageSeo";
import { seoFor } from "./data/seo";

// Helper component to scroll window to top on path changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  usePageSeo(seoFor(path) ? path : null);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text selection:bg-brand-gold selection:text-brand-black">
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Sticky header */}
      <Header />

      {/* Content wrapper */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Brand footer */}
      <Footer />
    </div>
  );
}

export default App;
