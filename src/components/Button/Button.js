import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, ButtonBody } from './styles';
import { wrapObjectInArray } from '../../lib/Helpers';

const Prepend = () => null;
const Append = () => null;

const Button = (props) => {
  const { children, variant, size, raised, icon, bordered, fab, color, prepend, append } = props;

  const childrenClone = wrapObjectInArray(children);

  const appendSlot = childrenClone.find((el) => el.type === Prepend);
  const prependSlot = childrenClone.find((el) => el.type === Append);

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
      {appendSlot && appendSlot.props.children}
      {prepend}
      <ButtonBody className='ic-button-body' icon={icon} size={size}>
        {children}
      </ButtonBody>
      {append}
      {prependSlot && prependSlot.props.children}
    </StyledButton>
  );
};

Button.Prepend = Prepend;
Button.Append = Append;

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['xs', 'extraSmall', 'sm', 'small', 'lg', 'large', 'xl', 'extraLarge']),
  raised: PropTypes.bool,
  icon: PropTypes.bool,
  bordered: PropTypes.bool,
  fab: PropTypes.bool,
  color: PropTypes.string,
  prepend: PropTypes.node,
  append: PropTypes.node,
};

Button.defaultProps = {
  children: '',
  variant: 'default',
  size: null,
  raised: false,
  icon: false,
  bordered: false,
  fab: false,
  color: null,
  prepend: null,
  append: null,
};

export default Button;
