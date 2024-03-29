import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GroupState, changeGroup, selectGroup } from '../../headerSlice';

export interface SquareButtonProps {
  name: GroupState;
}

export default function SquareButton(
  props: SquareButtonProps,
): React.JSX.Element {
  const { name } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeState = useAppSelector(selectGroup);

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
      className={`px-6 py-3 font-sans text-light-blue font-normal w-fit hover:underline ${activeState === name ? 'bg-white' : 'bg-inherit'}`}
      onClick={() => {
        dispatch(changeGroup(name));
        navigate(link);
      }}
      type="button"
    >
      {name}
    </button>
  );
}
