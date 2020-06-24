import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '../../icons/index';

const Breadcrumb = ({ href, text }) => (
  <Link href={href}>
    <span className="transition-colors duration-150 cursor-pointer hover:text-gray-700">{text}</span>
  </Link>
);

const BreadcrumbNav = ({ links }) => (
  <header className="relative flex w-full">
    <nav className="w-full text-xs font-medium text-gray-500 bg-gray-200 rounded-l" aria-label="Breadcrumb">
      <ol className="inline-flex p-2 list-none">
        <li className="flex items-center">
          <HomeIcon className="h-3 px-1" />
          <Breadcrumb href="/" text="Home" />
          <ChevronRightIcon className="h-3 text-gray-500 sm:mx-1" />
        </li>
        {links.slice(0, -1).map(([text, link]) => (
          <li className="flex items-center">
            <Breadcrumb href={link} text={text} />
            <ChevronRightIcon className="h-3 text-gray-500 sm:mx-1" />
          </li>
        ))}
        <li className="w-40 truncate sm:w-full">
          <span className="text-gray-700">{links[links.length - 1][0]}</span>
        </li>
      </ol>
    </nav>
    <div
      className="absolute right-0 rotate-45 bg-gray-200 rounded-lg inset-y"
      style={{ width: 28, height: 28, transform: 'translateX(12px) translateY(3.5px) rotate(45deg)' }}
    />
  </header>
);

export default BreadcrumbNav;
