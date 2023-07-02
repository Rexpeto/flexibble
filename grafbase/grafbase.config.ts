import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
    name: g.string().length({ min: 3, max: 20 }),
    email: g.string().unique(),
    avatarUrl: g.string(),
    description: g.string().length({ max: 100 }).optional(),
    githubUrl: g.url().optional(),
    linkInUrl: g.url().optional(),
    projects: g
        .relation(() => Project)
        .list()
        .optional(),
});

const Project = g.model("Project", {
    title: g.string().length({ min: 3 }),
    description: g.string().optional(),
    image: g.url(),
    liveSite: g.url().optional(),
    githubUrl: g.url().optional(),
    category: g.string().search(),
    createdBy: g.relation(() => User),
});

export default config({
    schema: g,
});
