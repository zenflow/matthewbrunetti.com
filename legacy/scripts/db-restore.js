const { join } = require("path");
const { existsSync } = require("fs");
const restore = require("@cdxoo/mongodb-restore");

const from = join(__dirname, "../db");
if (!existsSync(from)) throw new Error("`db` folder does not exist");

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI not defined");

const database = new URL(uri).pathname.slice(1);
if (!database) throw new Error("MONGODB_URI does not contain database name");

async function main() {
  await restore.database({
    uri,
    database,
    from,
    clean: true,
    onCollectionExists: "overwrite",
  });
  console.log(`Restored data from \`db\` folder to ${uri}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
