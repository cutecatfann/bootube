import { signInWithGoogle, signOut } from '../firebase/firebase';
import styles from './signIn.module.css';
import { User } from 'firebase/auth';


interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {

  return (
    <div>
      {user ? (
        <button className={styles.signin} onClick={signOut}>
          Welcome!
        </button>
      ) : (
        <button className={styles.signin} onClick={signInWithGoogle}>
          Sign In Here
        </button>
      )}
    </div>
  );
}
