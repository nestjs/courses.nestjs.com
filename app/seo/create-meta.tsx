export function createMeta(
  title: string,
  meta: Array<{ name?: string; property?: string; content: string }> = [],
) {
  return [
    {
      title,
    },
    ...meta,
    {
      name: "description",
      content:
        "Official NestJS Courses from the NestJS creator and core team members. Learn everything from fundamentals, to more advanced topics such as authentication, microservices, GraphQL and much more.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "og:site_name",
      content: title,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content:
        "Official NestJS Courses from the NestJS creator and core team members. Learn everything from fundamentals, to more advanced topics such as authentication, microservices, GraphQL and much more.",
    },
    {
      property: "og:image",
      content: "https://courses.nestjs.com/nest-og.png",
    },
    {
      property: "og:image:width",
      content: "820",
    },
    {
      property: "og:image:height",
      content: "429",
    },
  ];
}
