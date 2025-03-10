import React from "react";

const CustomButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  icon: Icon, // Icon kanan masih ada
  iconBg = "bg-black",
  iconColor = "text-white",
  iconStyle = {},
}) => {
  const baseStyles =
    "p-[5px] font-regular lexend rounded-full transition-all duration-300 flex justify-between items-center hover:scale-110 hover:shadow-xl w-[320px] lg:w-[380px] text-base lg:text-xl text-left";
  const variants = {
    default:
      "bg-white pl-[25px] text-black border border-gray-300 hover:bg-gray-100",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex-1 text-left">{children}</span> {/* Cuma teks */}
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
