/**
 * date formatter
 * @param date
 * @returns {string}
 */
export const dateFormatter = param => {
  const date = param.replace(
    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,
    '',
  );

  if (date.length < 8 || !/[^[0-9]/.test(date)) {
    return param;
  }

  return `${date.substring(0, 4)}
         -${date.substring(4, 6)}
         -${date.substring(6, 8)}`;
};
