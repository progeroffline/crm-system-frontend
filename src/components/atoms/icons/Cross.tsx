import BaseIcon from './DefaultProps';

const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </BaseIcon>
  );
};

export default CrossIcon;
