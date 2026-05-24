type LogoKey = 'bloomberg' | 'duke' | 'sofi' | 'wit' | 'pec';

type Props = {
  company: LogoKey;
  size?: number;
  className?: string;
};

// Brand tiles, sized via the `size` prop and clipped to a rounded square.
// Text monograms for Bloomberg (black/white "B") and Duke (royal-blue
// serif "D"); actual logo images for SoFi, WIT, and Parwan.
export function CompanyLogo({ company, size = 40, className }: Props) {
  const dim = `${size}px`;

  switch (company) {
    case 'bloomberg':
      return (
        <span
          aria-label="Bloomberg LP"
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
              y="12"
              textAnchor="middle"
              dominantBaseline="central"
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
              y="12"
              textAnchor="middle"
              dominantBaseline="central"
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

    case 'sofi':
      return (
        <span
          aria-label="SoFi"
          role="img"
          className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md shadow-sm ${className ?? ''}`}
          style={{ width: dim, height: dim }}
        >
          <img
            src="/images/sofi-logo.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </span>
      );

    case 'wit':
      return (
        <span
          aria-label="WIT"
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
            className="h-[88%] w-[88%] object-contain translate-y-[2px]"
          />
        </span>
      );
  }
}
