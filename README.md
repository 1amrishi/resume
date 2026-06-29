# Rishi Agarwal — CV

Role-specific CV built with Next.js + TypeScript, deployed on Vercel. Multiple variants at different routes from a single codebase — each tailored to a different type of opportunity.

**Live:** [rishiag.vercel.app](https://rishiag.vercel.app)

## Routes

| Route | For |
|-------|-----|
| `/` | General — Service Designer / Business Strategist |
| `/ai` | AI Systems Builder / Agentic AI roles |
| `/full` | Full CV — complete work history from LinkedIn |

## Stack

- Next.js 14 (App Router)
- TypeScript
- shadcn/ui + Tailwind CSS
- Vercel

## Running Locally

```bash
git clone https://github.com/1amrishi/resume.git
cd resume
yarn install
yarn dev
```

Each route pulls from its own data file in `src/data/`. To add a new variant, duplicate a data file and create a matching route under `src/app/`.

## About

Built and maintained by [Rishi Agarwal](https://rishiag.com). Originally based on [Bartosz Jarocki's CV template](https://github.com/BartoszJarocki/cv).
