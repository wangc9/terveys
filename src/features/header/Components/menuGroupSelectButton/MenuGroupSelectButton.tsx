import { useNavigate } from 'react-router-dom';
import { SquareButtonProps } from '../squareButton/SquareButton';
import { useAppDispatch } from '../../../../app/hooks';
import { changeGroup, changeMenuStatus } from '../../headerSlice';

export default function MenuGroupSelectButton(props: SquareButtonProps) {
  const { name } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let link: string;
  switch (name) {
    case 'Henkilöasiakkaat':
      link = '/';
      break;
    case 'Työterveys yrityksille':
      link = '/tyoterveys';
      break;
    case 'Julkiset palvelut':
      link = '/julkiset-palvelut';
      break;
    case 'Yhtiö':
      link = '/yhtio';
      break;
    default:
      link = '/';
      break;
  }

  return (
    <button
      className="flex-grow text-left px-4 py-3 font-sans text-light-blue font-medium hover:bg-secondary-blue transition-all duration-200"
      onClick={() => {
        dispatch(changeGroup(name));
        dispatch(changeMenuStatus());
        navigate(link);
      }}
      type="button"
    >
      {name}
    </button>
  );
}
