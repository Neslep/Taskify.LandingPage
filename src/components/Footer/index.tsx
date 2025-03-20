import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import taskifyCircle from "../../common/SvgIcon/TaskifyCircle.png";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  // Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

// interface SocialLinkProps {
//   href: string;
//   src: string;
// }

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  // const SocialLink = ({ href, src }: SocialLinkProps) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   );
  // };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>

              {/* Click vào số điện thoại để gọi */}
              <a
                href="tel:0969118549"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M6.62 10.79A15.91 15.91 0 0013.21 17.38L16 14.59c.2-.2.52-.24.77-.08a11.91 11.91 0 004.62 1.06c.55 0 1 .45 1 1V21c0 .55-.45 1-1-1A19.92 19.92 0 012 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 .04 1.6.26 3.16.68 4.65.07.24.03.51-.08.76L6.62 10.79z" />
                </svg>
                {t("0969118549")}
              </a>

              {/* Click vào Facebook để mở fanpage */}
              <a
                href="https://www.facebook.com/taskifyvn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M9 8H7v4h2v12h5V12h3.642l.358-4H14V6.084c0-.992.093-1.584 1.583-1.584H19V0h-3.415C11.332 0 9 1.79 9 5.084V8z" />
                </svg>
                {t("Taskify FanPage")}
              </a>

              {/* Click vào Email để gửi thư */}
              <a
                href="mailto:taskifyvn@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M12 12.713L2 6V18h20V6l-10 6.713zM22 4v16H2V4l10 6.75L22 4z" />
                </svg>
                {t("taskifyvn@gmail.com")}
              </a>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Quy Nhon FPT University</Para>
              <Para>Quy Nhon, Binh Dinh</Para>
              <Para>Vietnam</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Press")}
              </Large>
              <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                {/* <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch> */}
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img
                  src={taskifyCircle}
                  width="101px"
                  height="101px"
                  alt="Taskify"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {/* <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              <a href="https://www.buymeacoffee.com/adrinlol">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=adrinlol&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt="Buy me a pizza"
                />
              </a> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
