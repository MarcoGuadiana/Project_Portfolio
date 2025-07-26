import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#f0f0f0",
    },
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1,
      },
      links: {
        enable: true,
        color: "#333",
      },
    },
  }), []);

  return (
    <Particles
      options={options}
      init={async (engine) => {
        await loadFull(engine);
      }}
    />
  );
}

export default ParticlesBackground;


