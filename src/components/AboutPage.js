import React from 'react'
import "././Main.css";



import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';




function AboutPage() {
    return (

        // <div className="grid">
            
        //     <h4>Aj. Raphin</h4>
        //     <h4>Aj. Lunchakorn</h4>
        //     <h4>Aj. Chairat</h4>
        //     <h4>Dr. Manus pengnoo</h4>
        //     <h4>Htain Lynn Aung</h4>
        //     <h4>Pruk Sasithong</h4>
        //     <h4>Bryan</h4>
        //     <h4>Noneh</h4>

        // </div>




        <div className="aboutusimg">


            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Our Team</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                ))}
                </ImageList>







        </div>





    )
}







const itemData = [
    {
      img: '/rapin.jpg',
      title: 'Aj. Raphin',
      author: '@rapin',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: '/lunchakorn.jpg',
      title: 'Aj. Lunchakorn',
      author: '@lunchakorn',
    },
    {
      img: '/chairat.jpg',
      title: 'Aj. Chairat',
      author: '@chairat',
    },
    {
      img: '/most.jpg',
      title: 'Dr. Manus pengnoo',
      author: '@most',
      cols: 2,
    },
    {
      img: '/htain.jpg',
      title: 'Htain Lynn Aung',
      author: '@htain',
      cols: 2,
    },
    {
      img: '/pruk.jpg',
      title: 'Pruk Sasithong',
      author: '@pruk',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: '/bryan.jpg',
      title: 'Bryan',
      author: '@bryan',
    },
    {
      img: '/noneh.jpg',
      title: 'Noneh',
      author: '@noneh',
    }
    
  ];




  export default AboutPage
  