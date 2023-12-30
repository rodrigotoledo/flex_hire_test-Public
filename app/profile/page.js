import Link from 'next/link';
import Image from 'next/image';
import MockProfile from '@/lib/mock_profile';

async function Profile() {
  const profile = await MockProfile.fakeData()
  return (
    <>
      <>
        <div className="w-full my-4 text-4xl font-bold">
          {PROFILE_TITLE}
        </div>
        <Link href="/" className="underline">{BACK_TO_MAIN_PAGE}</Link>
      </>
      <>
        {profile ? (
          <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0">
            <div className="md:w-1/2 p-4 text-center justify-center align-center flex flex-col">
              <div className="w-32 h-32 md:w-60 md:h-60 bg-gray-300 rounded-full mx-auto mb-4 shadow-lg">
                <img
                  src={profile.data.currentUser.avatarUrl}
                  alt={PROFILE_ALT}
                  className="m-auto w-60 h-60" />
              </div>
              <h2 className="text-2xl font-bold">{profile.data.currentUser.name}</h2>
              <p className="text-gray-600">{PHONE}: {profile.data.currentUser.phone}</p>
              <p className="text-gray-600">{UPDATED_AT}: {profile.updated_at}</p>
              <p className="text-sky-500">{STATUS}: {profile.data.currentUser.status}</p>
            </div>
            <div className="bg-white rounded-md p-4 md:w-1/2">
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{SKILLS_TITLE}</h3>
                {profile.data.currentUser.userSkills.length === 0 ? (
                  <h4 className="text-left">{NO_SKILLS_OBTAINED}</h4>
                ) : (
                  <ul className="list-disc pl-6 mt-2">
                    {profile.data.currentUser.userSkills.map((skill, index) => (
                      <li key={index} className="mb-2">
                        <span className="font-bold">{skill.skill.name}</span> - {EXPERIENCE}: {skill.experience}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-left">{EMAIL_SUBSCRIPTIONS_TITLE}: <span className="text-sm">{profile.data.currentUser.emailSubscriptions.join(', ')}</span></h3>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mt-4">{ANSWERS_TITLE}</h3>
                <ul className="list-none pl-6 mt-2">
                  {profile.data.currentUser.answers.map((answer, index) => (
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
const UPDATED_AT = 'Updated At';
const STATUS = 'Status';
const SKILLS_TITLE = 'Skills';
const NO_SKILLS_OBTAINED = 'No Skills Obtained';
const EXPERIENCE = 'Experience';
const EMAIL_SUBSCRIPTIONS_TITLE = 'Email Subscriptions';
const ANSWERS_TITLE = 'Answers';
const DATA_NOT_AVAILABLE_TITLE = 'Profile Data Not Available';
const DATA_NOT_AVAILABLE_DESCRIPTION = 'The profile information is currently unavailable, and the latest data could not be retrieved. Please check the source or try again later.';
const REFRESH = 'Refresh';
