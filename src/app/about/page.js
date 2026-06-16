import Breadcrumb from "@/components/common/Breadcrumb";
import ActivitiesSection from "@/components/activities/ActivitiesSection";
import TeamSection from "@/components/team/TeamSection";
import WhyChooseSection from "@/components/whyChoose/WhyChooseSection";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import aboutPage from "@/data/about.json";

export const metadata = {
  title: aboutPage.metadata.title,
  description: aboutPage.metadata.description,
  icons: {
    icon: aboutPage.metadata.icon,
  },
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
      <TeamSection />
    </>
  );
};

export default page;
