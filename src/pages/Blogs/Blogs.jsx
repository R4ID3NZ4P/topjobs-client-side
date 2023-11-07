import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.blogs}</title>
            </Helmet>
            blogs
        </div>
    );
};

export default Blogs;