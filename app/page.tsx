"use client";

import NavLayout from "@/components/layout/nav";

interface User {
  id: number;
  email: string;
  name: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

interface Feed {
  id: number;
  user: User;
  message: string;
  liked: number;
  createdAt: string;
  updatedAt: string;
}

// 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
// After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.
// 로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
// 또한 트윗을 작성할 수 있어야 합니다.
export default function Page() {
  const feedList: Feed[] = [
    {
      id: 0,
      user: {
        id: 0,
        name: "test",
        email: "user@test.com",
        createdAt: "2024-01-11",
        updatedAt: "2024-01-11",
      },
      message: "clone twitter X... dokjsl;kdjfa;sldfalsdjf;alksjdvcoiwejrkfznxchjwielusnfdzlkjxcnflaiewurndsfilcvsanedliufnwelraskjdfnviulfsdnunvse",
      liked: 5,
      createdAt: "2024-01-11",
      updatedAt: "2024-01-11",
    },
    {
      id: 0,
      user: {
        id: 0,
        name: "test",
        email: "user@test.com",
        createdAt: "2024-01-11",
        updatedAt: "2024-01-11",
      },
      message: "clone twitter X...",
      liked: 5,
      createdAt: "2024-01-11",
      updatedAt: "2024-01-11",
    },
  ];

  return (
    <NavLayout title="Home">
      <div className="grid grid-cols-1 gap-4">
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <div className="p-6">
            <form className="flex space-x-4">
              <a
                href="#"
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                <img
                  src="https://i.pravatar.cc/48?img=24"
                  alt="username"
                  title="username"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <input
                id="message"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="무엇이든 텔미"
              />
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                전송
              </button>
            </form>
          </div>
        </div>
        {feedList.map((feed) => (
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            <div className="  p-6">
              <header className="mb-4 flex gap-4">
                <a
                  href="#"
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                >
                  <img
                    src="https://i.pravatar.cc/48?img=24"
                    alt="username"
                    title="username"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {feed.user.name}
                  </h3>
                  <p className="text-sm text-slate-400">{feed.updatedAt}</p>
                </div>
              </header>
              <p className="truncate">{feed.message}</p>
            </div>
          </div>
        ))}
      </div>
    </NavLayout>
  );
}
