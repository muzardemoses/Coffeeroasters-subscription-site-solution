import React from "react";
import "../Assets/Styles/footer.css";
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-svg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.4893 3.00268C9.97493 -0.508874 4.76554 -1.01438 1.87661 1.87766C-1.01383 4.76821 -0.508337 9.97779 3.00008 13.4908C3.93606 14.4269 5.01454 15.1424 6.15301 15.6554C6.52651 13.4848 7.59748 11.3983 9.22344 9.68528C8.68496 9.49328 8.13297 9.33128 7.55698 9.17377C4.14606 8.23776 2.4511 5.39222 2.05511 2.05617C2.38262 2.45002 2.68082 2.86313 2.97814 3.27503C3.555 4.0742 4.12855 4.86879 4.90654 5.50922C6.11679 6.50576 7.44522 6.89045 8.89855 7.3113C8.95466 7.32755 9.01096 7.34385 9.06745 7.36025C9.75593 7.55975 10.3544 7.85525 10.9034 8.20026C12.3464 7.14574 13.9738 6.44373 15.6538 6.15423C15.1423 5.01571 14.4253 3.93869 13.4893 3.00268ZM7.54648 16.4894C7.76998 14.3159 8.82296 12.1903 10.5104 10.5028C14.0248 6.99124 19.2342 6.48423 22.1232 9.37778C25.0136 12.2683 24.5096 17.4779 20.9967 20.991C19.3092 22.6785 17.1838 23.7315 15.0103 23.9565C14.7208 23.985 14.4343 24 14.1538 24C12.2849 24 10.6154 23.3445 9.38544 22.1145C7.96947 20.7 7.31549 18.7019 7.54648 16.4894ZM12.6869 18.2729C13.8388 17.3939 15.0853 17.0459 16.4413 16.6754C19.8522 15.7394 21.5457 12.8938 21.9432 9.55778C21.6184 9.94944 21.3224 10.3598 21.0273 10.7688C20.4487 11.5709 19.8735 12.3681 19.0917 13.0108C17.8778 14.009 16.5463 14.3943 15.0864 14.8168L14.9308 14.8619C11.5934 15.8309 9.94343 18.6524 9.56244 21.936C9.89121 21.541 10.1924 21.1309 10.492 20.7229C11.1423 19.8374 11.7852 18.962 12.6869 18.2729Z"
            fill="#0E8784"
          />
        </svg>
        <span className="just-space">

        </span>
        <svg
          width="203"
          height="24"
          viewBox="0 0 203 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7514 22.8595C42.7514 23.3664 42.4961 23.6198 41.9854 23.6198H32.9885C32.7712 23.6198 32.5946 23.5565 32.4588 23.4298C32.323 23.303 32.2551 23.124 32.2551 22.8926C32.2551 22.6942 32.3013 22.5344 32.3936 22.4132C32.486 22.292 32.6299 22.1928 32.8255 22.1157L33.5264 21.9008C33.7002 21.8457 33.836 21.741 33.9338 21.5868C34.0316 21.4325 34.0805 21.2121 34.0805 20.9256V11.3719C34.0805 11.2176 34.0425 11.0882 33.9664 10.9835C33.8904 10.8788 33.7491 10.7824 33.5427 10.6942L32.5974 10.3802C32.3474 10.259 32.1682 10.1295 32.0595 9.99174C31.9508 9.85399 31.8965 9.68595 31.8965 9.4876C31.8965 9.28926 31.9644 9.12672 32.1002 9L32.1536 8.95545C32.2837 8.85843 32.4534 8.80992 32.6625 8.80992H34.0928L34.0815 8.71333C34.051 8.52014 33.9746 8.33471 33.8523 8.15702C33.6894 7.92011 33.5046 7.65289 33.2982 7.35537C33.0917 7.05785 32.907 6.70248 32.744 6.28926C32.5811 5.87603 32.4996 5.36639 32.4996 4.76033C32.4996 3.3168 32.9885 2.16253 33.9664 1.29752C34.9444 0.432507 36.3352 0 38.1389 0C39.3015 0 40.2659 0.187328 41.0319 0.561983C41.798 0.936639 42.3711 1.43526 42.7514 2.05785C43.1317 2.68044 43.3219 3.36088 43.3219 4.09917C43.3219 4.9697 43.0964 5.62259 42.6455 6.05785C42.1946 6.49311 41.616 6.71074 40.9097 6.71074C40.1273 6.71074 39.4971 6.4573 39.019 5.95041C38.5409 5.44353 38.3019 4.77135 38.3019 3.93388V2.46281C38.3019 2.07713 38.2258 1.79339 38.0737 1.61157C37.9216 1.42975 37.688 1.33884 37.3729 1.33884C36.9708 1.33884 36.6666 1.47658 36.4601 1.75207C36.2537 2.02755 36.1505 2.42424 36.1505 2.94215C36.1505 3.47107 36.2727 3.96694 36.5172 4.42975C36.7617 4.89256 37.0632 5.32507 37.4218 5.72727C37.7803 6.12948 38.1389 6.51515 38.4975 6.8843C38.856 7.25344 39.1576 7.61708 39.402 7.97521L39.4717 8.08256C39.6037 8.29711 39.6918 8.51066 39.7358 8.72322L39.7507 8.80992H42.1647C42.4146 8.80992 42.6075 8.86226 42.7433 8.96694C42.8791 9.07162 42.947 9.23416 42.947 9.45455C42.947 9.78512 42.8058 10.0551 42.5232 10.2645C42.2407 10.4738 41.7952 10.5785 41.1868 10.5785H40.0295V20.876C40.0295 21.1846 40.0757 21.4215 40.1681 21.5868C40.2604 21.7521 40.4098 21.8512 40.6163 21.8843L42.018 22.0992C42.2679 22.1322 42.4526 22.2121 42.5721 22.3388C42.6917 22.4656 42.7514 22.6391 42.7514 22.8595ZM10.6593 23.2397C9.68141 23.7135 8.54051 23.9504 7.23661 23.9504C5.85666 23.9504 4.62067 23.6584 3.52866 23.0744C2.43665 22.4904 1.57554 21.6446 0.945323 20.5372C0.315108 19.4298 0 18.0826 0 16.4959C0 14.9642 0.32869 13.595 0.98607 12.3884C1.64345 11.1818 2.55889 10.2287 3.7324 9.52892C4.9059 8.8292 6.27499 8.47934 7.83966 8.47934C9.17615 8.47934 10.3035 8.67769 11.2216 9.07438C12.1398 9.47107 12.8406 10.0083 13.3242 10.686C13.8077 11.3636 14.0495 12.1212 14.0495 12.9587C14.0495 13.8402 13.7968 14.5317 13.2916 15.0331C12.7863 15.5344 12.099 15.7851 11.2298 15.7851C10.3388 15.7851 9.6624 15.5289 9.2006 15.0165C8.73881 14.5041 8.50791 13.8017 8.50791 12.9091V11.8512C8.50791 11.3113 8.41012 10.9036 8.21453 10.6281C8.01895 10.3526 7.74187 10.2149 7.3833 10.2149C7.02473 10.2149 6.70147 10.3609 6.41353 10.6529C6.12559 10.9449 5.90284 11.3829 5.74528 11.9669C5.58773 12.551 5.50895 13.2727 5.50895 14.1322C5.50895 15.3664 5.69095 16.4022 6.05496 17.2397C6.41896 18.0771 6.91607 18.7052 7.54629 19.124C8.1765 19.5427 8.89364 19.7521 9.69771 19.7521C10.5018 19.7521 11.1755 19.6336 11.7187 19.3967C12.262 19.1598 12.6804 18.7603 12.9737 18.1983C13.1367 18.0441 13.2644 17.9449 13.3568 17.9008C13.4491 17.8567 13.5388 17.8347 13.6257 17.8347C13.7344 17.8457 13.824 17.8981 13.8946 17.9917C13.9652 18.0854 13.9951 18.2314 13.9843 18.4298C13.8973 19.5096 13.5659 20.4628 12.99 21.2893C12.4142 22.1157 11.6373 22.7658 10.6593 23.2397ZM27.2269 22.9091C26.0045 23.5813 24.5838 23.9174 22.9648 23.9174C21.3893 23.9174 20.0066 23.5895 18.8168 22.9339C17.627 22.2782 16.7007 21.3719 16.0379 20.2149C15.3751 19.0579 15.0437 17.719 15.0437 16.1983C15.0437 14.7438 15.3914 13.4353 16.0868 12.2727C16.7822 11.1102 17.7438 10.1873 18.9717 9.50413C20.1995 8.82094 21.612 8.47934 23.2093 8.47934C24.7957 8.47934 26.1811 8.80992 27.3655 9.47107C28.5498 10.1322 29.4734 11.0468 30.1362 12.2149C30.7991 13.3829 31.1305 14.7328 31.1305 16.2645C31.1305 17.719 30.7855 19.022 30.0955 20.1736C29.4055 21.3251 28.4493 22.2369 27.2269 22.9091ZM24.2035 22.1983C23.8667 22.2645 23.538 22.1157 23.2175 21.7521C22.8969 21.3884 22.5927 20.7769 22.3047 19.9174C22.0168 19.0579 21.7424 17.9284 21.4817 16.5289C21.2317 15.1295 21.0905 13.978 21.0579 13.0744C21.0253 12.1708 21.0905 11.4876 21.2535 11.0248C21.4165 10.562 21.6664 10.292 22.0032 10.2149C22.3401 10.1488 22.6687 10.2975 22.9893 10.6612C23.3098 11.0248 23.6168 11.6364 23.9102 12.4959C24.2035 13.3554 24.4806 14.4848 24.7414 15.8843C25.0022 17.2837 25.1461 18.438 25.1733 19.3471C25.2005 20.2562 25.1298 20.9421 24.9614 21.405C24.793 21.8678 24.5404 22.1322 24.2035 22.1983ZM53.3619 23.6198C53.8726 23.6198 54.1279 23.3664 54.1279 22.8595C54.1279 22.6391 54.0681 22.4656 53.9486 22.3388C53.8291 22.2121 53.6444 22.1322 53.3945 22.0992L51.9928 21.8843C51.7863 21.8512 51.6369 21.7521 51.5446 21.5868C51.4522 21.4215 51.406 21.1846 51.406 20.876V10.5785H52.5632C53.1717 10.5785 53.6172 10.4738 53.8997 10.2645C54.1822 10.0551 54.3235 9.78512 54.3235 9.45455C54.3235 9.23416 54.2556 9.07162 54.1198 8.96694C53.9839 8.86226 53.7911 8.80992 53.5411 8.80992H51.1271L51.1122 8.72322C51.0682 8.51066 50.9802 8.29711 50.8482 8.08256L50.7785 7.97521C50.534 7.61708 50.2325 7.25344 49.8739 6.8843C49.5154 6.51515 49.1568 6.12948 48.7982 5.72727C48.4397 5.32507 48.1381 4.89256 47.8937 4.42975C47.6492 3.96694 47.5269 3.47107 47.5269 2.94215C47.5269 2.42424 47.6302 2.02755 47.8366 1.75207C48.0431 1.47658 48.3473 1.33884 48.7493 1.33884C49.0644 1.33884 49.2981 1.42975 49.4502 1.61157C49.6023 1.79339 49.6784 2.07713 49.6784 2.46281V3.93388C49.6784 4.77135 49.9174 5.44353 50.3955 5.95041C50.8736 6.4573 51.5038 6.71074 52.2862 6.71074C52.9924 6.71074 53.571 6.49311 54.022 6.05785C54.4729 5.62259 54.6984 4.9697 54.6984 4.09917C54.6984 3.36088 54.5082 2.68044 54.1279 2.05785C53.7476 1.43526 53.1744 0.936639 52.4084 0.561983C51.6424 0.187328 50.678 0 49.5154 0C47.7117 0 46.3208 0.432507 45.3429 1.29752C44.365 2.16253 43.876 3.3168 43.876 4.76033C43.876 5.36639 43.9575 5.87603 44.1205 6.28926C44.2835 6.70248 44.4682 7.05785 44.6747 7.35537C44.8811 7.65289 45.0658 7.92011 45.2288 8.15702C45.3511 8.33471 45.4275 8.52014 45.458 8.71333L45.4692 8.80992H44.039C43.8299 8.80992 43.6602 8.85843 43.5301 8.95545L43.4767 9C43.3409 9.12672 43.273 9.28926 43.273 9.4876C43.273 9.68595 43.3273 9.85399 43.436 9.99174C43.5446 10.1295 43.7239 10.259 43.9738 10.3802L44.9192 10.6942C45.1256 10.7824 45.2669 10.8788 45.3429 10.9835C45.419 11.0882 45.457 11.2176 45.457 11.3719V20.9256C45.457 21.2121 45.4081 21.4325 45.3103 21.5868C45.2125 21.741 45.0767 21.8457 44.9029 21.9008L44.202 22.1157C44.0064 22.1928 43.8625 22.292 43.7701 22.4132C43.6777 22.5344 43.6316 22.6942 43.6316 22.8926C43.6316 23.124 43.6995 23.303 43.8353 23.4298C43.9711 23.5565 44.1477 23.6198 44.365 23.6198H53.3619ZM66.1237 23.1405C65.0697 23.6804 63.8528 23.9504 62.4728 23.9504C60.9516 23.9504 59.6151 23.6336 58.4633 23C57.3116 22.3664 56.4124 21.4793 55.7659 20.3388C55.1194 19.1983 54.7961 17.8788 54.7961 16.3802C54.7961 14.8044 55.1085 13.4242 55.7333 12.2397C56.3581 11.0551 57.2627 10.1322 58.447 9.47107C59.6314 8.80992 61.0548 8.47934 62.7173 8.47934C64.1299 8.47934 65.3468 8.75758 66.3682 9.31405C67.3896 9.87052 68.1746 10.6253 68.7234 11.5785C69.2721 12.5317 69.5464 13.5923 69.5464 14.7603C69.5464 15.2672 69.4106 15.6667 69.139 15.9587L69.0742 16.0235C68.8064 16.2723 68.4369 16.3967 67.9655 16.3967H60.5147L60.5307 16.4729C60.7284 17.3804 61.0661 18.1071 61.5438 18.6529C62.3587 19.584 63.4453 20.0496 64.8035 20.0496C65.6728 20.0496 66.4416 19.8512 67.1098 19.4545C67.778 19.0578 68.2263 18.5069 68.4544 17.8017C68.5848 17.6584 68.7016 17.562 68.8049 17.5124C68.9081 17.4628 68.9977 17.438 69.0738 17.438C69.1824 17.438 69.2748 17.4821 69.3509 17.5702C69.4269 17.6584 69.465 17.8072 69.465 18.0165C69.465 19.0964 69.1716 20.0854 68.5848 20.9835C67.9981 21.8815 67.1777 22.6005 66.1237 23.1405ZM60.3447 15.0717C60.3291 14.8181 60.3214 14.5546 60.3214 14.281C60.3214 13.2452 60.3975 12.4298 60.5496 11.8347C60.7017 11.2397 60.8973 10.8182 61.1363 10.5702C61.3754 10.3223 61.6416 10.1983 61.935 10.1983C62.3153 10.1983 62.6711 10.5234 63.0025 11.1736C63.3339 11.8237 63.4996 12.9036 63.4996 14.4132C63.4996 14.876 63.2932 15.1074 62.8803 15.1074H60.3467L60.3447 15.0717ZM81.7053 23.1405C80.6513 23.6804 79.4343 23.9504 78.0544 23.9504C76.5331 23.9504 75.1967 23.6336 74.0449 23C72.8931 22.3664 71.994 21.4793 71.3475 20.3388C70.7009 19.1983 70.3777 17.8788 70.3777 16.3802C70.3777 14.8044 70.6901 13.4242 71.3148 12.2397C71.9396 11.0551 72.8442 10.1322 74.0286 9.47107C75.213 8.80992 76.6364 8.47934 78.2988 8.47934C79.7114 8.47934 80.9284 8.75758 81.9497 9.31405C82.9711 9.87052 83.7562 10.6253 84.3049 11.5785C84.8536 12.5317 85.128 13.5923 85.128 14.7603C85.128 15.2672 84.9922 15.6667 84.7205 15.9587L84.6557 16.0235C84.388 16.2723 84.0184 16.3967 83.547 16.3967H76.0963L76.1122 16.4729C76.3099 17.3804 76.6476 18.1071 77.1253 18.6529C77.9403 19.584 79.0268 20.0496 80.3851 20.0496C81.2543 20.0496 82.0231 19.8512 82.6913 19.4545C83.3596 19.0578 83.8078 18.5069 84.036 17.8017C84.1664 17.6584 84.2832 17.562 84.3864 17.5124C84.4896 17.4628 84.5793 17.438 84.6553 17.438C84.764 17.438 84.8563 17.4821 84.9324 17.5702C85.0085 17.6584 85.0465 17.8072 85.0465 18.0165C85.0465 19.0964 84.7531 20.0854 84.1664 20.9835C83.5796 21.8815 82.7592 22.6005 81.7053 23.1405ZM75.9262 15.0717C75.9107 14.8181 75.9029 14.5546 75.9029 14.281C75.9029 13.2452 75.979 12.4298 76.1311 11.8347C76.2832 11.2397 76.4788 10.8182 76.7179 10.5702C76.9569 10.3223 77.2231 10.1983 77.5165 10.1983C77.8968 10.1983 78.2527 10.5234 78.5841 11.1736C78.9155 11.8237 79.0812 12.9036 79.0812 14.4132C79.0812 14.876 78.8747 15.1074 78.4618 15.1074H75.9283L75.9262 15.0717ZM95.5999 23.4132C95.4641 23.551 95.2658 23.6198 95.005 23.6198H86.8556C86.6166 23.6198 86.4292 23.5537 86.2933 23.4215C86.1575 23.2893 86.0896 23.1074 86.0896 22.876C86.0896 22.6997 86.1303 22.5537 86.2118 22.438C86.2933 22.3223 86.4047 22.2149 86.546 22.1157L86.9208 21.9669C87.0621 21.9008 87.1599 21.7961 87.2142 21.6529C87.2685 21.5096 87.2957 21.2727 87.2957 20.9421V12.5455C87.2957 12.281 87.2658 12.0909 87.2061 11.9752C87.1463 11.8595 87.0458 11.7686 86.9045 11.7025L86.4808 11.6529C86.3286 11.5647 86.2173 11.4711 86.1466 11.3719C86.076 11.2727 86.0407 11.146 86.0407 10.9917C86.0407 10.8154 86.095 10.6584 86.2037 10.5207C86.3123 10.3829 86.4971 10.2645 86.7578 10.1653L91.3867 8.82645C91.6583 8.71625 91.8865 8.63912 92.0712 8.59504C92.2559 8.55096 92.4135 8.52893 92.5439 8.52893C92.7286 8.52893 92.8671 8.59504 92.9595 8.72727L92.9892 8.77523C93.0654 8.91344 93.118 9.13437 93.1469 9.43802L93.271 12.0064L93.2993 11.9116C93.3544 11.7327 93.4149 11.5611 93.481 11.3967C93.8776 10.4105 94.4019 9.67769 95.0539 9.19835C95.7058 8.71901 96.4175 8.47934 97.189 8.47934C98.1235 8.47934 98.8406 8.79339 99.3404 9.42149C99.8402 10.0496 100.09 11.0028 100.09 12.281C100.09 13.5482 99.8294 14.4793 99.3078 15.0744C98.7863 15.6694 98.1126 15.9669 97.2868 15.9669C96.4827 15.9669 95.8878 15.7631 95.5021 15.3554C95.1163 14.9477 94.9126 14.3691 94.8909 13.6198L94.8746 12.9587C94.8637 12.7052 94.8148 12.5069 94.7279 12.3636C94.641 12.2204 94.4997 12.1488 94.3041 12.1488C94.1086 12.1488 93.9374 12.2507 93.7907 12.4545C93.644 12.6584 93.5327 12.9697 93.4566 13.3884C93.3805 13.8072 93.3425 14.3416 93.3425 14.9917V20.8099C93.3425 21.1185 93.3914 21.3636 93.4892 21.5455C93.587 21.7273 93.7391 21.8402 93.9456 21.8843L95.168 22.1322C95.3961 22.1653 95.5591 22.2507 95.6569 22.3884C95.7547 22.5262 95.8036 22.6887 95.8036 22.876C95.8036 23.0964 95.7357 23.2755 95.5999 23.4132ZM108.631 23.9174C110.25 23.9174 111.67 23.5813 112.893 22.9091C114.115 22.2369 115.071 21.3251 115.761 20.1736C116.451 19.022 116.796 17.719 116.796 16.2645C116.796 14.7328 116.465 13.3829 115.802 12.2149C115.139 11.0468 114.216 10.1322 113.031 9.47107C111.847 8.80992 110.462 8.47934 108.875 8.47934C107.278 8.47934 105.865 8.82094 104.637 9.50413C103.41 10.1873 102.448 11.1102 101.753 12.2727C101.057 13.4353 100.71 14.7438 100.71 16.1983C100.71 17.719 101.041 19.0579 101.704 20.2149C102.367 21.3719 103.293 22.2782 104.483 22.9339C105.672 23.5895 107.055 23.9174 108.631 23.9174ZM108.883 21.7521C109.204 22.1157 109.533 22.2645 109.869 22.1983C110.206 22.1322 110.459 21.8678 110.627 21.405C110.796 20.9421 110.866 20.2562 110.839 19.3471C110.812 18.438 110.668 17.2837 110.407 15.8843C110.146 14.4848 109.869 13.3554 109.576 12.4959C109.283 11.6364 108.976 11.0248 108.655 10.6612C108.335 10.2975 108.006 10.1488 107.669 10.2149C107.332 10.292 107.082 10.562 106.919 11.0248C106.756 11.4876 106.691 12.1708 106.724 13.0744C106.756 13.978 106.898 15.1295 107.147 16.5289C107.408 17.9284 107.683 19.0579 107.971 19.9174C108.259 20.7769 108.563 21.3884 108.883 21.7521ZM129.721 23.9504C130.634 23.9504 131.384 23.7824 131.97 23.4463C132.557 23.1102 132.994 22.7107 133.282 22.2479C133.57 21.7851 133.714 21.3609 133.714 20.9752C133.714 20.8099 133.679 20.6722 133.608 20.562C133.538 20.4518 133.443 20.3967 133.323 20.3967C133.269 20.3967 133.22 20.4077 133.176 20.4298C133.133 20.4518 133.095 20.4848 133.062 20.5289C133.008 20.7273 132.924 20.865 132.81 20.9421C132.696 21.0193 132.573 21.0578 132.443 21.0578C132.258 21.0578 132.12 20.9945 132.027 20.8678C131.935 20.741 131.889 20.573 131.889 20.3636V13.0579C131.889 11.6033 131.397 10.4766 130.414 9.67769C129.43 8.87879 127.89 8.47934 125.793 8.47934C124.163 8.47934 122.802 8.6832 121.71 9.09091C120.618 9.49862 119.798 10.0193 119.249 10.6529C118.701 11.2865 118.426 11.9339 118.426 12.595C118.426 13.3003 118.63 13.8375 119.037 14.2066C119.445 14.5758 120.034 14.7603 120.806 14.7603C121.751 14.7603 122.495 14.5041 123.039 13.9917C123.582 13.4793 123.854 12.8154 123.854 12V10.7438C123.854 10.4353 123.949 10.1956 124.139 10.0248C124.329 9.85399 124.565 9.76859 124.848 9.76859C125.152 9.76859 125.394 9.88154 125.573 10.1074C125.752 10.3333 125.842 10.6391 125.842 11.0248L125.842 15.843L125.755 15.8241C125.493 15.7735 125.189 15.7446 124.844 15.7373L124.669 15.7355C122.332 15.7355 120.591 16.1322 119.445 16.9256C118.299 17.719 117.725 18.8264 117.725 20.2479C117.725 21.3278 118.119 22.2149 118.907 22.9091C119.695 23.6033 120.741 23.9504 122.044 23.9504C123.022 23.9504 123.935 23.7493 124.783 23.3471C125.418 23.0455 125.935 22.6493 126.332 22.1586L126.355 22.1299L126.379 22.2039C126.504 22.5612 126.733 22.8813 127.067 23.1642L127.17 23.2479C127.773 23.7163 128.624 23.9504 129.721 23.9504ZM124.106 20.8347C124.372 21.1928 124.723 21.3719 125.158 21.3719L125.251 21.3687C125.436 21.3558 125.615 21.3041 125.789 21.2137L125.842 21.1837V16.9422L125.761 16.9174C125.576 16.8678 125.359 16.843 125.109 16.843C124.685 16.843 124.345 17.0413 124.09 17.438C123.835 17.8347 123.707 18.4187 123.707 19.1901C123.707 19.9284 123.84 20.4766 124.106 20.8347ZM141.212 24C143.146 24 144.629 23.5537 145.661 22.6612C146.694 21.7686 147.21 20.551 147.21 19.0083C147.21 18.0716 147.036 17.2507 146.688 16.5455C146.34 15.8402 145.732 15.2149 144.863 14.6694C143.993 14.124 142.771 13.6088 141.195 13.124C140.609 12.9366 140.155 12.7466 139.834 12.5537C139.514 12.3609 139.294 12.1543 139.174 11.9339C139.055 11.7135 138.995 11.4766 138.995 11.2231C138.995 10.8485 139.131 10.5455 139.403 10.314C139.674 10.0826 140.076 9.96694 140.609 9.96694C141.348 9.96694 142.046 10.2149 142.703 10.7107C143.36 11.2066 144.086 12.0551 144.879 13.2562C145.085 13.5096 145.292 13.6942 145.498 13.8099C145.705 13.9256 145.9 13.9614 146.085 13.9174C146.313 13.8512 146.454 13.6997 146.509 13.4628C146.563 13.2259 146.552 12.8871 146.476 12.4463L146.052 9.40496C146.009 9.0854 145.927 8.8595 145.808 8.72727C145.688 8.59504 145.531 8.52893 145.335 8.52893C145.161 8.52893 144.944 8.58953 144.683 8.71074C144.423 8.83196 144.164 8.95592 143.909 9.08264C143.654 9.20937 143.461 9.27273 143.331 9.27273C143.211 9.27273 143.034 9.20661 142.801 9.07438C142.567 8.94215 142.239 8.80992 141.815 8.67769C141.391 8.54545 140.842 8.47934 140.169 8.47934C139.049 8.47934 138.042 8.6832 137.145 9.09091C136.249 9.49862 135.542 10.0799 135.026 10.8347C134.51 11.5895 134.252 12.4904 134.252 13.5372C134.252 14.4628 134.445 15.2727 134.831 15.9669C135.217 16.6612 135.806 17.2562 136.599 17.7521C137.392 18.2479 138.392 18.6501 139.598 18.9587C140.38 19.168 140.981 19.3802 141.399 19.595C141.817 19.8099 142.105 20.0441 142.263 20.2975C142.421 20.551 142.499 20.832 142.499 21.1405C142.499 21.5482 142.363 21.8843 142.092 22.1488C141.82 22.4132 141.407 22.5455 140.853 22.5455C140.332 22.5455 139.834 22.4325 139.362 22.2066C138.889 21.9807 138.403 21.5923 137.903 21.0413C137.403 20.4904 136.844 19.7355 136.224 18.7769C136.04 18.5234 135.83 18.3471 135.597 18.2479C135.363 18.1488 135.127 18.1543 134.888 18.2645C134.66 18.3526 134.513 18.5399 134.448 18.8264C134.383 19.1129 134.399 19.4656 134.497 19.8843L135.002 23.1736C135.078 23.5041 135.187 23.7245 135.328 23.8347C135.469 23.9449 135.621 24 135.784 24C135.969 24 136.194 23.9394 136.461 23.8182L137.259 23.4545C137.525 23.3333 137.74 23.2727 137.903 23.2727C138.066 23.2727 138.281 23.3333 138.547 23.4545C138.813 23.5758 139.161 23.697 139.59 23.8182C140.019 23.9394 140.56 24 141.212 24ZM156.663 23.3802C155.946 23.7603 155.098 23.9504 154.12 23.9504C152.469 23.9504 151.227 23.5482 150.396 22.7438C149.565 21.9394 149.149 20.6722 149.149 18.9422V11.4711C149.149 11.2397 149.127 11.0634 149.084 10.9421C149.041 10.8209 148.932 10.7218 148.758 10.6446L147.992 10.3967C147.807 10.3085 147.688 10.2011 147.633 10.0744C147.579 9.94766 147.552 9.79063 147.552 9.60331C147.552 9.3719 147.633 9.18182 147.796 9.03306C147.959 8.8843 148.16 8.80992 148.399 8.80992H149.198C149.296 8.80992 149.399 8.77135 149.508 8.69421C149.616 8.61708 149.763 8.46281 149.948 8.23141L152.963 5.70248C153.18 5.43802 153.398 5.23691 153.615 5.09917C153.832 4.96143 154.05 4.89256 154.267 4.89256C154.517 4.89256 154.712 4.9697 154.854 5.12397L154.898 5.17866C155.01 5.3332 155.066 5.55739 155.066 5.85124L155.065 8.80992H158.472C158.711 8.80992 158.896 8.86226 159.026 8.96694C159.157 9.07163 159.222 9.23416 159.222 9.45455C159.222 9.76309 159.086 10.0275 158.814 10.2479L158.754 10.2935C158.48 10.4835 158.065 10.5785 157.51 10.5785H155.065L155.066 18.1157C155.066 18.9421 155.204 19.5537 155.481 19.9504C155.758 20.3471 156.163 20.5455 156.695 20.5455C156.924 20.5455 157.136 20.4959 157.331 20.3967C157.527 20.2975 157.703 20.168 157.861 20.0083C158.018 19.8485 158.168 19.6694 158.309 19.4711C158.45 19.2727 158.586 19.0744 158.717 18.876C158.825 18.832 158.92 18.8512 159.002 18.9339C159.083 19.0165 159.119 19.1846 159.108 19.438C159.032 20.3306 158.784 21.1157 158.366 21.7934C157.948 22.4711 157.38 23 156.663 23.3802ZM167.339 23.9504C168.718 23.9504 169.935 23.6804 170.989 23.1405C172.043 22.6005 172.864 21.8815 173.451 20.9835C174.037 20.0854 174.331 19.0964 174.331 18.0165C174.331 17.8072 174.293 17.6584 174.217 17.5702C174.14 17.4821 174.048 17.438 173.939 17.438C173.863 17.438 173.774 17.4628 173.671 17.5124C173.567 17.562 173.451 17.6584 173.32 17.8017C173.092 18.5069 172.644 19.0578 171.975 19.4545C171.307 19.8512 170.538 20.0496 169.669 20.0496C168.311 20.0496 167.224 19.584 166.409 18.6529C165.932 18.1071 165.594 17.3804 165.396 16.4729L165.38 16.3967H172.831C173.303 16.3967 173.672 16.2723 173.94 16.0235L174.005 15.9587C174.276 15.6667 174.412 15.2672 174.412 14.7603C174.412 13.5923 174.138 12.5317 173.589 11.5785C173.04 10.6253 172.255 9.87052 171.234 9.31405C170.212 8.75758 168.996 8.47934 167.583 8.47934C165.921 8.47934 164.497 8.80992 163.313 9.47107C162.128 10.1322 161.224 11.0551 160.599 12.2397C159.974 13.4242 159.662 14.8044 159.662 16.3802C159.662 17.8788 159.985 19.1983 160.632 20.3388C161.278 21.4793 162.177 22.3664 163.329 23C164.481 23.6336 165.817 23.9504 167.339 23.9504ZM165.187 14.281C165.187 14.5546 165.195 14.8181 165.21 15.0717L165.212 15.1074H167.746C168.159 15.1074 168.365 14.876 168.365 14.4132C168.365 12.9036 168.2 11.8237 167.868 11.1736C167.537 10.5234 167.181 10.1983 166.801 10.1983C166.507 10.1983 166.241 10.3223 166.002 10.5702C165.763 10.8182 165.567 11.2397 165.415 11.8347C165.263 12.4298 165.187 13.2452 165.187 14.281ZM184.289 23.6198C184.55 23.6198 184.748 23.551 184.884 23.4132C185.02 23.2755 185.088 23.0964 185.088 22.876C185.088 22.6887 185.039 22.5262 184.941 22.3884C184.843 22.2507 184.68 22.1653 184.452 22.1322L183.23 21.8843C183.023 21.8402 182.871 21.7273 182.773 21.5455C182.676 21.3636 182.627 21.1185 182.627 20.8099V14.9917C182.627 14.3416 182.665 13.8072 182.741 13.3884C182.817 12.9697 182.928 12.6584 183.075 12.4545C183.222 12.2507 183.393 12.1488 183.588 12.1488C183.784 12.1488 183.925 12.2204 184.012 12.3636C184.099 12.5069 184.148 12.7052 184.159 12.9587L184.175 13.6198C184.197 14.3691 184.4 14.9477 184.786 15.3554C185.172 15.7631 185.767 15.9669 186.571 15.9669C187.397 15.9669 188.07 15.6694 188.592 15.0744C189.114 14.4793 189.374 13.5482 189.374 12.281C189.374 11.0028 189.124 10.0496 188.625 9.42149C188.125 8.79339 187.408 8.47934 186.473 8.47934C185.702 8.47934 184.99 8.71901 184.338 9.19835C183.686 9.67769 183.162 10.4105 182.765 11.3967C182.699 11.5611 182.639 11.7327 182.583 11.9116L182.555 12.0069L182.431 9.43802C182.402 9.13437 182.35 8.91344 182.273 8.77523L182.244 8.72727C182.151 8.59504 182.013 8.52893 181.828 8.52893C181.698 8.52893 181.54 8.55096 181.355 8.59504C181.171 8.63912 180.942 8.71625 180.671 8.82645L176.042 10.1653C175.781 10.2645 175.596 10.3829 175.488 10.5207C175.379 10.6584 175.325 10.8154 175.325 10.9917C175.325 11.146 175.36 11.2727 175.431 11.3719C175.501 11.4711 175.613 11.5647 175.765 11.6529L176.189 11.7025C176.33 11.7686 176.43 11.8595 176.49 11.9752C176.55 12.0909 176.58 12.281 176.58 12.5455V20.9421C176.58 21.2727 176.553 21.5096 176.498 21.6529C176.444 21.7961 176.346 21.9008 176.205 21.9669L175.83 22.1157C175.689 22.2149 175.577 22.3223 175.496 22.438C175.414 22.5537 175.374 22.6997 175.374 22.876C175.374 23.1074 175.442 23.2893 175.577 23.4215C175.713 23.5537 175.901 23.6198 176.14 23.6198H184.289ZM201.452 22.6612C200.419 23.5537 198.936 24 197.002 24C196.35 24 195.81 23.9394 195.38 23.8182C194.951 23.697 194.603 23.5758 194.337 23.4545C194.071 23.3333 193.856 23.2727 193.693 23.2727C193.53 23.2727 193.316 23.3333 193.05 23.4545L192.251 23.8182C191.985 23.9394 191.759 24 191.575 24C191.412 24 191.26 23.9449 191.118 23.8347C190.977 23.7245 190.868 23.5041 190.792 23.1736L190.287 19.8843C190.189 19.4656 190.173 19.1129 190.238 18.8264C190.303 18.5399 190.45 18.3526 190.678 18.2645C190.917 18.1543 191.154 18.1488 191.387 18.2479C191.621 18.3471 191.83 18.5234 192.015 18.7769C192.634 19.7355 193.194 20.4904 193.693 21.0413C194.193 21.5923 194.68 21.9807 195.152 22.2066C195.625 22.4325 196.122 22.5455 196.644 22.5455C197.198 22.5455 197.611 22.4132 197.882 22.1488C198.154 21.8843 198.29 21.5482 198.29 21.1405C198.29 20.832 198.211 20.551 198.053 20.2975C197.896 20.0441 197.608 19.8099 197.19 19.595C196.771 19.3802 196.171 19.168 195.389 18.9587C194.182 18.6501 193.183 18.2479 192.39 17.7521C191.596 17.2562 191.007 16.6612 190.621 15.9669C190.235 15.2727 190.043 14.4628 190.043 13.5372C190.043 12.4904 190.301 11.5895 190.817 10.8347C191.333 10.0799 192.039 9.49862 192.936 9.09091C193.832 8.6832 194.84 8.47934 195.959 8.47934C196.633 8.47934 197.181 8.54545 197.605 8.67769C198.029 8.80992 198.358 8.94215 198.591 9.07438C198.825 9.20661 199.001 9.27273 199.121 9.27273C199.251 9.27273 199.444 9.20937 199.7 9.08264C199.955 8.95592 200.213 8.83196 200.474 8.71074C200.734 8.58953 200.952 8.52893 201.126 8.52893C201.321 8.52893 201.479 8.59504 201.598 8.72727C201.718 8.8595 201.799 9.0854 201.843 9.40496L202.267 12.4463C202.343 12.8871 202.353 13.2259 202.299 13.4628C202.245 13.6997 202.104 13.8512 201.875 13.9174C201.691 13.9614 201.495 13.9256 201.289 13.8099C201.082 13.6942 200.876 13.5096 200.669 13.2562C199.876 12.0551 199.151 11.2066 198.493 10.7107C197.836 10.2149 197.138 9.96694 196.399 9.96694C195.867 9.96694 195.465 10.0826 195.193 10.314C194.921 10.5455 194.785 10.8485 194.785 11.2231C194.785 11.4766 194.845 11.7135 194.965 11.9339C195.084 12.1543 195.304 12.3609 195.625 12.5537C195.945 12.7466 196.399 12.9366 196.986 13.124C198.561 13.6088 199.784 14.124 200.653 14.6694C201.522 15.2149 202.131 15.8402 202.478 16.5455C202.826 17.2507 203 18.0716 203 19.0083C203 20.551 202.484 21.7686 201.452 22.6612Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div className="footer-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "selected" : null)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/create-your-plan"
          className={({ isActive }) => (isActive ? "selected" : null)}
        >
          Create Your Plan
        </NavLink>
      </div>
      <div className="social-icons">
        <a href="https://web.facebook.com/ademuzardemoses/" target="blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a href="https://twitter.com/Muzarde1" target="blank">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a href="https://www.instagram.com/ademuzardemoses/" target="blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
