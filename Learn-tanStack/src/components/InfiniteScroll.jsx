import React, { use, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Api from "../Utils/Api.jsx";


export const InfiniteScroll = () => {
  const fetchUsers = async ({ pageParam = 1 }) => {
    const res = await Api.get(`/users?per_page=10&page=${pageParam}`);
    return res.data;
  };

  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infiniteUsers"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  //* Normal approach
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const bottom =
  //       Math.ceil(window.innerHeight + window.scrollY) >=
  //       document.documentElement.scrollHeight - 1;

  //     if (bottom && hasNextPage && !isFetchingNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); // ✅ cleanup
  //   };
  // }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

//* Using Intersection Observer API
const { ref, inView } = useInView({
  threshold: 1,
});

useEffect(() => {
  if(inView && hasNextPage && !isFetchingNextPage){
    fetchNextPage();
  }
}, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])



  if (isLoading)
    return <h1 className="text-center font-bold text-green-300">Loading...</h1>;
  if (isError)
    return (
      <h1 className="text-center font-bold text-red-300">
        Something went wrong!
      </h1>
    );

  return (
    <div className="p-4">
      {data?.pages.map((page, i) => (
        <div key={i} className="grid gap-4">
          {page.map((user) => (
            <div
              key={user.id}
              className="p-2 border rounded flex items-center gap-2"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-10 h-10 rounded-full"
              />
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      ))}

      <div ref={ref}>
        {isFetchingNextPage && (
        <p className="text-center mt-4 font-semibold text-blue-500">
          Loading more...
        </p>
      )}
      </div>
    </div>
  );
};
export default InfiniteScroll;
