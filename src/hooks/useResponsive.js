/**
 * Author: Kien Quoc Mai
 * Created date: 16/08/2023
 * Last modified Date: 29/08/2023
 */
// @mui
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ----------------------------------------------------------------------

// type Query = 'up' | 'down' | 'between' | 'only';
// type Key = Breakpoint | number;
// type Start = Breakpoint | number;
// type End = Breakpoint | number;

export default function useResponsive(query, key, start, end) {
  const theme = useTheme()

  const mediaUp = useMediaQuery(theme.breakpoints.up(key))

  const mediaDown = useMediaQuery(theme.breakpoints.down(key))

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key))

  if (query === 'up') {
    return mediaUp
  }

  if (query === 'down') {
    return mediaDown
  }

  if (query === 'between') {
    return mediaBetween
  }

  if (query === 'only') {
    return mediaOnly
  }
}
