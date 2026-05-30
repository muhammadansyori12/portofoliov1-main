import { supabase } from '@/lib/supabase'

export const fetchProjects = async () => {
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', {
      ascending: true,
    })
  // fallback to local sample projects when Supabase has no data or env not configured
  const fallback = [
    {
      id: 'billiard-billing-system-1',
      title: 'Billiard Billing & Management System',
      description:
        'Sistem otomasi penghitungan biliar dengan integrasi pembayaran real-time, manajemen meja, dan laporan transaksi. Dashboard untuk monitoring pendapatan dan waktu penggunaan meja secara akurat.',
      image_url: '/assets/project_iot_1.png',
      live_url: null,
    },
    {
      id: 'billiard-inventory-system',
      title: 'Billiard Inventory & Maintenance',
      description:
        'Aplikasi manajemen inventaris peralatan biliar, tracking kondisi meja, dan penjadwalan maintenance. Terintegrasi dengan sistem billing untuk laporan komprehensif operasional biliar.',
      image_url: '/assets/project_iot_2.png',
      live_url: null,
    },
  ]

  return (data && data.length > 0) ? data : fallback
}

export const fetchCertificates = async () => {
  const { data } = await supabase
    .from('certificates')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  return data || []
}

export const fetchTechStacks = async () => {
  const { data } = await supabase
    .from('tech_stack')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  return data || []
}