import styled from 'styled-components';

const size = (p) => {
  switch (p.size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.spinner.circle.size.xs;
    case 'sm':
    case 'small':
      return p.theme.spinner.circle.size.sm;
    case 'lg':
    case 'large':
      return p.theme.spinner.circle.size.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.spinner.circle.size.xl;
    default:
      return p.theme.spinner.circle.size.default;
  }
};

const Circle = styled.div`
  display: inline-block;
  transform: translateZ(1px);

  div {
    display: inline-block;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background: #202020;
    animation: ic-circle-spinner 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes ic-circle-spinner {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;

export default Circle;
