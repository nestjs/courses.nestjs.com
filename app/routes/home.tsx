import {
  ArrowsClockwiseIcon,
  IdentificationBadgeIcon,
  InfinityIcon,
  PlayCircleIcon,
  ScrollIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CourseOverviewSection } from "../components/courses/course-overview-section";
import { ExtensionsSection } from "../components/courses/extensions-sections";
import { FAQ_ITEMS } from "../constants/faq";
import { FUNDAMENTALS_CURRICULUM } from "../data/courses/fundamentals";
import { MENU_ITEMS } from "../marketing-ui/common/menu";
import { PrimaryButton } from "../marketing-ui/components/buttons/primary-button/primary-button";
import { CourseVideoModal } from "../marketing-ui/components/domain/course-curriculum/course-curriculum";
import { CoursesFan } from "../marketing-ui/components/domain/courses-fan/courses-fan";
import { TiltedText } from "../marketing-ui/components/domain/tilted-text/tilted-text";
import { ActionBar } from "../marketing-ui/components/misc/action-bar/action-bar";
import BarChartSection from "../marketing-ui/sections/bar-chart/bar-chart-section";
import { CertificatesSection } from "../marketing-ui/sections/certificates/certificates-section";
import CommunitySection from "../marketing-ui/sections/community/community-section";
import FaqSection from "../marketing-ui/sections/faq/faq-section";
import { Footer } from "../marketing-ui/sections/footer/footer";
import { Header } from "../marketing-ui/sections/header/header";
import { ProductsSection } from "../marketing-ui/sections/products/products-section";
import { TestimonialsSection } from "../marketing-ui/sections/testimonials/testimonials-section";
import { createMeta } from "../seo/create-meta";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return createMeta(
    "Official Courses | NestJS - Learn to build Node.js apps at any scale",
  );
}

const FUNDAMENTALS_ITEMS: Array<{
  icon: string | React.ReactNode;
  title: string;
  description: string;
  footnote?: React.ReactNode;
  videoId?: string;
}> = [
  {
    icon: <PlayCircleIcon weight="fill" size={32} className="shrink-0" />,
    title: "80 videos",
    description:
      "Featuring 80 videos (with subtitles) and over 5 hours of content.",
    footnote: "Watch free lesson",
    videoId: "447091051",
  },
  {
    title: "From NestJS creator",
    icon: (
      <IdentificationBadgeIcon weight="fill" size={32} className="shrink-0" />
    ),
    description:
      "The only official course from the Creator Kamil Mysliwiec himself, and Mark Pieszak (Core Team Member).",
  },
  {
    title: "Official certification",
    icon: <ScrollIcon weight="fill" size={32} className="shrink-0" />,
    description:
      "Receive an official certificate of completion to showcase your new skills and boost your career.",
    footnote: <a href="#certified">See certified developers</a>,
  },
  {
    title: "Lifetime access",
    icon: <InfinityIcon weight="fill" size={32} className="shrink-0" />,
    description:
      "Get lifetime access to the course content, including all future updates and additions.",
  },
  {
    title: "Regular content updates",
    icon: <ArrowsClockwiseIcon weight="fill" size={32} className="shrink-0" />,
    description:
      "We regularly update the course content to reflect the latest NestJS features and best practices.",
  },
];

export default function Courses() {
  const location = useLocation();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has("preview")) {
      const defaultVideoId = "447091051";
      setSelectedVideoId(defaultVideoId);
    }
  }, [location.search]);

  return (
    <>
      <Header
        menuItems={MENU_ITEMS}
        breadcrumb="courses"
        heading="Upskill your team with official NestJS courses"
        subheading="Over 200 lessons. Learn everything you need to master NestJS and tackle modern backend applications at any scale."
        bottomPanel={
          <div className="pt-12 relative flex w-full h-full">
            <CoursesFan
              variant="mask"
              shadowOnHover={false}
              animationDelay={0.5}
              animationStartTriggerValue="top 100%"
              reverse
            />
          </div>
        }
        actions={null}
        shrink={false}
      />
      <ActionBar>
        <span className="font-medium text-white py-1 px-6">
          Have you already purchased the course?
        </span>
        <div className="ml-[40px] p-1">
          <PrimaryButton href="https://learn.nestjs.com/login" radius="24px">
            Sign in
          </PrimaryButton>
        </div>
      </ActionBar>
      <CourseOverviewSection
        subheading="Fundamentals course"
        heading="Become an expert with NestJS Fundamentals Course"
        description="Get up to speed with NestJS fast. Master the building blocks and essential concepts behind creating your own enterprise-grade applications."
        bulletpoints={FUNDAMENTALS_ITEMS}
        curriculumText="The course curriculum is designed to take you from the basics of NestJS to advanced concepts, covering everything you need to know to build production-ready applications."
        curriculum={FUNDAMENTALS_CURRICULUM}
        setSelectedVideoId={setSelectedVideoId}
        courseVideoUrl="https://player.vimeo.com/video/433943559?autoplay=1&muted=1&title=0&byline=0&portrait=0&sidedock=0"
        courseTitle="NestJS Fundamentals Course"
        coursePrice="$89"
        courseDiscountedPrice="$129"
        purchaseUrl="https://learn.nestjs.com/purchase?product_id=6794675"
      />
      <ExtensionsSection />
      <CommunitySection />
      <CertificatesSection />
      <BarChartSection
        subheading="Hands-on"
        heading="Less reading. More building."
        text="Stop spending your learning time buried in documentation and passive reading. This course is designed to get you into the code immediately, building real projects from the very first lesson. You'll learn faster by doing, not by scrolling-turning concepts into working skills as you go."
        cta={
          <PrimaryButton href="#extensions">
            See course extensions
          </PrimaryButton>
        }
        chart={{
          aValue: 96,
          bValue: 52,
          xAxisLabel: "time spent coding",
          aLabel: "After course completion",
          bLabel: "No course",
        }}
        className="px-5 py-8 md:mt-60 mt-30"
      />
      <FaqSection className="md:mt-50" items={FAQ_ITEMS} />
      <TiltedText
        heading="Does your team need additional support?"
        content="Nest core team members can work directly with your team on a daily basis to help take your project to the next-level. Let us partner with you and your team to develop the most ambitious projects."
        buttonText="Enterprise official support"
        buttonLink="https://enterprise.nestjs.com"
      />
      <ProductsSection />
      <TestimonialsSection />
      <CourseVideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
      <Footer className="mt-20" />
    </>
  );
}
