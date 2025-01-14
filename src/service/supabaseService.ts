import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nomytatufznjadjgqafl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXl0YXR1ZnpuamFkamdxYWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NzE1NTYsImV4cCI6MjA0MjQ0NzU1Nn0._FX0VwwAvWyTmQioyhgiy9EzTj2-6IuAAWRbTb4p9B8';

const supabase = createClient(supabaseUrl, supabaseKey);

class SupabaseService {
  private tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async create(data: object) {
    const { data: createdItem, error } = await supabase.from(this.tableName).insert([data]);
    return { createdItem, error };
  }

  async getAll() {
    const { data, error } = await supabase.from(this.tableName).select('*');
    return { data, error };
  }

  async getById(id: string) {
    const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id);
    return { data, error };
  }

  async update(id: string, data: object) {
    const { data: updatedItem, error } = await supabase
      .from(this.tableName)
      .update(data)
      .eq('id', id)
      .select('*')
      .single();  
    return { updatedItem, error };
  }

  async delete(id: string) {
    const { data, error } = await supabase.from(this.tableName).delete().eq('id', id);
    return { data, error };
  }
}

const supabaseInstance = new SupabaseService('aluno');

export { supabaseInstance };
