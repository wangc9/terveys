import { useState } from 'react';
import MenuGroupSelectButton from '../menuGroupSelectButton/MenuGroupSelectButton';
import ExpandIcon from '../../../../assets/expand.svg';
import ShrinkIcon from '../../../../assets/shrink.svg';
import { GroupState } from '../../headerSlice';

export interface ExpandMenuProps {
  name: GroupState;
}

export default function ExpandMenu(props: ExpandMenuProps): React.JSX.Element {
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  const { name } = props;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full">
        <MenuGroupSelectButton name={name} />
        <button
          type="button"
          onClick={() => {
            setOpenStatus(!openStatus);
          }}
          className="px-4 hover:bg-secondary-blue transition-all duration-200"
        >
          {openStatus ? (
            <img src={ShrinkIcon} className="h-4" alt={`close ${name}`} />
          ) : (
            <img src={ExpandIcon} className="h-4" alt={`expand ${name}`} />
          )}
        </button>
      </div>
    </div>
  );
}
