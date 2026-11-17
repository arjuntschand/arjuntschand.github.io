// Google Scholar mark (mortarboard over a circle), outline style to match lucide icons.
export function ScholarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M5.8 13.5L1.5 9.8 12 2l10.5 7.8-4.3 3.7A7.12 7.12 0 0 0 5.8 13.5z" />
      <circle cx="12" cy="17" r="4.2" />
    </svg>
  );
}
