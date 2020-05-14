import styled from 'styled-components';

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  height: 53px;
  color: grey;
  padding-left: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;

  @media (max-width: 750px) {
    margin-right: 0.2rem;

    padding-left: 0.5rem;
    margin-left: 0.5rem;

    margin-right: 0rem;
  }
`;

export default DatePickerWrapper;
