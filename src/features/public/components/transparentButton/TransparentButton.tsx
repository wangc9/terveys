import { useNavigate } from 'react-router-dom';
import { RightArrow } from '../..';

export interface TransparentButtonProps {
  icon: string;
  name: string;
  arrow: boolean;
  link: string;
}

export default function TransparentButton(
  props: TransparentButtonProps,
): React.JSX.Element {
  const navigate = useNavigate();
  const { icon, name, arrow, link } = props;

  return (
    <button
      type="button"
      className="w-fit flex justify-center items-center px-2 py-2"
      onClick={() => {
        navigate(link);
      }}
    >
      <img className="h-4 pr-2" src={icon} alt={name} />
      <span className="text-light-blue px-2">{name}</span>
      {arrow && (
        <img className="h-4 pl-2" src={RightArrow} alt="A right arrow" />
      )}
    </button>
  );
}
