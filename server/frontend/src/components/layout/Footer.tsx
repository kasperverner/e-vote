import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";

const Footer = () => {
  return (
    <div className="bg-slate-700 text-white py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <p>© eDemokrati ApS</p>
            <p>All rights reserved</p>
            <p>CVR 61287516</p>
          </div>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-extrabold hover:underline mr-1">
              <FontAwesomeIcon icon={faLinkedin} className="size-8" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="font-extrabold hover:underline mr-1">
              <FontAwesomeIcon icon={faTwitterSquare} className="size-8" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="font-extrabold hover:underline">
              <FontAwesomeIcon icon={faFacebookSquare} className="size-8" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
