import API from "../domain/API";

async function getProjectsByLanguage({ english }) {
  return API.get({ path: `projects?english=${english}` });
}

export default {
  getProjectsByLanguage,
};
