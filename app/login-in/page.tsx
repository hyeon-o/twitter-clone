"use client";

import useMutation from "@/lib/hook/useMutation";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
}

interface LoginResponse {
  ok: boolean;
  user: User;
}

// 로그인을 진행하는 페이지입니다.
export default function Page() {
  // form input
  const { register, handleSubmit } = useForm<LoginForm>();
  const onSubmit = (data: LoginForm) => {
    console.log(data);
    validUser(data);
  };
  // POST /api/user/valid API
  const [validUser, { data }] = useMutation<LoginResponse>("/api/user/valid");

  const router = useRouter();
  useEffect(() => {
    if (data?.ok && data?.user) {
      console.log(data.user);
      sessionStorage.setItem("user", data.user.id.toString())
      router.push("/")
    }
  }, [data]);

  return (
    <div className="bg-white shadow-lg rounded px-8 py-6">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
        >
          <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
        </svg>
      </div>
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            {...register("email")}
            type="email"
            placeholder="user@test.com"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            로그인
          </button>
          <Link
            href="/create-account"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            계정 만들기
          </Link>
        </div>
      </form>
    </div>
  );
}
