import axios from "axios"
import type {RegisterData, loginData, User} from "@/types";

export const user = ref<User | null>(null);

export const useAuth = () => {

  async function getUser(): Promise<User|null> {

    if (user.value) return user.value;
    try {
      const res = await axios.get("/user");
      const user = res.data;
      return {
        ...user,
        created_at: new Date(user.created_at),
        updated_at: new Date(user.updated_at),
        email_verified_at: user.email_verified_at ? new Date(user.email_verified_at) : null,
        two_factor_confirmed_at: user.two_factor_confirmed_at ? new Date(user.two_factor_confirmed_at) : null
      };
      
    } catch (error) {
      return null;
    }
  }

  async function initUser() { 
    user.value = await getUser();
  }
  
  const router = useRouter();

  const register = async (data:RegisterData)=> {

    await axios.post("/register", data)
    await login ({
      email: data.email,
      password: data.password
    })
  }

  const login = async (data:loginData)=> {
      
      const res = await axios.post("/login", data);
      router.push('/me');
    }

  const logOut = async () => {
    try { 
      await axios.post("/logout");
      user.value = null;
      router.push("/login");
    }catch(error){
      console.error(error);
    }
  }

  return {
    login, logOut, register, user, initUser
  }
}