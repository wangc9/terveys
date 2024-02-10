import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  GroupState,
  ServiceState,
  changeGroup,
  changeMenuStatus,
  changeService,
  selectGroup,
  selectService,
} from '../../headerSlice';

export interface MenuItemWithIconProps {
  group: GroupState;
  name: ServiceState;
  icon: string | undefined;
  link: string;
}

export default function MenuItemWithIcon(
  props: MenuItemWithIconProps,
): React.JSX.Element {
  const { group, name, icon, link } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const serviceStatus = useAppSelector(selectService);
  const groupStatus = useAppSelector(selectGroup);

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(changeGroup(group));
        dispatch(changeService(name));
        dispatch(changeMenuStatus());
        navigate(link);
      }}
      className="px-4 py-3 flex items-center bg-main-grey hover:bg-secondary-blue transition-all duration-200"
    >
      {icon && <img src={icon} className="h-4" alt={`${name} in ${group}`} />}
      <p
        className={`px-2 font-sans text-light-blue ${groupStatus === group && serviceStatus === name && 'underline'}`}
      >
        {name}
      </p>
    </button>
  );
}
