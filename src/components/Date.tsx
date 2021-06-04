import React from 'react';
import { format, formatISO } from 'date-fns';

type Props = {
  date: Date;
};

const Date = ({ date }: Props) => (
  <time dateTime={formatISO(date)}>
    <span>{format(date, 'LLLL d, yyyy')}</span>
    <style jsx>
      {`
        span {
          color: #9b9b9b;
        }
      `}
    </style>
  </time>
);

export default Date;
