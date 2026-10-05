import Hero from "@/components/sections/Hero";
import FeatureBento from "@/components/sections/FeatureBento";
import RolesShowcase from "@/components/sections/RolesShowcase";
import SocialProof from "@/components/sections/SocialProof";
import BrandControl from "@/components/sections/BrandControl";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import CustomerStories from "@/components/sections/CustomerStories";
import CommunityBanner from "@/components/sections/CommunityBanner";
import ConfidenceBanner from "@/components/sections/ConfidenceBanner";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Hero />
      <FeatureBento />
      <RolesShowcase />
      <SocialProof />
      <BrandControl />
      <EcosystemGrid />
      <CustomerStories />
      <CommunityBanner />
      <ConfidenceBanner />
      <FinalCTA />
    </div>
  );
}
