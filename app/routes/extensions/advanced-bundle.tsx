import {
  InfinityIcon,
  ScrollIcon,
  SealPercentIcon,
} from "@phosphor-icons/react";
import { CourseExtensionPage } from "../../components/courses/extension-page";
import {
  COURSE_EXTENSIONS,
  type CourseExtension,
} from "../../data/courses/extensions";
import type { Route } from "./+types/architecture-and-advanced-patterns";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Advanced Bundle • Official Courses | NestJS - Learn to build Node.js apps at any scale" },
    {
      name: "description",
      content:
        "Official NestJS Courses from the NestJS creator and core team members. Learn everything from fundamentals, to more advanced topics such as authentication, microservices, GraphQL and much more.",
    },
  ];
}

const BUNDLE: CourseExtension[] = [
  COURSE_EXTENSIONS.find(
    (extension) => extension.extensionKey === "architecture",
  )!,
  COURSE_EXTENSIONS.find(
    (extension) => extension.extensionKey === "advanced-concepts",
  )!,
].filter(Boolean) as CourseExtension[];

export default function AdvancedBundleExtension() {
  return (
    <CourseExtensionPage
      breadcrumb="Fundamentals Course / Extensions"
      subheading="Course extension"
      heading="Advanced - Bundle"
      headerSubheading="Master advanced NestJS architecture, design patterns, and framework internals to build scalable, production-ready Node.js applications with confidence."
      description="This advanced bundle combines two comprehensive courses covering Domain-Driven Design, Hexagonal Architecture, advanced NestJS concepts, and real-world patterns for building maintainable, enterprise-grade backend systems."
      bundle={BUNDLE}
      bulletpoints={[
        {
          icon: <SealPercentIcon weight="fill" size={32} />,
          title: "Save 22% with the bundle",
          description:
            "Get access to both advanced courses in one bundle, saving 22% compared to purchasing them separately.",
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
      courseTitle="Advanced Bundle"
      coursePrice="$129.99"
      courseDiscountedPrice="$165.99"
      purchaseUrl="https://learn.nestjs.com/purchase?product_id=5301050"
    />
  );
}
