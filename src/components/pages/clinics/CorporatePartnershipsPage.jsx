import React from 'react';
import { Link } from 'react-router-dom';
import CorporatePartnershipsIntro from '../../clinic/CorporatePartnershipsIntro'; // Adjust the path according to your file structure
import CorporatePartnershipsInterest from '../../clinic/CorporatePartnershipsInterest';

export default function CorporatePartnershipsPage() {
    return (
        <>
            <CorporatePartnershipsIntro />
            <CorporatePartnershipsInterest />
        </>
    );
}
