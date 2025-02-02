import API from "../domain/API";

async function getEducationByLanguage({ english }) {
  return API.get({ path: `education?english=${english}` });
}

export default {
  getEducationByLanguage,
};
