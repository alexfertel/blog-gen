import React from 'react';
import Link from 'next/link';
import { getPreviousPostSlug, getNextPostSlug } from '../lib/api'; // THIS MOTHERFUCKER RIGHT HERE ....

const PostNavigation = ({ postId }) => (
  // <div>
  //   <Link href={`/posts/${getPreviousPostSlug(postId)}`}>
  //     <button
  //       type="button"
  //       className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
  //     >
  //       Anterior
  //       <svg
  //         fill="none"
  //         stroke="currentColor"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         className="w-4 h-4 ml-1"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M5 12h14M12 5l7 7-7 7" />
  //       </svg>
  //     </button>
  //   </Link>
  //   <Link href={`/posts/${getNextPostSlug(postId)}`}>
  //     <button
  //       type="button"
  //       className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
  //     >
  //       Siguiente
  //       <svg
  //         fill="none"
  //         stroke="currentColor"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         className="w-4 h-4 ml-1"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M5 12h14M12 5l7 7-7 7" />
  //       </svg>
  //     </button>
  //   </Link>
  // </div>
  <div>asd</div>
);

export default PostNavigation;
