import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GroupState, changeGroup, selectGroup } from '../../headerSlice';

export interface SquareButtonProps {
  // style: string;
  link: string;
  name: GroupState;
}

export default function SquareButton(
  props: SquareButtonProps,
): React.JSX.Element {
  const { link, name } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeState = useAppSelector(selectGroup);

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
