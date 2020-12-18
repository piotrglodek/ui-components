import styled, { css } from 'styled-components';
import { variant, th } from '@xstyled/system';
import PropTypes from 'prop-types';

export const Button = ({ label, ...restProps }) => {
  return <BaseButton {...restProps}>{label}</BaseButton>;
};

const sizes = variant({
  default: 'medium',
  prop: 'size',
  variants: {
    small: css`
      padding: 0.6rem 1.2rem;
    `,
    medium: css`
      padding: 0.8rem 1.6rem;
    `,
    big: css`
      padding: 1rem 2rem;
    `,
  },
});

const variants = variant({
  default: 'contained',
  prop: 'variant',
  variants: {
    contained: css`
      background-color: ${th('color.gray')};
      color: ${th('color.black')};
      transition: background 0.3s ease;
      &:hover {
        background-color: ${th('color.darkGray')};
      }
    `,
    outlined: css`
      color: ${th('color.black')};
      border: 0.2rem solid ${th('color.darkGray')};
      transition: background 0.3s ease, color 0.3s ease;
      &:hover {
        background-color: ${th('color.darkGray')};
      }
    `,
  },
});

const BaseButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  outline: none;
  font-size: ${th('fontSize.button')};
  font-weight: ${th('fontWeight.semiBold')};
  border-radius: ${th('radius')};
  letter-spacing: 0.1rem;
  cursor: pointer;
  ${sizes};
  ${variants};
`;

Button.defaultProps = {
  size: 'medium',
  variant: 'contained',
};

Button.propTypes = {
  // button variants
  variant: PropTypes.oneOf(['contained', 'outlined']),
  // button size
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  // button text
  label: PropTypes.string.isRequired,
};
