const FRONTEND_SKILLS = {
  category: "Frontend",
  skills: [
    {
      name: "React.js",
      iconClassName: "devicon-react-original",
    },
    {
      name: "Next.js",
      iconClassName: "devicon-nextjs-line",
    },
    {
      name: "Svelte",
      iconClassName: "devicon-svelte-plain",
    },
    {
      name: "TailwindCSS",
      iconClassName: "devicon-tailwindcss-plain",
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
      name: "Nest.js",
      iconClassName: "devicon-nestjs-plain",
    },
    {
      name: "Node.js",
      iconClassName: "devicon-nodejs-plain",
    },
    {
      name: "FastAPI",
      iconClassName: "devicon-fastapi-plain",
    },
    {
      name: "Flask",
      iconClassName: "devicon-flask-original",
    },
    {
      name: "PostgreSQL",
      iconClassName: "devicon-postgresql-plain",
    },
    {
      name: "MySQL",
      iconClassName: "devicon-mysql-plain",
    },
  ],
};

const OTHER_SKILLS = {
  category: "Others",
  skills: [
    {
      name: "TypeScript",
      iconClassName: "devicon-typescript-plain",
    },
    {
      name: "Docker",
      iconClassName: "devicon-docker-plain",
    },
    {
      name: "Kubernetes",
      iconClassName: "devicon-kubernetes-plain",
    },
  ]
}

export const SKILLS = [FRONTEND_SKILLS, BACKEND_SKILLS, OTHER_SKILLS];
