const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anthony-obi-4246401ba"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/soulsiphonx"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/the.antony?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/AnthonyObii"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
