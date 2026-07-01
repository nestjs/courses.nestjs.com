import {
  ArrowsOutLineHorizontalIcon,
  BlueprintIcon,
  InfinityIcon,
  PlayCircleIcon,
  ScrollIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { CourseExtensionPage } from "../../components/courses/extension-page";
import { ADVANCED_CONCEPTS_CURRICULUM } from "../../data/courses/advanced-concepts";
import { createMeta } from "../../seo/create-meta";
import type { Route } from "./+types/architecture-and-advanced-patterns";

export function meta({}: Route.MetaArgs) {
  return createMeta(
    "Advanced Concepts • Official Courses | NestJS - Learn to build Node.js apps at any scale",
  );
}

export default function AdvancedConceptsExtension() {
  return (
    <CourseExtensionPage
      breadcrumb="Fundamentals Course / Extensions"
      subheading="Course extension"
      heading="Advanced Concepts"
      headerSubheading="Gain an even deeper understanding of NestJS and learn how to conquer more complex scenarios in modern Node applications!"
      description="In one of our most advanced courses yet. In this course, we will be covering many powerful Architectural Concepts & Patterns used in some of today's most complex Node.js systems in the real-world!"
      curriculumText="Gain an even deeper understanding of NestJS and learn how to conquer more complex scenarios in modern Node applications!"
      bulletpoints={[
        {
          icon: <PlayCircleIcon weight="fill" size={32} />,
          title: "18 videos",
          description:
            "Featuring 18 videos (with subtitles) and over 2 hours of content.",
        },
        {
          title: "Multi-tenancy & i18n",
          icon: <UsersThreeIcon weight="fill" size={32} />,
          description:
            "Use Durable Providers to implement multi-tenancy and i18n in your NestJS applications.",
        },
        {
          title: "Circuit Breaker",
          icon: <ShieldCheckIcon weight="fill" size={32} />,
          description:
            "Leverage interceptors to implement the Circuit Breaker pattern, and protect your applications from cascading failures.",
        },
        {
          title: "Multi-process & worker threads",
          icon: <ArrowsOutLineHorizontalIcon weight="fill" size={32} />,
          description:
            "Integrate worker threads to benefit from mutliple cores and improve the performance of your NestJS applications.",
        },
        {
          title: "Custom Nest schematics",
          icon: <BlueprintIcon weight="fill" size={32} />,
          description:
            "Learn how to create your own custom Nest schematics to automate repetitive tasks and boost your productivity.",
        },
        {
          title: "Official certification",
          icon: <ScrollIcon weight="fill" size={32} />,
          description:
            "Receive an official certificate of completion to showcase your new skills and boost your career.",
          footnote: <a href="#certified">See certified developers</a>,
        },
        {
          title: "Lifetime access",
          icon: <InfinityIcon weight="fill" size={32} />,
          description:
            "Get lifetime access to the course content, including all future updates and additions.",
        },
      ]}
      curriculum={ADVANCED_CONCEPTS_CURRICULUM}
      courseTitle="Advanced Concepts Extension"
      coursePrice="$69.99"
      courseDiscountedPrice="$89"
      purchaseUrl="https://learn.nestjs.com/purchase?product_id=4808474"
    />
  );
}
