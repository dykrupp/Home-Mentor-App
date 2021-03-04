import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function useLargeDesktopQuery () {
  return useMediaQuery('(min-width:1440px)');
}