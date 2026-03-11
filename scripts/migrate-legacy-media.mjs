import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));

const files = [
  {
    from: 'legacy/public/uploads/attachments/ckw8bdb6e000w2sunuqlh5agl-photos-2017-11-10-fst-triangles-gray-facade.jpg',
    to: 'src/assets/site/legacy/triangles-texture.jpg',
  },
  {
    from: 'legacy/public/uploads/attachments/ckw8bj01a002k2sun7jp5a07o-matt-profile.jpg',
    to: 'src/assets/site/legacy/matt-profile.jpg',
  },
  {
    from: 'legacy/public/uploads/attachments/ckw8c0dad00912sunphrfa55y-photo-of-matt-1.jpg',
    to: 'src/assets/site/legacy/photo-of-matthew-1.jpg',
  },
];

for (const file of files) {
  const sourcePath = resolve(repoRoot, file.from);
  const destinationPath = resolve(repoRoot, file.to);

  await mkdir(dirname(destinationPath), { recursive: true });
  await cp(sourcePath, destinationPath, { force: true });
  console.log(`Copied ${file.from} -> ${file.to}`);
}
