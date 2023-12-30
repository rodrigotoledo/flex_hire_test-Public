import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
const currentDate = new Date();

const MockProfile = {
  fakeData: () => {
    const fake_json = {
      data: {
        currentUser: {
          name: 'Rodrigo Toledo',
          avatarUrl: 'https://cdn.filestackcontent.com/cyvlkEf9TSiKCKFoLWvQ',
          phone: '+5533991221596',
          userSkills: [],
          status: 'unverified',
          emailSubscriptions: [],
          answers: [],
        },
      },
      updatedAt: format(currentDate, 'dd MMM HH:mm')
    };

    const skills = [
      'Requirements Gathering',
      'Management',
      'React',
      'Ruby on Rails',
      'Javascript',
      'Ruby',
      'GraphQL',
    ];

    fake_json.data.currentUser.userSkills = skills.map((skill) => ({
      experience: Math.floor(Math.random() * 4), // Generate a random experience from 0 to 3
      skill: {
        name: skill,
      },
    }));

    const subscription_names = [
      'referral_opportunity',
      'job_opportunity',
      'freelancer_incomplete',
    ];

    fake_json.data.currentUser.emailSubscriptions = subscription_names.map((subscription_name) => ({
      subscriptionName: subscription_name,
    }));

    fake_json.data.currentUser.answers = Array.from({ length: 4 }).map(() => ({
      optimizedUrl: faker.internet.url(), // Generate a fake URL
    }));

    return fake_json;
  },
};

export default MockProfile;
