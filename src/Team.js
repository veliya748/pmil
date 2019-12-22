import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Typography } from '@material-ui/core';
import arzt from "./profile doc transperent.png"
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Team extends Component {

    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <Paper square={true} style={{ height: 700, backgroundColor: lightGreen[500], overflowX: "hidden" }}>
                    <Typography style={{ color: "white", paddingTop: 30, fontSize: 40, fontWeight: 500, textAlign: "center", }}>Our team</Typography>

                    <img src={arzt} alt="arzt" style={{ float: "left", height: 200, marginTop: 70, marginRight: -70, marginLeft: -30 }} />
                    <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, marginRight: 650,
                     textAlign: "left", paddingLeft: 230, paddingRight: 80 }}>
                        Dr.Moris Miller studied medicine in the university in Frankfurt am Main.
    </Typography>
                    <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", 
                    paddingLeft: 230, paddingTop: 20, paddingRight: 80, marginRight: 650 }}>
                        After his graduation in 1998,
                        he gained experience in different clinics and medical centers and spent a couple of years in England where he gathered
                        expert knowledge in the fields of surgical diagnostic and therapy, cardiology, radiology and rehabilitation. At that time Dr.Miller
                        was announced Member of the Royal College of General Practitioners in London.
    </Typography>
                    <Typography style={{ color: "white", fontSize: 17,  marginRight: 650, 
                    fontWeight: 500, textAlign: "left", marginLeft: 250, paddingTop: 20, paddingRight: 80 }}>
                        After he successfully received his degree in general and internal medicine from the State Chamber
                         of Medicine in Hessen in 2016, he founded his own practice in Darmstadt.
</Typography>

                </Paper>
            </ScrollableAnchor>
        )
    }
}