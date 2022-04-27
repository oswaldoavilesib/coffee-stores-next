import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CoffeeStore = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/adfe3ddf">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
