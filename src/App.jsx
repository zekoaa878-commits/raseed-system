import React, { useState } from 'react'
export default function App(){
  const [company] = useState('رصيد - نظام ادارة متكامل')
  return (
    <div style={{padding: '40px', textAlign: 'center'}}>
      <h1 style={{color: '#DC2626', fontSize: '32px'}}>{company}</h1>
      <p>النظام يعمل بنجاح - الاصدار 1.0</p>
      <div style={{marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '30px auto'}}>
        {['المبيعات','المشتريات','المخزن','العملاء','الموردين','التقارير'].map(item=>(
          <div key={item} style={{background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>{item}</div>
        ))}
      </div>
      <p style={{marginTop: '40px', color: '#666'}}>تم بناء النظام تلقائيا عبر GitHub Actions</p>
    </div>
  )
}
