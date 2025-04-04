import { createClient } from "@supabase/supabase-js";
const SUPA_BASE_URL= "https://pmrysfpxelbguhpbpvor.supabase.co";
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtcnlzZnB4ZWxiZ3VocGJwdm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MzEzMjEsImV4cCI6MjA1OTMwNzMyMX0.CVU2zOMS4k0isVH_Kwk6nHfdKFXUcMsK_CV-nTeqYWo";

export const supabase = createClient(SUPA_BASE_URL,SUPABASE_ANON_KEY);
