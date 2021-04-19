import axios from "axios";
import React,{ Component } from "react";

class UpdateFood extends Component{
    state={
        itemName:"",
        itemType:"",
        itemPrice:"",
        Id:this.props.match.params.id,
        config:{
            headers:{"authorization":`Bearer ${localStorage.getItem('token')}`}
        }
    }
 
    componentDidMount(){
        axios.get('http://localhost:3001/update/item/'+this.state.Id)
        .then((response)=>{
            this.setState({
                itemName:response.data.itemName,
                itemType:response.data.itemType,
                itemPrice:response.data.itemPrice
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    updatePro = (e)=>{
        e.preventDefault()
        const data ={
            id:this.state.Id,
            itemName:this.state.itemName,
            itemPrice:this.state.itemPrice,
            itemType:this.state.itemType
            
        }
        console.log(this.state.Id)
        axios.put("http://localhost:3001/update/item", this.state)
        .then((response)=>{
            console.log(response)
            alert("Item Updated!!")
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
          
            <div class="row ">
                <div class="col-lg-7 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                    <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Image</label> <input onChange={this.fileHandler}  type="file" name="pimage" class="form-control btn btn-danger" placeholder="Add image"  /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Product Name *</label> <input onChange={this.changeHandler} value ={this.state.itemName}  name="itemName" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Price of product *</label> <input onChange={this.changeHandler} value ={this.state.itemPrice} name="itemPrice" class="form-control" placeholder="Please enter the price of product"  /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Product Type *</label> <input  onChange={this.changeHandler} value ={this.state.pdesc} name="itemType" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="row">
                                    <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick ={this.updatePro}value="Update Product" /> </div>
                                </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        )

    }
}

export default UpdateFood