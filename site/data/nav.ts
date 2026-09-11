export type ProjectId = "coldtrack" | "climconnect" | "moleculex";

export const projectRoutes: { id: ProjectId; path: string }[] = [
  { id: "coldtrack", path: "/projects/coldtrack" },
  { id: "climconnect", path: "/projects/climconnect" },
  { id: "moleculex", path: "/projects/moleculex" },
];

export const navRoutes = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "expertise", path: "/expertise" },
  { key: "projects", path: "/projects" },
  { key: "konfortech", path: "/konfortech" },
  { key: "vision", path: "/vision" },
  { key: "cv", path: "/cv" },
  { key: "contact", path: "/contact" },
] as const;
