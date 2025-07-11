import React from "react";

function FormField({
  label,
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  isTextarea = false,
  rows = 4,
}) {
  const commonInputClasses =
    "w-full mt-1 p-3 " +
    "border border-gray-300 " +
    "text-gray-900 placeholder-gray-500 " +
    "rounded-md shadow-sm " +
    "focus:ring-2 focus:ring-green-500 focus:border-green-500 " +
    "outline-none transition-all duration-200 ease-in-out text-lg";

  return (
    <div>
      <label
        htmlFor={id || name}
        className="block font-medium text-black mb-1 text-xl"
      >
        {label}

        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          name={name}
          id={id || name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${commonInputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id || name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonInputClasses}
        />
      )}
    </div>
  );
}

export default FormField;
