import React, { ReactNode } from 'react';

const PageTemplate = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`p-6 bg-primary-black scrollbar overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default PageTemplate;
