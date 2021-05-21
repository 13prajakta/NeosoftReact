export const validate=(data)=>{
    let error={}
    var namereg = /^[a-zA-Z_ ]*$/;
     var phonereg = /^[0-9]/;
     var emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(data.name && data.phone && data.address && data.city && data.pincode){
    if(!data.name.value){
        error.name="*Name is required"
    }
    else if(!namereg.test(data.name.value)){
        error.name="*only alphabates"
    }
    if(!data.phone.value){
        error.phone="*phone is required"
    }
    else if(!phonereg.test(data.phone.value)){
        error.phone="*Digits Only"
    }
    else if(data.phone.value.length !==10)
    {
        error.phone="*Phone Number Should be 10 Digits Only"
    }
    if(!data.address.value){
        error.address="*address is required"
    }
    if(!data.city.value){
        error.city="*city is required"
    }
    if(!data.pincode.value){
        error.pincode="*pincode is required"
    }
    else if(!phonereg.test(data.pincode.value)){
        error.pincode="*Digits Only"
    }
    else if(data.pincode.value.length !==6)
    {
        error.pincode="*pincode Number Should be 6 Digits Only"
    }
    return error;
}

else{
    if(!data.email.value){
        error.email="*Email is required"
    }else if(!emailreg.test(data.email.value))
    {
        error.email="*Invalid Email type"
    }
    if(!data.password.value){
        error.password="*Password is required"
    }
    
    return error;
}
}