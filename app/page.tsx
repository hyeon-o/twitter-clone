"use client";

import NavLayout from "@/component/layout/nav";
import useMutation from "@/lib/hook/useMutation";
import useMySWR from "@/lib/hook/useMySWR";
import useUser from "@/lib/hook/useUser";
import { Feed, User } from "@prisma/client";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FeedForm {
  message: string;
}

interface CreateFeedResponse {
  ok: boolean;
}

interface FeedWithUser extends Feed {
  user: User;
}

interface ReadFeedResponse {
  ok: boolean;
  feedList: FeedWithUser[];
}

// 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
// After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.
// 로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
// 또한 트윗을 작성할 수 있어야 합니다.
export default function Page() {
  // 사용자 정보
  const { user } = useUser();
  console.log(user);

  // form input
  const { register, handleSubmit, reset } = useForm<FeedForm>();
  const onSubmit = (data: FeedForm) => {
    console.log(data);
    createFeed({ userId: user.id, ...data });
  };

  // POST /api/feed API
  const [createFeed, { data: createFeedData }] =
    useMutation<CreateFeedResponse>("/api/feed");

  // GET /api/feed API
  const { data: readFeed, mutate: readFeedMutate } =
    useMySWR<ReadFeedResponse>("/api/feed");

  useEffect(() => {
    if (createFeedData?.ok) {
      alert("tweet 성공!");
      reset();
      readFeedMutate();
    }
  }, [createFeedData]);

  return (
    <NavLayout title="Home">
      <div className="grid grid-cols-1 gap-4">
        {user && (
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            <div className="p-6">
              <form
                className="flex space-x-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <a
                  href="#"
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                >
                  <img
                    src={user.image}
                    alt={user.nickname}
                    title="avatar"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </a>
                <input
                  id="message"
                  type="text"
                  {...register("message")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="텔미텔미 테테테테테텔미"
                />
                <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
                  짹짹
                </button>
              </form>
            </div>
          </div>
        )}
        {readFeed?.feedList.map((feed) => (
          <Link href={`/tweet/${feed.id}`}>
            <div
              key={feed.id}
              className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
            >
              <div className="p-6">
                <header className="mb-4 flex gap-4">
                  <a
                    href="#"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src={feed.user.image || ""}
                      alt="username"
                      title="username"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <div>
                    <h3 className="text-xl font-medium text-slate-700">
                      {feed.user.nickname}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {feed.updatedAt.toLocaleString()}
                    </p>
                  </div>
                </header>
                <p className="truncate">{feed.message}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </NavLayout>
  );
}
