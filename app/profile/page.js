import Link from 'next/link';
import MockUser from '@/lib/mock_user';
import graphqlQuery from '@/lib/api/graphqlQuery';

async function Profile() {
  const userData = await MockUser.fakeData()
  try {
    const { userData } = await graphqlQuery();
  } catch (error) {
    console.error('TODO: I have problems to get data in the api endpoint:', error);
    const userData = false;
  }
  return (
    <>
      <>
        <div className="w-full my-4 text-4xl font-bold">
          {PROFILE_TITLE}
        </div>
        <Link href="/" className="underline">{BACK_TO_MAIN_PAGE}</Link>
      </>
      <>
        {userData ? (
          <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0">
            <div className="md:w-1/2 p-4 text-center justify-center align-center flex flex-col">
              <div className="w-32 h-32 md:w-60 md:h-60 bg-gray-300 rounded-full mx-auto mb-4 shadow-lg">
                <img
                  src={userData.data.currentUser.avatarUrl}
                  alt={PROFILE_ALT}
                  className="m-auto w-60 h-60" />
              </div>
              <h2 className="text-2xl font-bold">{userData.data.currentUser.name}</h2>
              <p className="text-gray-600">{PHONE}: {userData.data.currentUser.phone}</p>
              <p className="text-gray-600">{UPDATED_AT}: {userData.updated_at}</p>
              <p className="text-sky-500">{STATUS}: {userData.data.currentUser.status}</p>
            </div>
            <div className="bg-white rounded-md p-4 md:w-1/2">
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{SKILLS_TITLE}</h3>
                {userData.data.currentUser.userSkills.length === 0 ? (
                  <h4 className="text-left">{NO_SKILLS_OBTAINED}</h4>
                ) : (
                  <ul className="list-disc pl-6 mt-2">
                    {userData.data.currentUser.userSkills.map((skill, index) => (
                      <li key={index} className="mb-2">
                        <span className="font-bold">{skill.skill.name}</span> - {EXPERIENCE}: {skill.experience}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-left">{EMAIL_SUBSCRIPTIONS_TITLE}: <span className="text-sm">{userData.data.currentUser.emailSubscriptions.map((subscription) => subscription.subscriptionName).join(', ')}</span></h3>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mt-4">{ANSWERS_TITLE}</h3>
                <ul className="list-none pl-6 mt-2">
                  {userData.data.currentUser.answers.map((answer, index) => (
                    <li key={index} className="mb-2">
                      <Link href={answer.optimizedUrl} target="_top">{answer.optimizedUrl}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2 w-[80%] mt-4 bg-red-200 mx-auto rounded-xl shadow">
            <h1 className="text-2xl font-bold">{DATA_NOT_AVAILABLE_TITLE}</h1>
            <p>{DATA_NOT_AVAILABLE_DESCRIPTION}</p>
            <Link href="/profile" className="underline">{REFRESH}</Link>
          </div>
        )}
      </>
    </>
  );
};

export default Profile;

const PROFILE_TITLE = 'Profile';
const BACK_TO_MAIN_PAGE = 'Back to Main Page';
const PROFILE_ALT = 'Profile Image';
const PHONE = 'Phone';
const UPDATED_AT = 'Last Sync';
const STATUS = 'Status';
const SKILLS_TITLE = 'Skills';
const NO_SKILLS_OBTAINED = 'No Skills Obtained';
const EXPERIENCE = 'Experience';
const EMAIL_SUBSCRIPTIONS_TITLE = 'Email Subscriptions';
const ANSWERS_TITLE = 'Answers';
const DATA_NOT_AVAILABLE_TITLE = 'Profile Data Not Available';
const DATA_NOT_AVAILABLE_DESCRIPTION = 'The profile information is currently unavailable, and the latest data could not be retrieved. Please check the source or try again later.';
const REFRESH = 'Refresh';
