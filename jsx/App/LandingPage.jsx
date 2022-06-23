import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>Welcome! This is a collection of 54 Uspanteko texts collected over the years 2019-2021 as part of a National Science Foundation funded grant (BCS/DEL-1551043/1551666), and with the generous support of the Comunidad Lingüística Uspanteka. The team that produced this corpus consisted of Ryan Bennett, Megan Harvey, Robert Henderson, and Tomás Méndez López. We hope that these texts will aide any and all who love the Uspanteko langauge.</p>
      <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias. Si desea que hagamos algún cambio en su grabación o transcripción, incluida la eliminación del sitio, comuníquese con Robert Henderson (University of Arizona) o Ryan Bennett (University of California, Santa Cruz).</p>
    </div>,
  [ESPANOL]:
    <div>
      <p>¡Bienvenidos! Esta es una colección de 54 textos del idioma uspanteko recopilados durante los años 2019-2021 como parte de una subvención financiada por la Fundación Nacional de Ciencias (BCS/DEL-1551043/1551666), y con el generoso apoyo de la Comunidad Lingüística Uspanteka. El equipo que produjo este corpus estuvo integrado por Ryan Bennett, Megan Harvey, Robert Henderson y Tomás Méndez López. Esperamos que estos textos sean de ayuda para todos aquellos que aman el idioma uspanteko.</p>
      <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias. Si desea que hagamos algún cambio en su grabación o transcripción, incluida la eliminación del sitio, comuníquese con Robert Henderson (University of Arizona) o Ryan Bennett (University of California, Santa Cruz).</p>
    </div>,
  [FRANCAIS]:
    <div>
      <p>Accueillir! Il s'agit d'une collection de 54 textes Uspanteko collectés au cours des années 2019-2021 dans le cadre d'une subvention financée par la National Science Foundation (BCS/DEL-1551043/1551666), et avec le généreux soutien de la Comunidad Lingüística Uspanteka. L'équipe qui a produit ce corpus était composée de Ryan Bennett, Megan Harvey, Robert Henderson et Tomás Méndez López. Nous espérons que ces textes aideront tous ceux qui aiment la langue Uspanteko.</p>
      <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias. Si desea que hagamos algún cambio en su grabación o transcripción, incluida la eliminación del sitio, comuníquese con Robert Henderson (University of Arizona) o Ryan Bennett (University of California, Santa Cruz).</p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
