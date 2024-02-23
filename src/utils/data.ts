/* eslint-disable import/prefer-default-export */
import { CarouselItem } from '../features/public/components/carousel/Carousel';
import {
  ensiapu,
  influenssa,
  influenssaHero,
  lastenKuva,
  lastenTervey,
  mieli,
  rokote,
  suunta,
  tarkastus,
  tarkein,
  terveystarkastukset,
  tulevaisuuden,
  tulevaisuudenTerve,
  tyoterveys,
  uudistu,
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

export const työterveydessä: Array<CarouselItem> = [
  {
    title:
      'Webinaari - Kuinka rakentaa Inhimillisesti tehokas organisaatiokulttuuri?',
    subtitle:
      'Kuinka rakentaa organisaatiokulttuuri, jossa liiketoiminta sekä ihmiset voivat hyvin? Katso webinaaritallenne, jossa Terveystalon organisaatiopsykologit Jaakko Sahimaa ja Päivi Turpeinen keskustelevat inhimillisesti tehokkaan organisaatiokulttuurin rakentamisesta yhdessä henkilöstöpalveluyritys Biisonin toimtusjohtajan Jukka Illin kanssa.',
    id: 1,
    img: tyoterveys,
  },
  {
    title:
      'Uudistettu terveystarkastus tarjoaa entistä kattavampaa ennaltaehkäisevää terveystietoa',
    subtitle:
      'Tuomme asiakkaidemme ja ammattilaistemme käyttöön moderneinta mahdollista teknologiaa, jonka avulla tunnistamme keskeisimmät elintapasairausriskit yhdestä tavanomaisesta verinäytteestä. Verianalyysi tulee osaksi työterveydessä tehtäviä terveystarkastuksia, ja se tarjoaa työntekijälle tukea ja ohjausta elintapamuutoksen toteuttamiseen ja työnantajalle entistä kattavamman kuvan työntekijöiden terveydentilasta ja hyvinvoinnista.',
    id: 2,
    img: terveystarkastukset,
  },
  {
    title: 'Webinaari: Mieli työelämässä',
    subtitle:
      'Työnantajan on yhä tärkeämpää huolehtia työntekijöiden mielen hyvinvoinnista ennaltaehkäisevästi, ennen kuin mielen ongelmat monimutkaistuvat. Mutta miten työnantaja voi mahdollistaa työntekijöilleen matalan kynnyksen tuen? Minkälaisia vaikutuksia ennakoivalla mielenterveystyöllä on? Entä miten puhua tunteista töissä?',
    id: 3,
    img: mieli,
  },
  {
    title: 'Influenssakausi on alkanut - suojaa työntekijäsi rokotteella',
    subtitle:
      'Paras suoja influenssaa vastaan on rokote. Se ehkäisee sairauden 50-80-prosenttisesti, lyhentää taudin kestoa ja vähentää sen leviämistä kotona ja työpaikoilla. Lisäämällä influenssarokotukset työterveyssopimukseen varmistat, että henkilöstösi voi halutessaan rokottautua vuosittain influenssaa vastaan.',
    id: 4,
    img: influenssaHero,
  },
  {
    title:
      'Nightingale Healthin moderni terveysteknologia osaksi Terveystalon työterveyttä',
    subtitle:
      'Terveystalo uudistaa ennaltaehkäisevää terveydenhuoltoa integroimalla suomalainen terveysteknologiayritys Nightingale Healthin kehittämän verianalyysiteknologian osaksi työterveyden terveystarkastuksia syksyn 2023 aikana. Modernia teknologiaa hyödyntämällä voidaan havaita työikäisen väestön alttiuden sairastua tavanomaisimpiin kansantauteihin.',
    id: 5,
    img: uudistu,
  },
  {
    title: 'Katso tallenne - Tulevaisuuden työelämän tekijät',
    subtitle:
      'Tulevaisuuden työelämän tekijät -virtuaalitapahtuma pidettiin 13.9. Tapahtuman teemana oli kokonaisvaltainen työkykyjohtaminen tulevaisuuden työelämässä. Tapahtumassa kuultiin tulevaisuuden työelämän trendeistä, ennaltaehkäisevästä työkykyjohtamisesta ja työterveyden ja hyvinvoinnin digitalisaatiosta ja tekoälystä.',
    id: 6,
    img: tulevaisuuden,
  },
  {
    title: 'Tulevaisuuden Terve työelämä -webinaarisarja',
    subtitle:
      'Miten Tulevaisuuden Terve työelämä rakennetaan? – Keväällä pidetyssä webinaarisarjaamme asiantuntijamme keskustelivat jokaista organisaatiota koskettavista työelämän trendeistä, ja siitä miten ne vaikuttavat suomalaiseen työelämään tänään ja tulevaisuudessa. Katso webinaarien tallenteet.',
    id: 8,
    img: tulevaisuudenTerve,
  },
  {
    title: 'Työpaikasta turvallisempi ensiapuvalmiudella',
    subtitle:
      'Pidä henkilöstösi ensiaputaidot ajan tasalla. Järjestämme vuoden aikana useita yrityksille avoimia ensiapukoulutuksia verkkokoulutuksena ja eri paikkakunnilla. Järjestämme myös yrityskohtaisia kursseja, joissa voidaan ottaa hyvin huomioon yrityskohtaiset työympäristön riskitekijät. Katso kurssivalikoimamme, ota yhteyttä ja kysy lisää.',
    id: 9,
    img: ensiapu,
  },
  {
    title: 'Uusi Suunta digitaaliselle työkykyjohtamiselle',
    subtitle:
      'Suunta-palvelu on Terveystalon työterveysasiakkaan palvelu, joka mahdollistaa työterveyden johtamisen sekä raportoinnin ja seurannan ketterästi työterveystiimin kanssa yhden digitaalisen kanavan kautta.',
    id: 10,
    img: suunta,
  },
];
