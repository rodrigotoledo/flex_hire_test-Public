// job.js
import { faker } from '@faker-js/faker';

const MockJob = {
  fakeData: () => {
    // Initialize a JavaScript object with the JSON structure
    const fakeJson = {
      data: {
        currentUser: {
          jobs: [],
          name: 'Rodrigo Toledo',
          avatarUrl: 'https://cdn.filestackcontent.com/cyvlkEf9TSiKCKFoLWvQ',
          phone: '+5533991221596',
          status: 'unverified',
        },
      },
    };

    // Populating job applications (jobs)
    const jobs = Array.from({ length: (Math.random() * 4) }).map(() => ({
      hiringManager: faker.person.fullName(), // Generate a fake hiring manager name
      company: faker.company.companyName(), // Generate a fake company name
      title: faker.person.jobTitle(), // Generate a fake job title
      contractRequests: [
        {
          screeningQuestions: faker.lorem.sentences(Math.random() * 4()), // Generate fake screening questions
          codeTest: faker.lorem.sentence(), // Generate a fake code test
        },
      ],
    }));

    fakeJson.data.currentUser.jobs = jobs;

    return fakeJson;
  },
};

export default MockJob;