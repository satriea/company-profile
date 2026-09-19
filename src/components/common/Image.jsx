 
import { useState } from "react";
import { FiImage } from "react-icons/fi";

export default function Image({
  src,
  alt = "",
  fallback = "/images/company/store-placeholder.jpg",
  className = "",
  wrapperClassName = "",
  objectFit = "cover",
  loading = "lazy",
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };

  const handleError = () => {
    if (!hasError && fallback) {
      setHasError(true);
      setImageSrc(fallback);
    }
  };

  if (!imageSrc) {
    return (
      <div
        className={`
          flex
          items-center
          justify-center
          bg-slate-100
          text-slate-400
          ${wrapperClassName}
        `}
      >
        <FiImage size={28} />
      </div>
    );
  }

  return (
    <div
      className={`
        relative
        overflow-hidden
        ${wrapperClassName}
      `}
    >
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        onError={handleError}
        className={`
          h-full
          w-full
          ${objectFitClass[objectFit] || objectFitClass.cover}
          ${className}
        `}
        {...props}
      />
    </div>
  );
}