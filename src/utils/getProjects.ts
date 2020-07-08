import { ProjectData, Convert } from "./ProjectData";
import Axios from "axios";

export const MASTER_URL =
  "https://raw.githubusercontent.com/roshanrahman/newportfolio/ts/assets/master.json";

export async function getProjectList(): Promise<ProjectData[]> {
  const res = await Axios.get(MASTER_URL);
  const projectData = Convert.toProjectData(JSON.stringify(res.data.projects));
  console.log(projectData);
  return projectData;
}

export async function getProjectDetailsBySlug(
  slug: string
): Promise<ProjectData | null> {
  const projects = await getProjectList();
  projects.forEach((project) => {
    if (project.slug === slug) {
      return project;
    }
  });
  return null;
}
