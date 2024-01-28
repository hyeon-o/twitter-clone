import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useMySWR from "./useMySWR";

export default function useUser() {
  const router = useRouter();

  // sessionStorage check
  const userId = sessionStorage.getItem("user");
  console.log("useUser", userId);

  const { data, error } = useMySWR(`/api/user/${userId}`);

  useEffect(() => {
    if (!userId || (data && !data.ok) || error) {
      router.push("/login-in");
    }
    console.log(data);
  }, [data, error]);

  return { user: data?.user };
}
