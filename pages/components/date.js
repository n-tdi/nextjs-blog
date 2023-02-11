import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO("2023-02-10");
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
