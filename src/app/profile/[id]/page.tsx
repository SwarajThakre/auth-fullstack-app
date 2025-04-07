// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UserProfile({ params }: any) {
  const { id } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Profile
        </h2>
        <hr />
        <p className="mt-2 text-center text-sm text-gray-600">
          User ID: <span className="font-medium text-gray-900 ">{id}</span>
        </p>
      </div>
    </div>
  );
}
