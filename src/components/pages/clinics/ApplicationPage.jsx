import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationIntro from '../../clinic/ApplicationIntro';
import lostImage from '/src/assets/lostImage.png'; // Adjust the path according to your file structure

export default function ApplicationPage() {
    return (
        <div>
            <ApplicationIntro />
        </div>
    );
}
