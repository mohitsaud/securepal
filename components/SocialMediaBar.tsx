import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/share/18iouTD75t/',
  },
  {
    icon: <FaTiktok />,
    link: 'https://www.tiktok.com/@securepal',
  },
  {
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/company/securepal/',
  },
];

const SocialMediaBar = () => {
  return (
    <nav aria-label="Social media links">
      {/* Vertical on Large Screens, Bottom Fixed on Small Screens */}
      <div className="fixed left-3 top-1/3 z-40 hidden flex-col overflow-hidden rounded-xl border border-white/10 bg-navy shadow-lg lg:flex">
        {socialLinks.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center bg-navy text-slate-200 transition-colors hover:bg-primary hover:text-white"
          >
            {icon}
          </a>
        ))}
      </div>

    </nav>
  );
};

export default SocialMediaBar;
