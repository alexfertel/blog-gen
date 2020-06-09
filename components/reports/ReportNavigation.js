import React from 'react';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from '../../icons/index';

const ReportNavigation = ({ nextSlug, prevSlug }) => (
  <div className="flex justify-between w-full pt-12 pb-10">
    {prevSlug ? (
      <Link href={`/posts/${prevSlug}`}>
        <button type="button" className="btn">
          <LeftArrowIcon className="w-4 h-4 mr-1" />
          Anterior
        </button>
      </Link>
    ) : (
      <span />
    )}
    {nextSlug ? (
      <Link href={`/posts/${nextSlug}`}>
        <button type="button" className="btn">
          Siguiente
          <RightArrowIcon className="w-4 h-4 ml-1" />
        </button>
      </Link>
    ) : (
      <span />
    )}
  </div>
);

export default ReportNavigation;
