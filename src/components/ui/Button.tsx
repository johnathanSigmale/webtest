import React from 'react';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'nothing';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export function Button({
  to = '',
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-heading font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  const variants = {
    primary:
    'bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-md hover:shadow-lg focus:ring-terracotta-500',
    secondary:
    'bg-sage-500 text-white hover:bg-sage-600 shadow-md hover:shadow-lg focus:ring-sage-500',
    outline:
    'border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-50 focus:ring-terracotta-500',
    ghost: 'text-charcoal-700 hover:bg-cream-200 hover:text-terracotta-600',
    nothing: '',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return (
    to ? (
      <Link to={to}>
        <button
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
          disabled={isLoading || props.disabled}
          {...props}>

          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </button>
      </Link>
    ) : (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}>

        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  );

}