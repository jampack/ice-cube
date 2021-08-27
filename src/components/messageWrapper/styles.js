import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const ErrorText = styled.span`
  color: ${({ theme: { messageWrapper } }) => messageWrapper.error.color};
  min-height: ${(p) => (p.inGroup ? 'none' : '20px')};
  margin-top: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-bottom: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-left: 5px;
  font-family: ${({ theme: { messageWrapper } }) => messageWrapper.error.fontFamily};
  font-size: 13.5px;
`;

export const HelpText = styled.span`
  color: ${({ theme: { messageWrapper } }) => messageWrapper.help.color};
  min-height: ${(p) => (p.inGroup ? 'none' : '20px')};
  margin-top: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-bottom: ${(p) => (p.inGroup ? 'none' : '5px')};
  margin-left: 5px;
  font-family: ${({ theme: { messageWrapper } }) => messageWrapper.help.fontFamily};
  font-size: 12px;
`;
