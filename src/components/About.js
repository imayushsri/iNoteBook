import React from 'react'

const About = () => {
  return (
    <>
    <div className="container-fluid">
    <header>
        <h1>About iNotebook</h1>
    </header>
    <section class="main-content">
        <div class="feature">
            <h2>Secure Authentication</h2>
            <p>Our robust authentication system ensures that your data remains safe and accessible only to you. Sign up and log in with confidence, knowing that your personal information is protected.</p>
        </div>
        <div class="feature">
            <h2>Cloud-Based Storage</h2>
            <p>Say goodbye to lost or inaccessible notes. With iNotebook, your notes are securely stored in the cloud, allowing you to access them anytime, anywhere, from any device with an internet connection.</p>
        </div>
    </section>
    <footer>
        <p>&copy; 2024 iNotebook. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
}

export default About
