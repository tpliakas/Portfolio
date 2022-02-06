/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Helmet } from "react-helmet";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro";
import "../styles/github.css";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  console.log({ isDark });

  return (
    <div>
      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <Svg
            icon="triangle"
            hiddenMobile
            width={48}
            stroke
            color="icon_orange"
            left="10%"
            top="20%"
          />
          <Svg
            icon="hexa"
            width={48}
            stroke
            color="icon_red"
            left="60%"
            top="70%"
          />
          <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_blue"
            left="80%"
            top="10%"
          />
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="90%"
            top="50%"
          />
          <Svg
            icon="circle"
            width={16}
            color="icon_darker"
            left="70%"
            top="90%"
          />
          <Svg
            icon="triangle"
            width={16}
            stroke
            color="icon_darkest"
            left="30%"
            top="65%"
          />
          <Svg
            icon="cross"
            width={16}
            stroke
            color="icon_pink"
            left="28%"
            top="15%"
          />
          <Svg
            icon="circle"
            width={6}
            color="icon_darkest"
            left="75%"
            top="10%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="5%"
          top="70%"
        />
        <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <Svg
          icon="circle"
          width={12}
          color="icon_darkest"
          left="50%"
          top="60%"
        />
        <Svg
          icon="upDown"
          width={8}
          color="icon_darkest"
          left="95%"
          top="90%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="40%"
          top="80%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darker"
          left="25%"
          top="5%"
        />
        <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <Svg
          icon="box"
          hiddenMobile
          width={64}
          color="icon_purple"
          left="5%"
          top="90%"
        />
        <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <Svg
          icon="hexa"
          width={16}
          stroke
          color="icon_darker"
          left="10%"
          top="50%"
        />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_darker"
          left="80%"
          top="70%"
        />
      </Divider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <a
        href="https://github.com/tpliakas"
        target="_blank"
        className="github-corner"
        rel="noopener noreferrer"
      >
        <svg
          style={{
            position: "absolute",
            top: "0",
            border: "0",
            right: "0",
          }}
          width="80"
          height="80"
          fill={isDark ? "#fff" : "#141821"}
          aria-hidden="true"
          color={isDark ? "#141821" : "#fff"}
          viewBox="0 0 250 250"
        >
          <path d="M0 0l115 115h15l12 27 108 108V0z" />
          <path
            style={{
              WebkitTransformOrigin: 130,
              MsTransformOrigin: 130,
              transformOrigin: 130,
            }}
            fill="currentColor"
            d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"
            className="octo-arm"
          />
          <path
            fill="currentColor"
            d="M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8L141 136.5c-1.2 1.2.6 5.4.8 5.3z"
            className="octo-body"
          />
        </svg>
        <p
          className="github-text"
          style={{
            color: isDark ? "#fff" : "#141821",
          }}
        >
          Check
          <br />
          GitHub
        </p>
      </a>
      <Content
        sx={{ variant: `texts.bigger` }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Inner>
          <Intro />
        </Inner>
      </Content>
    </div>
  );
};

export default Hero;
