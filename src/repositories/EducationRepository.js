import EducationService from "../services/EducationService";
import Response from "../domain/Response";
import Education from "../domain/Education";

async function getEducationByLanguage({ english }) {
  const httpResponse = await EducationService.getEducationByLanguage({
    english,
  });
  return new Response(httpResponse, Education).getData();
}

export default {
  getEducationByLanguage,
};
