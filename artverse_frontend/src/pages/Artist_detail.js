import React from 'react'
import '../styles/Artist_detail.css';
import Artist_detail_header from '../components/Artist_detail_header'
import Artist_detail_footer from '../components/Artist_detail_footer'
import Artist_detail_main from '../components/Artist_detail_main'

function Artist_detail() {
  return (
    <div className='artist-detail'>
      <Artist_detail_header />
      <Artist_detail_main />
     { /*<Artist_detail_footer />*/}

    </div>
  )
}

export default Artist_detail
