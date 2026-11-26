// Separatore tra sezioni: una riga ASCII, come un commento nel codice.
export const SectionDivider = () => {
  return (
    <div aria-hidden="true" className="max-w-4xl mx-auto px-4 select-none">
      <div className="font-mono text-sm text-primary/50 whitespace-nowrap overflow-hidden">
        {'// ' + '-'.repeat(120)}
      </div>
    </div>
  );
};
