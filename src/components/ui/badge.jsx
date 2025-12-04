// components/ui/Badge.jsx
export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-gray-900 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-600 text-white",
    outline: "border border-gray-400 text-gray-700",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}
