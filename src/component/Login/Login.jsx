import{GoogleAuthProvider, getAuth} from 'firebase/auth'
import app from '../../assets/Firebage/Firebage';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const headelGoogleSignIn = () => {
        console.log('do you like me')
    }
    return (
        <div>
            <button onClick={headelGoogleSignIn}>Login Now</button>
        </div>
    );
};

export default Login;