import { useEffect , useState , useContext } from 'react' ;
import axios from '../axios' ;
import { useHistory } from 'react-router-dom' ;
import { UserContext } from '../context/index' ;


const UserRoute = ({ children }) => {
    const [ state, setState ] = useContext(UserContext) ;

    let history = useHistory() ;
    const [ ok , setOk ] = useState(false) ;
    const getCurrentUser = async () => {
        try {
            const { data } = await axios.get("/api/current-user", {
                headers: {
                    Authorization: `Bearer ${state.token}`
                } 
            }) ;
            if(data.ok) setOk(true) ;
            
        } catch(error) {
            console.log("error by me =>", error )
            history.push("/login") ;
        }
    }
    console.log("ok => " , ok )
    useEffect(() => {
        if (state?.token) getCurrentUser() ;
    },[ state , state?.token ])


    process.browser && state === null && setTimeout(() => getCurrentUser() , 1000 ) ;
    return !ok ? 
        <p>Loading</p> 
        : 
        <>
            {children}
        </> 
    
} ;





export default UserRoute ;