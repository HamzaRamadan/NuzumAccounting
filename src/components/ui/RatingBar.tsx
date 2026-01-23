import React, { useState, type HTMLAttributes,  } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type RatingBarProps = HTMLAttributes<HTMLDivElement> & {
  layout_width?: string;
  margin?: string;
  position?: string;
  variant?: 'primary' | 'secondary' | 'outline'|'default';
  size?: 'small' | 'medium' | 'large';
  rating?: number;
  maxRating?: number;
  readOnly?: boolean;
  onRatingChange?: (rating: number) => void;
};

const ratingBarClasses = cva(
  'flex items-center gap-1',
  {
    variants: {
      variant: {
        primary: 'text-yellow-400',
        secondary: 'text-orange-400',
        outline: 'text-gray-300',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const RatingBar: React.FC<RatingBarProps> = ({
  layout_width,
  margin,
  position,
  variant = 'primary',
  size = 'medium',
  rating = 0,
  maxRating = 5,
  readOnly = false,
  onRatingChange,
  className,
  ...props
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  const optionalClasses = [
    layout_width ? `w-[${layout_width}]` : '',
    margin ? `m-[${margin}]` : '',
    position || '',
  ].filter(Boolean).join(' ');

  const handleStarClick = (starIndex: number) => {
    if (readOnly) return;
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    onRatingChange?.(newRating);
  };

  const handleStarHover = (starIndex: number) => {
    if (readOnly) return;
    setHoverRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const renderStars = () => {
    const stars = [];
    const displayRating = hoverRating || currentRating;

    for (let i = 0; i < maxRating; i++) {
      const isFilled = i < displayRating;
      stars.push(
        <button
          key={i}
          type="button"
          disabled={readOnly}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          className={twMerge(
            'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded',
            readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110',
            isFilled ? 'text-yellow-400' : 'text-gray-300'
          )}
          aria-label={`Rate ${i + 1} out of ${maxRating} stars`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      );
    }
    return stars;
  };

 // داخل الـ RatingBar
const safeVariant = variant === 'default' ? 'primary' : variant;

return (
  <div
    className={twMerge(
      ratingBarClasses({ variant: safeVariant, size }),
      optionalClasses,
      className
    )}
    onMouseLeave={handleMouseLeave}
    role="radiogroup"
    aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
    {...props}
  >
    {renderStars()}
    {!readOnly && (
      <span className="ml-2 text-sm text-gray-600">
        {currentRating}/{maxRating}
      </span>
    )}
  </div>
);

};

export default RatingBar;
