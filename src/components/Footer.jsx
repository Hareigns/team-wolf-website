import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Footer = ({
    companyName = "Team Wolf",
    slogan = "Diseño y desarrollo web de alto impacto",
    socialLinks = [
        {
            name: "Twitter",
            url: "#",
            bootstrapIcon: "twitter"
        },
        {
            name: "Facebook",
            url: "#",
            bootstrapIcon: "facebook"
        },
        {
            name: "Instagram",
            url: "#",
            bootstrapIcon: "instagram"
        },
        {
            name: "LinkedIn",
            url: "#",
            bootstrapIcon: "linkedin"
        }
    ],
    footerLinks = [
        { text: "Inicio", url: "#" },
        { text: "Servicios", url: "#" },
        { text: "Contacto", url: "#" },
        { text: "Privacidad" },
        { text: "Terminos", url: "#" }
    ],
    copyrightText = `© ${new Date().getFullYear()} Todos los derechos reservados`,
    className = ""
}) => {
    return (
        <div className='footer-main-container'>
            <footer className={`bg-dark text-white py-4 ${className}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h3 className="mb-3">{companyName}</h3>
                            <p className="text-white mb-3">{slogan}</p>
                            <div className="d-flex gap-3">
                                {socialLinks?.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white"
                                    >
                                        {link.iconText || link.iconUrl ? (
                                            link.iconUrl ? (
                                                <img src={link.iconUrl} alt={link.name} width="20" height="20" />
                                            ) : (
                                                <span>{link.iconText}</span>
                                            )
                                        ) : (
                                            <i className={`bi bi-${link.bootstrapIcon}`}></i>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </Col>

                        <Col md={6} className="mt-4 mt-md-0">
                            <ul className="list-unstyled d-flex flex-wrap justify-content-md-end gap-3">
                                {footerLinks?.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url} className="text-white text-decoration-none">
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>

                    <div className="text-center mt-4 pt-3 border-top border-secondary">
                        {copyrightText}
                    </div>
                </Container>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    companyName: PropTypes.string,
    slogan: PropTypes.string,
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            bootstrapIcon: PropTypes.string,
            iconText: PropTypes.string,
            iconUrl: PropTypes.string
        })
    ),
    footerLinks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ),
    copyrightText: PropTypes.string,
    className: PropTypes.string
};

export default Footer;