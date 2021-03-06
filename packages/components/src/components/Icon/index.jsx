import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/index";
import "../../assets/styles/icons.css";
import { colors } from "../../storybook/Controls/color";

/**
 * Basic component for rendering CroCoder icons.
 * This component uses the Typography component and has font size, color and weight capabilities.
 */
const Icon = ({ icon, className, fontSize, fontWeight, color, ...other }) => {
  const compositeClassName = `icon-${icon} ${className} `;

  return (
    <Typography
      {...other}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      element="span"
      className={compositeClassName}
    >
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
    </Typography>
  );
};

Icon.propTypes = {
  /**
   * Identifier of the icon class applied which renders the icon in question.
   */
  icon: PropTypes.oneOf([
    "add",
    "appleinc",
    "apps",
    "arrow-left",
    "arrow-right",
    "bar-chart",
    "bell",
    "bin",
    "bin2",
    "bubble",
    "bug",
    "burger",
    "check",
    "checkbox-checked",
    "checkbox-unchecked",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "clock",
    "clock2",
    "close",
    "code",
    "code-bubble",
    "code-color",
    "coffee",
    "cog",
    "cogs",
    "css3",
    "demo",
    "discussion",
    "discussion-bubble",
    "dots",
    "earth",
    "embed",
    "embed2",
    "equalizer",
    "equalizer2",
    "eye",
    "eye-blocked",
    "facebook",
    "facebook1",
    "facebook2",
    "finder",
    "fire",
    "floppy-disk",
    "forward",
    "fullscreen",
    "fullscreen-exit",
    "github",
    "github1",
    "google-plus2",
    "google-plus3",
    "google2",
    "hamburger",
    "heart",
    "heart1",
    "home3",
    "html5",
    "instagram",
    "instagram1",
    "javascript",
    "layers",
    "linkedin",
    "linkedin1",
    "linkedin2",
    "list",
    "list1",
    "location",
    "location2",
    "lock",
    "map-marker",
    "menu",
    "page",
    "pie-chart",
    "price-tag",
    "price-tags",
    "printer",
    "react",
    "refresh",
    "rocket",
    "sass",
    "search",
    "search1",
    "settings",
    "share2",
    "spinner11",
    "spinner6",
    "spinner7",
    "spinner8",
    "star-empty",
    "star-full",
    "star-half",
    "terminal",
    "tux",
    "twitter",
    "twitter1",
    "unlocked",
    "up",
    "user-tie",
    "users",
    "windows8",
    "youtube",
    "youtube2",
    "zoom-in",
    "zoom-out",
  ]).isRequired,
  /**
   * Color of the icon - is passed down to the Typography component.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Font size of the icon on desktop screens.
   *  */
  fontSize: PropTypes.oneOf([
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    30,
    34,
    36,
    44,
    50,
    65,
    "inherit",
    "unset",
  ]),
  /**
   * Font weight of the icon - is passed down to the Typography component.
   */
  fontWeight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  className: PropTypes.string,
};

export default Icon;
