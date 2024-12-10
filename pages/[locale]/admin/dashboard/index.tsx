import '@/public/assets/css/adminstyle.css'
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/public/assets/css/satoshi.css";
import DefaultLayout from '@/components/layout/admin/DefaultLayout'
import React from 'react'
import Panel from '@/components/admin/Dashboard/Panel'

export default function index({children}: {children: React.ReactNode}) {
  return (
    <DefaultLayout>
      <Panel />
    </DefaultLayout>
  )
}
