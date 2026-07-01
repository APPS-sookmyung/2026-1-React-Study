import "./Header.css"

const Header = ({title, leftChild, rightChild}) => {
    return (
        <Header className = "Header">
            <div className = "Header_left">{leftChild}</div>
            <div className = "Header_center">{title}</div>
            <div className = "Header_right">{rightChild}</div>
        </Header>
    )
}

export default Header;