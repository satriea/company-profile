 
export default function Container({
  children,
  className = "",
  size = "7xl",
}) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-[1440px]",
    "7xl": "max-w-7xl",
  };

  return (
    <div
      className={`
        mx-auto w-full
        px-6
        sm:px-8
        lg:px-8
        ${sizes[size] || sizes["7xl"]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}