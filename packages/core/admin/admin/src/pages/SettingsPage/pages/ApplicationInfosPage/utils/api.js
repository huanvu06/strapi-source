import { axiosInstance } from '../../../../../core/utils';
import { prefixAllUrls } from './prefixAllUrls';

const fetchProjectSettings = async () => {
  const { data } = await axiosInstance.get('/admin/project-settings');

  return prefixAllUrls(data);
};

const updateProjectSettings = async body => {
  await axiosInstance.post('/admin/project-settings', body);
};

export { fetchProjectSettings, updateProjectSettings };