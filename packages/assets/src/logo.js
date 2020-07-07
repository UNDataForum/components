import React from 'react';
import { bool, oneOf } from 'prop-types';

const Logo = ({ scaleTo, monochrome }) => {
  const height = scaleTo === 'height' ? '100%' : null;
  const width = scaleTo === 'width' ? '100%' : null;

  // Branding colors.
  const unBlue = monochrome ? 'currentColor' : '#0098DD';
  const forumBlue = monochrome ? 'currentColor' : '#00609D';

  // Shapes colors.
  const blue = monochrome ? 'currentColor' : '#0E6A9C';
  const lightBlue = monochrome ? 'currentColor' : '#5480AC';
  const red = monochrome ? 'currentColor' : '#A21723';
  const lightRed = monochrome ? 'currentColor' : '#C57868';
  const green = monochrome ? 'currentColor' : '#266F37';
  const lightGreen = monochrome ? 'currentColor' : '#588555';
  const yellow = monochrome ? 'currentColor' : '#C59b25';
  const lightYellow = monochrome ? 'currentColor' : '#D7B970';

  // Color wheel.
  const goal1 = monochrome ? 'currentColor' : '#E5243B';
  const goal2 = monochrome ? 'currentColor' : '#DDA63A';
  const goal3 = monochrome ? 'currentColor' : '#4C9F38';
  const goal4 = monochrome ? 'currentColor' : '#C5192D';
  const goal5 = monochrome ? 'currentColor' : '#FF3A21';
  const goal6 = monochrome ? 'currentColor' : '#26BDE2';
  const goal7 = monochrome ? 'currentColor' : '#FCC30B';
  const goal8 = monochrome ? 'currentColor' : '#A21942';
  const goal9 = monochrome ? 'currentColor' : '#FD6925';
  const goal10 = monochrome ? 'currentColor' : '#DD1367';
  const goal11 = monochrome ? 'currentColor' : '#FD9D24';
  const goal12 = monochrome ? 'currentColor' : '#BF8B2E';
  const goal13 = monochrome ? 'currentColor' : '#3F7E44';
  const goal14 = monochrome ? 'currentColor' : '#0A97D9';
  const goal15 = monochrome ? 'currentColor' : '#56C02B';
  const goal16 = monochrome ? 'currentColor' : '#00689D';
  const goal17 = monochrome ? 'currentColor' : '#19486A';

  return (
    <svg viewBox="0 0 337 192" height={height} width={width}>
      <path
        d="M198.579 54.17V62.78C198.579 64.33 198.699 66.26 201.649 66.26C202.172 66.3011 202.697 66.2101 203.176 65.9951C203.655 65.7802 204.072 65.4483 204.389 65.03C204.787 64.2936 204.945 63.4506 204.839 62.62V54.17H207.839V63C207.839 67.21 204.489 68.56 201.629 68.56C200.219 68.56 197.629 68.25 196.299 66.11C195.707 65.0475 195.453 63.8304 195.569 62.62V54.17H198.579ZM210.679 60.16C210.679 60.16 210.679 59.04 210.619 58.36H213.399L213.479 59.85C213.796 59.2882 214.266 58.8276 214.834 58.5215C215.402 58.2154 216.045 58.0762 216.689 58.12C217.321 58.0731 217.952 58.2279 218.491 58.5621C219.03 58.8963 219.45 59.3927 219.689 59.98C219.961 60.9551 220.053 61.9719 219.959 62.98V68.32H216.959V62.18C216.993 61.8124 216.938 61.442 216.799 61.1C216.671 60.8381 216.469 60.6192 216.219 60.4701C215.969 60.3209 215.68 60.2479 215.389 60.26C215.094 60.2534 214.802 60.3192 214.539 60.4517C214.276 60.5842 214.049 60.7794 213.879 61.02C213.619 61.4792 213.498 62.0035 213.529 62.53V68.32H210.609L210.679 60.16ZM222.509 54.15H225.609V56.68H222.509V54.15ZM222.609 58.38H225.509V68.28H222.609V58.38ZM233.859 68.14C233.126 68.3425 232.369 68.45 231.609 68.46C228.689 68.46 228.689 66.62 228.689 65.8V60.4H226.799V58.48H228.729V56.54L231.609 55.48V58.48H233.959V60.4H231.609V64.87C231.609 65.77 231.609 66.33 232.919 66.33C233.253 66.3332 233.587 66.3132 233.919 66.27L233.859 68.14ZM237.609 64.07C237.609 64.72 237.609 66.71 239.609 66.71C240.016 66.7423 240.42 66.6187 240.739 66.3644C241.058 66.11 241.269 65.7439 241.329 65.34H243.969C243.934 66.1516 243.599 66.9212 243.029 67.5C242.069 68.3251 240.822 68.7383 239.559 68.65C238.283 68.7061 237.036 68.2651 236.079 67.42C235.132 66.1504 234.689 64.5753 234.835 62.9984C234.981 61.4215 235.706 59.9545 236.869 58.88C237.694 58.3382 238.662 58.0529 239.649 58.06C240.476 58.0243 241.296 58.2316 242.007 58.6563C242.717 59.081 243.288 59.7046 243.649 60.45C244.148 61.5875 244.351 62.8329 244.239 64.07H237.609ZM241.289 62.25C241.289 61.8 241.289 60.04 239.569 60.04C238.299 60.04 237.769 61.1 237.709 62.25H241.289ZM252.729 54.15H255.649V66.68C255.649 67.27 255.649 67.91 255.729 68.28H252.729L252.649 66.85C252.429 67.3082 252.082 67.6936 251.649 67.96C251.072 68.314 250.405 68.4913 249.729 68.47C247.089 68.47 245.519 66.65 245.519 63.56C245.519 60.29 247.299 58.25 249.889 58.25C250.43 58.2193 250.97 58.3282 251.457 58.5664C251.944 58.8045 252.361 59.1639 252.669 59.61L252.729 54.15ZM250.519 66.6C250.9 66.5998 251.274 66.4953 251.6 66.2979C251.926 66.1005 252.192 65.8176 252.369 65.48C252.7 64.749 252.861 63.9523 252.839 63.15C252.839 61.21 251.999 60.15 250.689 60.15C248.749 60.15 248.539 62.48 248.539 63.48C248.489 65.13 249.039 66.6 250.479 66.6H250.519ZM263.729 54.13H268.119L273.419 65.27V54.13H276.239V68.28H272.069L266.589 56.54V68.28H263.729V54.13ZM284.729 68.28C284.662 67.8332 284.632 67.3817 284.639 66.93C284.329 67.4401 283.886 67.8565 283.357 68.1348C282.829 68.413 282.235 68.5427 281.639 68.51C281.196 68.5557 280.748 68.51 280.323 68.3758C279.898 68.2417 279.505 68.0219 279.169 67.73C278.609 67.1475 278.3 66.3682 278.309 65.56C278.308 64.8962 278.509 64.2477 278.883 63.6998C279.258 63.1518 279.79 62.7301 280.409 62.49C281.664 62.0552 282.992 61.8685 284.319 61.94C284.348 61.4992 284.304 61.0565 284.189 60.63C284.081 60.3773 283.899 60.1635 283.667 60.0169C283.435 59.8704 283.163 59.7982 282.889 59.81C282.676 59.8063 282.466 59.8544 282.276 59.9503C282.086 60.0461 281.922 60.1867 281.799 60.36C281.639 60.6245 281.566 60.932 281.589 61.24H278.749C278.735 60.7902 278.829 60.3436 279.024 59.938C279.219 59.5324 279.509 59.1798 279.869 58.91C280.763 58.3423 281.811 58.063 282.869 58.11C283.511 58.0735 284.154 58.1672 284.759 58.3854C285.363 58.6037 285.918 58.942 286.389 59.38C286.877 60.0929 287.116 60.9472 287.069 61.81V65.81C287.059 66.6495 287.139 67.4877 287.309 68.31L284.729 68.28ZM281.169 65.28C281.162 65.467 281.194 65.6535 281.262 65.8278C281.33 66.002 281.434 66.1603 281.566 66.2926C281.699 66.425 281.857 66.5286 282.031 66.597C282.205 66.6653 282.392 66.697 282.579 66.69C282.813 66.6875 283.043 66.6354 283.255 66.5372C283.467 66.4389 283.656 66.2967 283.809 66.12C284.273 65.3931 284.465 64.5249 284.349 63.67C282.509 63.47 281.179 64.05 281.179 65.23L281.169 65.28ZM295.509 68.14C294.772 68.3421 294.013 68.4497 293.249 68.46C290.339 68.46 290.339 66.62 290.339 65.8V60.4H288.439V58.48H290.339V56.54L293.219 55.48V58.48H295.569V60.4H293.219V64.87C293.219 65.77 293.219 66.33 294.529 66.33C294.863 66.3326 295.197 66.3125 295.529 66.27L295.509 68.14ZM297.209 54.15H300.309V56.68H297.209V54.15ZM297.309 58.38H300.209V68.28H297.309V58.38ZM307.409 58.16C310.989 58.16 312.539 60.59 312.539 63.35C312.539 66.11 310.939 68.64 307.359 68.64C304.539 68.64 302.309 66.9 302.309 63.43C302.309 61.04 303.519 58.16 307.409 58.16ZM307.409 66.62C308.689 66.62 309.539 65.85 309.539 63.23C309.539 61.92 309.289 60.1 307.369 60.1C305.259 60.1 305.239 62.55 305.239 63.45C305.279 65.66 306.019 66.62 307.449 66.62H307.409ZM314.729 60.16C314.729 60.16 314.729 59.04 314.669 58.36H317.449L317.529 59.85C317.846 59.2882 318.316 58.8276 318.884 58.5215C319.452 58.2154 320.095 58.0762 320.739 58.12C321.371 58.0731 322.002 58.2279 322.541 58.5621C323.08 58.8963 323.5 59.3927 323.739 59.98C324.017 60.954 324.112 61.9713 324.019 62.98V68.32H321.019V62.18C321.053 61.8124 320.998 61.442 320.859 61.1C320.731 60.8381 320.529 60.6192 320.279 60.4701C320.029 60.3209 319.74 60.2479 319.449 60.26C319.156 60.2541 318.866 60.3204 318.604 60.4529C318.343 60.5854 318.118 60.7802 317.949 61.02C317.688 61.4785 317.566 62.0033 317.599 62.53V68.32H314.729V60.16ZM328.729 65.4C328.738 65.601 328.789 65.7979 328.879 65.9778C328.969 66.1577 329.096 66.3166 329.252 66.444C329.408 66.5714 329.589 66.6645 329.783 66.7173C329.977 66.77 330.18 66.7812 330.379 66.75C331.379 66.75 331.899 66.16 331.899 65.57C331.899 64.98 331.659 64.77 330.529 64.46L328.729 63.97C328.051 63.891 327.424 63.5706 326.964 63.0675C326.503 62.5643 326.238 61.9121 326.219 61.23C326.219 59.31 327.979 58.14 330.549 58.14C332.549 58.14 334.229 59.08 334.309 61.06H331.629C331.625 60.8859 331.584 60.7145 331.509 60.5574C331.434 60.4004 331.326 60.2613 331.192 60.1495C331.059 60.0377 330.903 59.9558 330.735 59.9093C330.567 59.8628 330.391 59.8528 330.219 59.88C329.439 59.88 328.849 60.25 328.849 60.88C328.849 61.51 329.339 61.68 330.199 61.88L331.979 62.37C333.779 62.86 334.619 63.78 334.619 65.13C334.619 66.83 333.159 68.54 330.079 68.54C329.472 68.5886 328.862 68.5125 328.286 68.3165C327.71 68.1204 327.18 67.8085 326.729 67.4C326.252 66.8669 325.992 66.175 325.999 65.46L328.729 65.4Z"
        fill={unBlue}
      />
      <path
        d="M195.109 78.33C195.056 78.2145 195.035 78.0869 195.048 77.9605C195.061 77.8341 195.108 77.7135 195.183 77.6113C195.259 77.5092 195.361 77.4292 195.478 77.3797C195.595 77.3302 195.723 77.313 195.849 77.33H200.629C200.795 77.3398 200.955 77.3994 201.087 77.501C201.219 77.6027 201.317 77.7417 201.369 77.9L204.879 91.74H205.039L211.359 77.4C211.42 77.2681 211.518 77.156 211.64 77.0765C211.762 76.997 211.903 76.9532 212.049 76.95H212.779C212.927 76.9424 213.073 76.9819 213.197 77.0628C213.321 77.1436 213.416 77.2617 213.469 77.4L219.799 91.77H219.959L223.469 77.93C223.52 77.7732 223.617 77.6352 223.747 77.5337C223.877 77.4322 224.034 77.3717 224.199 77.36H228.979C229.105 77.343 229.233 77.3602 229.35 77.4097C229.467 77.4592 229.569 77.5391 229.644 77.6413C229.72 77.7435 229.767 77.8641 229.78 77.9905C229.793 78.1169 229.772 78.2445 229.719 78.36L221.999 105.8C221.954 105.962 221.857 106.105 221.724 106.208C221.59 106.311 221.427 106.368 221.259 106.37H220.609C220.463 106.362 220.322 106.317 220.199 106.238C220.076 106.159 219.976 106.049 219.909 105.92L212.439 89.22H212.319L204.879 105.92C204.813 106.051 204.713 106.161 204.59 106.24C204.467 106.32 204.325 106.364 204.179 106.37H203.529C203.362 106.365 203.201 106.308 203.07 106.205C202.939 106.103 202.844 105.961 202.799 105.8L195.109 78.33ZM265.229 78.12C265.229 78.018 265.249 77.9171 265.288 77.823C265.328 77.7289 265.385 77.6436 265.458 77.572C265.53 77.5003 265.617 77.4438 265.711 77.4057C265.806 77.3676 265.907 77.3487 266.009 77.35H278.219C280.567 77.3447 282.822 78.2697 284.49 79.9226C286.158 81.5755 287.103 83.8218 287.119 86.17C287.119 89.93 284.629 92.95 281.119 94.38L286.709 104.75C286.787 104.869 286.83 105.008 286.834 105.151C286.838 105.293 286.802 105.434 286.73 105.558C286.659 105.681 286.554 105.782 286.429 105.85C286.303 105.917 286.161 105.948 286.019 105.94H280.589C280.456 105.94 280.326 105.906 280.21 105.842C280.095 105.777 279.998 105.683 279.929 105.57L274.499 94.75H271.679V105.16C271.674 105.364 271.591 105.558 271.448 105.703C271.305 105.848 271.112 105.932 270.909 105.94H266.049C265.842 105.94 265.644 105.858 265.497 105.712C265.351 105.565 265.269 105.367 265.269 105.16L265.229 78.12ZM277.729 89.56C278.566 89.5164 279.355 89.1527 279.932 88.5442C280.509 87.9356 280.83 87.1286 280.829 86.29C280.821 85.4703 280.492 84.6863 279.912 84.1066C279.333 83.527 278.549 83.1978 277.729 83.19H271.729V89.56H277.729ZM291.569 78.12C291.569 78.018 291.589 77.9171 291.628 77.823C291.668 77.7289 291.725 77.6436 291.798 77.572C291.87 77.5003 291.957 77.4438 292.051 77.4057C292.146 77.3676 292.247 77.3487 292.349 77.35H297.209C297.412 77.355 297.606 77.4374 297.751 77.5804C297.896 77.7235 297.981 77.9165 297.989 78.12V99.93H307.729C307.936 99.93 308.134 100.012 308.28 100.158C308.427 100.305 308.509 100.503 308.509 100.71V105.16C308.509 105.367 308.427 105.565 308.28 105.712C308.134 105.858 307.936 105.94 307.729 105.94H292.349C292.142 105.94 291.944 105.858 291.797 105.712C291.651 105.565 291.569 105.367 291.569 105.16V78.12ZM311.419 78.12C311.419 77.9209 311.496 77.7294 311.634 77.5859C311.772 77.4423 311.96 77.3578 312.159 77.35H322.159C325.95 77.35 329.586 78.8561 332.267 81.5369C334.948 84.2177 336.454 87.8537 336.454 91.645C336.454 95.4363 334.948 99.0723 332.267 101.753C329.586 104.434 325.95 105.94 322.159 105.94H312.159C311.958 105.932 311.768 105.846 311.63 105.701C311.492 105.555 311.416 105.361 311.419 105.16V78.12ZM321.729 99.89C323.852 99.7856 325.853 98.8687 327.319 97.3292C328.785 95.7897 329.602 93.7456 329.602 91.62C329.602 89.4944 328.785 87.4503 327.319 85.9108C325.853 84.3713 323.852 83.4544 321.729 83.35H317.809V99.89H321.729ZM198.069 115.4C198.071 115.106 198.189 114.826 198.397 114.618C198.604 114.41 198.885 114.293 199.179 114.29H213.789C225.699 114.29 235.439 123.48 235.439 134.73C235.439 145.98 225.689 155.28 213.789 155.28H199.179C198.885 155.277 198.604 155.16 198.397 154.952C198.189 154.744 198.071 154.464 198.069 154.17V115.4ZM213.069 148.14C221.069 148.14 226.949 142.4 226.949 134.73C226.949 127.06 221.069 121.4 213.049 121.4H206.049V148.16L213.069 148.14ZM234.639 153.74L253.819 114.33C253.905 114.137 254.046 113.973 254.223 113.858C254.4 113.742 254.607 113.681 254.819 113.68H255.439C255.653 113.667 255.866 113.723 256.046 113.84C256.226 113.957 256.364 114.129 256.439 114.33L275.439 153.74C275.541 153.902 275.594 154.091 275.592 154.282C275.59 154.474 275.533 154.661 275.427 154.821C275.322 154.982 275.173 155.108 274.998 155.186C274.822 155.264 274.628 155.289 274.439 155.26H269.069C268.684 155.287 268.3 155.187 267.977 154.976C267.654 154.765 267.409 154.454 267.279 154.09L264.279 147.76H245.859L242.859 154.09C242.718 154.446 242.471 154.75 242.15 154.96C241.829 155.169 241.452 155.274 241.069 155.26H235.729C235.533 155.312 235.325 155.304 235.134 155.235C234.943 155.166 234.777 155.041 234.659 154.876C234.541 154.711 234.475 154.514 234.472 154.311C234.468 154.108 234.526 153.909 234.639 153.74ZM261.279 141.27L255.119 128.4H254.929L248.929 141.28L261.279 141.27ZM281.729 121.3H272.289C272.139 121.304 271.99 121.278 271.85 121.225C271.71 121.171 271.582 121.091 271.474 120.987C271.365 120.884 271.278 120.761 271.217 120.624C271.156 120.487 271.123 120.34 271.119 120.19V115.4C271.123 115.25 271.156 115.103 271.217 114.966C271.278 114.829 271.365 114.706 271.474 114.603C271.582 114.499 271.71 114.419 271.85 114.365C271.99 114.312 272.139 114.286 272.289 114.29H299.239C299.389 114.285 299.54 114.309 299.681 114.362C299.822 114.415 299.951 114.496 300.06 114.599C300.17 114.702 300.258 114.826 300.32 114.964C300.381 115.101 300.415 115.249 300.419 115.4V120.2C300.415 120.351 300.381 120.499 300.32 120.636C300.258 120.774 300.17 120.898 300.06 121.001C299.951 121.104 299.822 121.185 299.681 121.238C299.54 121.291 299.389 121.315 299.239 121.31H289.729V154.17C289.709 154.468 289.577 154.748 289.361 154.953C289.144 155.159 288.858 155.276 288.559 155.28H282.819C282.52 155.276 282.234 155.159 282.017 154.953C281.8 154.748 281.669 154.468 281.649 154.17L281.729 121.3ZM295.879 153.74L315.059 114.33C315.15 114.13 315.298 113.961 315.485 113.846C315.672 113.73 315.889 113.672 316.109 113.68H316.729C316.943 113.667 317.156 113.723 317.336 113.84C317.516 113.957 317.654 114.129 317.729 114.33L336.729 153.74C336.831 153.902 336.884 154.091 336.882 154.282C336.88 154.474 336.823 154.661 336.717 154.821C336.612 154.982 336.463 155.108 336.288 155.186C336.112 155.264 335.918 155.289 335.729 155.26H330.359C329.974 155.287 329.59 155.187 329.267 154.976C328.944 154.765 328.699 154.454 328.569 154.09L325.569 147.76H307.109L304.109 154.09C303.968 154.446 303.721 154.75 303.4 154.96C303.079 155.169 302.702 155.274 302.319 155.26H296.929C296.736 155.301 296.534 155.285 296.35 155.212C296.167 155.139 296.009 155.013 295.896 154.851C295.784 154.688 295.722 154.496 295.719 154.298C295.716 154.1 295.772 153.906 295.879 153.74ZM322.519 141.27L316.359 128.4H316.179L310.179 141.28L322.519 141.27ZM197.189 162.66C197.187 162.556 197.207 162.453 197.246 162.356C197.285 162.26 197.344 162.172 197.417 162.098C197.491 162.025 197.578 161.967 197.675 161.927C197.771 161.888 197.875 161.869 197.979 161.87H214.729C214.832 161.87 214.934 161.891 215.03 161.93C215.125 161.97 215.211 162.028 215.284 162.102C215.357 162.175 215.414 162.263 215.452 162.358C215.491 162.454 215.51 162.557 215.509 162.66V166.04C215.509 166.247 215.427 166.445 215.28 166.592C215.134 166.738 214.936 166.82 214.729 166.82H202.529V174.57H212.729C212.935 174.575 213.132 174.658 213.278 174.803C213.425 174.948 213.511 175.144 213.519 175.35V178.73C213.511 178.936 213.425 179.132 213.278 179.277C213.132 179.422 212.935 179.505 212.729 179.51H202.539V189.94C202.531 190.145 202.447 190.339 202.302 190.483C202.157 190.628 201.963 190.713 201.759 190.72H197.969C197.866 190.721 197.763 190.702 197.667 190.664C197.572 190.625 197.484 190.568 197.411 190.495C197.337 190.423 197.279 190.336 197.239 190.241C197.199 190.146 197.179 190.043 197.179 189.94L197.189 162.66ZM232.139 161.46C235.074 161.45 237.947 162.311 240.393 163.934C242.839 165.557 244.749 167.869 245.881 170.577C247.013 173.286 247.316 176.269 246.753 179.15C246.189 182.031 244.783 184.68 242.714 186.762C240.645 188.843 238.004 190.265 235.127 190.846C232.249 191.427 229.264 191.142 226.549 190.027C223.834 188.911 221.51 187.015 219.873 184.579C218.235 182.143 217.357 179.275 217.349 176.34C217.34 174.391 217.715 172.459 218.454 170.656C219.193 168.852 220.281 167.212 221.655 165.83C223.029 164.447 224.662 163.35 226.461 162.6C228.26 161.85 230.19 161.463 232.139 161.46ZM232.139 185.77C234.018 185.778 235.856 185.227 237.422 184.188C238.987 183.149 240.208 181.668 240.93 179.934C241.653 178.2 241.843 176.29 241.478 174.447C241.112 172.604 240.208 170.911 238.879 169.583C237.549 168.255 235.856 167.352 234.012 166.989C232.169 166.626 230.259 166.818 228.526 167.542C226.792 168.266 225.312 169.489 224.275 171.055C223.238 172.622 222.689 174.461 222.699 176.34C222.717 178.837 223.718 181.226 225.485 182.991C227.251 184.756 229.642 185.754 232.139 185.77ZM251.359 162.66C251.358 162.557 251.377 162.454 251.415 162.358C251.454 162.263 251.511 162.175 251.584 162.102C251.656 162.028 251.743 161.97 251.838 161.93C251.933 161.891 252.036 161.87 252.139 161.87H263.929C265.102 161.861 266.265 162.083 267.352 162.523C268.439 162.963 269.428 163.613 270.264 164.436C271.1 165.259 271.765 166.238 272.222 167.318C272.68 168.398 272.92 169.557 272.929 170.73C272.929 174.52 270.419 177.61 266.829 179.05L272.479 189.52C272.554 189.641 272.594 189.78 272.596 189.922C272.597 190.064 272.56 190.204 272.488 190.326C272.416 190.449 272.312 190.549 272.187 190.617C272.062 190.685 271.921 190.717 271.779 190.71H267.429C267.295 190.731 267.158 190.712 267.033 190.657C266.909 190.603 266.804 190.513 266.729 190.4L261.289 179.4H256.729V189.91C256.721 190.115 256.637 190.309 256.492 190.453C256.347 190.598 256.153 190.683 255.949 190.69H252.129C252.026 190.69 251.925 190.67 251.83 190.631C251.736 190.591 251.65 190.534 251.577 190.462C251.505 190.389 251.447 190.303 251.408 190.208C251.369 190.114 251.349 190.012 251.349 189.91L251.359 162.66ZM263.469 175.02C264.562 174.989 265.6 174.533 266.361 173.748C267.123 172.964 267.549 171.913 267.549 170.82C267.523 169.753 267.082 168.739 266.32 167.992C265.559 167.245 264.536 166.825 263.469 166.82H256.729V175.02H263.469ZM277.369 162.66C277.374 162.454 277.457 162.257 277.602 162.11C277.747 161.964 277.943 161.878 278.149 161.87H282.069C282.277 161.873 282.475 161.957 282.621 162.105C282.767 162.253 282.849 162.452 282.849 162.66V179.51C282.849 181.101 283.481 182.627 284.606 183.753C285.731 184.878 287.258 185.51 288.849 185.51C290.44 185.51 291.966 184.878 293.091 183.753C294.217 182.627 294.849 181.101 294.849 179.51V162.66C294.848 162.557 294.867 162.454 294.905 162.358C294.944 162.263 295.001 162.175 295.074 162.102C295.146 162.028 295.233 161.97 295.328 161.93C295.423 161.891 295.526 161.87 295.629 161.87H299.549C299.755 161.878 299.951 161.964 300.095 162.11C300.24 162.257 300.324 162.454 300.329 162.66V179.8C300.329 182.85 299.117 185.775 296.961 187.932C294.804 190.088 291.879 191.3 288.829 191.3C285.779 191.3 282.854 190.088 280.697 187.932C278.54 185.775 277.329 182.85 277.329 179.8L277.369 162.66ZM309.399 162.08C309.419 161.901 309.507 161.737 309.645 161.622C309.783 161.507 309.959 161.449 310.139 161.46H310.799C310.942 161.455 311.084 161.491 311.208 161.564C311.332 161.636 311.433 161.743 311.499 161.87L320.569 181.32H320.729L329.729 161.87C329.79 161.738 329.889 161.628 330.015 161.555C330.14 161.482 330.284 161.449 330.429 161.46H331.089C331.268 161.449 331.445 161.507 331.583 161.622C331.721 161.737 331.809 161.901 331.829 162.08L336.729 189.77C336.767 189.883 336.777 190.004 336.757 190.122C336.738 190.24 336.689 190.351 336.615 190.445C336.542 190.539 336.446 190.614 336.337 190.662C336.228 190.71 336.108 190.73 335.989 190.72H332.229C332.052 190.706 331.883 190.64 331.744 190.529C331.605 190.419 331.502 190.269 331.449 190.1L329.019 174.48H328.899L321.729 190.68C321.676 190.82 321.579 190.939 321.453 191.02C321.327 191.101 321.178 191.14 321.029 191.13H320.289C320.14 191.134 319.994 191.093 319.87 191.013C319.745 190.932 319.647 190.817 319.589 190.68L312.299 174.48H312.179L309.729 190.1C309.691 190.271 309.598 190.424 309.465 190.536C309.331 190.648 309.163 190.713 308.989 190.72H305.279C305.159 190.729 305.038 190.709 304.927 190.662C304.816 190.615 304.718 190.541 304.641 190.448C304.565 190.355 304.512 190.245 304.487 190.127C304.462 190.008 304.466 189.886 304.499 189.77L309.399 162.08Z"
        fill={forumBlue}
      />
      <path
        d="M246.249 82.86C246.967 82.9063 247.676 83.0441 248.359 83.27L250.729 77.1C249.286 76.5943 247.776 76.3078 246.249 76.25V82.86Z"
        fill={goal1}
      />
      <path
        d="M249.249 83.61C249.916 83.9189 250.541 84.3121 251.109 84.78L255.569 79.91C254.37 78.8868 253.021 78.0538 251.569 77.44L249.249 83.61Z"
        fill={goal2}
      />
      <path
        d="M253.119 87.17L259.029 84.22C258.301 82.8631 257.371 81.6255 256.269 80.55L251.809 85.4C252.321 85.9232 252.761 86.5116 253.119 87.15"
        fill={goal3}
      />
      <path
        d="M259.459 85.08L253.549 88.08C253.836 88.748 254.034 89.4506 254.139 90.17L260.719 89.55C260.524 88.0216 260.099 86.5314 259.459 85.13"
        fill={goal4}
      />
      <path
        d="M254.229 91.4C254.227 92.0121 254.16 92.6222 254.029 93.22L260.379 95.04C260.677 93.8496 260.828 92.6272 260.829 91.4V90.47L254.259 91.09V91.4"
        fill={goal5}
      />
      <path
        d="M253.789 94.11C253.561 94.7786 253.252 95.4167 252.869 96.01L258.139 100.01C259.007 98.7656 259.681 97.3967 260.139 95.95L253.789 94.11Z"
        fill={goal6}
      />
      <path
        d="M252.289 96.79C251.822 97.359 251.284 97.8664 250.689 98.3L254.159 103.92C255.449 103.049 256.599 101.987 257.569 100.77L252.289 96.79Z"
        fill={goal7}
      />
      <path
        d="M253.359 104.4L249.889 98.79C249.26 99.147 248.588 99.4226 247.889 99.61L249.109 106.11C250.611 105.767 252.052 105.194 253.379 104.41"
        fill={goal8}
      />
      <path
        d="M246.929 99.82C246.521 99.8751 246.11 99.9018 245.699 99.9C245.365 99.9015 245.031 99.8815 244.699 99.84L243.469 106.34C245.016 106.58 246.591 106.58 248.139 106.34L246.929 99.82Z"
        fill={goal9}
      />
      <path
        d="M243.729 99.69C243 99.5216 242.297 99.2559 241.639 98.9L238.169 104.52C239.52 105.298 240.984 105.861 242.509 106.19L243.729 99.69Z"
        fill={goal10}
      />
      <path
        d="M239.209 96.91L233.949 100.91C234.93 102.117 236.09 103.165 237.389 104.02L240.859 98.4C240.246 97.9777 239.691 97.4768 239.209 96.91Z"
        fill={goal11}
      />
      <path
        d="M238.629 96.15C238.207 95.5312 237.871 94.8585 237.629 94.15L231.279 95.97C231.756 97.4675 232.465 98.8812 233.379 100.16L238.629 96.15Z"
        fill={goal12}
      />
      <path
        d="M237.159 91.4V91L230.579 90.41V91.41C230.579 92.6438 230.73 93.8729 231.029 95.07L237.379 93.24C237.244 92.6359 237.173 92.0191 237.169 91.4"
        fill={goal13}
      />
      <path
        d="M237.269 90.02C237.381 89.2891 237.59 88.5762 237.889 87.9L231.979 84.96C231.341 86.3686 230.92 87.8655 230.729 89.4L237.269 90.02Z"
        fill={goal14}
      />
      <path
        d="M238.339 87.06C238.717 86.4253 239.174 85.8407 239.699 85.32L235.249 80.4C234.126 81.4747 233.174 82.7159 232.429 84.08L238.339 87.06Z"
        fill={goal15}
      />
      <path
        d="M240.409 84.68C240.968 84.232 241.583 83.8589 242.239 83.57L239.859 77.4C238.45 77.9984 237.139 78.804 235.969 79.79L240.409 84.68Z"
        fill={goal16}
      />
      <path
        d="M243.129 83.24C243.828 83.0147 244.555 82.8836 245.289 82.85V76.24C243.742 76.2829 242.211 76.5628 240.749 77.07L243.129 83.24Z"
        fill={goal17}
      />
      <path d="M20.3389 157.58H53.8289V191.07H20.3389V157.58Z" fill={red} />
      <path
        d="M55.5789 138.59C55.5789 135.121 54.5501 131.73 52.6228 128.845C50.6955 125.961 47.9561 123.713 44.7511 122.385C41.5461 121.058 38.0194 120.71 34.617 121.387C31.2145 122.064 28.0892 123.734 25.6362 126.187C23.1832 128.64 21.5127 131.766 20.8359 135.168C20.1591 138.571 20.5064 142.097 21.834 145.302C23.1616 148.507 25.4097 151.247 28.2941 153.174C31.1786 155.101 34.5698 156.13 38.0388 156.13C42.6907 156.13 47.1521 154.282 50.4415 150.993C53.7309 147.703 55.5789 143.242 55.5789 138.59Z"
        fill={green}
      />
      <path d="M129.319 157.58H162.809V191.07H129.319V157.58Z" fill={yellow} />
      <path
        d="M127.679 86.18H163.509L145.559 119.67L127.679 86.18Z"
        fill={lightYellow}
      />
      <path
        d="M145.219 86.18H163.379L145.419 119.67L145.219 86.18Z"
        fill={yellow}
      />
      <path
        d="M74.1889 191.51C83.8759 191.51 91.7289 183.657 91.7289 173.97C91.7289 164.283 83.8759 156.43 74.1889 156.43C64.5018 156.43 56.6489 164.283 56.6489 173.97C56.6489 183.657 64.5018 191.51 74.1889 191.51Z"
        fill={blue}
      />
      <path
        d="M74.3389 35.08C84.0259 35.08 91.8789 27.2271 91.8789 17.54C91.8789 7.85293 84.0259 0 74.3389 0C64.6518 0 56.7989 7.85293 56.7989 17.54C56.7989 27.2271 64.6518 35.08 74.3389 35.08Z"
        fill={yellow}
      />
      <path
        d="M128.019 191.3H92.1888L110.149 157.12L128.019 191.3Z"
        fill={green}
      />
      <path
        d="M125.149 76.19L92.2989 61.88L122.409 37.71L125.149 76.19Z"
        fill={blue}
      />
      <path
        d="M46.2505 76.1856L77.8603 65.1222L88.9238 96.732L57.3139 107.795L46.2505 76.1856Z"
        fill={blue}
      />
      <path
        d="M46.3188 76.19L57.3788 107.81L72.7388 102.43L61.6688 70.82"
        fill={lightBlue}
      />
      <path d="M93.8788 122.03H127.369V155.52H93.8788V122.03Z" fill={blue} />
      <path
        d="M0 39.0773L32.7882 32.2573L39.6082 65.0456L6.81996 71.8655L0 39.0773Z"
        fill={green}
      />
      <path
        d="M55.3488 122.11H91.1788L73.2188 155.59L55.3488 122.11Z"
        fill={yellow}
      />
      <path
        d="M146.179 157.58H162.809V191.07H146.179V157.58Z"
        fill={lightYellow}
      />
      <path
        d="M37.8688 121.04H37.4988V156.04H37.8688C42.5207 156.04 46.9821 154.192 50.2715 150.903C53.5609 147.613 55.4088 143.152 55.4088 138.5C55.4088 133.848 53.5609 129.387 50.2715 126.097C46.9821 122.808 42.5207 120.96 37.8688 120.96V121.04Z"
        fill={lightGreen}
      />
      <path
        d="M129.356 66.7461L141.248 35.2248L172.76 47.1133L160.868 78.6346L129.356 66.7461Z"
        fill={red}
      />
      <path
        d="M150.998 56.953L156.949 41.1783L172.752 47.1402L166.8 62.9149L150.998 56.953Z"
        fill={lightRed}
      />
      <path
        d="M145.192 72.6976L151.143 56.9229L166.946 62.8849L160.995 78.6595L145.192 72.6976Z"
        fill={lightRed}
      />
      <path
        d="M54.6289 117.09H18.7989L36.7589 82.9L54.6289 117.09Z"
        fill={red}
      />
      <path
        d="M108.499 119.11C105.137 119.11 101.85 118.113 99.0542 116.245C96.2585 114.377 94.0796 111.722 92.7929 108.616C91.5062 105.509 91.1696 102.091 91.8255 98.7935C92.4814 95.4958 94.1005 92.4667 96.478 90.0892C98.8555 87.7117 101.885 86.0926 105.182 85.4366C108.48 84.7807 111.898 85.1173 115.004 86.404C118.111 87.6907 120.766 89.8697 122.634 92.6653C124.502 95.4609 125.499 98.7477 125.499 102.11C125.499 106.619 123.708 110.943 120.52 114.131C117.332 117.319 113.008 119.11 108.499 119.11Z"
        fill={green}
      />
      <path
        d="M146.529 155.4C143.167 155.4 139.88 154.403 137.084 152.535C134.289 150.667 132.11 148.012 130.823 144.906C129.536 141.799 129.2 138.381 129.855 135.083C130.511 131.786 132.131 128.757 134.508 126.379C136.886 124.002 139.915 122.383 143.212 121.727C146.51 121.071 149.928 121.407 153.034 122.694C156.141 123.981 158.796 126.16 160.664 128.955C162.532 131.751 163.529 135.038 163.529 138.4C163.529 142.909 161.738 147.233 158.55 150.421C155.362 153.609 151.038 155.4 146.529 155.4Z"
        fill={green}
      />
    </svg>
  );
};

Logo.propTypes = {
  scaleTo: oneOf(['height', 'width']).isRequired,
  monochrome: bool,
};

export default Logo;
