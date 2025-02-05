import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faDiamond, faWandSparkles, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 shadow-lg bg-white">
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/hana01.gif"
          width={48}
          height={48} 
          alt="AMIA Logo"
          className="mr-2"
        />
        <h1 className="text-2xl font-bold text-gray-800">Amia</h1>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">首頁</Link></li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faDiamond} className="w-4 h-4" />
              關於
            </Link>
          </li>
          <li>
            <Link href="/gacha" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faDice} className="w-4 h-4" />
              抽抽樂
            </Link>
          </li>
          <li>
            <Link href="/chat-room" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />
              AI聊天室
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faWandSparkles} className="w-4 h-4" />
              聯絡我
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 