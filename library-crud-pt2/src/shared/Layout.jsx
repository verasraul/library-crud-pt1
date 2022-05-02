
import Nav from "./Nav"



export default function Layout(props){

    return(
        <div >
            <h1>Books</h1>
            <Nav />

            {props.children}

        </div>
    )
}