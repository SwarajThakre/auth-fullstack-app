'use client';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
      toast.success('Logged out successfully!');
    } catch (error: any) {
      console.log('Failed to logout', error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Profile
        </h2>
        <hr />
        <button
          onClick={logout}
          type="submit"
          className=" bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
