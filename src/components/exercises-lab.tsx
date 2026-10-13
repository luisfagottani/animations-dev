import { CardHover } from "../exercises/card-hover/card-hover";
import DownloadButton from "../exercises/download-button/download-button";
import { SimpleTransform } from "../exercises/simple-transform/simple-transform";
import { Sonner } from "../exercises/sonner/sonner";
import { SonnerExpanded } from "../exercises/sonner-expanded/sonner-expanded";
import { LabShell } from "./lab-shell";

export function ExercisesLab() {
  return (
    <LabShell>
      <Sonner />
      <SimpleTransform />
      <CardHover />
      <DownloadButton />
      <SonnerExpanded />
    </LabShell>
  );
}
