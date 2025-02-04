import { supabase } from "./Client";

export const getUserRole = async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) return null
    return user?.user_metadata?.role || "user"
}