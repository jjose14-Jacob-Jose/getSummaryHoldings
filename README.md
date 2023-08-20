# Default UI Codebase for getSummaryHoldings application
Built with [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Hosted on Vercel - https://get-summary-holdings.vercel.app/

Tools and versions used -

- Node v16.15.0
- npm v9.8.1
- Tailwind CSS v3.3.3

# What is getSummaryHoldings?
It is a tool which can be used to summarize holdings of serials. This application is targeted towards library associates who deal with serials and calculate holdings data from time to time, and aims to ease the process for them. 

Some of the major features provided are -

- The ability to generate editions, years, and issues for a serial with basic publication details.
- The ability to select available issues from the generated data to calculate holdings with formatted enumeration and chronology fields.
- Keyboard shortcuts for faster navigation.

## Project Structure
`public/` holds all the Javascript files and images within the codebase.

`src/` is split into `app/` which holds the root code and code for the router, and `components/` which has wrappers, static, and dynamic UI components which can be used globally and are placed within respective folders.

## Track the Project's Progress
Check out the [project board](https://github.com/users/Shira98/projects/4/views/1) for current progress and future list of features. 

We'll be migrating to Trello soon, check out the [new board](https://trello.com/b/3CmgViGr/agile-scrum).


## Getting Started

Clone the project and run `npm install` in the project directory. This should install all of the required dependencies.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
