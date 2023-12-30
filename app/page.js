import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-white md:mx-0 mx-4 p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
      <Link href="/profile" className="block bg-blue-500 text-white rounded-full text-2xl py-4 px-6 transition duration-300 transform hover:scale-105 hover:shadow-xl">
        Profile
      </Link>
      <Link href="/jobs" className="block bg-blue-500 text-white rounded-full text-2xl py-4 px-6 transition duration-300 transform hover:scale-105 hover:shadow-xl">
        Flexhire Jobs
      </Link>
    </div>
  );
};

export default Home;
