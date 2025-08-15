import { Link } from 'react-router-dom';

interface Path {
  name: string;
  to: string;
}

interface BreadcrumbsProps {
  paths: Path[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <div className="text-sm breadcrumbs p-6">
      <ul>
        {paths.map((path) => (
          <li key={path.to} className="flex items-center">
            <Link to={path.to} className="link link-hover">
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
