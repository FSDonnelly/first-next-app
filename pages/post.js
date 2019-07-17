const Post = ({ id }) => <h1>YOU ARE LOOKING AT POST #{id}</h1>;
Post.getInitialProps = async ({ query }) => {
    return query
}
export default Post;