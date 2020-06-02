import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '../icons/index';

const BreadcrumbNav = ({ postTitle }) => (
  <nav className="text-xs sm:text-sm font-bold text-gray-400 bg-gray-200 rounded-r-full" aria-label="Breadcrumb">
    <ol className="list-none p-1 inline-flex">
      <li className="flex items-center">
        <HomeIcon className="px-1 h-3" />
        <Link href="/">
          <span className="transition-colors duration-150 hover:text-gray-700">Home</span>
        </Link>
        <ChevronRightIcon className="text-gray-600 h-3 sm:mx-1" />
      </li>
      <li className="flex items-center">
        {/*TODO: link to author's blogs*/}
        <Link href="#">
          <span className="transition-colors duration-150 hover:text-gray-700">Author</span>
        </Link>
        <ChevronRightIcon className="text-gray-600 h-3 sm:mx-1" />
      </li>
      <li>
        <span className="text-gray-500">{postTitle}</span>
      </li>
    </ol>
  </nav>
);

export default BreadcrumbNav;
