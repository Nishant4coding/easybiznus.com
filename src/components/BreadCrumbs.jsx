import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

const BasicBreadcrumbs = ({active, inactive, fsize, mt}) => {
  return (
    <Box sx={{width:"100%", padding:"10px 10%", marginTop:mt}}>
      <Breadcrumbs separator={<Separator fsize={fsize}/>} aria-label="breadcrumb">
        {
          inactive.map((item,index)=>(
            <Link href={item.path} style={{color:"#B5B5B5", fontWeight:"600", margin:"0 10px", fontSize:fsize}}>{item.title}</Link>
          ))
        }
        <Typography color="text.primary" sx={{color:"#0D1A26", fontWeight:"600", margin:"0 10px", fontSize:fsize}}>{active}</Typography>
      </Breadcrumbs>
      </Box>
  );
}

export default BasicBreadcrumbs;

const Separator = ({fsize})=>{
  return(
    <Typography sx={{fontWeight:"700", color:"#B5B5B5", fontSize:fsize}}>/</Typography>
  )
}