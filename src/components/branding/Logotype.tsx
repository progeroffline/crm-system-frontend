type LogotypeSize = 'sm' | 'md' | 'lg';

interface LogotypeProps extends React.HTMLProps<HTMLSpanElement> {
  variant?: LogotypeSize;
}

const sizeClasses: Record<LogotypeSize, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

const defaultClasses = ['font-black', 'uppercase', 'text-primary'];

const LogotypeComponent: React.FC<LogotypeProps> = ({ className, variant = 'sm', ...props }) => {
  const combinedClassName = [...defaultClasses, sizeClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={combinedClassName} {...props}>
      Lumens crm
    </span>
  );
};

export default LogotypeComponent;
