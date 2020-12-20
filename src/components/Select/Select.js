import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { th } from '@xstyled/system';
// icons
import { ReactComponent as ArrowDown } from './arrow_down.svg';
import { ReactComponent as ArrowUp } from './arrow_up.svg';
// select menu
import { SelectMenu } from './SelectMenu';

export const Select = props => {
  const { selectValue, selectValues, defaultValue, id } = props;

  const [openList, setOpenList] = useState(false);
  const toggleList = () => setOpenList(prevState => !prevState);

  return (
    <StyledSelectWrapper>
      <StyledSelect id={id} aria-haspopup='listbox' onClick={toggleList}>
        {defaultValue}
        {openList ? <ArrowUp /> : <ArrowDown />}
      </StyledSelect>
      {openList && (
        <SelectMenu
          selectValue={selectValue}
          selectValues={selectValues}
          toggleList={toggleList}
          selectId={id}
        />
      )}
    </StyledSelectWrapper>
  );
};

const StyledSelectWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0.8rem 3rem 0.8rem 1.6rem;
  font-size: ${th('fontSize.button')};
  font-weight: ${th('fontWeight.semiBold')};
  color: ${th('color.black')};

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: ${th('color.black')};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

Select.propTypes = {
  selectValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
