'use client'

import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from 'react'

/*const styleScript = Style_Script({
  weight: '400',
  variable: "--style-script",
  subsets: ["latin"],
}); */

// !!!!!!!!!!!!!!!!!!! FIX TODO
// Hem d'aplicar la solució https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

function RenderQueryName() {
  const searchParams = useSearchParams()
  let destinatari = searchParams.get('x')
  
  if(destinatari != null && typeof destinatari === 'string') {
    const words = destinatari.split(" ")
    for (let i = 0; i < words.length; i++) {
      if (words[i] != 'i' && words[i] != '&' && words[i] != 'y')
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  destinatari = words.join(" ");
  }
  return destinatari
}

function IsCat() {
  const searchParams = useSearchParams()

  const idioma = searchParams.get('lang')
  if(idioma == 'ca') return true
  else return false
}

export default function Home() {
  
  const totalImages = 17;
  const isCat = IsCat();

  return (
    <div>
    <div className={styles.header_background}>
      <picture>
      <source media="(max-width: 600px)" srcSet="/sample-next-app/capcelera_mobile.png" />
      <img
          className='center-fit'
          src="/sample-next-app/capcelera_desktop_ics.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        </picture>
        </div>
    <div className={styles.page}>
      
      {!isCat ? ( // ESPANYOL
        <section>
      <h1>¡Que sí! ¡¡Nos casamos!!</h1><br />
        
        <Suspense>
        <h3>Hola <RenderQueryName/>,</h3>
        </Suspense><br />
        <p>¡Estamos super felices! <b>Resérvate la fecha</b> y prepárate para reír, comer, beber, bailar y pasarlo bien con nosotros.</p>
        <p>Hace 9 años nos conocimos en la universidad, seguramente en una de las etapas más duras que hemos vivido por el momento, aunque ahora mismo dudamos si no es más dura la organización de una boda.
        </p>
        <p>Tres años más tarde nos aventuramos a vivir juntos sin saber que unos meses más tarde vendría una pandemia que nos obligaría a pasar el 200% del tiempo juntos. Y por si fuera poco, encima, trabajando en la misma empresa.</p>
        <p>Superada esa prueba, nos enamoramos ciegamente del amor más fiel y real que existe, nuestra querida Luna, que nos convirtió en mamá y papá, y que nos prepara para lo que vendrá más adelante.
        </p>
        <p>Hace ya más de un año nos decidimos a dar el paso con algo mucho más comprometedor que una boda, ¡¡UNA HIPOTECA!!, así que... ¿Una boda? Pan comido.</p>
        <p>Ahora vivimos deambulando entre provincias. Barcelona, Lleida y Segovia es donde tenemos trocitos de nuestro corazón, en cada una de las personas que las habitan y que hoy estáis leyendo estos párrafos.</p>
        <p>¡¡¡Esperamos que disfrutéis tanto como nosotros de nuestro día, un abrazo muuuy grande!!!</p>
        <br />
        <p>En el <b>formulario de asistencia</b> (más abajo) debes confirmar si vas a asistir a la boda y un cuestionario sobre alergenos. Confírmanos tu asistencia lo antes posible, por favor. Así organizarlo todo nos será mucho más fácil.
        </p>
        <p><b>Recuerda, “Tu presencia es nuestro regalo más preciado, por eso esta invitación es personal e intransferible”</b> 
        </p>
        <p>Esperamos verte muy pronto. ¡Mil besos!</p>
        <p>Dani i Clàudia</p>
      </section>
      ) : ( 
        // CATALÀ
      <section>
      <h1>Que sí! Ens casem!!</h1><br />
        
        <Suspense>
        <h3>Hola <RenderQueryName/>,</h3>
        </Suspense><br />
        <p>Estem super feliços! <b>Reserva&apos;t la data</b> i prepara&apos;t per a riure, menjar, beure, 
        ballar i passar-ho bé amb nosaltres.</p>
        <p>Fa 9 anys ens vam conèixer en la universitat, segurament en una de les etapes més dures 
          que hem viscut de moment, encara que ara mateix dubtem si no és més dur l&apos;organització d&apos;un 
          casament.
        </p>
        <p>Tres anys més tard varem decidir començar a viure junts, sense saber que uns mesos més 
          tard vindria una pandèmia que ens obligaria a passar el 200% del temps plegats. I per si 
          no fos prou, també treballant en la mateixa empresa.</p>
        <p>Superada aquesta prova, ens enamorem cegament de l&apos;amor més fidel i real que existeix, 
          la nostra benvolguda Lluna, que ens va convertir en mamà i papà, i que ens prepara per al 
          que vindrà més endavant.
        </p>
        <p>
        Fa ja més d&apos;un any vam decidir donar el grna pas. Una desició cosa molt més comprometedora 
        que unes noces, UNA HIPOTECA!!, així que... Un casament? Serà dit i fet!.
        </p>
        <p>
          Ara vivim deambulant entre províncies. Barcelona, Lleida i Segòvia són les terres on tenim 
          trossets del nostre cor, en cadascuna de les persones que les habiten i que avui esteu 
          llegint aquestes linies.
        </p>
        <p>Esperem que gaudiu tant com nosaltres del nostre dia. Us enviem una gran abraçada!</p>
        <br />
        <p>Al <b>formulari d&apos;assistència</b> (més a baix) has de confirmar si comptem amb tu  
        i un qüestionari sobre al·lèrgens. Confirma&apos;ns la teva assistència al més aviat possible,
         si us plau. Així organitzar-ho tot ens serà molt més fàcil.
        </p>
        <p><b>Recorda, “La teva presència és el nostre regal més preuat, per això aquesta 
          invitació és personal i intransferible”</b> 
        </p>
        <p>Esperem veure&apos;t molt aviat. Molts petons!</p>
        <p>Dani i Clàudia</p>
      </section>
      )}
      
      
      
      <div className={styles.photo_container}>
      {Array.from({ length: totalImages }).map((_, index) => (
        <Image
          key={index}
          src={`/sample-next-app/photos/img${index}.jpg`}
          alt={`Foto ${index + 1}`}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          className={`${styles.photo} ${styles[`photo${index + 1}`]}`}
        />
        
      ))}
      <Image
          key={totalImages + 1}
          src={`/sample-next-app/photos/gif1.gif`}
          alt={`Foto ${totalImages + 2}`}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          className={`${styles.photo}`}
        />
    </div>
    <br /><br />
      
    {!isCat ? ( // ESPANYOL

      <section style={{width: "100%"}}>
        <h1>Sábado, 3 de Mayo</h1>

        <div className={styles.columna_blocs_horaris_container}>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                <b>11:30h</b> - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>
                &#127865; <b>Cervecita o copita de vino previa</b></p>
              <p className={styles.bloc_detall}>
                Si llegas puntual, puedes tomar algo en los bares de la Porxada o en sus alrededores, 
                los cuales están señalados en el plano adjunto. &#127867;</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                12:00h - Ajuntament</h2>
              <p className={styles.bloc_subtitol}>
                &#128141; <b>Ceremonia</b></p>
              <p className={styles.bloc_detall}>
                En la sala del ayuntamiento con capacidad para 60 personas.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                12:40h - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>
                &#128247; <b>¡Unas fotos!</b></p>
              <p className={styles.bloc_detall}>
                Fotografías grupales para inmortalizar el momento.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                <b>13:30h</b> - Masia <i>El Folló</i></h2>
              <p className={styles.bloc_subtitol}>
                &#129346; <b>Recepción de los invitados</b></p>
              <p className={styles.bloc_detall}>
                Nos desplazamos hasta la masía. </p>
              <p className={styles.bloc_detall}>
                Ya estás aquí, así que coge tu copita de bienvenida y disfruta mientras llegan los invitados 
                y los &quot;protas&quot; de la fiesta. &#128521;&#127863;</p>
            </div>
          </div>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>14:00h - ¡A comer!</h2>
              <p className={styles.bloc_subtitol}>&#127856; <b>Cóctel en la masía</b></p>
              <p className={styles.bloc_detall}>
                Con platitos caseros y de temporada, preparados por Mercè y su equipo.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>16:00h - ¡Fiesta!</h2>
              <p className={styles.bloc_subtitol}>&#127881; <b>A bailar</b></p>
              <p className={styles.bloc_detall}>
                ¡Barra libre y música para todos! <br/>Por cierto... ¿Ya habéis completado todos los juegos? </p> 
              
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>19:30h - Sopada (Cena)</h2>
              <p className={styles.bloc_subtitol}>&#129366; <b>¡Hora de Cenar!</b></p>
              <p className={styles.bloc_detall}>
                Tenemos distintas cocas y dulces por si te ha dado hambre.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora_f}>¡Rememora y comparte!</h2>
              <p className={styles.bloc_subtitol}>
                &#128248; <b>Esperamos recibir tus mejores fotos</b></p>
              <p className={styles.bloc_detall}>
                Escanea el QR y comparte con nosotros tus mejores instantáneas.</p>
            </div>
          </div>
        </div>
      </section>

      ) : ( // CATALÀ

        <section style={{width: "100%"}}>
        <h1>Dissabte, 3 de Maig</h1>

        <div className={styles.columna_blocs_horaris_container}>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                <b>11:30h</b> - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>
                &#127865; <b>Canya o copeta de vi prèvia</b></p>
              <p className={styles.bloc_detall}>
                Si arribes puntual, pots prendre alguna cosa en els bars de la Porxada o del voltat, 
                els quals tens assenyalats en el pla adjunt. &#127867;</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                12:00h - Ajuntament</h2>
              <p className={styles.bloc_subtitol}>
                &#128141; <b>Cerimònia</b></p>
              <p className={styles.bloc_detall}>
                A la sala de l&apos;ajuntament amb capacitat per a 60 persones.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                12:40h - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>
                &#128247; <b>Unes fotos!</b></p>
              <p className={styles.bloc_detall}>
                Fotografies grupals per a immortalitzar el moment.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>
                <b>13:30h</b> - Masia <i>El Folló</i></h2>
              <p className={styles.bloc_subtitol}>
                &#129346; <b>Recepció dels convidats</b></p>
              <p className={styles.bloc_detall}>
                Ens desplacem fins a la masia. </p>
              <p className={styles.bloc_detall}>
                Ja ets aquí, així que agafa la teva copeta de benvinguda i gaudeix mentre arriben els convidats 
                i els &quot;protas&quot; de la festa. &#128521;&#127863;</p>
            </div>
          </div>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>14:00h - És hora de dinar!</h2>
              <p className={styles.bloc_subtitol}>&#127856; <b>Còctel en la masia</b></p>
              <p className={styles.bloc_detall}>
                Amb platerets casolans i de temporada, preparats per la Mercè i el seu equip.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>16:00h - Festa!</h2>
              <p className={styles.bloc_subtitol}>&#127881; <b>A ballar!</b></p>
              <p className={styles.bloc_detall}>
                Barra lliure i música per a tots! <br/> Per cert..., ja heu completat tots els jocs?</p> 
              
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>19:30h - Sopada</h2>
              <p className={styles.bloc_subtitol}>&#129366; <b>Per recuperar forces</b></p>
              <p className={styles.bloc_detall}>
                Tenim diferents coques i dolços per matar el cuquet.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora_f}>Rememora i comparteix!</h2>
              <p className={styles.bloc_subtitol}>
                &#128248; <b>Esperem rebre les teves millors fotos</b></p>
              <p className={styles.bloc_detall}>
                Escaneja el QR i comparteix amb nosaltres les millors instantànies.</p>
            </div>
          </div>
        </div>
        
      </section>
      )}

      <br />
      <div className={styles.call_to_action_background}>
      {!isCat ? ( // ESPANYOL
        <section>
          <h1>Formulario de asistencia</h1>
          <h4>Si tenéis cualquier duda nos podéis contactar tanto por Whatsapp como por teléfono.</h4>
        </section>
      ) : ( // CATALÀ
        <section>
          <h1>Formulari d&apos;assistència</h1>
          <h4>Si teniu qualsevol dubte ens podeu contactar tant per Whatsapp com per telèfon.</h4>
        </section>
      )}
      </div>
      <br />
      

      <section>
        <h1>Granollers</h1>
        <Image
          className='center-fit'
          src="/sample-next-app/mapa_grano_b.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <br /><br />
        <h1>Masia <i>El Folló</i></h1>
        <Image
          className='center-fit'
          src="/sample-next-app/mapa_follo_b.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </section>
      <br />
    </div>
    <footer>
      <div className={styles.footer_container_relative}>
        <Image
          className='center-fit'
          src="/sample-next-app/footer_edit_d.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className={styles.footer_container_text}>
          Fins aviat!
          </h4>
      </div>
        <div style={{ justifySelf: "center", fontSize: "small" }}> · Invitació dissenyada per nosaltres amb molt  &#129505; · Especialment dedicada al Tacu · </div>
        <br />
      </footer>
    </div>
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/sample-next-app/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
          <Suspense>
          <li><RenderQueryName/></li>
          </Suspense>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/sample-next-app/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/sample-next-app/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/sample-next-app/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/sample-next-app/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
