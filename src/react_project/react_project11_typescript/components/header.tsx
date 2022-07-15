import './header.css';

interface IHeaderProps{

}

const Header:React.FunctionComponent<IHeaderProps> = () => {
    return(
        <div className="navbar">
            <h3>React Typescript Tutorial</h3>
        </div>
    )
}

export default Header;