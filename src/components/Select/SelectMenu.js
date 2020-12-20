import styled from 'styled-components';
import { th } from '@xstyled/system';

export const SelectMenu = props => {
  const { selectValues, toggleList, selectValue, selectId } = props;

  const handleItem = selectedValue => {
    selectValue(selectedValue);
    toggleList();
  };

  return (
    <StyledSelectMenuList
      aria-labelledby={selectId}
      tabindex='-1'
      role='listbox'
    >
      {selectValues.map(selectValue => {
        return (
          <StyledSelectMenuItem
            key={selectValue}
            onClick={() => handleItem(selectValue)}
            role='option'
          >
            {selectValue}
          </StyledSelectMenuItem>
        );
      })}
    </StyledSelectMenuList>
  );
};

const StyledSelectMenuList = styled.ul`
  margin: 0;
  padding: 0.4rem 0;
  list-style: none;
  position: absolute;
  top: 3.2rem;
  left: 1.6rem;
  width: max-content;
`;

const StyledSelectMenuItem = styled.li`
  padding: 0.6rem 0.4rem;
  font-size: ${th('fontSize.xs')};
  font-weight: ${th('fontWeight.normal')};
  color: ${th('color.black')};
  cursor: pointer;
  &:hover {
    background-color: ${th('color.gray')};
  }
`;
