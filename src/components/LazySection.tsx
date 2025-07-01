
import React from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  placeholder?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  placeholder
}) => {
  const [ref, isVisible] = useLazyLoad();

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder || (
        <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default LazySection;
