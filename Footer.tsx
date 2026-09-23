import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa' }}>
            <p>&copy; {new Date().getFullYear()} Beer Stacks. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;