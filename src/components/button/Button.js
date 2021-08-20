import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, ButtonBody, PrependIcon, AppendIcon } from './styles';
import { wrapObjectInArray } from '../../lib/Helpers';

import { RingSpinner } from '../spinners';

const Prepend = () => null;
const Append = () => null;

const Button = (props) => {
  const classNames = () => {
    const classes = 'ic-button';

    return classes;
  };

  const handleClick = () => {
    const { onClick, disabled } = props;

    if (disabled) return;

    onClick();
  };

  const {
    children,
    variant,
    size,
    raised,
    flat,
    disabled,
    icon,
    loading,
    loadingSpinner,
    bordered,
    fab,
    color,
    prepend,
    append,
    prependIcon,
    appendIcon,
  } = props;

  const childrenClone = wrapObjectInArray(children);

  const prependSlot = childrenClone.find((el) => el.type === Prepend);
  const appendSlot = childrenClone.find((el) => el.type === Append);

  return (
    <StyledButton
      className={classNames()}
      variant={variant}
      raised={raised}
      flat={flat}
      icon={icon}
      size={size}
      bordered={bordered}
      disabled={disabled}
      loading={loading}
      fab={fab}
      color={color}
      onClick={handleClick}>
      {prependSlot && prependSlot.props.children}
      {prependIcon && <PrependIcon className={prependIcon} />}
      {prepend && prepend}
      <ButtonBody className='ic-button-body' icon={icon} size={size}>
        {!loading && children}
        {loading && (loadingSpinner !== null ? loadingSpinner : <RingSpinner />)}
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
  disabled: PropTypes.bool,
  fab: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.bool,
  loading: PropTypes.bool,
  loadingSpinner: PropTypes.node,
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
  disabled: false,
  fab: false,
  flat: false,
  icon: false,
  loading: false,
  loadingSpinner: null,
  onClick: () => {},
  prepend: null,
  prependIcon: null,
  raised: false,
  size: null,
  variant: 'default',
};

export default Button;
