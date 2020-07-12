import { ProjectData, Convert } from "./ProjectData";
import Axios from "axios";

const backupProjectList = require("../assets/master.json");

export const MASTER_URL =
  "https://raw.githubusercontent.com/roshanrahman/newportfolio/master/assets/master.json";

export async function getProjectList(): Promise<ProjectData[]> {
  let projectData = [];
  try {
    const res = await Axios.get(MASTER_URL);
    projectData = Convert.toProjectData(JSON.stringify(res.data.projects));
  } catch (error) {
    console.error(error);
    const backupProjects = JSON.parse(backupProjectList).projects;
    projectData = Convert.toProjectData(JSON.stringify(backupProjects));
  }
  console.log(projectData);
  return projectData;
}

export async function getProjectDetailsBySlug(
  slug: string
): Promise<ProjectData | null> {
  const projects = await getProjectList();
  let project = null;
  projects.forEach((p) => {
    if (p.slug === slug) {
      project = p;
    }
  });
  return project;
}

export function produceRandomProjectData(): ProjectData {
  const obj: ProjectData = {
    articleUrl: "",
    coverImage: "",
    description: "",
    title: "",
    type: "",
    color: "",
    demoUrl: "",
    githubUrl: "",
    shortDescription: "",
    otherUrls: [
      {
        title: "",
        url: "s",
      },
    ],
    slug: "",
    smallImage: "",
  };
  return obj;
}

export function openCaseStudy(slug: string) {
  window.open(`/projects/${slug}`, "_blank");
}
