import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: ["posts/**/*.mdx"],
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string().optional(),
          slug: s.path(),
          date: s.isodate(),
          update: s.isodate().optional(),
          tags: s.string().array().optional(),
          isPublished: s.boolean().default(false),
          metadata: s.metadata(),
          code: s.mdx(),
          raw: s.raw(),
        })
        .transform((data) => ({
          ...data,
          slugAsParams: data.slug.split("/").slice(1).join("/"),
        })),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});

//import {
//  defineCollection,
//  defineConfig,
//  remarkCopyLinkedFiles,
//  s,
//} from "velite";
//import rehypeSlug from "rehype-slug";
//import rehypeShiki from "@shikijs/rehype";
//import rehypeAutolinkHeadings from "rehype-autolink-headings";
//import rehypeStringify from "rehype-stringify";
//import remarkMath from "remark-math";
//import remarkParse from "remark-parse";
//import remarkRehype from "remark-rehype";
//import rehypeKatex from "rehype-katex";
//import smartypants from "remark-smartypants";
//import { Icons } from "./components/modules/shared/icons";
//import emoji from "remark-emoji";
//
//function typedObjectKeys<T extends object>(object: T) {
//  return Object.keys(object) as (keyof typeof object)[];
//}
//
//const [firstKey, ...otherKeys] = typedObjectKeys(Icons);
//
//const tags = defineCollection({
//  name: "Tag",
//  pattern: ["tags/**/*.yaml"],
//  schema: s.object({
//    text: s.string(),
//    id: s.string(),
//    description: s.string(),
//    cover: s.image(),
//  }),
//});
//
//const posts = defineCollection({
//  name: "Post",
//  pattern: ["posts/**/*.mdx"],
//  schema: s
//    .object({
//      title: s.string().max(99),
//      description: s.string().optional(),
//      slug: s.path(),
//      date: s.isodate(),
//      update: s.isodate().optional(),
//      tags: s.string().array().optional(),
//      isPublished: s.boolean().default(false),
//      metadata: s.metadata(),
//      content: s.mdx(),
//    })
//    .transform((data) => ({ ...data, permalink: `/posts/${data.slug}` })),
//});
//
//export default defineConfig({
//  collections: {
//    posts,
//    tags,
//  },
//  mdx: {
//    rehypePlugins: [
//      rehypeStringify,
//      rehypeSlug,
//      //[
//      //  rehypePrettyCode,
//      //  {
//      //    keepBackground: false,
//      //    theme: {
//      //      dark: "github-dark",
//      //      light: "github-light",
//      //    },
//      //  },
//      //],
//      [
//        rehypeShiki,
//        {
//          inline: 'tailing-curly-colon',
//          theme: {
//            dark: "github-dark",
//            light: "github-light",
//          },
//        },
//      ],
//      [
//        rehypeAutolinkHeadings,
//        {
//          behavior: "wrap",
//          properties: {
//            className: ["subheading-anchor"],
//            ariaLabel: "Link to section",
//          },
//        },
//      ],
//      rehypeKatex,
//    ],
//    remarkPlugins: [
//      [emoji, { accessible: true }],
//      remarkMath,
//      [remarkParse, { gfm: true, commonmark: true }],
//      remarkCopyLinkedFiles,
//      remarkRehype,
//      smartypants,
//    ],
//  },
//});
