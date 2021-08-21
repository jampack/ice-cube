import styled from 'styled-components';

const size = (p) => {
  switch (p.size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.spinner.ring.size.xs;
    case 'sm':
    case 'small':
      return p.theme.spinner.ring.size.sm;
    case 'lg':
    case 'large':
      return p.theme.spinner.ring.size.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.spinner.ring.size.xl;
    default:
      return p.theme.spinner.ring.size.default;
  }
};

const borderWidth = (p) => {
  switch (p.size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.spinner.ring.borderWidth.xs;
    case 'sm':
    case 'small':
      return p.theme.spinner.ring.borderWidth.sm;
    case 'lg':
    case 'large':
      return p.theme.spinner.ring.borderWidth.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.spinner.ring.borderWidth.xl;
    default:
      return p.theme.spinner.ring.borderWidth.default;
  }
};

const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${size};
    height: ${size};
    border: ${borderWidth} solid;
    border-color: #202020 transparent transparent transparent;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Ring;
