import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <Aboutme />
        <ProjectsSection />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </ChakraProvider>
  );
}

export default App;