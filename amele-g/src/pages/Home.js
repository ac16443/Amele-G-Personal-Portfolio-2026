import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import Spinner from "../components/Spinner";

function Home({ lightMode }) {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
         console.log("This is from Home component", response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Amelework React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Amelework React Personal Portfolio Template Homepage"
        />
      </Helmet>
     {/* <img className="col-12 col-sm-12 col-md-12 col-lg-12 col-el-12" src="./assets/coding -with-coffee.png" alt="banner profile image"  /> */}
      <Suspense fallback={<Spinner />}>
        <div className="mi-home-area mi-padding-section">
          <Particle lightMode={lightMode} />
          <div className="container">
            <div className="row justify-content-center">
<img className="col-12 col-sm-12 col-md-12 col-lg-12 col-el-12" src="./assets/coding -with-coffee.png" alt="banner profile image" style={{width:"60%"}}  />
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hi, I am{" "}
                    <span className="color-theme">{information.name}</span>
                  </h1>
                  <p>{information.aboutContent}</p>
                  <Socialicons bordered />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Home;
