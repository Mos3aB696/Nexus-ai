import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://euncsoojmpzbtqrbxjxh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bmNzb29qbXB6YnRxcmJ4anhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NzMyNTcsImV4cCI6MjA1OTU0OTI1N30.xK8lM_kpjDfUVr7mWuO_DKEGsn58pC83YWpfw5Cwha0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  if (error) {
    console.error("Error signing in with Google:", error.message);
  }
};

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    console.log("User signed in:", session.user);
    window.location.href = "https://nexus-ai-mu.vercel.app/";
  } else if (event === "SIGNED_OUT") {
    console.log("User signed out");
    // Handle sign-out actions
  }
});
