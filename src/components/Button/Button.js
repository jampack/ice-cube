import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, ButtonBody, PrependIcon, AppendIcon } from './styles';
import { wrapObjectInArray } from '../../lib/Helpers';

const Prepend = () => null;
const Append = () => null;

const Button = (props) => {
  const {
    children,
    variant,
    size,
    raised,
    flat,
    icon,
    bordered,
    fab,
    color,
    prepend,
    append,
    prependIcon,
    appendIcon,
    onClick,
  } = props;

  const childrenClone = wrapObjectInArray(children);

  const prependSlot = childrenClone.find((el) => el.type === Prepend);
  const appendSlot = childrenClone.find((el) => el.type === Append);

  return (
    <StyledButton
      className='ic-button'
      variant={variant}
      raised={raised}
      flat={flat}
      icon={icon}
      size={size}
      bordered={bordered}
      fab={fab}
      color={color}
      onClick={() => onClick()}>
      {prependSlot && prependSlot.props.children}
      {prependIcon && <PrependIcon className={prependIcon} />}
      {prepend && prepend}
      <ButtonBody className='ic-button-body' icon={icon} size={size}>
        {children}
      </ButtonBody>
      {appendSlot && appendSlot.props.children}
      {appendIcon && <AppendIcon className={appendIcon} />}
      {append && append}
    </StyledButton>
  );
};

Button.Prepend = Prepend;
Button.Append = Append;

Button.propTypes = {
  append: PropTypes.node,
  appendIcon: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  fab: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  prepend: PropTypes.node,
  prependIcon: PropTypes.string,
  raised: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'extraSmall', 'sm', 'small', 'lg', 'large', 'xl', 'extraLarge']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info']),
};

Button.defaultProps = {
  append: null,
  appendIcon: null,
  bordered: false,
  children: '',
  color: null,
  fab: false,
  flat: false,
  icon: false,
  onClick: () => {},
  prepend: null,
  prependIcon: null,
  raised: false,
  size: null,
  variant: 'default',
};

export default Button;
