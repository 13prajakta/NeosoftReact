function Address()
{
    return(
        <div>
        <h1>Address</h1>
        <form>
        <div class="form-group">
                <label for="inputAddress">User Name</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="User Namet"/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="inputEmail4">Phone</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"/>
                </div>
    
                <div class="form-group col-md-6">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Continue To Checkout</button>
    </form>
</div>
    )
}
export default Address