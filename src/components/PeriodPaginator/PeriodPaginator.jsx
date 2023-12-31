import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { format, parse, add, sub } from 'date-fns';
import PropTypes from 'prop-types';
import { setDates } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/selectors';
import sprite from 'images/sprite.svg';

import {
  Btn,
  Li,
  StyledDate,
  PeriodPaginatorWrapper,
} from './PeriodPaginator.styled';

export const PeriodPaginator = ({ type }) => {
  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const normalizedDate = useSelector(selectDate);

  useEffect(() => {
    if (params.currentDay) {
      if (normalizedDate !== params.currentDay) {
        dispatch(setDates(params.currentDay));
      }
    }
  }, [dispatch, normalizedDate, params.currentDay]);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate = e => {
    if (e.currentTarget.name === 'addition') {
      if (type === 'day') {
        const newDate = add(date, { days: 1 });
        const formattedNewDate = format(newDate, 'yyyy-MM-dd');
        dispatch(setDates(formattedNewDate));
        navigate(`${type}/${formattedNewDate}`);
        return;
      }
      const newDate = add(date, { months: 1 });
      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      navigate(`${type}/${formattedNewDate}`);
      return;
    }
    if (type === 'day') {
      const newDate = sub(date, { days: 1 });
      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      navigate(`${type}/${formattedNewDate}`);
      return;
    }
    const newDate = sub(date, { months: 1 });
    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    dispatch(setDates(formattedNewDate));
    navigate(`${type}/${formattedNewDate}`);
    return;
  };

  const currentDate = format(date, 'dd MMMM yyyy');

  return (
    <PeriodPaginatorWrapper>
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
    </PeriodPaginatorWrapper>
  );
};

PeriodPaginator.propTypes = {
  type: PropTypes.string.isRequired,
};
