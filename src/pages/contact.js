import CustomSideNav from '../components/CustomSideNav';

function Contact() {
    return (
        <div>
            <CustomSideNav />
            <div id="contact" style={{ backgroundColor: "#F2F7F7", paddingBottom: "5em", paddingLeft: "300px"}}>
                <h1 style={{ textAlign: "center" }}>Contact</h1>

                <br /> <br /> <br /> <br />
                <h2 style={{ textAlign: "center" }}>Have a question or want to work together?</h2>
                <h2 style={{ textAlign: "center" }}>futsaldevotee@gmail.com</h2>
            </div>
        </div>
    )
}

export default Contact;