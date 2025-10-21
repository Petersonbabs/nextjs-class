// catch-all route

const Blog = async ({ params }) => {
    const parameters = await params
    console.log(parameters)
    return (
        <div>Blog</div>
    )
}

export default Blog