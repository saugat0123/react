import axios from 'axios';
import { Component } from 'react';
class Cart extends Component{


state={

    data:[],
    config:{
        headers:{"authorization":`Bearer ${localStorage.getItem('token')}`}
    },
    total:0,product:[],total:0
}

changeHandle = (productId,e) => {


  
}


componentDidMount =()=>{
  console.log(this.state.config)

    axios.get('http://localhost:3001/cart',this.state.config).then((response)=>{

console.log(response)
let total=0;
response.data.product.forEach(element => {
  total=total+parseInt(element.total);
  
});


this.setState({product:response.data.product,total:total})
// console.log(this.state(product))
//this.setState({data:response.data.data,total:response.data.total})



    })
}
deleteRow=(productId,e)=>{
  e.preventDefault();

  axios.delete('http://localhost:3001/cart/delete/'+productId,this.state.config).then(response=>{
    let total=0;
    response.data.product.forEach(element => {
      total=total+parseInt(element.total);
      
    });
    
    
    this.setState({product:response.data.product,total:total})
  })

}
    render(){
        return(
            <>
            <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
            <div className="container bootstrap snippets bootdey">
              <div className="col-md-12 col-sm-8 content">
                <div className="row">
                  <div className="col-md-12">
                    <ol className="breadcrumb">
                      <li><a href="#">My</a></li>
                      <li className="active">Cart</li>
                    </ol>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-info panel-shadow">
                      
                      <div className="panel-body"> 
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>total</th>
                              </tr>
                            </thead>
                            <tbody>

                                {
                               
                        
                                this.state.product.map((data,i)=>{
                                    return(
                                        <tr key={data._id}>
                                        
                                        {/* <td><img src={"http://localhost:3001/"+data.ProductId.image} className="img-cart" /></td> */}
                                        <td><strong>Product {i+1}</strong><p>{data.productName}</p></td>
                                        <td>
                                          <form className="form-inline">
                                            <input className="form-control" type="text" value={data.quantity} onChange={(e) => this.changeHandle(data._id, e)} />
                                            <button rel="tooltip" className="btn btn-default" ></button>

                                            <button onClick={(e) => this.deleteRow(data._id, e)}>Delete Row</button>
                                            {/* <button  className="btn btn-primary" onClick={this.deleteMyItem(data._id)}><i className="fa fa-trash-o" /></button> 
                                             */}
                                            <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Update </a>
                                          </form>
                                        </td>
                                        <td>${data.productPrice}</td>
                                        <td>${parseInt(data.productPrice)*parseInt(data.quantity)}</td>
                                      </tr>
                                      
                                        
                                    )
                                })}
                            
                              <tr>
                                <td colSpan={6}>&nbsp;</td>
                              </tr>
                              <tr>
                                <td colSpan={4} className="text-right">Total Product</td>
                                <td>${
                                  
                                  this.state.total
                                  
                                  }</td>
                              </tr>
                              <tr>
                                <td colSpan={4} className="text-right">Total Shipping</td>
                                <td>$2.00</td>
                              </tr>
                              <tr>
                                <td colSpan={4} className="text-right"><strong>Total</strong></td>
                                <td>${this.state.total +2}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left" />&nbsp;Continue Shopping</a>
                    <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </>
          

           

        )
    }
}
export default Cart;