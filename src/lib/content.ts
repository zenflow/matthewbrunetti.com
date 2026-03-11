import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type SiteGlobalData = CollectionEntry<'siteGlobal'>['data'];
export type SiteHomeData = CollectionEntry<'siteHome'>['data'];
export type SiteBlogData = CollectionEntry<'siteBlog'>['data'];
export type BlogPostEntry = CollectionEntry<'blogPosts'>;

export type NavItem = {
  label: string;
  href: string;
};

export async function getSiteGlobal() {
  const entry = await getEntry('siteGlobal', 'global');

  if (!entry) {
    throw new Error('Missing site global content entry.');
  }

  return entry.data;
}

export async function getSiteHome() {
  const entry = await getEntry('siteHome', 'home');

  if (!entry) {
    throw new Error('Missing site home content entry.');
  }

  return entry.data;
}

export async function getSiteBlog() {
  const entry = await getEntry('siteBlog', 'blog');

  if (!entry) {
    throw new Error('Missing site blog content entry.');
  }

  return entry.data;
}

export async function getPublishedBlogPosts() {
  const entries = await getCollection('blogPosts', ({ data }) => !data.draft);

  return entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function getHomeNavItems(home: SiteHomeData, options: { includeHomePrefix?: boolean } = {}): NavItem[] {
  const prefix = options.includeHomePrefix ? '/' : '';

  return home.sections
    .filter((section) => section.isLinkInNavbar)
    .map((section) => ({
      label: section.name,
      href: `${prefix}#${section.anchorId}`,
    }));
}
