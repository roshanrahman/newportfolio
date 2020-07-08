import { ProjectData } from "./ProjectData";
import Axios from "axios";

export const MASTER_URL =
  "https://raw.githubusercontent.com/roshanrahman/newportfolio/master/assets/master.json";

export async function getProjectList(): Promise<ProjectData[]> {
  const res = await Axios.get(MASTER_URL);
  console.log(res);
  return res.data.projects;
}
