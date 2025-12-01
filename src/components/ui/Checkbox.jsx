import React from 'react'

const Checkbox = ({ label, type = "checkbox", ...rest }) => {
  return (
    <label className="checkbox-container">
      <input
        type={type}
        {...rest}
      />
      <span className="checkmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          focusable="false"
          aria-hidden="true"
          className="arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.1 2.8-5.877 8.843a.35.35 0 0 1-.54.054L1.4 7.4"
          ></path>
        </svg>
      </span>
      {label && <p>{label}</p>}
    </label>
  )
}

export default Checkbox