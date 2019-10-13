import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRightTwoTone';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeftTwoTone';
import SaveIcon from '@material-ui/icons/SaveAltTwoTone'
import  { Avatar,
          Card, 
          CardContent, 
          CardHeader,
          Divider,
          Grid
          } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
import cv from '../../assets/docs/Luartz_CV.pdf';
import { Link } from 'react-router-dom';
import CVIcon from '@material-ui/icons/DescriptionTwoTone';
import { makeStyles } from '@material-ui/core/styles';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: '#F1AB00',
  }
}));


const CV = () => {
  const classes = useStyles();
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
  
  const onIncrementPage = () => {
    let currentPage = pageNumber;
    (pageNumber < numPages) && (currentPage++);
    setPageNumber(currentPage);
  }

  const onDecrementPage = () => {
    let currentPage = pageNumber;
    (pageNumber > 1) && (currentPage--);
    setPageNumber(currentPage);
  }

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            <Card>
              <CardHeader
                avatar={
                  <Avatar 
                    aria-label="teaching"
                    className={classes.avatar}  
                  >
                    <CVIcon />
                  </Avatar>
                }
                disableTypography={false}
                title="C.V."
                subheader="Degrees, Positions, Accolades and Conferences"
                titleTypographyProps={
                  {
                    variant:'h4'
                  }
                }
              />
              <Divider />
              <CardContent>
                <Document 
                  file={cv}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    size="A4"
                    renderMode="svg"
                    renderTextLayer={false}
                  />
                </Document>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <IconButton 
              aria-label="previous page"
              onClick={onDecrementPage}
              disabled={pageNumber === 1}
            >
              <ArrowLeftIcon />
            </IconButton>
            <IconButton 
              aria-label="next page" 
              onClick={onIncrementPage}
              disabled={pageNumber === numPages}
            >
              <ArrowRightIcon />
            </IconButton>
            <IconButton 
              aria-label="download cv" 
              download
              file-name={cv}
              target="_blank"
            >
              <Link to="/Luartz_CV.pdf" target="_blank" download>
                <SaveIcon />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
        <Typography 
          component="h1"
          variant="overline"
        >
          {pageNumber} of {numPages}
          <br />
          <br />
      </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default CV;
