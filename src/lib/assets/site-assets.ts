import type { ImageMetadata } from 'astro';

const siteAssets = import.meta.glob('/src/assets/site/**/*.{avif,gif,jpeg,jpg,png,svg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

export function resolveSiteAsset(assetPath: string): ImageMetadata {
  const normalizedPath = assetPath.replace(/^\/+/, '').replace(/^src\/assets\/site\//, '');
  const importPath = `/src/assets/site/${normalizedPath}`;
  const asset = siteAssets[importPath];

  if (!asset) {
    const knownAssets = Object.keys(siteAssets)
      .map((key) => key.replace('/src/assets/site/', ''))
      .sort()
      .join(', ');

    throw new Error(`Unknown site asset path: ${assetPath}. Known assets: ${knownAssets}`);
  }

  return asset;
}

export function resolveSiteAssetUrl(assetPath: string): string {
  return resolveSiteAsset(assetPath).src;
}
