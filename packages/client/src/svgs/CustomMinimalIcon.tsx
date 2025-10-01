import { cn } from '~/utils';
export default function CustomMinimalIcon({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 298 298"
      fill="none"
      className={cn('lucide lucide-bot', className)}
    >
      <defs>
        <linearGradient id="t2m_gradient_1" x1="149" y1="50" x2="149" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="#016DFF"/>
          <stop offset="1" stopColor="#2AEFC1"/>
        </linearGradient>
        <linearGradient id="t2m_gradient_2" x1="149" y1="50" x2="149" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="#016DFF"/>
          <stop offset="1" stopColor="#2AEFC1"/>
        </linearGradient>
        <linearGradient id="t2m_gradient_3" x1="149" y1="50" x2="149" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="#016DFF"/>
          <stop offset="1" stopColor="#2AEFC1"/>
        </linearGradient>
        <linearGradient id="t2m_gradient_4" x1="149" y1="50" x2="149" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="#016DFF"/>
          <stop offset="1" stopColor="#2AEFC1"/>
        </linearGradient>
        <linearGradient id="t2m_gradient_5" x1="149" y1="50" x2="149" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="#016DFF"/>
          <stop offset="1" stopColor="#2AEFC1"/>
        </linearGradient>
      </defs>
      {/* T2M Logo adapted from favicon_white.svg */}
      {/* Main curved element 1 */}
      <path d="M171.5 248C164.2 248 157.5 243.1 155.5 236.2C152.8 227.5 157.8 218.3 166.2 215.5C167.4 215.1 168.7 214.9 170 214.8C188.5 213.8 203.5 199.4 205.7 180.2C205.9 178.1 206.6 176.1 207.7 174.2C209.8 170.5 213.2 167.8 217.3 166.5C218.7 166.1 220.1 165.9 221.5 165.9C228.8 165.9 235.4 170.7 237.4 177.5C238.6 181.9 238.1 186.4 236.1 190.4C234.1 194.4 230.8 197.1 226.7 198.4C225.6 198.7 224.4 198.9 223.2 199C210.8 199.8 200.5 213.6 198.5 227.1C197.9 232.4 194.5 239.1 187.3 241.2C185.9 241.6 184.4 241.8 182.9 241.8L171.5 248Z" fill="url(#t2m_gradient_1)"/>
      {/* Main curved element 2 */}
      <path d="M126.5 248C119.2 248 112.5 243.1 110.5 236.2C107.8 227.5 112.8 218.3 121.2 215.5C122.4 215.1 123.7 214.9 125 214.8C143.5 213.8 158.5 199.4 160.7 180.2C160.9 178.1 161.6 176.1 162.7 174.2C164.8 170.5 168.2 167.8 172.3 166.5C173.7 166.1 175.1 165.9 176.5 165.9C183.8 165.9 190.4 170.7 192.4 177.5C193.6 181.9 193.1 186.4 191.1 190.4C189.1 194.4 185.8 197.1 181.7 198.4C180.6 198.7 179.4 198.9 178.2 199C165.8 199.8 155.5 213.6 153.5 227.1C152.9 232.4 149.5 239.1 142.3 241.2C140.9 241.6 139.4 241.8 137.9 241.8L126.5 248Z" fill="url(#t2m_gradient_2)"/>
      {/* Main curved element 3 */}
      <path d="M125.9 200.5C119.6 200.5 113.9 195.6 111.9 188.7C109.2 180 114.2 170.8 122.6 168C123.8 167.6 125.1 167.4 126.4 167.3C144.9 166.3 159.9 151.9 162.1 132.7C162.3 130.6 163 128.6 164.1 126.7C166.2 123 169.6 120.3 173.7 119C175.1 118.6 176.5 118.4 177.9 118.4C185.2 118.4 191.8 123.2 193.8 130C195 134.4 194.5 138.9 192.5 142.9C190.5 146.9 187.2 149.6 183.1 150.9C182 151.2 180.8 151.4 179.6 151.5C167.2 152.3 156.9 166.1 154.9 179.6C154.3 184.9 150.9 191.6 143.7 193.7C142.3 194.1 140.8 194.3 139.3 194.3V200.5H125.9Z" fill="url(#t2m_gradient_3)"/>
      {/* Circle elements */}
      <circle cx="221.5" cy="230.5" r="12" fill="url(#t2m_gradient_4)"/>
      <circle cx="221.5" cy="130.5" r="12" fill="url(#t2m_gradient_5)"/>
      <circle cx="126.5" cy="130.5" r="12" fill="url(#t2m_gradient_5)"/>
    </svg>
  );
}
