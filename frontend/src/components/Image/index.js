const Image = ({ src, alt, ...rest }) => {
    return (
        <img src={src || '/placeholder_img.svg'} alt={alt || "image"} {...rest} />
    )

}
export default Image;