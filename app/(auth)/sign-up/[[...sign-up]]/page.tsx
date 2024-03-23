import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div>
        <h2 className="mb-4 text-heading3-bold">Demo account:</h2>
        <h2 className="mb-2 text-heading4-medium">Username: demo</h2>
        <h2 className="mb-2 text-heading4-medium">Password: marciniakdemo</h2>
      </div>
      <div className="flex justify-center w-full mt-6">
        <SignUp />
      </div>
    </div>
  );
}
