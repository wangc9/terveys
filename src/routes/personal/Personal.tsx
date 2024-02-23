import { Route, Routes } from 'react-router-dom';
import placeholder from '../../placeholders.jpg';
import {
  lasten,
  julkiset,
  nps,
  kotona,
  tilaa,
  toihin,
  tt,
} from '../../features/public';
import {
  FullWidthPicText,
  FrontPageBanner,
  Carousel,
  FrontPageShortcut,
} from '../../features/public/components';
import { ajankohtaista, työterveydessä } from '../../utils/data';

export default function Personal() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex flex-col justify-center">
              <FrontPageBanner
                title="Nopeasti hyvään hoitoon"
                subtitle="Asioi sujuvasti etänä tai yli 200 toimipaikassamme kautta maan."
                button="Varaa aika"
              />
              <FrontPageShortcut />
              <FullWidthPicText
                pic={lasten}
                alt="lasten paivystys"
                title="Nopea apu lasten päivystyksestä"
                subtitle="Lasten päivystys tarjoaa pikaisen avun äkillisissä vaivoissa. Päivystyksessä tutkitaan ja hoidetaan esimerkiksi kuumetta, kiputiloja, hengenahdistusta sekä korvatulehdus- ja korvakipuoireita. Päivystämme viidessä toimipaikassa kattavin aukioloajoin."
                button="Tutustu"
                link="/lasten-paivystys"
                reversed={false}
                blue={false}
              />
              <div id="Ajankohtaista" className="flex flex-col">
                <p className="py-12 text-light-blue font-extrabold text-4xl self-center">
                  Ajankohtaista
                </p>
                <Carousel items={ajankohtaista} />
              </div>
              <FullWidthPicText
                pic={tt}
                alt="työterveys hero"
                title="Työterveyspalvelut yrityksille ja organisaatioille"
                subtitle="Kokemuksemme ja osaamisemme ansiosta tarjoamme aina tarpeisiinne sopivimman palvelukokonaisuuden kaikenkokoisille työnantajille: yrittäjästä ja pienyrityksestä suuriin yrityksiin. Rakennetaan yhdessä Terve Työpaikka™."
                button="Lue lisää"
                link="/tyoterveys"
                reversed={false}
                blue
              />
              <div id="Ajankohtaista työterveydessä" className="flex flex-col">
                <p className="py-12 text-light-blue font-extrabold text-4xl self-center">
                  Ajankohtaista työterveydessä
                </p>
                <Carousel items={työterveydessä} />
              </div>
              <FullWidthPicText
                pic={kotona}
                alt="Kotona"
                title="Oma asiointi"
                subtitle="Kirjautumalla näet käyntikirjauksesi, tutkimustuloksesi ja sairauspoissaolotodistuksesi. Voit myös käyttää chatteja ja videovastaanottoja sekä maksaa asiointisi verkkomaksuna."
                button="Asioi verkossa"
                link="/ajanvaraus"
                reversed
                blue
              />
              <FullWidthPicText
                pic={nps}
                alt="nps 2023"
                title="Korkea laatu on meille kunnia-asia"
                subtitle="Seuraamme laatuamme monella tasolla ja mittarilla. Lue, miten ja miksi."
                button="Lue lisää laatutyöstämme"
                link="/asiakkaalle"
                reversed={false}
                blue
              />
              <FullWidthPicText
                pic={tilaa}
                alt="Tilaa Terveystalon uutiskirje"
                title="Tilaa Terveystalon uutiskirje"
                subtitle="Uutiskirjeen tilaajana saat asiantuntijoidemme vinkkejä ajankohtaisista terveysteemoista, kutsuja maksuttomiin tapahtumiimme sekä etuja ja tarjouksia."
                button="Tutustu ja tilaa"
                link="/asiakkaalle"
                reversed={false}
                blue
              />
              <FullWidthPicText
                pic={toihin}
                alt="Töihin Terveystaloon"
                title="Töihin Terveystaloon"
                subtitle="Terveystalolaiset ovat kukin omien alojensa huippuosaajia aina koodaajista kirurgeihin. Teemme työtä terveemmän elämän puolesta. Siksi emme ainoastaan paranna sairauksia, vaan autamme ihmisiä terveempään elämään. Meillä pääset osaksi huippuosaajien moniammatillista yhteisöä, jossa autamme toinen toisiamme onnistumaan. "
                button="Lue lisää"
                link="/yhtio/toihin-terveystaloon"
                reversed
                blue={false}
              />
              <FullWidthPicText
                pic={julkiset}
                alt="Julkiset palvelut"
                title="Julkiset palvelut"
                subtitle="Varmistamme toiminnallamme sosiaali- ja terveydenhuollon palvelut ja erityisosaajat paikkoihin, jonne ne muutoin olisivat vaikeasti järjestettävissä kustannustehokkaasti. Lue lisää Terveystalosta julkisen sektorin kumppanina."
                button="Lue lisää"
                link="/julkiset-palvelut"
                reversed={false}
                blue
              />
            </main>
          }
        />
        <Route
          path="/palvelut"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/toimipaikat"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/asiantuntijat"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/asiakkaalle"
          element={
            <img src={placeholder} width="100%" alt="Page under construction" />
          }
        />
        <Route
          path="/tietopaketit"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
      </Routes>
    </div>
  );
}
