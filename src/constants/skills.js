const FRONTEND_SKILLS = {
  category: "Frontend",
  skills: [
    {
      name: "React.js",
      iconClassName: "devicon-react-original",
    },
    {
      name: "Next.js",
      iconClassName: "devicon-nextjs-plain",
    },
    {
      name: "SvelteKit",
      iconClassName: "devicon-svelte-plain",
    },
    {
      name: "TailwindCSS",
      iconClassName: "devicon-tailwindcss-plain",
    },
    {
      name: "Bootstrap",
      iconClassName: "devicon-bootstrap-plain",
    },
    {
      name: "Sass",
      iconClassName: "devicon-sass-original",
    },
    {
      name: "Flutter",
      iconClassName: "devicon-flutter-plain",
    },
  ],
};

const BACKEND_SKILLS = {
  category: "Backend",
  skills: [
    {
      name: "Node.js",
      iconClassName: "devicon-nodejs-plain",
    },
    {
      name: "Express.js",
      iconClassName: "devicon-express-original",
    },
    {
      name: "Nest.js",
      iconClassName: "devicon-nestjs-plain",
    },
    {
      name: "Django",
      iconClassName: "devicon-django-plain",
    },
    {
      name: "FastAPI",
      iconClassName: "devicon-fastapi-plain",
    },
    {
      name: "Flask",
      iconClassName: "devicon-flask-original",
    },
  ],
};

const DATABASE_SKILLS = {
  category: "Database",
  skills: [
    {
      name: "PostgreSQL",
      iconClassName: "devicon-postgresql-plain",
    },
    {
      name: "MySQL",
      iconClassName: "devicon-mysql-plain",
    },
    {
      name: "Prisma",
      iconClassName: "devicon-prisma-original",
    },
    {
      name: "Knex.js / Objection.js",
      iconClassName: "devicon-knexjs-plain-wordmark",
    }
  ]
}

const OTHER_SKILLS = {
  category: "Others",
  skills: [
    {
      name: "TypeScript",
      iconClassName: "devicon-typescript-plain",
    },
    {
      name: "tRPC",
      iconClassName: "devicon-trpc-plain",
    },
    {
      name: "AWS",
      iconClassName: "devicon-amazonwebservices-plain-wordmark",
    },
    {
      name: "Docker",
      iconClassName: "devicon-docker-plain",
    },
  ]
}

export const SKILLS = [FRONTEND_SKILLS, BACKEND_SKILLS, DATABASE_SKILLS, OTHER_SKILLS];
