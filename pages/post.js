// import { withRouter } from 'next/router'
const Post = ({ id }) => <h1>YOU ARE LOOKING AT POST #{id}</h1>;
Post.getInitialProps = async ({ query }) => {
    return query
}
export default Post;

// const Post = (props) => <h1>YOU ARE LOOKING AT POST #{props.router.query.id}</h1>;
// export default withRouter(Post);
