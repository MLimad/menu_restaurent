import React from 'react'

 function Categories({categories,filterCategories}) {
  
  return (
    <div className='row'>
      
      <div className="col-md-12">
      
         {
           categories.map( (category,index) => (
            <button key={index} className='btn-categories' onClick={()=>filterCategories(category)} >{category}</button>

            ))
         }
      </div>

    </div>
  )
}

export default Categories