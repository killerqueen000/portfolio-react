import "./App.scss";
import { Suspense, useState, useEffect } from "react";
import Portfolio from "./assets/portfolio";
import Loader from "./assets/loading";

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 10000);
    return () => clearTimeout(timer);

  }, []);
  
  return (
    <Suspense fallback={<Loader />}>
      {showLoader ? <Loader /> : <Portfolio />}
    </Suspense>
  );
}

export default App;
