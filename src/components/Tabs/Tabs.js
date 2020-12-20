import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { th } from '@xstyled/system';

export const Tabs = props => {
  const { labels, children } = props;
  const [active, setActive] = useState(0);

  const createLabelId = label => label.split(' ').join('').toLowerCase();

  return (
    <>
      <StyledTabsWrapper role='tablist'>
        <StyledTabIndicator
          style={{
            width: 100 / children.length + '%',
            transform: `translateX(${active * 100}%)`,
          }}
        />
        {labels.map((label, index) => {
          let isActive = index === active;
          let labelId = createLabelId(label);

          return (
            <StyledTabButton
              role='tab'
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              id={`tab-${labelId}`}
              onClick={() => setActive(index)}
              key={index}
            >
              {label}
            </StyledTabButton>
          );
        })}
      </StyledTabsWrapper>
      <StyledTabsContentRoot>
        <StyledTabsContent index={active}>
          {children.map((child, index) => {
            let labelledBy = createLabelId(labels[index]);
            return (
              <StyledTabContent
                role='tabpanel'
                aria-hidden={active === index ? false : true}
                tabIndex='0'
                aria-labelledby={`tab-${labelledBy}`}
                key={index}
              >
                {child}
              </StyledTabContent>
            );
          })}
        </StyledTabsContent>
      </StyledTabsContentRoot>
    </>
  );
};

const StyledTabsWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${th('color.white')};
  position: relative;
`;

const StyledTabIndicator = styled.span`
  width: 100%;
  bottom: 0;
  height: 0.2rem;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${th('color.black')};
`;

const StyledTabButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 1.2rem 1.6rem;
  flex: 1;
  font-size: ${th('fontSize.button')};
  font-weight: ${th('fontWeight.semiBold')};
  color: ${th('color.black')};
  cursor: pointer;
`;

const StyledTabsContentRoot = styled.div`
  overflow: hidden;
  margin-top: 1.2rem;
`;

const StyledTabsContent = styled.div`
  display: flex;
  flex-direction: row;
  transition: transform 0.4s ease;
  transform: ${({ index }) =>
    index === 0 ? `translate(0%, 0)` : `translate(-${index * 100}%,0)`};
`;

const StyledTabContent = styled.div`
  width: 100%;
  flex-shrink: 0;
  overflow: auto;
  outline: none;
`;

Tabs.propTypes = {
  // tabs buttons labels
  labels: PropTypes.array.isRequired,
  // tabs content
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
