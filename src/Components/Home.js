
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
  
  function Home() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios.get(`https://supermind-staging.vercel.app/api/test/listing?_page=${page}`).then((response) => {
          setPosts(response.data);
          console.log(response.data)
        });
      }, [page]);
    
  
    return (
      <div className="App">
      <Box py={3} display="flex" justifyContent="center">
      <Button variant="outlined">Category 1</Button>
        <Button variant="outlined">Category 2</Button>
        <Button variant="outlined">Category 3</Button>
        
      </Box>
        
          <Grid container spacing={2}>
          {posts.map((item) => (
          <Grid item sm={3}>
              <Card key={item.id} style={{ height: 250 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} variant="body2" color="text.secondary" gutterBottom>
                    <b>Name</b>  {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <b>FullName </b>  {item.fullName}
                    </Typography>
                    <Typography variant="body2">
                    <b> Symbol</b>  {item.symbol}
                    </Typography>
                    <Typography>
                    <b>Price</b> {item.price}
                    </Typography>
                    </CardContent>
              </Card>
          
            </Grid>
            ))}
          </Grid>
          <Box py={3} display="flex" justifyContent="center">
            <Pagination
              count={10}
              color="secondary"
              variant="outlined"
              onChange={(e, value) => setPage(value)}
            />
          </Box>
        
      </div>
    );
  }
  
  export default Home;