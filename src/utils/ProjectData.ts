// To parse this data:
//
//   import { Convert } from "./file";
//
//   const projectData = Convert.toProjectData(json);

export interface ProjectData {
  slug?: string;
  articleUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  otherUrls?: {
    url: string;
    title: string;
  }[];
  title: string;
  articleTitle?: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  smallImage?: string;
  type: string;
  color?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProjectData(json: string): ProjectData[] {
    return JSON.parse(json);
  }

  public static projectDataToJson(value: ProjectData[]): string {
    return JSON.stringify(value);
  }
}
