import React from 'react'
 
export default function Page({ params,searchParams }) {
  return <div>
    My query: {searchParams}    {/* url?q="anything" */}
    My Post: {params.slug}
    </div>
}
