import { useState } from 'react';
import InformationCard from '../informationCard/InformationCard';
import { LeftShortArrow, RightShortArrow } from '../..';

export type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
};

export interface CarouselProps {
  items: Array<CarouselItem>;
}

export default function Carousel(props: CarouselProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { items } = props;

  const nextItem = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const previousItem = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="flex flex-col flex-grow bg-main-grey overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 27}%)` }}
      >
        {items.map(item => (
          <div key={item.id} className={`px-4 flex-shrink-0 `}>
            <InformationCard
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
            />
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-center items-center h-fit">
        <button type="button" onClick={previousItem}>
          <img src={LeftShortArrow} className="h-6" alt="Previous" />
        </button>
        <button type="button" onClick={nextItem}>
          <img src={RightShortArrow} className="h-6" alt="Next" />
        </button>
      </div>
    </div>
  );
}
