export const Loading = ({ size, color }) => (
    <svg
        width={size || "100px"}
        height={size || "100px"}
        viewBox="0 0 24 24"
        fill="none"
        className="animate-spin mx-auto"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16"
            stroke={color || "#363853"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);