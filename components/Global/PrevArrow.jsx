function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-icon custom-prev-icon ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="prev-icon">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              d="M16.736,3.417c0,0.169-0.059,0.319-0.176,0.449l-8.32,8.301l8.32,8.301c0.117,0.13,0.176,0.28,0.176,0.449
          s-0.059,0.319-0.176,0.449c-0.065,0.052-0.137,0.094-0.215,0.127c-0.078,0.032-0.156,0.049-0.234,0.049s-0.156-0.017-0.234-0.049
          c-0.078-0.033-0.149-0.075-0.215-0.127l-8.75-8.75c-0.117-0.13-0.176-0.28-0.176-0.449c0-0.169,0.059-0.319,0.176-0.449l8.75-8.75
          c0.13-0.117,0.28-0.176,0.449-0.176c0.169,0,0.319,0.059,0.449,0.176C16.677,3.098,16.736,3.248,16.736,3.417z"
            ></path>
          </g>
        </svg>
      </i>
    </div>
  );
}

export default PrevArrow;
