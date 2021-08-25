import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme: { inputError } }) => inputError.color};
  min-height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
`;
