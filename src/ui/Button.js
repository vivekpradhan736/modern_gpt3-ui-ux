import React, { useState } from 'react';
import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa'; // Example spinner icon from react-icons

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
  gradient = false,
  loading = false,
  textColor = 'text-white',
  hoverText = '',
  hoverEffect = '',
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = 'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform active:scale-95';

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

  const textColors = {
    white: 'text-white',
    gray: 'text-gray-700',
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
    teal: 'text-teal-500',
    pink: 'text-pink-500',
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

  const hoverEffects = {
    'text-change': 'hover:text-yellow-500',
    'bg-change': 'hover:bg-yellow-500',
    'shadow': 'hover:shadow-lg',
    'underline': 'hover:underline',
    'scale': 'hover:scale-105',
    'fill-left-to-right': 'relative overflow-hidden after:content-[""] after:absolute after:left-[-100%] after:top-0 after:w-full after:h-full after:bg-current after:transition-transform after:duration-300 hover:after:translate-x-full',
    'remove-left-to-right': 'relative overflow-hidden after:content-[""] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-transparent after:transition-transform after:duration-300 hover:after:translate-x-[100%]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!enabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        borderRadiusStyles[borderRadius],
        textColors[textColor] || textColors['white'],
        (!enabled || loading) && 'opacity-50 cursor-not-allowed',
        hoverEffects[hoverEffect],
        className
      )}
      style={customSizeStyles}
      {...props}
    >
      {loading ? (
        <FaSpinner className="animate-spin mr-2" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className={iconStyles.left} />}
          {isHovered && hoverText ? hoverText : children} {/* Change text on hover */}
          {Icon && iconPosition === 'right' && <Icon className={iconStyles.right} />}
        </>
      )}
    </button>
  );
};

export default Button;
