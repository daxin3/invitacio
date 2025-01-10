'use client'

import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from 'react'

// !!!!!!!!!!!!!!!!!!! FIX TODO
// Hem d'aplicar la solució https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

function RenderQueryParam() {
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
          <li><RenderQueryParam/></li>
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
