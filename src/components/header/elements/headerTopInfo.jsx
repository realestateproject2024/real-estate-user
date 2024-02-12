import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:Info@solution.com.sa ">
              <FaEnvelope />
              <i></i> Info@solution.com.sa
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              3900 Al-Zuhur Street, Al-Shawkiyah District - Makkah
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
