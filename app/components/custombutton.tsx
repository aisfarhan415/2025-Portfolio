import React from "react";

const CustomButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  icon: Icon,
  iconBg = "bg-black",
  iconColor = "text-white",
  iconStyle = {},
}) => {
  const baseStyles =
    "px-4 py-2 font-regular lexend rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:shadow-xl";
  const variants = {
    default:
      "bg-white pr-2 text-black border border-gray-300 hover:bg-gray-100",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && (
        <span
          className={`p-3 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${iconBg}`}
        >
          <Icon
            className={`w-6 h-6 ${iconColor} hover:rotate-180 transition-all duration-500 ease-in-out`}
            style={iconStyle}
          />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
