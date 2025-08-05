import { Header } from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import React from "react";
import {LogoTicker} from "@/sections/LogoTicker";
import {ProductShowcase} from "@/sections/ProductShowcase";
import {Pricing} from "@/sections/Pricing";
import {Testimonials} from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return ( 
  <>
    <Header />
    <Hero />
    <LogoTicker/>
    <ProductShowcase />
    <Pricing />
    <Testimonials/>
    <CallToAction/>
  </>
  );
}
