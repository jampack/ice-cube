import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme: { inputError } }) => inputError.color};
  min-height: ${(p) => (p.inGroup ? 'none' : '20px')};
  margin-top: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-bottom: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-left: 5px;
`;
