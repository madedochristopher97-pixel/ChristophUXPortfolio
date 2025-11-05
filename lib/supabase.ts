import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

/**
 * Utility function for consistent error handling across database queries
 */
export async function fetchWithErrorHandling<T>(
  query: Promise<{ data: T | null; error: any }>
): Promise<T> {
  const { data, error } = await query
  
  if (error) {
    console.error('Supabase error:', error)
    throw new Error(`Database error: ${error.message}`)
  }
  
  if (!data) {
    throw new Error('No data returned from database')
  }
  
  return data
}
