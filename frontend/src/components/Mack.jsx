import React, { useRef, useMemo, useState, useEffect, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import MacContainerMobile from "./MacContainerMobile";
import { motion } from "framer-motion";

const Particles = React.memo(({ count = 200, isMobile = false }) => {
  const meshRef = useRef();

  const positions = useMemo(() => {
    const temp = [];
    const range = isMobile ? 250 : 400;
    for (let i = 0; i < count; i++) {
      temp.push(
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range
      );
    }
    return new Float32Array(temp);
  }, [count, isMobile]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0004;
      meshRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.8 : 1.2}
        color="#4F46E5"
        sizeAttenuation
      />
    </points>
  );
});

function Mack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cameraFov = isMobile ? 22 : window.innerWidth < 1024 ? 18 : 14;
  const cameraPosition = isMobile
    ? [0, -8, 160]
    : window.innerWidth < 1024
      ? [0, -10, 200]
      : [0, -12, 240];

  return (
    <>
      <div id="home" className={`w-full ${isMobile ? "h-[900px]" : "h-screen"} relative bg-[#F8F9FC] overflow-hidden`}>
        {/* Subtle blur background gradients for premium feel */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        {/* Text overlay */}
        <div className="w-full absolute flex flex-col items-center top-28 xs:top-32 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 px-4 sm:px-6 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="section-label shadow-sm mb-4 bg-white/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Full Stack Developer
            </span>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[85px] tracking-tight font-black text-center leading-[1] text-[#0f172a]">
              Hi, I'm <br className="sm:hidden" />
              <span className="text-accent underline decoration-indigo-500/20 underline-offset-8">Shivam Kumar</span>
            </h1>
            <div className="w-full sm:w-[90%] md:w-[75%] max-w-2xl mt-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-[#475569] font-medium leading-relaxed max-w-2xl mx-auto">
                Crafting modern, fast, and scalable web experiences blending premium design with flawless engineering.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4 mt-8 pointer-events-auto">
              <a href="#work" className="btn-primary py-3 px-8 text-sm shadow-xl shadow-indigo-500/20">
                View Projects
              </a>
              <a href="#contact" className="btn-outline py-3 px-8 text-sm bg-white/50 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-slate-50 transition-all font-bold">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ fov: cameraFov, position: cameraPosition }}
            gl={{ preserveDrawingBuffer: true, antialias: true, powerPreference: "high-performance" }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            performance={{ min: 0.5 }}
            style={{ touchAction: isMobile ? "auto" : "none" }}
          >
            <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} />
            <Environment
              files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr"
              preset="sunset"
            />
            <Particles count={isMobile ? 120 : 250} isMobile={isMobile} />
            {isMobile ? (
              <MacContainerMobile />
            ) : (
              <ScrollControls pages={1} damping={0.25}>
                <MacContainer />
              </ScrollControls>
            )}
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default memo(Mack);
