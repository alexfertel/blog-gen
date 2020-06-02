import React from 'react';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from '../icons/index';

const PostNavigation = ({ nextSlug, prevSlug }) => (
  <div className="flex w-full justify-between pt-12 pb-10">
    <div className="justify-start">
      {prevSlug && (
        <Link href={`/posts/${prevSlug}`}>
          <button type="button" className="btn">
            <LeftArrowIcon className="w-4 h-4 mr-1" />
            Anterior
          </button>
        </Link>
      )}
    </div>
    <div className="justify-end">
      {nextSlug && (
        <Link href={`/posts/${nextSlug}`}>
          <button type="button" className="btn">
            Siguiente
            <RightArrowIcon className="w-4 h-4 ml-1" />
          </button>
        </Link>
      )}
    </div>
  </div>
);

export default PostNavigation;
