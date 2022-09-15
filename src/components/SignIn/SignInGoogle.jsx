import { signInWithGoogle } from "../../service/firebase";

const SignInGoogle = (props) => {
  return (
    <div>
      {props.children}
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign in with google
      </button>
    </div>
  );
};

export default SignInGoogle;
