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
import { createMeta } from "../../seo/create-meta";
import type { Route } from "./+types/architecture-and-advanced-patterns";

export function meta({}: Route.MetaArgs) {
  return createMeta(
    "Extensions Bundle • Official Courses | NestJS - Learn to build Node.js apps at any scale",
  );
}

const BUNDLE: CourseExtension[] = COURSE_EXTENSIONS.filter(
  (extension) => !extension.isBundle,
);

export default function ExtensionsBundleExtension() {
  return (
    <CourseExtensionPage
      breadcrumb="Fundamentals Course / Extensions"
      subheading="Course extension"
      heading="Extensions Bundle"
      headerSubheading="Master advanced NestJS development including GraphQL, microservices, authentication, and architecture—without the fundamentals course."
      description="This bundle includes all advanced NestJS courses, covering GraphQL (code-first and schema-first), microservices, authentication and authorization, and advanced architectural patterns. It is designed for developers who already understand NestJS basics and want to level up to production-grade system design."
      fadeInColors={{
        desktop: ["#68240c", "#000", "#370f00"],
        mobile: ["#68240c", "#370f00", "#370f00"],
        css: "#68240c",
      }}
      bundle={BUNDLE}
      bulletpoints={[
        {
          icon: (
            <SealPercentIcon weight="fill" size={32} className="shrink-0" />
          ),
          title: "Save 30% with the bundle",
          description:
            "Get access to all NestJS extensions in one bundle, saving 30% compared to purchasing them separately.",
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
      ]}
      courseTitle="Extensions Bundle"
      coursePrice="$199.99"
      courseDiscountedPrice="$284.99"
      purchaseUrl="https://learn.nestjs.com/purchase?product_id=6794686"
    />
  );
}
