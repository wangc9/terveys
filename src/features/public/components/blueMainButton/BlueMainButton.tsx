import { useNavigate } from 'react-router-dom';
import { WhiteArrow } from '../..';

export interface BlueMainButtonProps {
  name: string;
  link: string;
}

export default function BlueMainButton(
  props: BlueMainButtonProps,
): React.JSX.Element {
  const { name, link } = props;
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="relative bg-light-blue text-white px-14 py-4 transform hover:bg-secondary-blue duration-200 rounded-full"
      onClick={() => {
        navigate(link);
      }}
    >
      <p className="self-center text-xl text-white font-medium">{name}</p>
      <img
        className="absolute top-5 right-5 h-5 self-center"
        src={WhiteArrow}
        alt={name}
      />
    </button>
  );
}
