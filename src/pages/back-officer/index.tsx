import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log("router", router);
  useEffect(() => {
    console.log("IOndex");
    router.push(`${pathname}/manageMCP`);
  }, []);
  return <div>Index</div>;
};

export default Index;
