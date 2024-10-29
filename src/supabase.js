import { createClient } from "@supabase/supabase-js";
const supabaseUrl='https://tfpvqffxsbixsnuuteem.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcHZxZmZ4c2JpeHNudXV0ZWVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTkyMTU4NSwiZXhwIjoyMDQxNDk3NTg1fQ.hcfr8zhlGOpQaGrqEEhCHrQFxaGXomiFTp-0jBSo7JI';
export const supabase= createClient(supabaseUrl,supabaseKey);