import Link from 'next/link';
import MockJob from '@/lib/mock_job';

const JOBS_TITLE = 'Flexhire Jobs';
const BACK_TO_MAIN_PAGE = 'Back to Main Page';
const PHONE_LABEL = 'Phone';
const UPDATED_AT_LABEL = 'Last Sync';
const STATUS_LABEL = 'Status';
const NO_JOBS_OBTAINED_LABEL = 'No Jobs Obtained';
const HIRING_MANAGER_LABEL = 'Hiring Manager';
const COMPANY_LABEL = 'Company';
const JOB_TITLE_LABEL = 'Job Title';
const CONTRACT_REQUESTS_LABEL = 'Contract Requests';
const WITHOUT_CONTRACTS_LABEL = 'Without Contracts';
const SCREENING_QUESTIONS_LABEL = 'Screening Questions';
const CODE_TEST_LABEL = 'Code Test';
const DATA_NOT_AVAILABLE_TITLE = 'Data Not Available';
const DATA_NOT_AVAILABLE_DESCRIPTION = 'Data for jobs is currently unavailable. Please check the source or try again later.';
const REFRESH_LABEL = 'Refresh';

async function Jobs() {
  const jobs = await MockJob.fakeData();
  
  return (
    <>
      <div className="w-full my-4 text-4xl font-bold">{JOBS_TITLE}</div>
      <Link href="/" className="underline">{BACK_TO_MAIN_PAGE}</Link>
      {jobs ? (
        <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 space-x-10">
          <div className="md:w-1/2 p-4 text-center align-center flex flex-col">
            <div className="w-32 h-32 md:w-60 md:h-60 bg-gray-300 rounded-full mx-auto mb-4 shadow-lg">
              <img
                src={jobs.data.currentUser.avatarUrl}
                className="m-auto w-60 h-60"
                alt={jobs.data.currentUser.name}
              />
            </div>
            <h2 className="text-2xl font-bold">{jobs.data.currentUser.name}</h2>
            <p className="text-gray-600">{PHONE_LABEL}: {jobs.data.currentUser.phone}</p>
            <p className="text-gray-600">{UPDATED_AT_LABEL}: {jobs.updatedAt}</p>
            <p className="text-sky-500">{STATUS_LABEL}: {jobs.data.currentUser.status}</p>
          </div>
          <div className="bg-white rounded-md p-4 md:w-1/2">
            <div className="text-left">
              {jobs.data.currentUser.jobs.length === 0 ? (
                <h4 className="text-left">{NO_JOBS_OBTAINED_LABEL}</h4>
              ) : (
                <>
                  {jobs.data.currentUser.jobs.map((job, index) => (
                    <div key={index} className="border-b p-2 mb-2 shadow">
                      <span className="font-bold">{HIRING_MANAGER_LABEL}:</span> {job.hiringManager}<br />
                      <span className="font-bold">{COMPANY_LABEL}:</span> {job.company}<br />
                      <span className="font-bold">{JOB_TITLE_LABEL}:</span> {job.title}<br />
                      <span className="font-bold text-xl">{CONTRACT_REQUESTS_LABEL}:</span><br />
                      {job.contractRequests ? (
                        <>
                          {job.contractRequests.map((contract_request, idx) => (
                            <div key={idx} className="ml-2">
                              <span className='font-bold'>{SCREENING_QUESTIONS_LABEL}:</span> {contract_request.screeningQuestions}<br />
                              <span className='font-bold'>{CODE_TEST_LABEL}:</span> {contract_request.codeTest}<br />
                            </div>
                          ))}
                        </>
                      ) : (
                        <h4 className="text-4xl">{WITHOUT_CONTRACTS_LABEL}</h4>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2 w-[80%] mt-4 bg-red-200 mx-auto rounded-xl shadow">
          <h1 className="text-2xl font-bold">{DATA_NOT_AVAILABLE_TITLE}</h1>
          <p>{DATA_NOT_AVAILABLE_DESCRIPTION}</p>
          <Link href="/profile" className="underline">{REFRESH_LABEL}</Link>
        </div>
      )}
    </>
  );
}

export default Jobs;
