# matthewbrunetti.com

> Powered by [Apostrophe CMS v3](https://v3.docs.apostrophecms.org/)
> Forked from [apos-my-site boilerplate](https://github.com/zenflow/apos-my-site)

## Development

### Prerequisites

1. Git
2. [Node.js](https://nodejs.org/en/) v14 or later
3. [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) v5 or later
4. (Optional) [Docker](https://docs.docker.com/get-docker/) (for testing production Docker image)

### Setup

1. Fork this repo on GitHub
2. Clone your fork onto your local machine (`git clone https://github.com/<your username/matthewbrunetti.com`)
3. `cd` into the repo on your local machine (`cd matthewbrunetti.com`)
4. Install dependencies (`npm install`)
5. Copy contents of [`.env.example`](./.env.example) into `.env`
   - These defaults are good for local development, and you can edit this file at any time.
   - *Please be aware* If you want to change `APOS_MONGODB_URI`, that value is overridden in `docker-compose.yml`,
     used when running the app in Docker.

### Tasks

- Run app in dev mode: `npm run dev`
- Run app in production mode: `npm run build && npm run serve`
- Build and run production Docker image: `docker-compose up --build`
- Restore local database from `db` folder: `npm run db-restore`

#### Advanced

- Dump local database to `db` folder (requires MongoDB Database Tools):
  `MONGODB_URI=mongodb://localhost/matthew-brunetti ./scripts/db-dump.sh`

## Deploying to production

1. Build the `Dockerfile` in the repo root
2. Configure:
    - mount volume for `/app/public/uploads`
    - environment variables according to the [.env.example](./.env.example)
        - *Hint* If you get errors about failed authentication when starting the app,
          then you may need the `?authSource=admin` query param.
3. (Optional) Restore app data:
    1. Database. Restore from `db` folder /w `MONGODB_URI=<connection-string> node scripts/restore-db`
    2. Uploads. Copy files from `public/uploads` into the volume.
4. Start the container
5. If you skipped the "Restore app data" step, log in with username "admin" password "admin" and edit this user.

## Automated backups of production

This project has a GitHub Actions workflow that can be used to back up production data **on a schedule** and **on-demand**.
It will back up both the database and the uploaded files.
It uses the GitHub repo as storage, so you can easily work with production data in your development environment.

Backups go into the `backup/prod` branch to be manually merged with the `main` branch as desired.
When merging it is recommended to **Squash and merge** to keep the Git commit history clean.

To set up:

1. (Optional) Enable scheduled backups by un-commenting the two lines near the top of `.github/workflows/back-up-prod.yml`.
2. Create a branch named `backup/prod` and push it to GitHub.
3. Add repository secrets on GitHub under Settings > Secrets > New repository secret:
   1. `MONGODB_URI` - e.g. `mongodb://username:password@example.com:27017/databasename?authSource=admin`
   2. `UPLOADS_DIR` - e.g. `username:password@example.com:22/path/to/public/uploads` (username and password are for SSH)

To trigger a backup on-demand, go to your project "Actions", select "Back up prod" from the list of workflows,
click the "Run workflow" dropdown, and click the "Run workflow" button.
