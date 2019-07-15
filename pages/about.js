import Link from 'next/link';
const AboutPage = () => {
    console.log("******RUNNING ABOUT COMPONENT!*******");
    return (
        <div>
            <Link href='/'>
                <a>Index Page</a>
            </Link>
            <h1>THIS IS THE ABOUT PAGE</h1>
        </div>
    )
};
export default AboutPage;