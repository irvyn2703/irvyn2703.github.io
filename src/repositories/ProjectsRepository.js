import Response from "../domain/Response";
import Project from "../domain/Project";
import ProjectsService from "../services/ProjectsService";

async function getProjectsByLanguage({ english }) {
  const httpResponse = await ProjectsService.getProjectsByLanguage({ english });
  return new Response(httpResponse, Project).getData();
}

export default {
  getProjectsByLanguage,
};
