import BaseIcon from './DefaultProps';

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </BaseIcon>
  );
};

export default ChevronRightIcon;
