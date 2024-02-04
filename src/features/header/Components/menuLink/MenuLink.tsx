import { useNavigate } from 'react-router-dom';
import RightArrow from '../../../../assets/rightArrow.svg';

export interface MenuLinkProps {
  title: string;
  subtitle: string | null;
  link: string;
}

export default function MenuLink(props: MenuLinkProps): React.JSX.Element {
  const { title, subtitle, link } = props;
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-col py-8 px-4 hover:bg-secondary-blue transition-all duration-200 border border-secondary-blue"
      type="button"
      onClick={() => {
        navigate(link);
      }}
    >
      <div className="flex justify-between py-1 w-full">
        <p className="font-medium text-light-blue font-sans">{title}</p>
        <img className="h-4" src={RightArrow} alt="right arrow" />
      </div>
      {subtitle && <p className="py-1 text-main-text font-sans">{subtitle}</p>}
    </button>
  );
}
