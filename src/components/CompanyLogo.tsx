type LogoKey = 'bloomberg' | 'duke' | 'accenture' | 'wit' | 'pec';

type Props = {
  company: LogoKey;
  size?: number;
  className?: string;
};

// Brand-colored tile with a glyph. Uses recognizable brand colors:
// Bloomberg orange/black, Duke royal blue, Accenture violet.
// We avoid redistributing trademarked logo files; the colored monogram
// is recognizable, consistent, and matches portfolio conventions.
export function CompanyLogo({ company, size = 40, className }: Props) {
  const dim = `${size}px`;

  switch (company) {
    case 'bloomberg':
      return (
        <span
          aria-label="Bloomberg L.P."
          role="img"
          className={`inline-flex shrink-0 items-center justify-center rounded-md text-white shadow-sm ${className ?? ''}`}
          style={{ width: dim, height: dim, background: '#000000' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size * 0.7}
            height={size * 0.7}
            aria-hidden="true"
          >
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontFamily="ui-sans-serif, Inter, system-ui, sans-serif"
              fontWeight="800"
              fontSize="16"
              fill="#ffffff"
            >
              B
            </text>
          </svg>
        </span>
      );

    case 'duke':
      return (
        <span
          aria-label="Duke University"
          role="img"
          className={`inline-flex shrink-0 items-center justify-center rounded-md text-white shadow-sm ${className ?? ''}`}
          style={{ width: dim, height: dim, background: '#012169', fontSize: size * 0.5 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size * 0.7}
            height={size * 0.7}
            aria-hidden="true"
          >
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontFamily="ui-serif, Georgia, serif"
              fontWeight="700"
              fontSize="16"
              fill="#ffffff"
            >
              D
            </text>
          </svg>
        </span>
      );

    case 'accenture':
      return (
        <span
          aria-label="Accenture"
          role="img"
          className={`inline-flex shrink-0 items-center justify-center rounded-md text-white shadow-sm ${className ?? ''}`}
          style={{ width: dim, height: dim, background: '#000000' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size * 0.55}
            height={size * 0.55}
            aria-hidden="true"
          >
            <path
              d="M4.5 4 L19.5 12 L4.5 20"
              stroke="#A100FF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      );

    case 'wit':
      return (
        <span
          aria-label="WiT Sports"
          role="img"
          className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-200 dark:ring-ink-700 ${className ?? ''}`}
          style={{ width: dim, height: dim }}
        >
          <img
            src="/images/wit-logo.svg"
            alt=""
            aria-hidden="true"
            className="h-[70%] w-[70%] object-contain"
          />
        </span>
      );

    case 'pec':
      return (
        <span
          aria-label="Parwan Electronics Corporation"
          role="img"
          className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-200 dark:ring-ink-700 ${className ?? ''}`}
          style={{ width: dim, height: dim }}
        >
          <img
            src="/images/pec-logo.png"
            alt=""
            aria-hidden="true"
            className="h-[80%] w-[80%] object-contain"
          />
        </span>
      );
  }
}
