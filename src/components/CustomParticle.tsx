import React from "react";
import Particles from "react-tsparticles";
import "../styles/CustomParticle.scss";

interface CustomParticleProps {}

export const CustomParticle: React.FC<CustomParticleProps> = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 600 },
          opacity: {
            anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
            random: {
              enable: true,
              minimumValue: 0.3,
            },
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
            random: false,
            value: 1,
          },
        },
        retina_detect: true,
      }}
    />
  );
};
