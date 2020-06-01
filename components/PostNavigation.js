import React from 'react';
import Link from 'next/link';

const PostNavigation = ({ nextSlug, prevSlug }) => (
  <div className="grid grid-cols-2 mt-16">
    <div className="flex justify-start">
      {prevSlug && (
        <Link href={`/posts/${prevSlug}`}>
          <button
            type="button"
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3  hover:bg-gray-300 rounded"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l-7 7 7 7" />
            </svg>
            Anterior
          </button>
        </Link>
      )}
    </div>
    <div className="flex justify-end">
      {nextSlug && (
        <Link href={`/posts/${nextSlug}`}>
          <button
            type="button"
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 hover:bg-gray-300 rounded"
          >
            Siguiente
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      )}
    </div>
  </div>
);

export default PostNavigation;
