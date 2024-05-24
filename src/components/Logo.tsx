import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {}

const Logo = (props: Props) => {
  return <Image width={48} height={48} {...props} priority alt="logo" src="/images/banner.webp" />;
};

export default Logo;