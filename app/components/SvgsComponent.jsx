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

export const StreakSVG = ({ size, color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "24px"}
        height={size || "24px"}
        viewBox="0 0 15 20"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.56012 12.36H9.62012C11.5849 11.4928 13.1518 9.91866 14.0101 7.95V12.31C14.0181 15.1046 12.3632 17.6362 9.80012 18.75H9.73012C8.88266 19.1089 7.97037 19.2893 7.05012 19.28C6.16062 19.2824 5.27975 19.1056 4.46012 18.76L4.20012 18.65C1.64265 17.58 -0.016078 15.0722 0.000117539 12.3V12.12C0.0193046 10.7003 0.597863 9.34557 1.61012 8.35L1.79012 8.18C3.38136 6.62154 4.69369 4.80186 5.67012 2.8L7.04012 0C7.04012 0 8.46012 2 9.78012 4C11.3899 6.38859 10.8545 9.61858 8.56012 11.36H8.44012C8.20193 11.6598 8.22779 12.0908 8.50012 12.36C8.61403 12.4562 8.76159 12.503 8.91012 12.49C9.13222 12.4807 9.35152 12.4368 9.56012 12.36ZM9.12013 17.36H9.19013V17.35C11.1896 16.4737 12.4864 14.503 12.5001 12.32C11.8257 12.9135 11.0546 13.3871 10.2201 13.72L10.0901 13.77C9.7137 13.9166 9.31404 13.9945 8.91013 14C8.36275 14.0193 7.83141 13.8133 7.44013 13.43C6.62315 12.6226 6.54555 11.3293 7.26013 10.43C7.34737 10.321 7.44819 10.2235 7.56013 10.14H7.63013C9.31634 8.88218 9.71305 6.51958 8.53013 4.78C8.10013 4.14 7.67013 3.5 7.27013 2.93L7.02013 3.45C5.96175 5.58318 4.54826 7.52081 2.84013 9.18L2.66013 9.35C1.93381 10.0668 1.51736 11.0397 1.50013 12.06V12.25C1.47303 14.4292 2.77047 16.407 4.78013 17.25L5.04013 17.36C6.34381 17.9135 7.81644 17.9135 9.12013 17.36Z"
            fill={color || "#0D0D0D66"}
            fillOpacity={0.9}
        />
    </svg>
)