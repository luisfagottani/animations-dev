import { SimpleTransform } from "../exercises/simple-transform/simple-transform";
import { Sonner } from "../exercises/sonner/sonner";
import { LabShell } from "./lab-shell";

export function ExercisesLab() {
  return (
    <LabShell>
      <Sonner />
      <SimpleTransform />
    </LabShell>
  );
}
