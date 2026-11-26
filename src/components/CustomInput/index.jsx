import { forwardRef, useImperativeHandle, useRef } from "react";

export const CustomInput = forwardRef(
  ({ label, placeholder, value, onChange, className }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        blur() {
          inputRef.current.blur();
        },
        getValue() {
          return inputRef.current.value;
        },
      };
    });

    return (
      <div>
        <label>{label}</label>
        <input
          className={className}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  },
);
