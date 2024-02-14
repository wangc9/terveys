/* eslint-disable import/prefer-default-export */
import { CarouselItem } from '../features/public/components/carousel/Carousel';
import {
  influenssa,
  lastenKuva,
  lastenTervey,
  rokote,
  tarkastus,
  tarkein,
} from '../features/public';

export const ajankohtaista: Array<CarouselItem> = [
  {
    title: 'Influenssarokotteet ovat saatavilla',
    subtitle:
      'Influenssarokote on tehokkain suoja influenssaa ja sen jälkitauteja vastaan. Tutustu rokotevaihtoehtoihin ja valitse sinulle sopivin aika rokotukseen.',
    id: 1,
    img: influenssa,
  },
  {
    title: 'Oletko tulossa lapsen kanssa lääkärille?',
    subtitle:
      'Lisää itsesi sähköisissä asiointipalveluissamme lapsesi huoltajaksi, niin saat Terveystalon sovellukseen ja verkkopalveluun näkyville lapsesi käyntitiedot laboratoiotulokset, reseptit ja lähetteet.',
    id: 2,
    img: tarkastus,
  },
  {
    title: 'Lasten Terveystalosta sukkulasti apua',
    subtitle:
      'Kun kyse on pienen terveydestä, hoitoon on päästävä sujuvasti. Lasten Terrveystalossa on tarjolla kattavat lasten terveyspalvelut aina lastenlääkäristä korvalääkäriin ja muihin lapsia hoitaviin asiantuntijoihin.',
    id: 3,
    img: lastenTervey,
  },
  {
    title: 'Tärkeintä on terveys. Koska on tärkeämpääkin.',
    subtitle:
      'Kun kyse on terveydestä, laadukas hoito ja sujuva hoitoon pääsy ovat kaikki kaikessa. Me keskitymme tärkeimpään, terveyteen, sillä elämässä on tärkeämpääkin.',
    id: 4,
    img: tarkein,
  },
  {
    title: 'Uutta sähköisessä asioinnissa',
    subtitle:
      'Alaikäisen käyntitiedot näkyvät jatkossa huoltajille 18-vuotiaaksi asti Terveystalon oman sovelluksen ja verkkopalvelun lisäksi myös Omakannassa. Otimme käyttöön uuden valtakunnallisen toimintamallin, joka ohjaa alaikäisen puolesta asiointia.',
    id: 5,
    img: lastenKuva,
  },
  {
    title: 'Ajankohtaista vastaanotoillamme',
    subtitle:
      'Voit varata ajan kenelle tahansa ammattilaisellemme, vaikka sinulla olisi hengitystieoiteita, huten yskää, nuhaa tai kurkkukipua. Jos epäilet koronavirustartuntaa tai sinulla on todettu koronavirustartunta, pyydämme varaamaan ajan etäkanaviimme.',
    id: 6,
    img: rokote,
  },
];
