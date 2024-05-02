'use client';

import { CSSProperties, FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  type?: 'button' | 'submit';
  to?: string;
  className: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  style,
  type,
  to,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      style={style}
      variant='outlined'
      component='button'
      href={to}
      type={type}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
