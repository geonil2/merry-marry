import SignInForm from '@/components/auth/SignInForm';
import getMetadata from '@/helper/getMetadata';

export const metadata = getMetadata({ title: `Admin` });

export default function AdminPage() {
  return (
    <div className="flex justify-center items-center h-[100vh] p-6">
      <div className="w-full max-w-[400px]">
        <p className="text-xl	font-semibold mb-2">
          Sign in to Merry-Marry Admin Service
        </p>
        <p className="text-base	text-letter-gray mb-10">
          Enter your details below.
        </p>
        <SignInForm />
      </div>
    </div>
  );
}
