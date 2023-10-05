import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VRAR() {
  const router = useRouter();

  useEffect(() => {
    alert("sorry, we're not ready");
    router.replace("/");
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}
