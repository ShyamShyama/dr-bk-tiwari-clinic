import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import Icon from "../components/Icon.jsx";

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="bg-hero-gradient py-28 sm:py-36">
        <div className="container-x text-center flex flex-col items-center gap-6">
          <span className="grid place-items-center w-20 h-20 rounded-full bg-blue-soft text-blue-deep">
            <Icon name="heart-pulse" className="w-10 h-10" strokeWidth={1.6} />
          </span>
          <h1 className="h-display text-4xl sm:text-5xl font-semibold">Page not found</h1>
          <p className="text-ink-soft max-w-md">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary mt-2">
            Back to Home
            <Icon name="arrow-right" className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
