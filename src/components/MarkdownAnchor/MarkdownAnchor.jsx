import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeGet } from "styled-system";
import { anchorStyle } from "../style";

const Wrapper = styled.div`
  ${anchorStyle};
  color: ${({ color }) => themeGet(`colors.${color}`)};
`;

const MarkdownAnchor = ({ anchor, href, children, ...props }) => (
  <Wrapper {...props}>{anchor(href, children)}</Wrapper>
);

MarkdownAnchor.propTypes = {
  anchor: PropTypes.func,
  color: PropTypes.string,
  href: PropTypes.string.isRequired
};

MarkdownAnchor.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>,
  color: "primary"
};

export default MarkdownAnchor;