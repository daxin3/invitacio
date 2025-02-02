'use client'


import { useSearchParams } from 'next/navigation'
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

export default function Home() {
  
  const totalImages = 17;

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
      
      
      <section style={{width: "100%"}}>
        <h1>Sábado, 3 de Mayo</h1>

        <div className={styles.columna_blocs_horaris_container}>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}><b>11:30h</b> - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>&#127865; <b>Cervecita o copita de vino previa</b></p>
              <p className={styles.bloc_detall}>Si vienes puntual, puedes tomarte algo en los bares de la Porxada o alrededor, que verás marcados en el plano que te adjuntamos. &#127867;</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>12:00h - Ajuntament</h2>
              <p className={styles.bloc_subtitol}>&#128141; <b>Ceremonia</b></p>
              <p className={styles.bloc_detall}>En la sala del ayuntamiento con capacidad para 60 personas.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>12:40h - Plaça de la Porxada</h2>
              <p className={styles.bloc_subtitol}>&#128247; <b>¡Unas fotos!</b></p>
              <p className={styles.bloc_detall}>Fotografias grupales para inmortalizar le momento.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}><b>13:30h</b> - Masia &quot;El Folló&quot;</h2>
              <p className={styles.bloc_subtitol}>&#129346; <b>Recepción de los invitados</b></p>
              <p className={styles.bloc_detall}>Nos desplazamos hasta la masia. </p>
              <p className={styles.bloc_detall}>Una vez aquí, coge tu copita de bienvenida mientras llegan todos los invitados, y los &quot;protas&quot; de la función. &#128521;&#127863;</p>
            </div>
          </div>

          <div className={styles.columna_bloc_horari_item}>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>14:00h - ¡A comer!</h2>
              <p className={styles.bloc_subtitol}>&#127856; <b>Cóctel en la masia</b></p>
              <p className={styles.bloc_detall}>Con platitos caseros y de temporada, preparados por Mercè i su equipo.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>16:00h - ¡Fiesta!</h2>
              <p className={styles.bloc_subtitol}>&#127881; <b>A bailar</b></p>
              <p className={styles.bloc_detall}>Barra libre y música para todos. Por cierto... ¿Habéis completados ya todos los juegos?</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora}>19:30h - Sopada (Cena)</h2>
              <p className={styles.bloc_subtitol}>&#129366; <b>¡Hora de Cenar!</b></p>
              <p className={styles.bloc_detall}>Tenemos algunas cocas y dulces por si se te ha abierto el apetito.</p>
            </div>
            <div className={styles.bloc_hora}>
              <h2 className={styles.bloc_titol_hora_f}>¡Rememora y comparte!</h2>
              <p className={styles.bloc_subtitol}>&#128248; <b>Esperamos recibir tus mejores fotos</b></p>
              <p className={styles.bloc_detall}>Podrás escanear el QR para compartir tus mejores fotos con nosotros.</p>
            </div>
          </div>

        </div>
        
      </section>
      
      <section>
        <h1>Formulario de asistencia</h1>
      </section>
      

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
        <h1>Masia &quot;El Folló&quot;</h1>
        <Image
          className='center-fit'
          src="/sample-next-app/mapa_follo_b.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </section>
      
    </div>
    <footer>
    <Image
          className='center-fit'
          src="/sample-next-app/footer_edit_d.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <p style={{ justifySelf: "center" }}> · Dissenyat amb molt  &#129505; · Especialment dedicat al Tacu · </p>
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
