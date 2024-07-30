import React from 'react';
import clsx from 'clsx';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  customWidth,
  customHeight,
  borderRadius = 'rounded-md',
  icon: Icon,
  iconPosition = 'left',
  enabled = true,
  loading = false, // New prop for loading state
  gradient = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    info: 'bg-teal-500 text-white hover:bg-teal-600',
    light: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100',
    dark: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    gradient: gradient
      ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white hover:from-green-500 hover:via-blue-600 hover:to-purple-700'
      : ''
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const customSizeStyles = {
    width: customWidth,
    height: customHeight
  };

  const borderRadiusStyles = {
    'rounded-none': 'rounded-none',
    'rounded-xs': 'rounded-xs',
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full'
  };

  const iconStyles = {
    left: 'mr-2',
    right: 'ml-2'
  };

  const loader = (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!enabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        borderRadiusStyles[borderRadius],
        (!enabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={customSizeStyles}
      {...props}
    >
      {loading ? (
        loader
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className={iconStyles.left} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className={iconStyles.right} />}
        </>
      )}
    </button>
  );
};

export default Button;
