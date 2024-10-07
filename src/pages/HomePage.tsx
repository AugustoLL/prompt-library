
import Typography from '@mui/material/Typography';

const HomePage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" color='primary'>Testing h1 font</Typography>
      <Typography variant='h2' color='secondary'>Testing h2 font</Typography>
      <Typography variant='body1'>Testing body1 font</Typography>
      <Typography variant='body2'>Testing body2 font</Typography>
      <Typography style={{fontFamily: 'Merriweather'}}>Testing quotes font</Typography>
    </div>
  );
}

export default HomePage;