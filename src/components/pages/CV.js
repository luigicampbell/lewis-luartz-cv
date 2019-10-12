import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRightTwoTone';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeftTwoTone';
import SaveIcon from '@material-ui/icons/SaveAltTwoTone'
import  { Card, Grid } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
import cv from '../../assets/docs/Luartz_CV.pdf';
import { Link } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class CV extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => this.setState({ numPages });
  
  onIncrementPage = () => {
    const { pageNumber,numPages } = this.state;
    let currentPage = pageNumber;
    (pageNumber < numPages) && (currentPage++);
    this.setState({ pageNumber:currentPage });
  }

  onDecrementPage = () => {
    const { pageNumber } = this.state;
    let currentPage = pageNumber;
    (pageNumber > 1) && (currentPage--);
    this.setState({ pageNumber:currentPage });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <React.Fragment>
        <Typography 
            component="h1"
            variant="overline"
            style={{fontSize:'2rem'}}
          >
          C.V.
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Grid container justify="center">
              <Card>
                <Document 
                  file={cv}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    size="A4"
                    renderMode="svg"
                    renderTextLayer={false}
                  />
                </Document>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <IconButton 
                aria-label="previous page"
                onClick={this.onDecrementPage}
                disabled={this.state.pageNumber === 1}
              >
                <ArrowLeftIcon />
              </IconButton>
              <IconButton 
                aria-label="next page" 
                onClick={this.onIncrementPage}
                disabled={this.state.pageNumber === this.state.numPages}
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
}

export default CV;
