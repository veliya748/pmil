import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import hearth from './hearth.png';
import healthcare from "./healthcare.png"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Aboutus extends Component {

    render() {
        return (
            <ScrollableAnchor id={'aboutus'}>
            <Paper square={true} style={{ backgroundColor: lightGreen[100], height: 650, overflowX:"hidden", overflowY:"hidden"}}>
                <Grid container >
                    <Grid item xs style={{ backgroundColor: lightGreen[200], height: 550, borderRadius:16, marginTop:45, marginRight:120, marginLeft:100}}>
                <Typography style={{ color: "white", fontSize: 25, fontWeight: 700, textAlign: "left", paddingTop:30, marginLeft:120 }}>
                    Dear patients,
                        </Typography>
                <Typography style={{ color: "white", fontSize: 25, fontWeight: 700, textAlign: "left", marginTop:15, marginLeft:120 }}>
                    welcome to our practice!
                            </Typography>

            
                    <Typography style={{ color: "white", fontSize: 17, textAlign: "left", marginTop:90,marginLeft:90, fontWeight:500 }}>
                    Our main goal is to find your individual therapy’s option with the help of our 
                    innovative technology. We focus on the prevention and early diagnosis of disorders in respiratory, 
                    digestive and integumentary system.
                 </Typography>
                <Typography style={{ color: "white", fontSize: 17, textAlign: "left", marginTop:50, marginRight: 90, marginLeft:90, fontWeight:500 }}>
                We ensure quality care and speedy recovery for you, our patients. We pride ourselves 
                on offering the highest level of treatment and clinical excellence in a timely, professional and discreet manner.
                    </Typography>
                    <Typography style={{ color: "white", fontSize: 17, textAlign: "left",  marginLeft:90, fontWeight:800 }}>
                    Your health matters, so whether you are a patient or visitor, we are here to assist you before, during, and after your visit!
                    </Typography>
                    
</Grid>
<Grid item xs>

<img src={healthcare} alt="healthcare" style={{ float: "right", marginTop: 10, height: 200, marginRight:310}} />
                <img src={hearth} alt="hearth" style={{ float: "right", marginTop: 150, height: 200, marginRight:230 }} />
                </Grid>
                </Grid>
            </Paper>
            </ScrollableAnchor>
        )
    }
}