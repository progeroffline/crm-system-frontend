import { mergeClassNames } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { JSX } from 'react';

interface StatsBadgeProps {
  className?: ClassValue;
  icon?: JSX.Element;
  title?: string;
  value?: number;
  descriptionIcon?: JSX.Element;
  description?: string;
}

const StatsBage: React.FC<StatsBadgeProps> = ({
  className,
  icon,
  title,
  value,
  descriptionIcon,
  description,
}) => {
  const formatterValue = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value ?? 0);

  return (
    <div className={mergeClassNames(['stats', 'shadow', 'bg-base-100', className])}>
      <div className="stat">
        <div className="stat-figure text-accent">{icon}</div>
        <div className="stat-title">{title}</div>
        <div className="stat-value">${formatterValue}</div>
        <div className="stat-desc flex items-center">
          {descriptionIcon}
          <span className="flex content-center ml-1">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBage;
