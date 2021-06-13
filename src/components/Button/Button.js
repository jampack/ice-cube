import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, ButtonBody } from './styles';

const Button = (props) => {
  const { children, variant, size, raised, icon, bordered, fab, color } = props;

  return (
    <StyledButton
      className='ic-button'
      variant={variant}
      raised={raised}
      icon={icon}
      size={size}
      bordered={bordered}
      fab={fab}
      color={color}>
      <ButtonBody classNamr='ic-button-body' icon={icon}>
        {children}
      </ButtonBody>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['xs', 'extraSmall', 'sm', 'small', 'lg', 'large', 'xl', 'extraLarge']),
  raised: PropTypes.bool,
  icon: PropTypes.bool,
  bordered: PropTypes.bool,
  fab: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  variant: 'default',
  size: '',
  raised: false,
  icon: false,
  bordered: false,
  fab: false,
  color: null,
};

export default Button;
