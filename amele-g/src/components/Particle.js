import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle({ lightMode }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ee802f", //"#ffffff",
      },
      opacity: {
        value: 0.2,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 1,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ee802f", //"#000000",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        className="mi-home-particle"
        options={lightMode ? paramConfigLight : paramConfig}
      />
    )
  );
}

export default Particle;
