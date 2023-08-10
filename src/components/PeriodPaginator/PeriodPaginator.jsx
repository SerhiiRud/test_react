import {
  Btn,
  Li,
  StyledDate,
  WrapperPeriodPaginator,
} from './PeriodPaginator.styled';

export const PeriodPaginator = ({ type }) => {
  return (
    <WrapperPeriodPaginator>
      <StyledDate>
        {type === 'month' ? currentDate.slice(3) : currentDate}
      </StyledDate>
      <ul>
        <Li>
          <Btn
            type="button"
            name="subtraction"
            onClick={onChangeDate}
            // disabled={shouldDisable}
          >
            <svg height={'10px'} width={'8px'}>
              <use href={`${sprite}#icon-arrow-left-small`} />
            </svg>
          </Btn>
          <Btn type="button" name="addition" onClick={onChangeDate}>
            <svg height={'10px'} width={'8px'}>
              <use href={`${sprite}#icon-arrow-right-small`} />
            </svg>
          </Btn>
        </Li>
      </ul>
    </WrapperPeriodPaginator>
  );
};
