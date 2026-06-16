import HomeActivitiesSection from "@/components/activities/HomeActivitiesSection";
import PromoBannerSection from "@/components/banner/PromoBannerSection";
import FeaturesSection from "@/components/feature/FeaturesSection";
import VisaServicesSection from "@/components/visaComponents/VisaServicesSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import HomeAboutSection from "@/components/about/HomeAboutSection";
import HighlightsSection from "@/components/feature/HighlightsSection";
import Destinations from "@/components/destinationSlider/Destinations";
import DestinationShowcaseSlider from "@/components/destinationSlider/DestinationShowcaseSlider";
import HeroBanner from "@/components/banner/HeroBanner";
import TeamSection from "@/components/team/TeamSection";

export const metadata = {
  title: "Flying-Zone - Tour & Travel Agency  NextJs Template",
  description:
    "Flying-Zone is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeAboutSection />
      <Destinations />
      <VisaServicesSection />
      <HighlightsSection />
      <FeaturesSection />
      <DestinationShowcaseSlider />
      <HomeActivitiesSection />
      <TestimonialSection />
      <PromoBannerSection />
      <TeamSection />
    </>
  );
}
