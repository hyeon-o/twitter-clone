"use client";

// 트윗의 상세 정보를 보는 페이지 입니다.
// The user should be able to see the tweet + a Like button.
// When the Like button is pressed, save the like on the database and reflect the update using mutate from useSWR.
// 사용자는 id에 해당하는 트윗의 내용과 좋아요 버튼을 볼 수 있어야 합니다.
// 좋아요버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 하며 useSWR의 mutate를 사용하여 업데이트를 반영해야 합니다.
export default function Page() {
  const feed = {
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
  };
  
  return (
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
        <p>{feed.message}</p>
        <div className="flex justify-end gap-2">
          <button className="inline-flex items-center justify-center h-10 gap-2 px-3 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-gray-500 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                role="graphics-symbol"
                aria-labelledby="title-81 desc-81"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span>{feed.liked}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
