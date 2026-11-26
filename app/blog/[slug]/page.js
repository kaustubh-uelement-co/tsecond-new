import { redirect } from "next/navigation";
import { getAllArticles } from "@/lib/blogData";

export function generateStaticParams() {
  return getAllArticles().map((art) => ({
    slug: art.slug,
  }));
}

export default async function BlogSlugRedirect({ params }) {
  const { slug } = await params;
  redirect(`/news/${slug}`);
}
