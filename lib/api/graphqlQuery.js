import { getProfileData, getJobsData } from '@/lib/api/queries';

async function graphqlQuery() {
  const [profileData, jobsData] = await Promise.all([getProfileData(), getJobsData()]);

  return { profileData, jobsData };
}

export default graphqlQuery;
