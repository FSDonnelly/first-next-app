import Link from 'next/link';
const ContactPage = () => {
    console.log("******RUNNING CONTACT COMPONENT!*******");
    return (
        <div>
            <Link href='/'>
                <a>Index Page</a>
            </Link>
            <h1>THIS IS THE CONTACT PAGE</h1>
            <p>Do not contact us ever!</p>
        </div>
    )
};
export default ContactPage;