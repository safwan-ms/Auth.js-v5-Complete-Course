import { register } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Register = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>

      <form className="my-8" action={register}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col w-full">
            <Label className="mb-2">First Name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col w-full">
            <Label className="mb-2">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              name="lastname"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <Label className="mb-2">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col mb-6">
          <Label className="mb-2">Password</Label>
          <Input
            id="password"
            placeholder="***********"
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br cursor-pointer relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Sign up &rarr;
        </button>

        <p className="text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300 text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
