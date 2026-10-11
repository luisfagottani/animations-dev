import {
  eyebrow,
  header,
  heading,
  main,
  stage,
  stageHint,
  subtitle,
} from "./lab-shell.css";

interface LabShellProps {
  children?: React.ReactNode;
  title?: string;
}

export function LabShell({
  title = "Laboratório de animação",
  children,
}: LabShellProps) {
  return (
    <main className={main}>
      <header className={header}>
        <p className={eyebrow}>animations.dev</p>
        <h1 className={heading}>{title}</h1>
        <p className={subtitle}>
          Página Astro + ilha React. Coloque o exercício no slot abaixo ou
          importe um componente em <code>src/exercises/</code>.
        </p>
      </header>
      <section aria-label="Área do exercício" className={stage}>
        {children ?? (
          <p className={stageHint}>Seu componente de animação entra aqui.</p>
        )}
      </section>
    </main>
  );
}
