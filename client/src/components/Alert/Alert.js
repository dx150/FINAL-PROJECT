import React from 'react'
import { useSelector } from 'react-redux'

function Alert() {
    const alerts=useSelector((state)=>state.alert)
  return (
    <div>
       { alerts.map(alert=>
       <div>        
              
                <section className='aler'>
                        <div className="square_box box_three"></div>
                        <div className="square_box box_four"></div>
                        <div className="container mt-5">
                        <div className="row">
                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                                    <button type="button" className="close font__size-18" data-dismiss="alert">
                                                    <span aria-hidden="true">
                                                        <i className="fa fa-times danger"></i>
                                                    </span>
                                                    <span className="sr-only">Close</span>
                                    </button>
                                <i className="start-icon far fa-times-circle faa-pulse animated"></i>
                            <strong className="font__weight-semibold"></strong>{alert.msg} 
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
            </div>
        )}

    </div>
  )
}

export default Alert