"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Zap, Shield, Cpu, Gauge, Battery, Wind, Layers, TrendingUp, Circle, Activity, AlertCircle, Target, Maximize2, Waypoints, GitBranch, Phone } from "lucide-react";

export default function F1ElitePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="radialGradient"
      cardStyle="solid"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="F1 Elite"
          navItems={[
            { name: "Models", id: "product" },
            { name: "Performance", id: "feature" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Request Demo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Next Generation Racing"
          title="Experience the Ultimate Formula 1 Performance"
          description="Witness the convergence of cutting-edge technology, precision engineering, and human excellence. Discover the machines that dominate the world's most prestigious motorsport."
          buttons={[
            { text: "Explore Fleet", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904905930-k56xu8of.jpg"
          imageAlt="Formula 1 race car at high speed"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="The Art and Science of F1 Excellence. Where milliseconds matter, and innovation shapes champions. Every element engineered for supremacy."
          features={[
            {
              icon: Zap,
              title: "Peak Performance",
              description: "Unleashing over 1000 horsepower with hybrid power systems that redefine automotive excellence and racing capabilities."
            },
            {
              icon: Shield,
              title: "Advanced Safety",
              description: "Cutting-edge protective systems and crash structures ensuring driver security at the absolute limits of speed."
            },
            {
              icon: Cpu,
              title: "Smart Engineering",
              description: "AI-driven telemetry and real-time optimization systems that give teams the competitive edge on every lap."
            },
            {
              icon: Gauge,
              title: "Precision Control",
              description: "Aerodynamic mastery and responsive handling that transforms vision into precision performance on every corner."
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTen
          features={[
            {
              id: "1",
              title: "Hybrid Power Systems",
              description: "Revolutionary hybrid technology combining traditional combustion engines with advanced electrical systems for maximum efficiency and raw power output.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904908616-0bw1gtge.jpg"
              },
              items: [
                { icon: Battery, text: "Advanced ERS (Energy Recovery System)" },
                { icon: Zap, text: "1050+ horsepower combined output" },
                { icon: Gauge, text: "Real-time power management algorithms" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Aerodynamic Excellence",
              description: "Every curve and surface meticulously designed to minimize drag while maximizing downforce, enabling speeds exceeding 200 mph with precision control.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904907416-vx4gwph9.jpg"
              },
              items: [
                { icon: Wind, text: "DRS (Drag Reduction System)" },
                { icon: Layers, text: "Multi-element wings and diffusers" },
                { icon: TrendingUp, text: "CFD-optimized design surfaces" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Tire Technology",
              description: "Specialized compound tires developed for extreme conditions, offering optimal grip across diverse weather patterns and track surfaces.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904910516-oqbfv4wc.jpg"
              },
              items: [
                { icon: Circle, text: "Multiple compound options" },
                { icon: Activity, text: "Temperature-optimized performance" },
                { icon: Gauge, text: "Real-time tire telemetry" }
              ],
              reverse: false
            },
            {
              id: "4",
              title: "Braking Systems",
              description: "Carbon-ceramic brake technology providing extreme stopping power from maximum velocity, decelerating at forces exceeding 5G with precision control.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904911688-y6lav4p2.jpg"
              },
              items: [
                { icon: AlertCircle, text: "Carbon-ceramic disc systems" },
                { icon: Zap, text: "Advanced brake-by-wire technology" },
                { icon: Target, text: "Precision modulation circuits" }
              ],
              reverse: true
            },
            {
              id: "5",
              title: "Suspension & Handling",
              description: "Sophisticated suspension geometry enabling precise vehicle control through high-speed corners, accommodating extreme lateral forces while maintaining stability.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904912795-3b6l2l4x.jpg"
              },
              items: [
                { icon: Maximize2, text: "Active suspension components" },
                { icon: Waypoints, text: "Adaptive damping systems" },
                { icon: GitBranch, text: "Advanced geometry algorithms" }
              ],
              reverse: false
            }
          ]}
          title="Technical Mastery"
          description="Discover the engineering innovations that define Formula 1 racing excellence and dominate world championships."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          products={[
            {
              id: "1",
              name: "Standard F1 Race Car",
              price: "$25,000,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904914125-rnwokl6g.jpg",
              imageAlt: "Formula 1 standard race car"
            },
            {
              id: "2",
              name: "Sport Performance Edition",
              price: "$35,000,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904915356-c5z13oco.jpg",
              imageAlt: "F1 sport performance variant"
            },
            {
              id: "3",
              name: "Elite Championship Class",
              price: "$45,000,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904916853-w9unszhr.jpg",
              imageAlt: "F1 elite championship vehicle"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          title="Our F1 Fleet"
          description="Explore our collection of championship-winning Formula 1 vehicles, each engineered for ultimate performance and precision."
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofThree
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904917942-0kab72aa.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904918977-wx5ll1m2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904920261-hbgs96cu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904921577-x6fffc8l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904923707-ioprxz7q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904924746-qjb4kfwq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904926402-zzi88fu9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904927329-udtxlt69.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904928349-eu23icam.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904929287-3g1q21ys.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904930278-oygzvexb.jpg"
          ]}
          title="Trusted by World's Leading F1 Teams"
          description="Partnering with the most prestigious Formula 1 manufacturers and racing teams globally."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",
              name: "Lewis Hamilton, Champion Driver",
              date: "Date: January 2025",
              title: "Unmatched Engineering Excellence",
              quote: "The precision, the power, the engineering - this is the pinnacle of motorsport. Every lap pushes the boundaries of what's possible in racing technology.",
              tag: "Driver Experience",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904931493-0q4c46dl.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904914125-rnwokl6g.jpg"
            },
            {
              id: "2",
              name: "Christian Horner, Team Principal",
              date: "Date: December 2024",
              title: "Championship-Winning Innovation",
              quote: "The innovation and attention to detail in these machines is extraordinary. We've never seen better integration of hybrid power and aerodynamic design.",
              tag: "Team Management",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904932746-nexbqr5i.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904916853-w9unszhr.jpg"
            },
            {
              id: "3",
              name: "Max Verstappen, World Champion",
              date: "Date: November 2024",
              title: "Peak Performance Delivered",
              quote: "The responsiveness, the braking power, the acceleration - everything works in perfect harmony. This is what championship-caliber engineering looks like.",
              tag: "Performance",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904933667-u2zdx3gw.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904915356-c5z13oco.jpg"
            },
            {
              id: "4",
              name: "Toto Wolff, Mercedes Team Leader",
              date: "Date: October 2024",
              title: "Technological Advancement",
              quote: "The hybrid system integration and software optimization are genuinely revolutionary. We're seeing new performance levels we thought were impossible.",
              tag: "Technology",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904934527-03txovm3.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904908616-0bw1gtge.jpg"
            },
            {
              id: "5",
              name: "Lando Norris, McLaren Driver",
              date: "Date: September 2024",
              title: "Driver's Dream Machine",
              quote: "As a driver, you feel every innovation - the grip, the stability, the feedback. This is what top-tier Formula 1 engineering delivers every single lap.",
              tag: "Driver Feedback",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904935834-thym3pmu.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904907416-vx4gwph9.jpg"
            },
            {
              id: "6",
              name: "Dr. Akira Yamamoto, Technical Director",
              date: "Date: August 2024",
              title: "Engineering Perfection",
              quote: "From aerodynamics to power systems, every component represents years of research and thousands of hours of optimization and testing.",
              tag: "Technical Excellence",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904936975-u5khm2hy.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765904912795-3b6l2l4x.jpg"
            }
          ]}
          title="What Champions Say"
          description="Hear from the world's leading F1 drivers, team principals, and engineers about our vehicles."
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",
              title: "What is the top speed of F1 cars?",
              content: "Modern Formula 1 cars can reach speeds exceeding 230 mph (370 km/h) on high-speed circuits like Monza. Average lap speeds in qualifying conditions often exceed 200 mph, showcasing the extreme performance capabilities of these machines."
            },
            {
              id: "2",
              title: "How much horsepower do F1 engines produce?",
              content: "Current F1 hybrid power units generate over 1050 horsepower combined. This comes from approximately 850 hp from the combustion engine and 200+ hp from the electric motor, creating unprecedented power delivery."
            },
            {
              id: "3",
              title: "What is the weight of an F1 car?",
              content: "Modern Formula 1 cars have a minimum weight of 798 kg (1,758 lbs), including driver and seat. This strict weight limit encourages innovation in lightweight materials and efficient design."
            },
            {
              id: "4",
              title: "How often are F1 engines changed?",
              content: "F1 engines must last three race weekends before requiring replacement. Teams are limited to a specific number of power units per season, making reliability and efficiency paramount."
            },
            {
              id: "5",
              title: "What safety features are in F1 cars?",
              content: "F1 vehicles feature advanced safety systems including HALO head protection, carbon fiber survival cells, energy-absorbing crash structures, and advanced fire suppression systems designed to protect drivers at extreme speeds."
            },
            {
              id: "6",
              title: "How are F1 tires different from road tires?",
              content: "F1 tires are specially engineered slick compounds with no tread patterns, optimized for maximum grip on dry tracks. They operate at extreme temperatures and must be warmed up before use to achieve optimal performance."
            },
            {
              id: "7",
              title: "What is DRS and how does it work?",
              content: "DRS (Drag Reduction System) is an adjustable rear wing flap that opens on straights to reduce drag and increase top speed. Drivers can deploy it when following within one second of another car, creating overtaking opportunities."
            },
            {
              id: "8",
              title: "How long does an F1 race typically last?",
              content: "Formula 1 races are scheduled for two hours maximum. Most races last between 1.5 to 2 hours, covering distances of approximately 190 miles (305 km), though this varies by circuit."
            }
          ]}
          title="Common Questions"
          description="Find answers to frequently asked questions about Formula 1 vehicles, performance, and racing specifications."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Request Your F1 Consultation"
          ctaDescription="Connect with our experts to discuss your F1 vehicle interests and discover the perfect match for your racing ambitions."
          ctaButton={{
            text: "Schedule Demo",
            href: "https://calendly.com"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How do I purchase an F1 vehicle?",
              content: "Contact our sales team to discuss your requirements and preferences. We provide comprehensive consultations to ensure you select the ideal F1 vehicle for your needs, including custom configurations and financing options."
            },
            {
              id: "2",
              title: "What is included in maintenance?",
              content: "Our maintenance packages include regular servicing, parts replacement, software updates, and performance optimization. We recommend servicing after every 200 hours of operation to maintain peak performance."
            },
            {
              id: "3",
              title: "Do you offer driver training?",
              content: "Yes, we provide comprehensive driver training programs covering vehicle operation, track safety, performance optimization, and racing techniques. Training is available at select international racing facilities."
            },
            {
              id: "4",
              title: "What warranties are available?",
              content: "All F1 vehicles come with comprehensive manufacturer warranties covering engine, transmission, chassis, and electronics for 24 months or 5000 operating hours, whichever comes first."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="F1 Elite"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Fleet Models", href: "#product" },
                { label: "Specifications", href: "#feature" },
                { label: "Performance", href: "#about" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Teams", href: "#testimonial" },
                { label: "Partnerships", href: "#socialproof" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Documentation", href: "https://example.com/docs" },
                { label: "Support", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Contact Us", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 F1 Elite. All rights reserved. Engineering the future of motorsport."
        />
      </div>
    </ThemeProvider>
  );
}