import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function useMobileQuery () {
  return useMediaQuery('(max-width:376px)');
}