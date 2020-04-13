/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import logo from './DemoSiteImages/wing_logo_01.png'
import NavBar from '../NavBar/NavBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import Box from '@material-ui/core/Box'


const NavContent = [
    { buttonText: 'Home', buttonlink: '/' },
    { buttonText: 'My Projects', buttonlink: '/demosite' },
]

const NavImages = [
    { navImage: logo },
]

export default function DemoSite() {
    return (
        <Box >
            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box p={3}>
            <ProjectCard />
            </Box>
        </Box>

    );
}
