import { MarkdownInstance } from "astro";

export const getArticles = async (
  // rome-ignore lint/suspicious/noExplicitAny: grabbed from astro types
  glob: MarkdownInstance<Record<string, any>>[]
) => {
  const articles = glob.map((article) => {
    const headings = article.getHeadings();

    const title =
      headings.find((heading) => heading.depth === 1)?.text ??
      article.rawContent().split("\n")[0].slice(2);
    const path = article.file.split("/").pop()?.replace(/\.md$/, "");

    return {
      title,
      url: `/${path}`,
      slug: path,
      content: article.compiledContent(),
      description: article
        .compiledContent()
        .replace(/<[^>]+>/gi, "")
        .slice(0, 100),
    };
  });

  return articles;
};

export const readingTime = (content: string) => {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 255);
};
