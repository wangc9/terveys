import { useNavigate } from 'react-router-dom';

export interface WhiteMainButtonProps {
  name: string;
  link: string;
}

export default function WhiteMainButton(
  props: WhiteMainButtonProps,
): React.JSX.Element {
  const navigate = useNavigate();

  const { name, link } = props;

  return (
    <button
      type="button"
      className="w-fit px-12 py-3 text-xl text-light-blue font-medium border-light-blue border-2 hover:bg-back-blue transition-all duration-200 rounded-full"
      onClick={() => {
        navigate(link);
      }}
    >
      {name}
    </button>
  );
}
