import Breadcrumb from "@/components/common/Breadcrumb";
import ActivitiesSection from "@/components/activities/ActivitiesSection";
import WhyChooseSection from "@/components/whyChoose/WhyChooseSection";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import aboutPage from "@/data/about.json";
import ChairmanMessage from "@/components/site/staff/ChairmanMessage";
import StaffShowcase from "@/components/site/staff/StaffShowcase";

export const metadata = {
  title: "About Us",
  description:
    "Flying Zone Travel & Tours, established in 2007, arranges Umrah, flights, visas and holidays from Dubai.",
  alternates: { canonical: "/about" },
};

const page = () => {
  return (
    <>
      <Breadcrumb
        pagename={aboutPage.breadcrumb.pagename}
        pagetitle={aboutPage.breadcrumb.pagetitle}
        bgImage={aboutPage.breadcrumb.bgImage}
      />
      <AboutOverviewSection />
      <WhyChooseSection />
      <ActivitiesSection />
      <ChairmanMessage />
      <StaffShowcase />
    </>
  );
};

export default page;
