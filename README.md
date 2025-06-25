# AquaLeanyer Showcase Landing Page

This guide provides step-by-step instructions to set up and run a Next.js project locally, and prepare it for deployment as a static website to AWS S3.

## Prerequisites

- Node.js and npm installed (https://nodejs.org)
- AWS CLI configured (https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- An S3 bucket created with static website hosting enabled

## Local Development Setup

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

Your application will be running at `http://localhost:3000`.

## Build and Export for Static Hosting

To deploy to S3, you must build and export the project as a static site:

```bash
npm run build
```

This will create an `out/` directory with static files.

## Deploy to AWS S3

1. Navigate to the `out/` directory:

```bash
cd out
```

2. Copy the static site to your S3 bucket (replace `<your-bucket-name>` with your actual bucket name):

```bash
aws s3 sync . s3://<your-bucket-name> --delete
```

Ensure your S3 bucket has the right permissions and static website hosting enabled.

---

## Notes

Please get in touch with maintainers if assistance is required.